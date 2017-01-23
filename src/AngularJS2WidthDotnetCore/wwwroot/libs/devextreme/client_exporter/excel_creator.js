/**
 * DevExtreme (client_exporter/excel_creator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../core/class"),
    commonUtils = require("../core/utils/common"),
    errors = require("../ui/widget/ui.errors"),
    stringUtils = require("../core/utils/string"),
    JSZip = require("jszip"),
    fileSaver = require("./file_saver"),
    excelFormatConverter = require("./excel_format_converter"),
    XML_TAG = '<?xml version="1.0" encoding="utf-8"?>',
    GROUP_SHEET_PR_XML = '<sheetPr><outlinePr summaryBelow="0"/></sheetPr>',
    SINGLE_SHEET_PR_XML = "<sheetPr/>",
    BASE_STYLE_XML = '<fonts count="2"><font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><b/><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts><fills count="1"><fill><patternFill patternType="none"/></fill></fills><borders count="1"><border><left style="thin"><color rgb="FFD3D3D3"/></left><right style="thin"><color rgb="FFD3D3D3"/></right><top style="thin"><color rgb="FFD3D3D3"/></top><bottom style="thin"><color rgb="FFD3D3D3"/></bottom></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',
    OPEN_XML_FORMAT_URL = "http://schemas.openxmlformats.org",
    RELATIONSHIP_PART_NAME = "rels",
    XL_FOLDER_NAME = "xl",
    WORKBOOK_FILE_NAME = "workbook.xml",
    CONTENTTYPES_FILE_NAME = "[Content_Types].xml",
    SHAREDSTRING_FILE_NAME = "sharedStrings.xml",
    STYLE_FILE_NAME = "styles.xml",
    WORKSHEETS_FOLDER = "worksheets",
    WORKSHEET_FILE_NAME = "sheet1.xml",
    VALID_TYPES = {
        "boolean": "b",
        date: "d",
        number: "n",
        string: "s"
    },
    EXCEL_START_TIME = Date.UTC(1899, 11, 30),
    DAYS_COUNT_BEFORE_29_FEB_1900 = 60,
    BOLD_STYLES_COUNT = 4,
    MAX_DIGIT_WIDTH_IN_PIXELS = 7,
    CUSTOM_FORMAT_START_INDEX = 165;
exports.ExcelCreator = Class.inherit({
    _getXMLTag: function(tagName, attributes, content) {
        var i, attr, result = "<" + tagName,
            length = attributes.length;
        for (i = 0; i < length; i++) {
            attr = attributes[i];
            result = result + " " + attr.name + '="' + attr.value + '"'
        }
        return commonUtils.isDefined(content) ? result + ">" + content + "</" + tagName + ">" : result + " />"
    },
    _getDataProviderRowIndex: function(rowIndex) {
        var correctRowIndex = this._dataProvider.getHeaderRowCount ? this._dataProvider.getHeaderRowCount() : 0;
        return rowIndex - correctRowIndex
    },
    _getExcelRowIndex: function(exRowIndex) {
        var correctRowIndex = this._dataProvider.getHeaderRowCount ? this._dataProvider.getHeaderRowCount() : 0;
        return exRowIndex + correctRowIndex
    },
    _getCellIndex: function(rowIndex, cellIndex) {
        var charCode, sheetIndex = "",
            max = 26;
        if (this._maxIndex[0] < Number(rowIndex)) {
            this._maxIndex[0] = Number(rowIndex)
        }
        if (this._maxIndex[1] < Number(cellIndex)) {
            this._maxIndex[1] = Number(cellIndex)
        }
        while (true) {
            charCode = 65 + (cellIndex >= max ? cellIndex % max : Math.ceil(cellIndex));
            sheetIndex = String.fromCharCode(charCode) + sheetIndex;
            if (cellIndex >= max) {
                cellIndex = Math.floor(cellIndex / max) - 1
            } else {
                break
            }
        }
        return sheetIndex + rowIndex
    },
    _getDataType: function(dataType) {
        return VALID_TYPES[dataType] || "s"
    },
    _formatObjectConverter: function(format, precision, dataType) {
        var result = {
            format: format,
            precision: precision,
            dataType: dataType
        };
        if (commonUtils.isObject(format)) {
            return $.extend(result, format, {
                format: format.type,
                currency: format.currency
            })
        }
        return result
    },
    _appendFormat: function(format, precision, dataType) {
        var currency, newFormat = this._formatObjectConverter(format, precision, dataType);
        format = newFormat.format;
        precision = newFormat.precision;
        currency = newFormat.currency;
        dataType = newFormat.dataType;
        format = excelFormatConverter.convertFormat(format, precision, dataType, currency);
        if (format) {
            if ($.inArray(format, this._styleFormat) === -1) {
                this._styleFormat.push(format)
            }
            return $.inArray(format, this._styleFormat) + 1
        }
    },
    _appendString: function(value) {
        if (commonUtils.isDefined(value)) {
            value = String(value);
            if (value.length) {
                value = stringUtils.encodeHtml(value);
                if (void 0 === this._stringHash[value]) {
                    this._stringHash[value] = this._stringArray.length;
                    this._stringArray.push(value)
                }
                return this._stringHash[value]
            }
        }
    },
    _getExcelDateValue: function(date) {
        var days, totalTime;
        if (commonUtils.isDate(date)) {
            days = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - EXCEL_START_TIME) / 864e5);
            if (days < DAYS_COUNT_BEFORE_29_FEB_1900) {
                days--
            }
            totalTime = (3600 * date.getHours() + 60 * date.getMinutes() + date.getSeconds()) / 86400;
            return days + totalTime
        }
    },
    _prepareValue: function(rowIndex, cellIndex) {
        var dataProvider = this._dataProvider,
            value = dataProvider.getCellValue(rowIndex, cellIndex),
            type = this._getDataType(dataProvider.getCellType(rowIndex, cellIndex)),
            formatID = this._styleArray[cellIndex + BOLD_STYLES_COUNT].formatID,
            format = commonUtils.isNumber(formatID) ? this._styleFormat[formatID - 1] : null;
        if ("d" === type && !commonUtils.isDate(value)) {
            type = "s"
        }
        switch (type) {
            case "s":
                value = this._appendString(value);
                break;
            case "d":
                value = this._getExcelDateValue(value, format);
                type = "n"
        }
        return {
            value: value,
            type: type
        }
    },
    _getHeadersArray: function() {
        var i, j, column, columns = this._dataProvider.getColumns(true),
            result = [];
        for (i = 0; i < columns.length - 1; i++) {
            result.push([]);
            for (j = 0; j < columns[i].length; j++) {
                column = columns[i][j];
                result[i].push({
                    style: 0,
                    type: "s",
                    value: this._appendString(column.caption)
                })
            }
        }
        return result
    },
    _getDataArray: function() {
        var rowIndex, cellIndex, cellsArray, cellData, cellsLength, type, styleID, result = [],
            rowsLength = this._dataProvider.getRowsCount(),
            columns = this._dataProvider.getColumns();
        for (rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
            cellsArray = [];
            cellsLength = columns.length;
            for (cellIndex = 0; cellIndex !== cellsLength; cellIndex++) {
                cellData = this._prepareValue(rowIndex, cellIndex);
                type = cellData.type;
                if (!this._dataProvider.isGroupRow(rowIndex) && commonUtils.isDefined(this._styleArray[cellIndex + BOLD_STYLES_COUNT].formatID) && "s" !== cellData.type) {
                    type = "n"
                }
                styleID = cellIndex + BOLD_STYLES_COUNT;
                if (this._dataProvider.isGroupRow(rowIndex)) {
                    styleID = BOLD_STYLES_COUNT - 1
                }
                if (this._dataProvider.isTotalCell(rowIndex, cellIndex)) {
                    styleID = this._getBoldStyleID(columns[cellIndex].alignment)
                }
                cellsArray.push({
                    style: styleID,
                    value: cellData.value,
                    type: type
                })
            }
            if (rowIndex && !this._needSheetPr && this._dataProvider.getGroupLevel(this._getDataProviderRowIndex(rowIndex)) > 0) {
                this._needSheetPr = true
            }
            result.push(cellsArray)
        }
        return result
    },
    _getBoldStyleID: function(alignment) {
        for (var i = 0; i < BOLD_STYLES_COUNT - 1; i++) {
            if (this._styleArray[i].alignment === alignment) {
                return i
            }
        }
    },
    _calculateWidth: function(pixelsWidth) {
        pixelsWidth = parseInt(pixelsWidth, 10);
        if (!pixelsWidth || pixelsWidth < 5) {
            pixelsWidth = 100
        }
        return Math.min(255, Math.floor((pixelsWidth - 5) / MAX_DIGIT_WIDTH_IN_PIXELS * 100 + .5) / 100)
    },
    _prepareStyleData: function() {
        var i, column, wrapText = Number(!!this._options.wrapTextEnabled),
            alignments = ["center", "left", "right"],
            columns = this._dataProvider.getColumns();
        for (i = 0; i < alignments.length; i++) {
            this._styleArray.push({
                bold: true,
                alignment: alignments[i],
                wrapText: 1
            })
        }
        this._styleArray.push({
            bold: true,
            alignment: commonUtils.getDefaultAlignment(this._rtlEnabled),
            wrapText: 0
        });
        for (i = 0; i < columns.length; i++) {
            column = columns[i];
            this._styleArray.push({
                alignment: commonUtils.isDefined(column.alignment) ? column.alignment : "left",
                formatID: this._appendFormat(column.format, column.precision, column.dataType),
                wrapText: wrapText
            });
            this._colsArray.push(this._calculateWidth(column.width))
        }
    },
    _prepareCellData: function() {
        if (this._dataProvider.isHeadersVisible()) {
            this._cellsArray = this._cellsArray.concat(this._getHeadersArray())
        }
        this._cellsArray = this._cellsArray.concat(this._getDataArray())
    },
    _createXMLRelationships: function(xmlRelationships) {
        return this._getXMLTag("Relationships", [{
            name: "xmlns",
            value: OPEN_XML_FORMAT_URL + "/package/2006/relationships"
        }], xmlRelationships)
    },
    _createXMLRelationship: function(id, type, target) {
        return this._getXMLTag("Relationship", [{
            name: "Id",
            value: "rId" + id
        }, {
            name: "Type",
            value: OPEN_XML_FORMAT_URL + "/officeDocument/2006/relationships/" + type
        }, {
            name: "Target",
            value: target
        }])
    },
    _getWorkbookContent: function() {
        var content = '<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="0" windowHeight="0"/></bookViews><sheets><sheet name="Sheet" sheetId="1" r:id="rId1" /></sheets><definedNames><definedName name="_xlnm.Print_Titles" localSheetId="0">Sheet!$1:$1</definedName><definedName name="_xlnm._FilterDatabase" hidden="0" localSheetId="0">Sheet!$A$1:$F$6332</definedName></definedNames>';
        return XML_TAG + this._getXMLTag("workbook", [{
            name: "xmlns:r",
            value: OPEN_XML_FORMAT_URL + "/officeDocument/2006/relationships"
        }, {
            name: "xmlns",
            value: OPEN_XML_FORMAT_URL + "/spreadsheetml/2006/main"
        }], content)
    },
    _getContentTypesContent: function() {
        return XML_TAG + '<Types xmlns="' + OPEN_XML_FORMAT_URL + '/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="xml" ContentType="application/xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /></Types>'
    },
    _generateStylesXML: function() {
        var styleIndex, style, formatIndex, folder = this._zip.folder(XL_FOLDER_NAME),
            stylesLength = this._styleArray.length,
            xmlStyles = [],
            XML = "";
        for (formatIndex = 0; formatIndex < this._styleFormat.length; formatIndex++) {
            this._styleFormat[formatIndex] = this._getXMLTag("numFmt", [{
                name: "numFmtId",
                value: Number(formatIndex) + CUSTOM_FORMAT_START_INDEX
            }, {
                name: "formatCode",
                value: this._styleFormat[formatIndex]
            }])
        }
        XML = XML + this._getXMLTag("numFmts", [{
            name: "count",
            value: this._styleFormat.length
        }], this._styleFormat.join("")) + BASE_STYLE_XML;
        for (styleIndex = 0; styleIndex < stylesLength; styleIndex++) {
            style = this._styleArray[styleIndex];
            xmlStyles.push(this._getXMLTag("xf", [{
                name: "xfId",
                value: 0
            }, {
                name: "applyAlignment",
                value: 1
            }, {
                name: "fontId",
                value: Number(!!style.bold)
            }, {
                name: "applyNumberFormat",
                value: commonUtils.isDefined(style.formatID) ? 1 : 0
            }, {
                name: "numFmtId",
                value: commonUtils.isDefined(style.formatID) ? Number(style.formatID) + CUSTOM_FORMAT_START_INDEX - 1 : 0
            }], this._getXMLTag("alignment", [{
                name: "horizontal",
                value: style.alignment
            }, {
                name: "vertical",
                value: "top"
            }, {
                name: "wrapText",
                value: style.wrapText
            }])))
        }
        XML += this._getXMLTag("cellXfs", [{
            name: "count",
            value: xmlStyles.length
        }], xmlStyles.join(""));
        XML += this._getXMLTag("cellStyles", [{
            name: "count",
            value: 1
        }], this._getXMLTag("cellStyle", [{
            name: "name",
            value: "Normal"
        }, {
            name: "xfId",
            value: 0
        }, {
            name: "builtinId",
            value: 0
        }]));
        XML = XML_TAG + this._getXMLTag("styleSheet", [{
            name: "xmlns",
            value: OPEN_XML_FORMAT_URL + "/spreadsheetml/2006/main"
        }], XML);
        folder.file(STYLE_FILE_NAME, XML);
        this._styleArray = []
    },
    _generateStringsXML: function() {
        var stringIndex, folder = this._zip.folder(XL_FOLDER_NAME),
            stringsLength = this._stringArray.length,
            sharedStringXml = XML_TAG;
        for (stringIndex = 0; stringIndex < stringsLength; stringIndex++) {
            this._stringArray[stringIndex] = this._getXMLTag("si", [], this._getXMLTag("t", [], this._stringArray[stringIndex]))
        }
        sharedStringXml += this._getXMLTag("sst", [{
            name: "xmlns",
            value: OPEN_XML_FORMAT_URL + "/spreadsheetml/2006/main"
        }, {
            name: "count",
            value: this._stringArray.length
        }, {
            name: "uniqueCount",
            value: this._stringArray.length
        }], this._stringArray.join(""));
        folder.file(SHAREDSTRING_FILE_NAME, sharedStringXml);
        this._stringArray = []
    },
    _getPaneXML: function() {
        var attributes = [{
                name: "activePane",
                value: "bottomLeft"
            }, {
                name: "state",
                value: "frozen"
            }],
            frozenArea = this._dataProvider.getFrozenArea();
        if (!(frozenArea.x || frozenArea.y)) {
            return ""
        }
        if (frozenArea.x) {
            attributes.push({
                name: "xSplit",
                value: frozenArea.x
            })
        }
        if (frozenArea.y) {
            attributes.push({
                name: "ySplit",
                value: frozenArea.y
            })
        }
        attributes.push({
            name: "topLeftCell",
            value: this._getCellIndex(frozenArea.y + 1, frozenArea.x)
        });
        return this._getXMLTag("pane", attributes)
    },
    _generateWorksheetXML: function() {
        var colIndex, rowIndex, cellData, xmlCells, maxCellIndex, cellsLength, counter = 0,
            xmlRows = [],
            rowsLength = this._cellsArray.length,
            colsLength = this._colsArray.length,
            rSpans = "1:" + colsLength,
            headerRowCount = this._dataProvider.getHeaderRowCount ? this._dataProvider.getHeaderRowCount() : 1,
            xmlResult = [
                ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">', this._needSheetPr ? GROUP_SHEET_PR_XML : SINGLE_SHEET_PR_XML, '<dimension ref="A1:', this._getCellIndex(this._maxIndex[0], this._maxIndex[1]) + '"/><sheetViews><sheetView ' + (this._rtlEnabled ? 'rightToLeft="1" ' : "") + 'tabSelected="1" workbookViewId="0">' + this._getPaneXML() + '</sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" outlineLevelRow="', this._dataProvider.getRowsCount() > 0 ? this._dataProvider.getGroupLevel(0) : 0, '" x14ac:dyDescent="0.25"/>'].join("")
            ];
        for (colIndex = 0; colIndex < colsLength; colIndex++) {
            this._colsArray[colIndex] = this._getXMLTag("col", [{
                name: "width",
                value: this._colsArray[colIndex]
            }, {
                name: "min",
                value: Number(colIndex) + 1
            }, {
                name: "max",
                value: Number(colIndex) + 1
            }])
        }
        xmlResult.push(this._getXMLTag("cols", [], this._colsArray.join("")) + "<sheetData>");
        for (rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
            xmlCells = [];
            cellsLength = this._cellsArray[rowIndex].length;
            for (colIndex = 0; colIndex < cellsLength; colIndex++) {
                rowIndex = Number(rowIndex);
                cellData = this._cellsArray[rowIndex][colIndex];
                xmlCells.push(this._getXMLTag("c", [{
                    name: "r",
                    value: this._getCellIndex(rowIndex + 1, colIndex)
                }, {
                    name: "s",
                    value: cellData.style
                }, {
                    name: "t",
                    value: cellData.type
                }], commonUtils.isDefined(cellData.value) ? this._getXMLTag("v", [], cellData.value) : null))
            }
            xmlRows.push(this._getXMLTag("row", [{
                name: "r",
                value: Number(rowIndex) + 1
            }, {
                name: "spans",
                value: rSpans
            }, {
                name: "outlineLevel",
                value: rowIndex >= headerRowCount ? this._dataProvider.getGroupLevel(this._getDataProviderRowIndex(rowIndex)) : 0
            }, {
                name: "x14ac:dyDescent",
                value: "0.25"
            }], xmlCells.join("")));
            this._cellsArray[rowIndex] = null;
            if (counter++ > 1e4) {
                xmlResult.push(xmlRows.join(""));
                xmlRows = [];
                counter = 0
            }
        }
        xmlResult.push(xmlRows.join(""));
        xmlRows = [];
        maxCellIndex = this._getCellIndex(this._maxIndex[0], this._maxIndex[1]);
        xmlResult.push("</sheetData>" + (this._options.autoFilterEnabled ? '<autoFilter ref="A' + this._dataProvider.getHeaderRowCount() + ":" + maxCellIndex + '" />' : "") + this._generateMergingXML() + '<ignoredErrors><ignoredError sqref="A1:' + maxCellIndex + '" numberStoredAsText="1" /></ignoredErrors></worksheet>');
        this._zip.folder(XL_FOLDER_NAME).folder(WORKSHEETS_FOLDER).file(WORKSHEET_FILE_NAME, xmlResult.join(""));
        this._colsArray = [];
        this._cellsArray = [];
        xmlResult = []
    },
    _generateMergingXML: function() {
        var k, l, cellIndex, rowIndex, mergeArrayLength, mergeIndex, rowsLength = commonUtils.isDefined(this._dataProvider.getHeaderRowCount) ? this._dataProvider.getHeaderRowCount() : this._dataProvider.getRowsCount(),
            columnsLength = this._dataProvider.getColumns().length,
            usedArea = [],
            mergeArray = [],
            mergeXML = "";
        for (rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
            for (cellIndex = 0; cellIndex !== columnsLength; cellIndex++) {
                if (!commonUtils.isDefined(usedArea[rowIndex]) || !commonUtils.isDefined(usedArea[rowIndex][cellIndex])) {
                    var cellMerge = this._dataProvider.getCellMerging(rowIndex, cellIndex);
                    if (cellMerge.colspan || cellMerge.rowspan) {
                        mergeArray.push({
                            start: this._getCellIndex(rowIndex + 1, cellIndex),
                            end: this._getCellIndex(rowIndex + 1 + (cellMerge.rowspan || 0), cellIndex + (cellMerge.colspan || 0))
                        });
                        for (k = rowIndex; k <= rowIndex + cellMerge.rowspan || 0; k++) {
                            for (l = cellIndex; l <= cellIndex + cellMerge.colspan || 0; l++) {
                                if (!commonUtils.isDefined(usedArea[k])) {
                                    usedArea[k] = []
                                }
                                usedArea[k][l] = true
                            }
                        }
                    }
                }
            }
        }
        mergeArrayLength = mergeArray.length;
        for (mergeIndex = 0; mergeIndex < mergeArrayLength; mergeIndex++) {
            mergeXML += this._getXMLTag("mergeCell", [{
                name: "ref",
                value: mergeArray[mergeIndex].start + ":" + mergeArray[mergeIndex].end
            }])
        }
        return mergeXML.length ? this._getXMLTag("mergeCells", [{
            name: "count",
            value: mergeArrayLength
        }], mergeXML) : ""
    },
    _generateCommonXML: function() {
        var xmlRelationships, relsFileContent = XML_TAG + this._createXMLRelationships(this._createXMLRelationship(1, "officeDocument", "xl/" + WORKBOOK_FILE_NAME)),
            folder = this._zip.folder(XL_FOLDER_NAME),
            relsXML = XML_TAG;
        this._zip.folder("_" + RELATIONSHIP_PART_NAME).file("." + RELATIONSHIP_PART_NAME, relsFileContent);
        xmlRelationships = this._createXMLRelationship(1, "worksheet", "worksheets/" + WORKSHEET_FILE_NAME) + this._createXMLRelationship(2, "styles", STYLE_FILE_NAME) + this._createXMLRelationship(3, "sharedStrings", SHAREDSTRING_FILE_NAME);
        relsXML += this._createXMLRelationships(xmlRelationships);
        folder.folder("_" + RELATIONSHIP_PART_NAME).file(WORKBOOK_FILE_NAME + ".rels", relsXML);
        folder.file(WORKBOOK_FILE_NAME, this._getWorkbookContent());
        this._zip.file(CONTENTTYPES_FILE_NAME, this._getContentTypesContent())
    },
    _generateContent: function() {
        this._prepareStyleData();
        this._prepareCellData();
        this._generateWorkXML();
        this._generateCommonXML()
    },
    _generateWorkXML: function() {
        this._generateStylesXML();
        this._generateStringsXML();
        this._generateWorksheetXML()
    },
    ctor: function(dataProvider, options) {
        this._rtlEnabled = options && !!options.rtlEnabled;
        this._options = options;
        this._maxIndex = [1, 2];
        this._stringArray = [];
        this._stringHash = {};
        this._styleArray = [];
        this._colsArray = [];
        this._cellsArray = [];
        this._styleFormat = [];
        this._needSheetPr = false;
        this._dataProvider = dataProvider;
        if (commonUtils.isDefined(JSZip)) {
            this._zip = new JSZip
        } else {
            this._zip = null
        }
    },
    _checkZipState: function() {
        if (!this._zip) {
            throw errors.Error("E1041")
        }
    },
    ready: function() {
        return this._dataProvider.ready()
    },
    getData: function(isBlob) {
        var options = {
            type: isBlob ? "blob" : "base64",
            compression: "DEFLATE",
            mimeType: fileSaver.MIME_TYPES.EXCEL
        };
        this._checkZipState();
        this._generateContent();
        return this._zip.generateAsync ? this._zip.generateAsync(options) : this._zip.generate(options)
    }
});
exports.getData = function(data, options, callback) {
    var excelCreator = new exports.ExcelCreator(data, options);
    excelCreator._checkZipState();
    excelCreator.ready().done(function() {
        if (excelCreator._zip.generateAsync) {
            excelCreator.getData(commonUtils.isFunction(window.Blob)).then(callback)
        } else {
            callback(excelCreator.getData(commonUtils.isFunction(window.Blob)))
        }
    })
};

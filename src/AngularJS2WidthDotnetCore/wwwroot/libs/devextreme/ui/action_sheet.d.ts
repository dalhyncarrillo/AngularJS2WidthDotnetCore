/**
* DevExtreme (ui/action_sheet.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxActionSheet(): JQuery;
    dxActionSheet(options: "instance"): DevExpress.ui.dxActionSheet;
    dxActionSheet(options: string): any;
    dxActionSheet(options: string, ...params: any[]): any;
    dxActionSheet(options: DevExpress.ui.dxActionSheetOptions): JQuery;
}
}
export default DevExpress.ui.dxActionSheet;
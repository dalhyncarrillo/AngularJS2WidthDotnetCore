/**
* DevExtreme (ui/select_box.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxSelectBox(): JQuery;
    dxSelectBox(options: "instance"): DevExpress.ui.dxSelectBox;
    dxSelectBox(options: string): any;
    dxSelectBox(options: string, ...params: any[]): any;
    dxSelectBox(options: DevExpress.ui.dxSelectBoxOptions): JQuery;
}
}
export default DevExpress.ui.dxSelectBox;
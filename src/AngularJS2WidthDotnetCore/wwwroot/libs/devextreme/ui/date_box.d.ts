/**
* DevExtreme (ui/date_box.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxDateBox(): JQuery;
    dxDateBox(options: "instance"): DevExpress.ui.dxDateBox;
    dxDateBox(options: string): any;
    dxDateBox(options: string, ...params: any[]): any;
    dxDateBox(options: DevExpress.ui.dxDateBoxOptions): JQuery;
}
}
export default DevExpress.ui.dxDateBox;
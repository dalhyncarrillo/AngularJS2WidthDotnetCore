/**
* DevExtreme (ui/popup.d.ts)
* Version: 16.2.4
* Build date: Tue Jan 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxPopup(): JQuery;
    dxPopup(options: "instance"): DevExpress.ui.dxPopup;
    dxPopup(options: string): any;
    dxPopup(options: string, ...params: any[]): any;
    dxPopup(options: DevExpress.ui.dxPopupOptions): JQuery;
}
}
export default DevExpress.ui.dxPopup;
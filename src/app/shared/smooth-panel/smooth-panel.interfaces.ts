import { ShopProduct } from "src/app/Models/Products/ShopProduct";

export interface ISmoothPanelChanges {
    currentSelectedItem: ISmoothPanelChangesRealisation;
}

export interface ISmoothPanelChangesRealisation {
    currentValue: ShopProduct;
    firstChange: false;
    previousValue: ShopProduct;
}

export interface IFadeItems {
    opacity: number;
    model: ShopProduct;
}
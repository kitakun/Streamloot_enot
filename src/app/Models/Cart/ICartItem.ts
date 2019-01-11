import { ShopProduct } from "../Products/ShopProduct";

export interface ICartItem {
    item: ShopProduct;
    cartId: Number;
}
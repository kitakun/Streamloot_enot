import { BundleItem } from "./BundleItem";
import { IAttribute } from "../IAttribute";

export class ShopProduct {
    public Id: string;
    public Name: string;
    public Price: number;
    public RenderType: string;
    public Items: Array<BundleItem>;

    public ImageSrc: string;
    public Active: boolean;
    //public Attributes: Array<IAttribute>;

    constructor(
        id: string, 
        imgSrc: string,
        itemName: string,
        tPrice: number) {
        this.Id = id;
        this.ImageSrc = imgSrc;
        this.Name = itemName;
        this.Active = false;
        this.Price = tPrice;
        this.Items = new Array();
    }
}
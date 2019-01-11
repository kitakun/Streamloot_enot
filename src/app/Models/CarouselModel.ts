import { BundleItem } from "./Products/BundleItem";

export class CarouselModel {
    public Id: string;
    public ImageSrc: string;
    public Name: string;
    public Active: boolean;
    public Items: Array<BundleItem>;
    public Price: number;
    public RenderType: string;

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
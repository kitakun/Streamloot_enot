import { AddressModel } from "../AddressModel";

export class CreateOrderModel {

    public Code: string;

    public FullName: string;

    public Telephone: string;

    public Address: AddressModel;

    public Items: Array<OrderProductModel>;

    constructor() {
        this.Code = '';
        this.FullName = '';
        this.Telephone = '';
        this.Address = new AddressModel();
        this.Items = new Array();
    }
}

export class OrderProductModel {
    public ItemId: number;

    public ItemType: OrderProductTypeEnum;

    public Attributes: Array<ProductAttribute>;
}

export interface ProductAttribute {
    ItemId: number;
    Name: string;
    Value: string;
}

export enum OrderProductTypeEnum {
    Product = 0,
    Bundle = 1
}
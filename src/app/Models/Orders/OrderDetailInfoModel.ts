export interface OrderDetailInfoModel {
    OrderNumber: string;

    State: any;

    OrderCreated: Date;
    OrderModified: Date;

    Items: Array<any>;
    Changes: Array<any>;
}
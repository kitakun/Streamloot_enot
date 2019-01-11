export interface TrackOrderInfo {

    OrderNumber: string;

    OrderCreated: Date;

    OrderModified: Date;

    State: OrderStatus;

    Changes: Array<TrackInfoChangeset>;

    Items: Array<any>;
}

export interface TrackInfoChangeset {

    id: number;

    createdDate: Date;

    message: string;

    newState: OrderStatus;

    orderId: number;

}

export enum OrderStatus {
    WaitingForPayment = 0
}
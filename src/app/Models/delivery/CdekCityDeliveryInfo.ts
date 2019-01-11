export class CdekCityDeliveryInfo {
    public CityName: string;
    public MinPrice: number;
    public DeliveryDate: string;

    constructor(
        inCityName: string,
        inMinPrice: number,
        inDeliveryDate: string
    ) {
        this.CityName = inCityName;
        this.MinPrice = inMinPrice;
        this.DeliveryDate = inDeliveryDate;
    }
}
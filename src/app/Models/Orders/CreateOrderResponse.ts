import { MethodResponse } from "../MethodResponse";

export class CreateOrderResponse extends MethodResponse {
    public OrderId: string;
    public RedirectUrl: string;
}
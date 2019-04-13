import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { CreateOrderModel, OrderProductModel, OrderProductTypeEnum, ProductAttribute } from 'src/app/Models/Orders/CreateOrderModel';
import { CreateOrderResponse } from 'src/app/Models/Orders/CreateOrderResponse';
import { CartService } from 'src/app/services/cart-service.service';
import { ICartItem } from 'src/app/Models/Cart/ICartItem';
import { IError } from 'src/app/Models/UtilsInterfaces';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: [
    './create-order.component.scss',
    '../../Styles/Font.scss',
    '../../Styles/buttons.scss'
  ]
})
export class CreateOrderComponent implements OnInit {

  public inLoading: boolean = false;

  public showForm: boolean = true;

  //FORM
  public model: CreateOrderModel;

  //addr1
  public addrStreet: string;  //ul
  public addrHome: string;  //dom
  public addrApartament: string;  //kv

  //FORM RESULT
  public redirectTo: string;

  constructor(
    private readonly orderService: OrdersService,
    private readonly cartService: CartService,
    private readonly alerts: AlertsService) {
  }

  ngOnInit() {
    this.model = new CreateOrderModel();

    const cartItems = this.cartService.GetItems();

    this.model.Items = cartItems.map((cartItem: ICartItem, ind: number, allElements) => {
      let mmd = new OrderProductModel();
      mmd.ItemId = Number(cartItem.item.Id);
      mmd.ItemType = OrderProductTypeEnum.Bundle;//TODO devide on bundles and products
      mmd.Attributes = new Array<ProductAttribute>();
      if (cartItem.item.Items && cartItem.item.Items.length) {
        for (let i = 0; i < cartItem.item.Items.length; i++) {
          if (cartItem.item.Items[i].Attributes && cartItem.item.Items[i].Attributes.length > 0) {
            for (let j = 0; j < cartItem.item.Items[i].Attributes.length; j++) {
              mmd.Attributes.push({
                ItemId: Number(cartItem.item.Items[i].ItemId),
                Name: cartItem.item.Items[i].Attributes[j].Name,
                Value: cartItem.item.Items[i].Attributes[j].Selected
              });
            }
          }
        }
      }

      return mmd;
    });
  }

  public Push(): void {
    this.inLoading = true;
    this.orderService
      .Create(this.model)
      .then((methodResponse: CreateOrderResponse) => {
        if (methodResponse.Success) {
          this.redirectTo = methodResponse.RedirectUrl;
          this.showForm = false;
          setTimeout(() => {
            window.location.href = this.redirectTo;
          }, 3 * 1000);
        }
      }).catch((err: IError) => {
        if (err.error && err.error.message) {
          this.alerts.Error(err.error.message);
        } else {
          this.alerts.Error(err.message);
        }
      })
      .finally(() => {
        this.inLoading = false;
      });
  }

  public updateAddress(): void {
    this.model.Address.Address1 = `ул:${this.addrStreet} дом:${this.addrHome} кв:${this.addrApartament}`;
  }
}

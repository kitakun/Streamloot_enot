import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/services/cart-service.service';
import { ICartItem } from 'src/app/Models/Cart/ICartItem';
import { AttributeService } from 'src/app/services/attribute-service.service';
import { IAttribute } from 'src/app/Models/IAttribute';
import { ShopProduct } from 'src/app/Models/Products/ShopProduct';
import { BundleItem } from 'src/app/Models/Products/BundleItem';
import { ModalService } from 'src/app/shared/modal-dialog/modal.service';

const choseAttributeModalName = 'select-attrs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    './cart.component.scss',
    '../../Styles/Font.scss',
    '../../Styles/panel.scss',
    '../../Styles/buttons.scss'
  ]
})
export class CartComponent implements OnInit {

  public CartItems: Array<ICartItem>;
  public TotalPrice: number;

  public proceededToCartProduct: Array<BundleItem>;

  private _editedCartItem: ICartItem;

  constructor(
    private readonly attrService: AttributeService,
    private readonly cartService: CartService,
    private readonly modalService: ModalService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.CartItems = this.cartService.GetItems();
    this._updateTotal();
  }

  public delete(item: ICartItem): void {
    let deletedItem = item.item;
    this.cartService.DeleteFromCart(deletedItem);
    this.CartItems = this.cartService.GetItems();
    this._updateTotal();
  }

  public Proceed(): void {
    if (this.CartItems.length > 0) {
      this.router.navigate(['/create-order']);
    }
  }

  private _updateTotal(): void {
    this.TotalPrice = 0;
    for (var item in this.CartItems) {
      this.TotalPrice += this.CartItems[item].item.Price;
    }
  }

  public localize(input: IAttribute): string {
    return this.attrService.localize(input);
  }

  public hasAttrs(input: ShopProduct): boolean {
    if (input.Items && input.Items.length > 0) {
      for (var i = 0; i < input.Items.length; i++) {
        if (input.Items[i].Attributes && input.Items[i].Attributes.length > 0 && input.Items[i].Attributes.findIndex(a => !a.IsSystem) > -1) {
          return true;
        }
      }
    }

    return false;
  }

  public setup(input: ICartItem): void {
    this._editedCartItem = input;
    this.proceededToCartProduct = JSON.parse(JSON.stringify(input.item.Items));
    this.modalService.open(choseAttributeModalName);
  }

  public acceptAttrs(): void {
    for (var i = 0; i < this.proceededToCartProduct.length; i++) {
      for (var j = 0; j < this._editedCartItem.item.Items.length; j++) {
        var itemProceeded = false;
        if (this._editedCartItem.item.Items[j].ItemId == this.proceededToCartProduct[i].ItemId) {
          itemProceeded = true;
          for (var i2 = 0; i2 < this.proceededToCartProduct[i].Attributes.length; i2++) {
            for (var j2 = 0; j2 < this._editedCartItem.item.Items[j].Attributes.length; j2++) {
              if (this.proceededToCartProduct[i].Attributes[i2].Name == this._editedCartItem.item.Items[j].Attributes[j2].Name) {
                this._editedCartItem.item.Items[j].Attributes[j2].Selected = this.proceededToCartProduct[i].Attributes[i2].Selected;
              }
            }
          }
        }
        if (itemProceeded)
          continue;
      }
    }
    this.cartService.Update(this._editedCartItem);
    this.modalService.close(choseAttributeModalName);
  }
  public cancelAttrs(): void {
    this.modalService.close(choseAttributeModalName);
  }
}

import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: [
    './navbar-header.component.scss',
    '../../Styles/grid.scss',
    '../../Styles/buttons.scss',
    '../../Styles/panel.scss'
  ]
})
export class NavbarHeaderComponent {

  public _itemsInCart: number = 0;

  constructor(private readonly CartService: CartService) {
    this._itemsInCart = this.CartService.GetItemsCount();
    CartService.SubscribeOnUpdate(() => {
      this._itemsInCart = this.CartService.GetItemsCount();
    })
  }
}
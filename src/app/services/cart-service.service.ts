import { Injectable, Inject } from '@angular/core';
import { ShopProduct } from '../Models/Products/ShopProduct';
import { Callback } from '../Models/UtilsInterfaces';
import { ICartItem } from '../Models/Cart/ICartItem';

let cachItems = new Array<ICartItem>();

@Injectable({
  providedIn: 'root'
})
export class CartService implements ICartService {
  private static cartKey: string = 'cartCache';
  private _subscribed: Array<Callback>

  constructor(
    @Inject('LOCALSTORAGE') private readonly localStorage: Storage) {
    this._subscribed = new Array<Callback>();
    let loadedItem = localStorage.getItem(CartService.cartKey);
    if (loadedItem) {
      cachItems = JSON.parse(loadedItem);
      this._callUpdateOnSubs();
    }
  }

  public SubscribeOnUpdate(cb: Callback): Callback {
    let unsubAction = () => {
      this._subscribed = this._subscribed.filter(c => c != cb);
    }
    this._subscribed.push(cb);
    return unsubAction;
  }

  public GetItemsCount(): number {
    return cachItems.length;
  }

  public GetItems(): ICartItem[] {
    return cachItems;
  }

  public AddInCart(item: ShopProduct): void {
    cachItems.push({ item: Object.assign({}, item), cartId: new Date().getTime() });
    this._updateLocalStorage();
    this._callUpdateOnSubs();
  }

  public Update(item: ICartItem): void {
    cachItems.find(c => c.cartId == item.cartId).item = item.item;
    this._updateLocalStorage();
    this._callUpdateOnSubs();
  }

  public DeleteFromCart(item: ShopProduct): void {
    cachItems = cachItems.filter(f => f.item !== item);
    this._updateLocalStorage();
    this._callUpdateOnSubs();
  }

  private _updateLocalStorage(): void {
    this.localStorage.setItem(CartService.cartKey, JSON.stringify(cachItems));
  }
  private _callUpdateOnSubs(): void {
    this._subscribed.forEach(cb => cb());
  }
}

interface ICartService {
  GetItemsCount(): number;
  GetItems(): Array<ICartItem>;
  AddInCart(item: ShopProduct): void;
  Update(item: ICartItem): void;
  DeleteFromCart(item: ShopProduct): void;

  SubscribeOnUpdate(cb: Callback): Callback;
}

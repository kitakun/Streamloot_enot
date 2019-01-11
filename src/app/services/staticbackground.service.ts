import { Injectable } from '@angular/core';
import { Callback } from '../Models/UtilsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class StaticbackgroundService implements IStaticBackgroundService {
  public backgroundOpacity: number;
  private _subscribed: Array<Callback>

  constructor() {
    this._subscribed = new Array<Callback>();
    this.backgroundOpacity = 1;
  }

  public hover(): void {
    this.backgroundOpacity = 0.4;
    this._subscribed.forEach(sb => sb());
  }
  public hide(): void {
    this.backgroundOpacity = 1;
    this._subscribed.forEach(sb => sb());
  }

  public SubscribeOnUpdate(cb: Callback): Callback {
    let unsubAction = () => {
      this._subscribed = this._subscribed.filter(c => c != cb);
    }
    this._subscribed.push(cb);
    return unsubAction;
  }
}

interface IStaticBackgroundService {
  hover(): void;
  hide(): void;

  SubscribeOnUpdate(cb: Callback): Callback;
}

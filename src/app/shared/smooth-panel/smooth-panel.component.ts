import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ShopProduct } from 'src/app/Models/Products/ShopProduct';
import { IFadeItems, ISmoothPanelChanges } from './smooth-panel.interfaces';

const timeoutVal: number = 0.3 * 1000;
declare var window;

@Component({
  selector: 'home-smooth-panel',
  templateUrl: './smooth-panel.component.html',
  styleUrls: [
    './smooth-panel.component.scss',
    '../../Styles/Font.scss',
    '../../Styles/buttons.scss'
  ]
})
export class SmoothPanelComponent implements OnInit, OnChanges {

  @Input('proceedFunc') proceedCallback: Function;
  @Input('curItem') currentSelectedItem: ShopProduct;
  public prevModel: ShopProduct;
  public hide: boolean;
  private timeoutId: number;

  public fadedItems: Array<IFadeItems>;

  constructor() {
    this.hide = false;
  }

  ngOnInit() {
    this.prevModel = this.currentSelectedItem;
  }

  public addToCart(item: ShopProduct): void {
    let newProductObject = Object.assign({}, item);
    this.proceedCallback(newProductObject);
  }

  ngOnChanges(changes: SimpleChanges | ISmoothPanelChanges): void {
    if (!this.prevModel) {
      this.prevModel = changes.currentSelectedItem.previousValue;
    }
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = void 0;
    }
    this.hide = true;
    this.timeoutId = window.setTimeout(() => {
      this.prevModel = void 0;
      this.hide = false;
    }, timeoutVal);
  }

  hidePrev(): boolean {
    return this.hide || false;
  }
}

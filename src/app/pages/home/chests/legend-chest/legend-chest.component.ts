import { Component, Input } from '@angular/core';
import { ShopProduct } from 'src/app/Models/Products/ShopProduct';
import { StaticbackgroundService } from 'src/app/services/staticbackground.service';

@Component({
  selector: 'chest-legend',
  templateUrl: './legend-chest.component.html',
  styleUrls: [
    './legend-chest.component.scss'
  ]
})
export class LegendChestComponent {
  
  @Input() 
  slide: ShopProduct;

  constructor(
    private readonly staticBackground: StaticbackgroundService) {
  }

  public hover(show?: boolean): void {
    if (show) {
      this.staticBackground.hover();
    } else {
      this.staticBackground.hide();
    }
  }
}
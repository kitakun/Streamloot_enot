import { Component, Input } from '@angular/core';
import { ShopProduct } from 'src/app/Models/Products/ShopProduct';
import { StaticbackgroundService } from 'src/app/services/staticbackground.service';

@Component({
  selector: 'chest-myth',
  templateUrl: './myth-chest.component.html',
  styleUrls: [
    './myth-chest.component.scss',
    '../legend-chest/legend-chest.component.scss'
  ]
})
export class MythChestComponent {

  @Input() slide: ShopProduct;
  constructor(private readonly staticBackground: StaticbackgroundService) {
  }

  public hover(show?: boolean): void {
    if (show) {
      this.staticBackground.hover();
    } else {
      this.staticBackground.hide();
    }
  }
}

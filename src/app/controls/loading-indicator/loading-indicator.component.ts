import { Component, Input, } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  @Input() width: number;

  get hasWidth(): boolean {
    return this.width && this.width > 0;
  }

  getSize(): any {
    if (this.hasWidth) {
      return {
        width: this.width
      }
    }
    return {};
  }
}

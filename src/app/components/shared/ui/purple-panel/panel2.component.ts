import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'items-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: [
    './panel2.component.scss',
    '../../../../Styles/Font.scss'
  ]
})
export class Panel2Component implements OnInit {

  @Input("opacity")
  public set opac(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.hide = true;
      }, 100);
    } else {
      this.hide = false;
    }
  }

  @Input("smoothShowing")
  public set smShSet(val: boolean) {
    this.smoothShowing = val;
    if (val) {
      setTimeout(() => {
        this.show = true;
      }, 100);
    } else {
      this.show = false;
    }
  }

  
  public hide: boolean;
  public smoothShowing: boolean;
  public show: boolean;

  constructor() { }

  ngOnInit() {
  }
}

interface IElementHolder {
  nativeElement: HTMLElement;
}
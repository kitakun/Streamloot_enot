import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'items-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent  {

  @Input("showSeal") showSeal: boolean;

  constructor() { }

}

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'hover-parallax',
  templateUrl: './hover-parallax.component.html',
  styleUrls: ['./hover-parallax.component.scss']
})
export class HoverParallaxComponent implements OnInit {

  @ViewChild('parallazBgDiv', { static: false }) myDiv: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  private docWidth: number;
  private docHeight: number;

  ngOnInit() {
    this.UpdateSizes();

    this.document.addEventListener('onresize', () => this.UpdateSizes());

    this.document.onmousemove = this.Update.bind(this);
  }

  private UpdateSizes(): void {
    this.docHeight = this.document.body.clientHeight;
    this.docWidth = this.document.body.clientWidth;
  }

  private Update(e: MouseEvent): void {
    let sxPos = (e.pageX / this.docWidth * 100 - 100) / 14;
    let syPos = (e.pageY / this.docHeight * 100 - 100) / 14;
    this.myDiv.nativeElement.style.setProperty('transform', `translate(${sxPos}px, ${syPos}px)`);
  }
}

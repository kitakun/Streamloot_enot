import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { StaticbackgroundService } from 'src/app/services/staticbackground.service';
import { Callback } from 'src/app/Models/UtilsInterfaces';

@Component({
  selector: 'static-video-background',
  templateUrl: './static-video-background.component.html',
  styleUrls: ['./static-video-background.component.scss']
})
export class StaticVideoBackgroundComponent implements OnInit, OnDestroy {

  public opacity: number;
  private _unsubscribe: Callback;

  @ViewChild('vidos') vidos: ElementRef;

  constructor(private readonly staticService: StaticbackgroundService) { }

  ngOnInit() {
    this.opacity = this.staticService.backgroundOpacity;
    this._unsubscribe = this.staticService.SubscribeOnUpdate(() => {
      this.opacity = this.staticService.backgroundOpacity;
    });
    if (this.vidos) {
      const videoElement = this.vidos.nativeElement as IVideo;
      setTimeout(() => {
        videoElement.pause();
        videoElement.play();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = void 0;
    }
  }
}

interface IVideo {
  pause(): void;
  play(): void;
}
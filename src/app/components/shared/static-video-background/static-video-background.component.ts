import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private readonly staticService: StaticbackgroundService) { }

  ngOnInit() {
    this.opacity = this.staticService.backgroundOpacity;
    this._unsubscribe = this.staticService.SubscribeOnUpdate(() => {
      this.opacity = this.staticService.backgroundOpacity;
    });
  }

  ngOnDestroy(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = void 0;
    }
  }
}

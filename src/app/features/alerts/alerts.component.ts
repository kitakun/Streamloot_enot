import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMessageObject, AlertsService } from 'src/app/services/alerts.service';
import { Callback } from 'src/app/Models/UtilsInterfaces';
import { TextWidthCalc } from 'src/app/shared/text-width-calc/text-width-calc.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: [
    './alerts.component.scss',
    '../../Styles/Font.scss'
  ]
})
export class AlertsComponent implements OnInit, OnDestroy {
  private _destroySubscription: Callback;
  public alerts: Array<IMessageObject>;

  constructor(
    private readonly alertService: AlertsService,
    private readonly textWidthCalculator: TextWidthCalc) {
    this.alerts = new Array();
  }

  public ngOnInit(): void {
    this._destroySubscription = this.alertService.SubscribeOnUpdate(this.newAlert.bind(this));
  }

  public ngOnDestroy(): void {
    if (this._destroySubscription) {
      this._destroySubscription();
    }
  }

  private debug() {
    const str = 'lets try something more bigger and comples?'
    setInterval(() => {
      this.alertService.Info(str);
    }, 5000);
    this.alertService.Info(str);
  }

  public newAlert(alert: IMessageObject): void {
    alert.size = this.textWidthCalculator.Calc(alert.msg);
    setTimeout(() => alert.pop = true, 100);
    setTimeout(() => alert.pop = false, 4000);
    setTimeout(() => this.alerts.filter(f => f != alert), 4300);
    this.alerts.push(alert);
  }

  public getStyles(alert: IMessageObject): any {
    return {
      width: (alert.size.width + 40) + "px",
      //height: (alert.size.height + 5) + "px",
      left: `calc(50% - ${(alert.size.width + 40) / 2 + "px"})`
    };
  }
}

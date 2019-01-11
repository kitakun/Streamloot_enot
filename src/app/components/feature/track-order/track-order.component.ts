import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertsService } from 'src/app/services/alerts.service';
import { IError } from 'src/app/Models/UtilsInterfaces';
import { RequestTrackOrderModel } from 'src/app/Models/TrackOrder/RequestTrackOrderModel';
import { TrackOrderInfo, OrderStatus } from 'src/app/Models/TrackOrder/TrackOrderInfo';

@Component({
    selector: 'track-order',
    templateUrl: './track-order.component.html',
    styleUrls: [
        '../../../Styles/Font.scss',
        '../../../Styles/panel.scss',
        '../../../Styles/buttons.scss',
        './track-order.component.scss',
        '../../../pages/create-order/create-order.component.scss',
    ]
})
export class TrackOrderComponent implements OnInit {

    public searchingOrder: boolean;

    trackModel: RequestTrackOrderModel = { OrderCode: '', OrderNumber: '' };

    loadedDataModel: TrackOrderInfo;

    constructor(
        private readonly http: HttpClient,
        private readonly alerts: AlertsService) {
    }

    ngOnInit(): void {
    }

    checkOrder(): void {
        this.searchingOrder = true;
        this.http
            .post<TrackOrderInfo>(`${environment.apiAddress}/Order/OrderInfo`, this.trackModel)
            .toPromise()
            .then((data) => {
                this.loadedDataModel = data;
            })
            .catch((err: IError) => {
                if (err.error && err.error.message) {
                    this.alerts.Error(err.error.message);
                } else {
                    this.alerts.Error(err.message);
                }
            }).finally(() => this.searchingOrder = false)
    }


    russianState(info: TrackOrderInfo): string {
        switch (info.State) {
            case OrderStatus.WaitingForPayment:
                return 'Ожидает платежа';
            default:
                return 'Неизвестно';
        }
        return 'Нет заказа';
    }
}
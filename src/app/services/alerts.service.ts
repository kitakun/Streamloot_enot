import { Injectable } from '@angular/core';
import { Callback, Size } from '../Models/UtilsInterfaces';

@Injectable({
    providedIn: 'root'
})
export class AlertsService implements IAlertService {
    public static duration: number = 4;

    private _subscribed: Array<ISendAlert>

    constructor() {
        this._subscribed = new Array<ISendAlert>();
    }

    public Info(msg: string): void {
        let alert = this._msg(msg);
        alert.class = 'info';

        this._updateCbs(alert);
    }

    public Error(msg: string): void {
        let alert = this._msg(msg);
        alert.class = 'error';

        this._updateCbs(alert);
    }

    private _msg(msg: string): IMessageObject {
        let obj = <IMessageObject>{
            isAlive: true,
            msg: msg,
            size: { width: 0, height: 0 },
            pop: false,
        };

        return obj;
    }

    public SubscribeOnUpdate(cb: ISendAlert): Callback {
        let unsubAction = () =>
            this._subscribed = this._subscribed.filter(c => c != cb);

        this._subscribed.push(cb);
        return unsubAction;
    }

    private _updateCbs(newAllert: IMessageObject) {
        this._subscribed.forEach(sb => sb(newAllert));
    }
}

export interface IAlertService {
    Info(msg: string);
    Error(msg: string);

    SubscribeOnUpdate(cb: ISendAlert): Callback;
}

export interface IMessageObject {
    alertId: number;
    msg: string;
    class: string;
    isAlive: boolean;
    size: Size;
    pop: boolean;
}

export interface ISendAlert {
    (alert: IMessageObject): void;
}
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { BundleItem } from 'src/app/Models/Products/BundleItem';
import { IAttribute } from 'src/app/Models/IAttribute';
import { MorzeAgent, IMorzeLine, IMorzeSignal } from 'src/app/shared/Morze/Morze.interface';
import { Callback, IConstructable } from 'src/app/Models/UtilsInterfaces';
import { environment } from 'src/environments/environment';

import { AttributeSelectorEventRequest } from './product-attribute-selector.events';

@Component({
    selector: 'es-product-select-attribute',
    templateUrl: './product-attribute-selector.component.html',
    styleUrls: [
        './product-attribute-selector.component.scss',
        '../../Styles/grid.scss',
        '../../Styles/buttons.scss',
        '../../Styles/Font.scss',
        '../../Styles/panel.scss'
    ]
})
export class ProductAttributeSelectorComponent implements MorzeAgent, OnInit, OnDestroy {

    @Input('product')
    public product: BundleItem;

    @Input('invalid')
    public isInvalid: boolean;

    @Input('morze')
    public morze: IMorzeLine;

    private _morzeDestroyCb: Callback;

    public ngOnInit(): void {
        if (this.morze) {
            this._morzeDestroyCb = this.morze.hearing(this);
        }
    }

    public ngOnDestroy(): void {
        if (this._morzeDestroyCb) {
            this._morzeDestroyCb();
            this._morzeDestroyCb = null;
        }
    }

    public hearing<T>(eventType: IConstructable<IMorzeSignal>, data: T): void {
        if (eventType.name == 'AttributeSelectorEventRequest') {
            let aser = data as AttributeSelectorEventRequest;
            if (aser.checkValidation) {
                this.isValidVals();
            }
        }
    }

    public isValidVals(): void {
        this.isInvalid = false;
        this.product.Attributes.forEach(atr => {
            if (!atr.Selected) {
                this.isInvalid = true;
            }
        })
    }

    public getAttrName(attr: IAttribute): string {
        switch (attr.Name) {
            case 'ProductSizeOptionsAttr':
                return 'Выберите размер:';
            default:
                return '~';
        }
    }

    public getPreviewUrl(product: BundleItem): string {
        const imagesData = product.Attributes.find(a => a.Name == 'ProductImageAttr');
        if (imagesData) {
            const arrayOfIds = imagesData.Values;
            if (arrayOfIds && arrayOfIds.length > 0) {
                return `${environment.apiAddress}/pictures/Load&pictureId=${arrayOfIds[0]}`;
            }
        }
        return `${environment.apiAddress}/pictures/Load`;
    }
}
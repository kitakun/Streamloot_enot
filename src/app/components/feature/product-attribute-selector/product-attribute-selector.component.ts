import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BundleItem } from 'src/app/Models/Products/BundleItem';
import { IAttribute } from 'src/app/Models/IAttribute';
import { Callback, IConstructable } from 'src/app/Models/UtilsInterfaces';
import { AttributeSelectorEventRequest } from './product-attribute-selector.events';
import { MorzeAgent, IMorzeLine, IMorzeSignal } from '../../shared/Morze/Morze.interface';

@Component({
    selector: 'es-product-select-attribute',
    templateUrl: './product-attribute-selector.component.html',
    styleUrls: [
        './product-attribute-selector.component.scss',
        '../../../Styles/grid.scss',
        '../../../Styles/buttons.scss',
        '../../../Styles/Font.scss',
        '../../../Styles/panel.scss'
    ]
})
export class ProductAttributeSelectorComponent implements MorzeAgent, OnInit, OnDestroy {

    @Input('product')
    public product: BundleItem;

    @Input('invalid')
    public isInvalid: boolean;

    @Input('morze')
    public morze: IMorzeLine;
    private morzeDestroyCb: Callback;

    constructor(
) {
    }

    ngOnInit(): void {
        if (this.morze) {
            this.morzeDestroyCb = this.morze.hearing(this);
        }
    }

    ngOnDestroy(): void {
        if (this.morzeDestroyCb) {
            this.morzeDestroyCb();
            this.morzeDestroyCb = null;
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

    isValidVals(): void {
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
}
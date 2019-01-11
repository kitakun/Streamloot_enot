import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { BundleItem } from 'src/app/Models/Products/BundleItem';
import { AttributeService } from 'src/app/services/attribute-service.service';
import { IAttribute } from 'src/app/Models/IAttribute';
import { MorzeAgent, IMorzeLine, IMorzeSignal } from 'src/app/controls/Morze/Morze.interface';
import { Callback, IConstructable } from 'src/app/Models/UtilsInterfaces';
import { AttributeSelectorEventRequest } from './product-attribute-selector.events';

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
        private readonly attrService: AttributeService) {
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
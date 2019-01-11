import { Injectable } from '@angular/core';
import { IAttribute } from '../Models/IAttribute';

@Injectable({
    providedIn: 'root'
})
export class AttributeService implements IAttributeService {

    constructor() { }

    public localize(attribute: IAttribute): string {
        switch (attribute.Name) {
            case 'ProductSizeOptionsAttr':
                return 'Размер:';
            default:
                return '~';
        }
    }
}

interface IAttributeService {
    localize(attribute: IAttribute): string;
}
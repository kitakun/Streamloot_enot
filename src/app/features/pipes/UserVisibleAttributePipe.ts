import { Pipe, PipeTransform } from '@angular/core';
import { IAttribute } from 'src/app/Models/IAttribute';

@Pipe({
    name: 'userAttributes'
})
export class UserVisibleAttributePipe implements PipeTransform {

    transform(attributes: IAttribute[]): IAttribute[] {
        if (!attributes) {
            return attributes;
        }

        return attributes.filter(flt => !flt.IsSystem);
    }
}
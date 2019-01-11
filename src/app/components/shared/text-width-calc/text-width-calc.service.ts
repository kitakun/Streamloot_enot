import { Injectable } from '@angular/core';
import { Size } from 'src/app/Models/UtilsInterfaces';

declare const document: Document;

@Injectable({
    providedIn: 'root'
})
export class TextWidthCalc implements ITextWidthCalc {
    /**
     *
     */
    constructor() {}

    Calc(text: string): Size {
        const calculatorElement = document.getElementById("textwidthcalc");
        //var fontSize = 12;
        //test.style.fontSize = fontSize.toString();
        calculatorElement.innerText = text;
        const height = calculatorElement.clientHeight + 1;
        const width = calculatorElement.clientWidth + 1;

        return <Size>{ width, height };
    }
}

export interface ITextWidthCalc {
    Calc(text: string): Size;
}
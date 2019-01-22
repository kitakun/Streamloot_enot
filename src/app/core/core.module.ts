import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common"

import { SHttpInterceptor } from './Interceptors/SHttpInterceptor';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        HttpClientModule
    ],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SHttpInterceptor,
            multi: true
        },
        {
            provide: 'LOCALSTORAGE',
            useFactory: getLocalStorage
        },
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class CoreModule{}

export function getLocalStorage(): Storage {
    return (typeof window !== "undefined") ? window.localStorage : null;
}

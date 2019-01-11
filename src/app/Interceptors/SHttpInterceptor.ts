import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        let head = new HttpHeaders();
        head.append('Access-Control-Allow-Headers', 'Content-Type');
        head.append('Access-Control-Allow-Methods', 'GET');
        head.append('Access-Control-Allow-Origin', '*');

        const paramReq = req.clone({
            headers: head
        });
        return next.handle(paramReq);
    }
}
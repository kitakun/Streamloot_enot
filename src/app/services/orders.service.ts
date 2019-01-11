import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateOrderModel } from '../Models/Orders/CreateOrderModel';
import { environment } from 'src/environments/environment';
import { CreateOrderResponse } from '../Models/Orders/CreateOrderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrdersService implements IOrdersService {
  constructor(private http: HttpClient) { }

  public async Create(data: CreateOrderModel): Promise<any> {
    let loadedData = await this.http.post<CreateOrderResponse>(`${environment.apiAddress}/Order/PlaceOrder`, data).toPromise();
    return loadedData;
  }
}

interface IOrdersService {
  Create(data: CreateOrderModel): Promise<any>;
}
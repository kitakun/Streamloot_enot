import { Component, OnInit } from '@angular/core';
import { CdekCityDeliveryInfo } from 'src/app/Models/delivery/CdekCityDeliveryInfo';
import { cities } from './CdekData';
import { environment } from 'src/environments/environment';

declare var ISDEKWidjet;

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: [
    './delivery.component.scss',
    '../create-order/create-order.component.scss',
    '../../Styles/Font.scss',
    '../../Styles/panel.scss',
    '../../Styles/buttons.scss'
  ]
})
export class DeliveryComponent implements OnInit {

  public cityFilter: string;
  public cities: Array<CdekCityDeliveryInfo>;

  public panel: CurrentOrderPanel;

  constructor() {
    this.cities = new Array();
    this.panel = CurrentOrderPanel.OrderStatus;
  }

  ngOnInit() {
    var ourWidjet = new ISDEKWidjet ({
      defaultCity: 'Новосибирск', //какой город отображается по умолчанию
      cityFrom: 'Омск', // из какого города будет идти доставка
      country: 'Россия', // можно выбрать страну, для которой отображать список ПВЗ
      link: 'forpvz', // id элемента страницы, в который будет вписан виджет
      path: 'https://www.cdek.ru/website/edostavka/template/scripts/', //директория с бибилиотеками
      servicepath: `${environment.apiAddress}/cdek/service` //ссылка на файл service.php на вашем сайте
  });
  }

  public filterCities(): void {
    const insertedString = this.cityFilter.toLowerCase();
    this.cities = cities.filter((v) => v.CityName.toLowerCase().indexOf(insertedString) > -1);
  }

  public turnOrderPanel(): void {
    this.panel = CurrentOrderPanel.OrderStatus;
  }

  public turnDeliveryPanel(): void {
    this.panel = CurrentOrderPanel.DeliveryInfo;
  }
}

enum CurrentOrderPanel {
  OrderStatus,
  DeliveryInfo
}
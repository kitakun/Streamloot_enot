import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ShopProduct } from '../Models/Products/ShopProduct';
import { BundleItem } from '../Models/Products/BundleItem';

import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class ShopProductsService implements IShopProductsService {
  private readonly _items: AvailableItems;

  constructor(
    private readonly http: HttpClient,
    private readonly alerts: AlertsService) {
    this._items = {};
  }

  public async getItems(): Promise<ShopProduct[]> {
    if (Object.keys(this._items).length == 0) {
      let loadedData: Array<ShopProduct> = null;
      try {
        loadedData = await this.http.get<Array<ShopProduct>>(`${environment.apiAddress}/product/featuredproducts`).toPromise();
        loadedData.forEach(slide => {
          switch (slide.RenderType) {
            case 'epic':
              slide.ImageSrc = 'assets/chests/MythChest.png';
              break;
            case 'legend':
              slide.ImageSrc = 'assets/chests/LegendChest.png';
              break;
            default:
              slide.ImageSrc = 'assets/chests/RareChest.png';
              break;
          }
        });
      } catch (err) {
        this.alerts.Info('Static data being used!');
        console.log(err.message);
        loadedData = StaticData.getStaticData();
      }
      //let loadedData = StaticData.getStaticData();
      for (let i = 0; i < loadedData.length; i++) {
        this._items[loadedData[i].Id] = loadedData[i];
      }
      return Object.values(this._items);
      //return new Promise((res) => res(Object.values(this._items)));
    } else {
      return Object.values(this._items);
      //return new Promise((res) => res(Object.values(this._items)));
    }
  }
}

interface IShopProductsService {
  getItems(): Promise<Array<ShopProduct>>;
}

interface AvailableItems {
  [key: string]: ShopProduct
}

class StaticData {
  public static getStaticData(): Array<ShopProduct> {
    let newSlides = new Array<ShopProduct>();

    let rarBudle = new ShopProduct(
      'rare',
      'assets/chests/RareChest.png',
      'Редкий набор',
      1900);
    rarBudle.Items.push(<BundleItem>
      {
        ItemId: 'otkritka',
        Name: 'Открытка'
      });
    rarBudle.Items.push(<BundleItem>
      {
        ItemId: 'stickers',
        Name: 'Набор стикеров'
      });
    rarBudle.Items.push(<BundleItem>
      {
        ItemId: 'wood_icon',
        Name: 'Деревянный значок'
      });
    rarBudle.Items.push(<BundleItem>
      {
        ItemId: 'Cap',
        Name: 'Бокал'
      });
    rarBudle.Items.push(<BundleItem>
      {
        ItemId: 'football-ka',
        Name: 'Футболка'
      });
    newSlides.push(rarBudle);

    let epicBundle = new ShopProduct(
      'myth',
      'assets/chests/MythChest.png',
      'Эпический набор',
      2700);
    epicBundle.RenderType = 'epic';
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'otkritka',
        Name: 'Открытка'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'stickers',
        Name: 'Набор стикеров'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'wood_icon',
        Name: 'Деревянный значок'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'Cap',
        Name: 'Бокал'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'football-ka',
        Name: 'Футболка'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'stocks',
        Name: 'Модные носки'
      });
    epicBundle.Items.push(<BundleItem>
      {
        ItemId: 'poster',
        Name: 'Металлический постер'
      });
    newSlides.push(epicBundle);

    let legendBundle = new ShopProduct(
      'lega',
      'assets/chests/LegendChest.png',
      'Легендарный набор',
      4800);
    legendBundle.RenderType = 'legend';
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'otkritka',
        Name: 'Открытка'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'stickers',
        Name: 'Набор стикеров'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'wood_icon',
        Name: 'Деревянный значок'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'Cap',
        Name: 'Бокал'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'football-ka',
        Name: 'Футболка'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'stocks',
        Name: 'Модные носки'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'poster',
        Name: 'Металлический постер'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'toy',
        Name: 'Вязанная игрушка'
      });
    legendBundle.Items.push(<BundleItem>
      {
        ItemId: 'tolstovka',
        Name: 'Легендарная толстовка'
      });
    newSlides.push(legendBundle);
    return newSlides;
  }
}
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ShopProduct } from 'src/app/Models/Products/ShopProduct';
import { DOCUMENT } from '@angular/platform-browser';
import { ShopProductsService } from 'src/app/services/shop-products.service';
import { StaticbackgroundService } from 'src/app/services/staticbackground.service';
import { CartService } from 'src/app/services/cart-service.service';
import { AttributeSelectorEventRequest } from 'src/app/components/feature/product-attribute-selector/product-attribute-selector.events';
import { MorzeIntance } from 'src/app/components/shared/Morze/Morze.impl';
import { ModalService } from 'src/app/components/shared/modal-dialog/modal.service';

const choseAttributeModalName = 'select-attrs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../app.component.scss',
    '../..//Styles/panel.scss',
    '../../Styles/Font.scss',
    '../../Styles/buttons.scss',
    '../../components/chests/base-chests.scss'
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carousel: any;
  slides: Array<ShopProduct> = []
  options: Object = {
    clicking: true,
    sourceProp: 'ImageSrc',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 460,
    height: '100%',
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  }

  public box: ShopProduct;
  public hideDescription: boolean = false;
  public addToCartClickBinded: Function;
  public proceededToCartProduct: ShopProduct;
  public attrsChoserMorze: MorzeIntance;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly productsService: ShopProductsService,
    private readonly staticBackground: StaticbackgroundService,
    private readonly modalService: ModalService,
    private readonly cartService: CartService) {
    this.attrsChoserMorze = new MorzeIntance();
  }

  ngOnInit() {
    this.addToCartClickBinded = this.addToCartClick.bind(this);

    this.productsService.getItems().then(items => {
      this.slides = items;

      this.slideClicked(0);

      this.document.addEventListener('keyup', (ev: KeyboardEvent) => {
        let code = ev.keyCode;

        if (code == 37 || code == 100) {
          this.clickLeft();
        }
        if (code == 39 || code == 102) {
          this.clickRight();
        }
      });
    });
  }


  clickRight(): void {
    let curIndex = this.slides.indexOf(this.box);
    if (curIndex == 0) {
      this.slideClicked(this.slides.length - 1);
    } else {
      this.slideClicked(curIndex - 1);
    }
  }
  clickLeft(): void {
    let curIndex = this.slides.indexOf(this.box);
    if (curIndex == this.slides.length - 1) {
      this.slideClicked(0);
    } else {
      this.slideClicked(curIndex + 1);
    }
  }

  slideClicked(index): void {
    if (this.carousel) {
      this.carousel.slideClicked(index)
    }
    this.slides.forEach(slid => slid.Active = false);
    this.box = this.slides[index];
    this.box.Active = true;
  }

  public hover(show: boolean): void {
    if (show) {
      this.staticBackground.hover();
    } else {
      this.staticBackground.hide();
    }
  }

  public onStartSlideChange(): void {
    this.hideDescription = true;
  }
  public onSlideChanges(): void {
    this.hideDescription = false;
  }

  public openModal(id: string) {
    this.modalService.open(id);
  }
  public closeModal(id: string) {
    this.modalService.close(id);
  }

  public addToCartClick(item: ShopProduct): void {
    this.proceededToCartProduct = item;
    this.openModal(choseAttributeModalName);
  }

  public proceedCartItem(): void {
    let isValid = true;
    this.proceededToCartProduct.Items.forEach(item => {
      if (item.Attributes.length > 0) {
        item.Attributes.forEach(attr => {
          if (!attr.Selected) {
            isValid = false;
          }
        });
      }
    });

    if (isValid) {
      this.cartService.AddInCart(this.proceededToCartProduct);
      this.closeModal(choseAttributeModalName);
      this.proceededToCartProduct = null;
    } else {
      this.attrsChoserMorze.signal(AttributeSelectorEventRequest, new AttributeSelectorEventRequest({
        checkValidation: true
      }));
    }
  }
}

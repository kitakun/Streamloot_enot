import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { Carousel3dSlideComponent } from './carousel-slide/carousel-slide.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CarouselComponent,
        Carousel3dSlideComponent
    ],
    exports: [
        CarouselComponent,
        Carousel3dSlideComponent
    ]
})
export class Carousel3dModule{}
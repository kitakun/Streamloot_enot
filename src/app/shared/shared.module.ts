
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Carousel3dModule } from './carousel/carousel.module';

import { StaticBackgroundComponent } from './static-background/static-background.component';
import { HoverParallaxComponent } from './hover-parallax/hover-parallax.component';
import { ModalComponent } from './modal-dialog/modal.component';
import { Panel2Component } from './purple-panel/panel2.component';
import { StaticVideoBackgroundComponent } from './static-video-background/static-video-background.component';
import { TextWidthCalcComponent } from './text-width-calc/text-width-calc.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ScrollComponent } from './scroll/scroll.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { SmoothPanelComponent } from './smooth-panel/smooth-panel.component';
import { CoreModule } from '../core/core.module';

const components = [
    StaticBackgroundComponent,
    HoverParallaxComponent,
    ModalComponent,
    Panel2Component,
    StaticVideoBackgroundComponent,
    TextWidthCalcComponent,
    LoadingIndicatorComponent,
    AppFooterComponent,
    SmoothPanelComponent,
    ScrollComponent,
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        Carousel3dModule
    ],
    declarations: components,
    exports: [Carousel3dModule, CoreModule, ...components]
})
export class SharedModule{}

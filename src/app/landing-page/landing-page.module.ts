import { RodapeComponent } from './../rodape/rodape/rodape.component';
import { QuemSomosComponent } from './../historia/quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    QuemSomosComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }

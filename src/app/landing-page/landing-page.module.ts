import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { RodapeComponent } from './components/rodape/rodape.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LandingPageModule { }

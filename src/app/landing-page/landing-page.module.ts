import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { CadastroCidadaoComponent } from './components/cadastro-cidadao/cadastro-cidadao.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    CadastroCidadaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }

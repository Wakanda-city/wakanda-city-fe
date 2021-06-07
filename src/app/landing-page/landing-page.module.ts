import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { CadastroCidadaoComponent } from './components/cadastro-cidadao/cadastro-cidadao.component';
import { HeaderComponent } from './header/header.component';

import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    CadastroCidadaoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }

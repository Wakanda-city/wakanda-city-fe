import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { CadastroCidadaoComponent } from './components/cadastro-cidadao/cadastro-cidadao.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HeaderComponent } from './components/header/header.component';


import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    QuemSomosComponent,
    CadastroCidadaoComponent,
    RodapeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    MatAutocompleteModule
  ]
})
export class LandingPageModule { }

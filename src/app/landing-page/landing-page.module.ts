import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    QuemSomosComponent,
    RodapeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }

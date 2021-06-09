import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UrlBuilderUtil from 'src/app/compartilhado/utils/url-builder.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  carregaMunicipios(nome: string) {
    return this.http.get(
      UrlBuilderUtil.replacePathVariable(
        environment.wakandaCity.municipio.carregaMunicipios,
        "{nome}",
        nome),
      { observe: "response" })
  }
}

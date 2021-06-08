import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cidadao } from '../interfaces/cidadao';

@Injectable({
  providedIn: 'root'
})
export class CidadaoService {

  headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  preCadastrCidadao(cidadao: Cidadao) {
    return this.http.post(environment.wakandaCity.cidadao.preCadastro, JSON.stringify(cidadao), 
      { observe: "response", headers: this.headers })
  }
}

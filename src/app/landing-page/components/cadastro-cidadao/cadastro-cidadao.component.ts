import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';

import { Cidadao } from 'src/app/models/cidadao/interfaces/cidadao';
import { Municipio } from 'src/app/models/municipio/municipio';
import { CidadaoService } from 'src/app/services/cidadao/cidadao.service';
import { MunicipioService } from 'src/app/services/municipio/municipio.service';


@Component({
  selector: 'app-cadastro-cidadao',
  templateUrl: './cadastro-cidadao.component.html',
  styleUrls: ['./cadastro-cidadao.component.scss']
})
export class CadastroCidadaoComponent implements OnInit, OnDestroy {
  private unsubscriber: Subscription = new Subscription();

  opcoesFiltradas!: Observable<Municipio[]>;

  options: Municipio[] = [];

  cidadaoForm!: FormGroup;
  whatsappMask: string = "(00) 0 0000-0000";
  codigoMunicipioSelecionado!: string;

  constructor(
    private formBuilder: FormBuilder,
    private cidadaoService: CidadaoService,
    private municipioService: MunicipioService) { }

  ngOnInit(): void {
    this.cidadaoForm = this.formBuilder.group({
      apelido: ["",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(260)
        ]
      ],

      whatsapp: ["",
        [
          Validators.required,
          Validators.pattern("^\\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$")
        ]
      ],

      email: ["",
        [
          Validators.required,
          Validators.email,
          Validators.min(3),
          Validators.maxLength(260)
        ]
      ],

      codigoMunicipio: ["",
        [
          Validators.required,
          Validators.min(3),
          Validators.maxLength(50)
        ]
      ]

    });

    this.opcoesFiltradas = this.getCidadaoFormControl.codigoMunicipio.valueChanges
      .pipe(
        debounceTime(400),
        switchMap((name: string) => {
          return name.length == 0 ? [] : this.filtro(name || 'a')
        })
      );
  }

  public get getCidadaoFormControl() {
    return this.cidadaoForm.controls;
  }

  displayFn(municipio: Municipio): string {
    return municipio?.nome?.concat('/' + municipio.uf);
  }

  enviarCidadao() {
    this.cidadaoForm.controls.codigoMunicipio.setValue(
      (this.cidadaoForm.controls.codigoMunicipio.value.codigo as number)
        .toString()
    );

    const cidadao = this.cidadaoForm.value as Cidadao;

    console.log({ cidadao });

    this.unsubscriber.add(this.cidadaoService.preCadastrCidadao(cidadao).subscribe((res) => {
      if (res.ok) {
        alert("pre-cadastro feito com sucesso!")
      }
    }, err => {
      alert("erro no pre-cadastro, tente novamente!")
    }))
  }

  private filtro(name: string): Observable<Municipio[]> {
    const filterValue = name.toLowerCase();
    return this.municipioService.carregaMunicipios(filterValue).pipe(
      map(
        response => (response.body as Municipio[]).filter(option => {
          return option.nome.toLowerCase().indexOf(name.toLowerCase()) === 0
        })
    ))
  }

  ngOnDestroy(): void {
    this.unsubscriber.unsubscribe();
  }

}
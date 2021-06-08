import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidadao } from 'src/app/models/cidadao/cidadao';
import { CidadaoService } from 'src/app/services/cidadao/cidadao.service';


@Component({
  selector: 'app-cadastro-cidadao',
  templateUrl: './cadastro-cidadao.component.html',
  styleUrls: ['./cadastro-cidadao.component.scss']
})
export class CadastroCidadaoComponent implements OnInit {

  whatsappMask: string = "(00) 0 0000-0000";
  cidadaoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cidadaoService: CidadaoService) { }

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

    })
  }
  
  public get getCidadaoFormControl() {
    return this.cidadaoForm.controls;
  }

  enviarCidadao() {
    const cidadao = this.cidadaoForm.value as Cidadao

    this.cidadaoService.preCadastrCidadao(cidadao).subscribe((res) => {
      if(res.ok)
        alert("pre-cadastro feito com sucesso!")
    }, err => {
      alert("erro no pre-cadastro, tente novamente!")
    });
  }

}

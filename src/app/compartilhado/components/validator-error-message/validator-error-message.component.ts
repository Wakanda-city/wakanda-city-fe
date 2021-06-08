import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.scss']
})
export class ValidatorErrorMessageComponent implements OnInit {

  @Input() messagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
  
})
export class FormComponent implements OnInit {
  name ='Pen'
  email ='rpmanganyi2gmail.com'
  age ='12'

  constructor() { }

  ngOnInit() {
  }

}

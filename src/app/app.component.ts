import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  title = 'Lbfec-app';
  content = 'Bem vindo ao Labfec'

  constructor() { }

  ngOnInit()
  {

  }
}

import { Component, OnInit } from '@angular/core';

import {Funcionario} from './funcionario.model'
import {FuncionarioService} from './funcionario.service'

@Component({
  selector: 'lab-funcionario',
  templateUrl: './funcionario.component.html'
})
export class FuncionarioComponent implements OnInit {

  constructor(){ }

  ngOnInit() {

  }
}

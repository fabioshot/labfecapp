import { Component, OnInit, } from '@angular/core';

import { CargoService } from '../cargo.service';
import { Cargo } from '../../models/cargo.model';


@Component({
  selector: 'app-cargo-detalhes',
  templateUrl: './cargo-detalhes.component.html'
})

export class CargoDetalhesComponent implements OnInit {

  cargos: Cargo[];


  constructor(private service: CargoService) { }

  ngOnInit() {
  this.service.getCargos().subscribe(result => this.cargos = result.cargos);
  }





}



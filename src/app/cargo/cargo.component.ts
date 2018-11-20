import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';

import { CargoService } from './cargo.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html'
})
export class CargoComponent implements OnInit {

  cargoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CargoService) {  }

  ngOnInit() {
    this.createForm();

  }

  createForm(): void {
    this.cargoForm = this.formBuilder.group({
      descricao: this.formBuilder.control('', [Validators.required, Validators.minLength(7)])
    });
  }

  addCargo(descricao) {
    this.service.addCargo(descricao);

    this.limparCampos();
    }

    limparCampos(): void {
      this.cargoForm.reset();
    }
  }



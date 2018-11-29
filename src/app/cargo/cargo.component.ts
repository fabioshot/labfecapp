import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


import { CargoService } from './cargo.service';
import { Apollo } from 'apollo-angular';
import { ALL_CARGOS } from './cargo.graphql';




@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html'
})
export class CargoComponent implements OnInit, OnDestroy {

  cargoForm: FormGroup;
  cargos: any;
  @Input() id: any;


  private querySubscription: Subscription;


  constructor(private formBuilder: FormBuilder, private service: CargoService, private apollo: Apollo) {  }

  ngOnInit() {
    this.createForm();
    this.getCargos();
  }

  createForm(): void {
    this.cargoForm = this.formBuilder.group({
      descricao: this.formBuilder.control('', [Validators.required, Validators.minLength(7)])
    });
  }

  getCargos() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: ALL_CARGOS
    }).valueChanges
    .subscribe(({ data }) => {
      this.cargos = data.cargos;
    });
  }

  onSubmit(cargo) {

    console.log(this.id);

    if (!this.id) {
      cargo.id = this.id;
      this.addCargo(cargo);
    } else {
      cargo.id = this.id;
      this.updateCargo(cargo);

    }
    this.limparCampos();
    this.id = undefined;
  }

  addCargo(cargo) {
    this.querySubscription = this.service.addCargo(cargo).subscribe(({ data }) => {
        console.log('data', data);
      }, (error) => {
        console.log('erro:', error);
      });
  }

  updateCargo(cargo) {
    this.querySubscription = this.service.updateCargo(cargo).subscribe(({ data }) => {
      console.log('data', data);
    }, (error) => {
      console.log('erro:', error);
    });

  this.limparCampos();
  }

  removeCargo(cargo) {
    this.querySubscription = this.service.removeCargo(cargo).subscribe(({data}) => {
      console.log('res', data);
    });
  }

  selectCargo(cargo) {
    this.id = cargo.id;
    this.cargoForm.controls['descricao'].setValue(cargo.descricao);
  }

  limparCampos(): void {
    this.cargoForm.reset();
  }

    ngOnDestroy() {
      this.querySubscription.unsubscribe();
    }
}



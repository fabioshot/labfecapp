import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BalancaService } from './balanca.service';
import { Balanca } from '../models/balanca.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balanca',
  templateUrl: './balanca.component.html'
})
export class BalancaComponent implements OnInit, OnDestroy {

  balancaForm: FormGroup;
  balancas: any;
  id: number;

  querySubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private service: BalancaService) { }

  ngOnInit() {
    this.createForm();
    this.listarBalancas();
  }

  createForm () {
    this.balancaForm = this.formBuilder.group({
      equipamento: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      identificacao: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      modelo: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      marca: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  listarBalancas () {
    this.querySubscription = this.service.getbalancas().subscribe( (data ) => {
      this.balancas = data.balancas;
      console.log(data);
    });
  }

  onSubmit(balanca) {

    console.log(this.id);

    if (!this.id) {
      balanca.id = this.id;
      this.addBalanca(balanca);
    } else {
      balanca.id = this.id;
      this.updateBalanca(balanca);

    }
    this.limparCampos();
    this.id = undefined;
  }

  addBalanca(balanca) {

    console.log(balanca);


    this.querySubscription = this.service.addBalanca(balanca).subscribe(( data ) => {
        console.log('data', data);
      }, (error) => {
        console.log('erro:', error);
      });
  }

  updateBalanca(balanca) {
    this.querySubscription = this.service.updateBalanca(balanca).subscribe(( data ) => {
      console.log('data', data);
    }, (error) => {
      console.log('erro:', error);
    });
  }

  removeBalanca(balanca) {
    this.querySubscription = this.service.removeBalanca(balanca).subscribe(( data ) => {
      console.log('res', data);
    });
  }

  selectBalanca(balanca) {
    this.id = balanca.id;
    this.balancaForm.controls['equipamento'].setValue(balanca.equipamento);
    this.balancaForm.controls['identificacao'].setValue(balanca.identificacao);
    this.balancaForm.controls['modelo'].setValue(balanca.modelo);
    this.balancaForm.controls['marca'].setValue(balanca.marca);
  }

  limparCampos(): void {
    this.balancaForm.reset();
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmbalagemService } from './embalagem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';

import { Subscription } from 'rxjs';
import { ALL_EMBALAGENS } from './embalagem.graphql';

@Component({
  selector: 'app-embalagem',
  templateUrl: './embalagem.component.html'
})
export class EmbalagemComponent implements OnInit, OnDestroy {

  id: any;
  embalagens: any;
  numeroPattern = /^[0-9.]*$/;

  embalagemForm: FormGroup;

  private querySubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private apollo: Apollo, private service: EmbalagemService) { }

  ngOnInit() {
    this.createForm();
    this.getEmbalagens();
  }

  createForm(): void {
    this.embalagemForm = this.formBuilder.group({
      descricao: this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      peso: this.formBuilder.control('', Validators.pattern(this.numeroPattern))
    });
  }

  getEmbalagens() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: ALL_EMBALAGENS
    }).valueChanges
    .subscribe(({ data }) => {
      this.embalagens = data.embalagens;
    });
  }

  onSubmit(embalagem) {

    console.log(this.id);

    if (!this.id) {
      embalagem.id = this.id;
      this.addEmbalagem(embalagem);
    } else {
      embalagem.id = this.id;
      this.updateEmbalagem(embalagem);

    }
    this.limparCampos();
    this.id = undefined;
  }

  addEmbalagem(embalagem) {

    console.log(embalagem);


    this.querySubscription = this.service.addEmbalagem(embalagem).subscribe(({ data }) => {
        console.log('data', data);
      }, (error) => {
        console.log('erro:', error);
      });
  }

  updateEmbalagem(embalagem) {
    this.querySubscription = this.service.updateEmbalagem(embalagem).subscribe(({ data }) => {
      console.log('data', data);
    }, (error) => {
      console.log('erro:', error);
    });

  this.limparCampos();
  }

  removeEmbalagem(embalagem) {
    this.querySubscription = this.service.removeEmbalagem(embalagem).subscribe(({data}) => {
      console.log('res', data);
    });
  }

  selectEmbalagem(embalagem) {
    this.id = embalagem.id;
    this.embalagemForm.controls['descricao'].setValue(embalagem.descricao);
    this.embalagemForm.controls['peso'].setValue(embalagem.peso);
  }

  limparCampos(): void {
    this.embalagemForm.reset();
  }


  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}

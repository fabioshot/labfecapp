import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { ProdutoService } from './produto.service';
import { Subscription } from 'rxjs';
import { EmbalagemService } from '../embalagem/embalagem.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit, OnDestroy {

  produtoForm: FormGroup;
  produtos: any;
  embalagens: any;
  id: number;

  querySubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private serviceProduto: ProdutoService,
    private servicoEmpalagem: EmbalagemService
  ) { }

  ngOnInit() {
    this.createForm();
    this.listarProdutos();
    this.listarEmbalagens();
  }

  createForm() {
    this.produtoForm = this.formBuilder.group({
      descricao : this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      embalagem: this.formBuilder.control('')
    });
  }

  listarProdutos() {
    this.querySubscription = this.serviceProduto.getProdutos().subscribe( ( data ) => {
      console.log(data);
      this.produtos = data.produtos;
    });
  }

  listarEmbalagens() {
    this.querySubscription = this.servicoEmpalagem.getEmbalagens().subscribe( ( res ) => {
      console.log(res);
      this.embalagens = res.embalagens;
    });
  }


  onSubmit(produto) {

    console.log(this.id);

    if (!this.id) {
      this.adicionarProduto(produto);
    } else {
      produto.id = this.id;
      this.alterarProduto(produto);

    }
    this.limparCampos();
    this.id = undefined;
  }

  adicionarProduto(produto) {
    console.log(produto.descricao);
    console.log(produto.embalagem);


    this.querySubscription = this.serviceProduto.addProduto(produto).subscribe(( data ) => {
      console.log('data', data);
    });
  }

  alterarProduto(produto) {
    this.querySubscription = this.serviceProduto.updateProduto(produto).subscribe(( data ) => {
      console.log('data', data);
    });
  }

  removerProduto(produto) {
    this.querySubscription = this.serviceProduto.removeProduto(produto).subscribe(( data ) => {
      console.log('res', data);
    });
  }

  selectProduto(produto) {
    this.id = produto.id;
    this.produtoForm.controls['descricao'].setValue(produto.descricao);
    this.produtoForm.controls['embalagem'].setValue(produto.embalagem.id);
  }

  limparCampos(): void {
    this.produtoForm.reset();
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Produto } from '../models/produto.model';
import { ADD_PRODUTO, ALL_PRODUTOS, UPDATE_PRODUTO, REMOVE_PRODUTO } from './produto.graphql';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private apollo: Apollo) { }

  addProduto(produto) {
    return this.apollo.mutate({
      mutation: ADD_PRODUTO,
      variables: {
        descricao: produto.descricao,
        embalagem: produto.embalagem
      },
      refetchQueries: [{
        query: ALL_PRODUTOS
      }]
    });
  }

  updateProduto(produto) {
    return this.apollo.mutate({
      mutation: UPDATE_PRODUTO,
      variables: {
        id: produto.id,
        descricao: produto.descricao,
        embalagem: produto.embalagem
      }
    });
  }

  removeProduto(produto) {
    return this.apollo.mutate({
      mutation: REMOVE_PRODUTO,
      variables: {
        id: produto.id
      },
      refetchQueries: [{
        query: ALL_PRODUTOS
      }]
    });
  }

  getProdutos() {
    return this.apollo.watchQuery<any>({
      query: ALL_PRODUTOS
    }).valueChanges.pipe(
      map( result => result.data)
    );
  }
}

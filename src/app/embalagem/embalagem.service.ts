import { Injectable } from '@angular/core';
import { Embalagem } from '../models/embalagem.model';
import { Apollo } from 'apollo-angular';
import { ADD_EMBALAGEM, ALL_EMBALAGENS, UPDATE_EMBALAGEM, REMOVE_EMBALAGEM } from './embalagem.graphql';

@Injectable({
  providedIn: 'root'
})
export class EmbalagemService {

  constructor(private apollo: Apollo) { }

  addEmbalagem(embalagem: Embalagem) {
    return this.apollo.mutate({
      mutation: ADD_EMBALAGEM,
      variables: {
        descricao:  embalagem.descricao,
        peso: Number.parseFloat(embalagem.peso.toString())
      },
      refetchQueries: [{
        query: ALL_EMBALAGENS
      }]
    });
  }

  updateEmbalagem(embalagem: Embalagem) {
    return this.apollo.mutate({
      mutation: UPDATE_EMBALAGEM,
      variables: {
        id: embalagem.id,
        descricao: embalagem.descricao,
        peso: Number.parseFloat(embalagem.peso.toString())
      }
    });
  }

  removeEmbalagem(embalagem: Embalagem) {
    return this.apollo.mutate({
      mutation: REMOVE_EMBALAGEM,
      variables: {
        id: embalagem.id
      },
      refetchQueries: [{
        query: ALL_EMBALAGENS
      }]
    });
  }

}

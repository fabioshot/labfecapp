import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Balanca } from '../models/balanca.model';
import { ADD_BALANCA, ALL_BALANCAS, UPDATE_BALANCA, REMOVE_BALANCA } from './balanca.graphql';

@Injectable({
  providedIn: 'root'
})
export class BalancaService {

  constructor(private apollo: Apollo) { }

  addBalanca(balanca: Balanca) {
    return this.apollo.mutate({
      mutation: ADD_BALANCA,
      variables: {
        equipamento: balanca.equipamento,
        identificacao: balanca.identificacao,
        modelo: balanca.modelo,
        marca: balanca.marca
      },
      refetchQueries: [{
        query: ALL_BALANCAS
      }]
    });
  }

  updateBalanca(balanca: Balanca) {
    return this.apollo.mutate({
      mutation: UPDATE_BALANCA,
      variables: {
        id: balanca.id,
        equipamento: balanca.equipamento,
        identificacao: balanca.identificacao,
        modelo: balanca.modelo,
        marca: balanca.marca
      }
    });
  }

  removeBalanca(balanca: Balanca) {
    return this.apollo.mutate({
      mutation: REMOVE_BALANCA,
      variables: {
        id: balanca.id
      },
      refetchQueries: [{
        query: ALL_BALANCAS
      }]
    });
  }

  getbalancas() {
    return this.apollo.watchQuery<any>({
      query: ALL_BALANCAS
    }).valueChanges.pipe(
      map( result => result.data)
    );
  }

}

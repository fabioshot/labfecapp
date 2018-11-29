import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ADD_CARGO,
         ALL_CARGOS,
         UPDATE_CARGO,
         REMOVE_CARGO} from './cargo.graphql';
import { Cargo } from '../models/cargo.model';

@Injectable({
  providedIn: 'root'
})

export class CargoService {

  constructor( private apollo: Apollo ) { }

  addCargo(cargo: Cargo) {
    return this.apollo.mutate({
      mutation: ADD_CARGO,
      variables: {
        descricao: cargo.descricao
      },
      refetchQueries: [{
        query: ALL_CARGOS
      }]
    });
  }

  updateCargo(cargo: Cargo) {
    return this.apollo.mutate({
      mutation: UPDATE_CARGO,
      variables: {
        id: cargo.id,
        descricao: cargo.descricao
      }
    });
  }

  removeCargo(cargo: Cargo) {
    return this.apollo.mutate({
      mutation: REMOVE_CARGO,
      variables: {
        id: cargo.id
      },
      refetchQueries: [{
        query: ALL_CARGOS
      }]
    });
  }

}

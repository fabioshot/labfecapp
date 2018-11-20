import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AllCargosQueryResponse, CargoQueryResponse } from '../models/cargo.model';
import { obterCargos, adicionarCargo } from './cargo.graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

    constructor( private apollo: Apollo ) { }

  getCargos(): Observable<AllCargosQueryResponse> {
    return this.apollo.watchQuery<AllCargosQueryResponse>({
      query: obterCargos
    }).valueChanges.pipe(map(res => res.data));
  }

  addCargo( descricao: string): Observable<any> {
    return this.apollo.mutate({
      mutation: adicionarCargo,
      variables: {
        descricao
      }
    }).pipe(map(
      res => res.data.cargo,
      console.log('data', descricao)

    ));
  }

}

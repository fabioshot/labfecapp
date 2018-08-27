import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Funcionario} from "./funcionario.model";

@Injectable()
export class FuncionarioService {

  constructor(private http : Http) {}

    funcionarios() : Observable<Funcionario[]>{
      return null;

    }
}

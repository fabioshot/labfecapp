export interface Cargo {
  id: number;
  descricao?: string;
}


export interface AllCargosQueryResponse {
  cargos: Cargo[];
}

export interface CargoQueryResponse {
  cargo: Cargo;
}

export interface Cargo {
  id: number;
  descricao?: string;
}


export interface Cargos {
  cargos: Cargo[];
}

export interface OneCargo {
  cargo: Cargo;
}

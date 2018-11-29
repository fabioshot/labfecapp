import gql from 'graphql-tag';

export const ALL_CARGOS = gql`
query cargos{
  cargos {
    id
    descricao
    created_at
    updated_at
  }
}
`;

export const ADD_CARGO = gql`
mutation createCargo($descricao: String!){
  createCargo(descricao: $descricao) {
    id
    descricao
    created_at
    updated_at
  }
}
`;

export const UPDATE_CARGO = gql`
mutation updateCargo($id: ID!, $descricao: String!) {
  updateCargo(id: $id, descricao: $descricao){
    id
    descricao
    created_at
    updated_at
  }
}
`;

export const REMOVE_CARGO = gql`
mutation deleteCargo($id: ID!){
  deleteCargo(id: $id)
}
`;



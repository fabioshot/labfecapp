import gql from 'graphql-tag';

export const obterCargos = gql `
query BuscarTodosCargos{
  cargos {
    id
    descricao
  }
}
`;

export const adicionarCargo = gql `
mutation createCargo($descricao: String!){
  createCargo(descricao: $descricao) {
    id
    descricao
  }
}
`;

export const alterarCargo = gql `
mutation updateCargo($id: Int!, $descricao: String!) {
  updateCargo(id: $id, input: {
      descricao: $descricao
    }
  )}
`;

export const excluirCargo = gql `
mutation deleteCargo($id: Int!){
  deleteCargo(id: $id)
}
`;



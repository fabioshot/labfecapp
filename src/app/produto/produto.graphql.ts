import gql from 'graphql-tag';

export const ALL_PRODUTOS = gql`
  query{
    produtos{
      id
      descricao
      embalagem{
        id
        descricao
        peso
      }
    }
  }
`;

export const ADD_PRODUTO = gql`
  mutation createProduto ( $descricao: String!, $embalagem: Int! ){
    createProduto ( descricao: $descricao, embalagem: $embalagem ){
      id
      descricao
      embalagem {
        id
        descricao
        peso
      }
    }
  }
`;

export const UPDATE_PRODUTO = gql`
mutation updateProduto($id: ID!, $descricao: String!, $embalagem: Int!) {
  updateProduto(id: $id, descricao: $descricao, embalagem: $embalagem){
    id
    descricao
    embalagem {
      descricao
      peso
    }
  }
}
`;

export const REMOVE_PRODUTO = gql`
mutation deleteProduto($id: ID!) {
  deleteProduto(id: $id)
}
`;

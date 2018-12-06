import gql from 'graphql-tag';

export const ALL_BALANCAS = gql`
  query {
    balancas {
      id
      equipamento
      identificacao
      modelo
      marca
    }
  }
`;

export const ADD_BALANCA = gql`
  mutation createBalanca( $equipamento: String!, $identificacao: String!, $modelo: String!, $marca: String! ) {
    createBalanca( equipamento: $equipamento, identificacao: $identificacao, modelo: $modelo, marca: $marca ) {
      equipamento
      identificacao
      modelo
      marca
    }
  }
`;

export const UPDATE_BALANCA = gql`
  mutation updateBalanca( $equipamento: String!, $identificacao: String!, $modelo: String!, $marca: String!, $id: ID! ) {
    updateBalanca( equipamento: $equipamento, identificacao: $identificacao, modelo: $modelo, marca: $marca, id: $id ) {
      id
      equipamento
      identificacao
      modelo
      marca
    }
  }
`;

export const REMOVE_BALANCA = gql`
  mutation deleteBalanca( $id: ID! ) {
    deleteBalanca( id: $id)
  }
`;

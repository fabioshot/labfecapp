import gql from 'graphql-tag';

export const ALL_EMBALAGENS = gql`
query {
  embalagens {
    id
    descricao
    peso
    created_at
    updated_at
  }
}
`;

export const ADD_EMBALAGEM = gql`
mutation createEmbalagem( $descricao: String!, $peso: Float ) {
  createEmbalagem(descricao: $descricao, peso: $peso){
    id
    descricao
    peso
    created_at
    updated_at
  }
}
`;

export const UPDATE_EMBALAGEM = gql`
mutation updateEmbalagem($id: ID!, $descricao: String!, $peso: Float) {
  updateEmbalagem(id: $id, descricao: $descricao, peso: $peso){
    id
    descricao
    peso
    created_at
    updated_at
  }
}
`;

export const REMOVE_EMBALAGEM = gql`
mutation deleteEmbalagem($id: ID!) {
  deleteEmbalagem(id: $id)
}
`;

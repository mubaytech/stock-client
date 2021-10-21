import {Etudiant} from '../../generated/types.graphql-gen';
import {makeVar} from '@apollo/client/core';
import gql from 'graphql-tag';


export const GET_CART_ITEMS = gql`
  query GetCreatedsEtudiant{
    createdsEtudiant @client
  }
`;
export const createdsEtudiantVar = makeVar<Etudiant[]>([]);

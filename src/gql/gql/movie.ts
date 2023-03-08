import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMovies($term: String!) {
    search(term: $term) {
      edges {
        node {
          ... on Movie {
            id
            title
            overview
            poster(size: W342)
            backdrop(size: W780)
          }
        }
      }
    }
  }
`;

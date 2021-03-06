import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { ProductsList } from "./gqlTypes/ProductsList";

export const homePageQuery = gql`
  query ProductsList {
    shop {
      description
      name
      homepageCollection {
        id
        backgroundImage {
          url
        }
        name
      }
    }
    categories(level: 0, first: 4) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
        }
      }
    }
    collections(first: 10) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
          metadata {
            key
            value
          }
        }
      }
    }
  }
`;

export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);

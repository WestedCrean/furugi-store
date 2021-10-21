import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import { MainMenu } from "./gqlTypes/MainMenu";
import { ShopMenusQuery } from "./gqlTypes/ShopMenusQuery";

export const mainMenu = gql`
  fragment MainMenuSubItem on MenuItem {
    id
    name
    category {
      id
      name
    }
    url
    collection {
      id
      name
    }
    page {
      slug
    }
    parent {
      id
    }
  }

  query MainMenu {
    shop {
      navigation {
        main {
          id
          items {
            ...MainMenuSubItem
            children {
              ...MainMenuSubItem
              children {
                ...MainMenuSubItem
              }
            }
          }
        }
      }
    }
  }
`;

const TypedMainMenuQuery = TypedQuery<MainMenu, {}>(mainMenu);

export {
  TypedMainMenuQuery,
  ShopMenusQuery
}

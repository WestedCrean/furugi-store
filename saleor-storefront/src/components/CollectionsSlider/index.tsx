import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { Button } from "../../components";

import {
  ProductsList_collections,
  ProductsList_collections_edges
} from "../../views/Home/gqlTypes/ProductsList";

import { generateCollectionUrl } from "../../core/utils";

import "./scss/index.scss";


const CollectionsSlider: React.FC<{
  collections: any;
}> = ({ collections }) => {
  return (
    collections.edges.map(({ node } : ProductsList_collections_edges) => (
      <div
        className="home-page__hero"
        style={
          node && node.backgroundImage
            ? { backgroundImage: `url(${node.backgroundImage.url})` }
            : null
        }
      >
        <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1>collection.name</h1>
            </span>
          </div>
        </div>

        <div className="home-page__hero-action">
          <Link
            to={() => {
              try {
                return generateCollectionUrl(
                  node.id,
                  node.name
                );
              } catch (e) {
                return "";
              }
            }}
          >
            <Button skew testingContext="homepageHeroActionButton">
              <FormattedMessage defaultMessage="Sprawdź" />
            </Button>
          </Link>
        </div>
      </div>
    ))
  );
};


export default CollectionsSlider;

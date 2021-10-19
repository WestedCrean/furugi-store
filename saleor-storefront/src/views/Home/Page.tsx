import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { Button, Loader, ProductsFeatured } from "../../components";
import { generateCategoryUrl, generateCollectionUrl } from "../../core/utils";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  featured: ProductsList_shop_homepageCollection;
  shop: ProductsList_shop;
}> = ({ loading, categories, featured, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };

  // TODO: Add multiple possible featured collections
  // TODO: Add silder if multiple featured collections

  const featuredCollectionExists = () => {
    return featured && featured.id && featured.name && featured.backgroundImage;
  };

  const multipleFeaturedCollections = (featured) => {
    // FIXME: add check
    return false
  }

  const intl = useIntl();

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      {featuredCollectionExists() && (
        <div
          className="home-page__hero"
          style={
            featured && featured.backgroundImage
              ? { backgroundImage: `url(${featured.backgroundImage.url})` }
              : null
          }
        >
          <div className="home-page__hero-text">
            <div>
              <span className="home-page__hero__title">
                <h1>
                  {featuredCollectionExists() ? (
                    featured.name
                  ) : (
                    <FormattedMessage defaultMessage="Nowy drop" />
                  )}
                </h1>
              </span>
            </div>
          </div>

          <div className="home-page__hero-action">
            {loading && !categories ? (
              <Loader />
            ) : (
              featuredCollectionExists() && (
                <Link
                  to={() => {
                    try {

                      return generateCollectionUrl(featured.id, featured.name);
                    } catch (e) {
                      return "";
                    }
                  }}
                >
                  <Button skew testingContext="homepageHeroActionButton">
                    <FormattedMessage defaultMessage="Sprawdź" />
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
      )}

      <ProductsFeatured
        title={intl.formatMessage({ defaultMessage: "Wybrane" })}
      />

      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>
              <FormattedMessage defaultMessage="Kategorie" />
            </h3>
            <div className="home-page__categories__list">
              {/* TODO: add products tiles */}
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${category.backgroundImage
                          ? category.backgroundImage.url
                          : noPhotoImg
                          })`,
                      }}
                    />
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

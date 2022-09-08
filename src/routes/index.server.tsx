import {gql, useShopQuery} from '@shopify/hydrogen';
import LightGreenButton from '~/components/buttons/LightGreen.server';
import TextButton from '~/components/buttons/TextButton.server';
import {Layout} from '~/components/index.server';
import Section from '~/components/layout/Section.server';
import ProductSlider from '~/components/pages/home/ProductSlider.client';

type VariantPrice = {
  amount: number;
  currencyCode: string;
};

export type ProductQuery = {
  data: {
    products: {
      nodes: Array<{
        id: string;
        title: string;
        descriptionHtml: string;
        featuredImage: {
          url: string;
        };
        handle: string;
        priceRange: {
          minVariantPrice: {
            amount: number;
          };
        };
      }>;
    };
  };
};

const Homepage = () => {
  const returnData: ProductQuery = useShopQuery({
    query: gql`
      query Products {
        products(first: 6) {
          nodes {
            id
            title
            descriptionHtml
            featuredImage {
              url
            }
            handle
            # ...compareAtPriceRange
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    `,
  });

  return (
    <Layout>
      <Section
        outerClassName="min-h-screen items-center pt-nav"
        backgroundImage="/home/images/landing.jpg"
        className="text-white"
      >
        <h1 className="max-w-[822px]">Best for baby, you & mama earth too</h1>
        <p className="max-w-[807px] mb-8">
          Soft and breathable, sustainably sourced bamboo nappies and wipes.
          Your baby’s health and comfort are at the heart of everything we do
        </p>
        <LightGreenButton label="Shop Now" link="/products" />
      </Section>
      <Section outerClassName="py-12" maxWidth={1838}>
        <h2 className="text-center">
          Award-Winning <span className="text-main">Sustainable</span> Nappies
          and Wipes
        </h2>
        <p className="max-w-[1259px] mx-auto text-center mb-4">
          Our bamboo nappies are soft, breathable and temperature regulating
          helping to reduce or eradicate nappy rash
        </p>
        <TextButton
          label="Shop All"
          link="/products"
          alignment="center"
          marginBottom={50}
        />
        <ProductSlider products={returnData.data.products.nodes} />
      </Section>
    </Layout>
  );
};
export default Homepage;

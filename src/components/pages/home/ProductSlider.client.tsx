import {ProductQuery} from '~/routes/index.server';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from '@shopify/hydrogen';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

type Props = {products: ProductQuery['data']['products']['nodes']};
const ProductSlider = ({products}: Props) => {
  return (
    <Slider
      slidesToShow={4}
      prevArrow={<FontAwesomeIcon icon={faArrowLeft} className="text-text" />}
      nextArrow={<FontAwesomeIcon icon={faArrowRight} className="text-text" />}
      className="text-black"
      touchMove={false}
    >
      {products.map((product) => {
        return (
          <div className="hello">
            <Link to={`/products/${product.handle}`}>
              <img src={product.featuredImage.url} />
              <div className="text-xl font-semibold text-center">
                {product.title}
              </div>
              <div className="text-center italic text-main">
                £{product.priceRange.minVariantPrice.amount}
              </div>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};
export default ProductSlider;

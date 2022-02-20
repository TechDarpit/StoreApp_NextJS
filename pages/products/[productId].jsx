import React from 'react';
import { getAllProducts, getProductById } from '../../helpers/api-util';

import ProductDetails from '../../components/product-details/ProductDetails';

const ProductDetailPage = (props) => {
  const product = props.selectedProduct;

  return (
    <ProductDetails
      id={product.id}
      title={product.title}
      image={product.image}
      price={product.price}
      description={product.description}
      category={product.category}
      rating={product.rating.rate}
    />
  );
};

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = await getProductById(productId);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product) => ({
    params: { productId: product.id + '' },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default ProductDetailPage;

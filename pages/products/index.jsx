import { getAllProducts } from '../../helpers/api-util';
import ProductItem from '../../components/product/ProductItem';
import { Fragment, useState } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import { Container, Row } from 'react-bootstrap';

const Products = (props) => {
  const PRODUCTS = props.products;
  const [sortValue, setSortValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (searchKey) => {
    setSearchValue(searchKey);
  };

  const sortHandler = (sortKey) => {
    setSortValue(sortKey);
  };

  return (
    <Fragment>
      <SearchBar onSearch={searchHandler} onSort={sortHandler} />
      <Container>
        <Row lg={4} md={3} sm={2}>
          {PRODUCTS.sort((a, b) => {
            if (sortValue.includes('title')) {
              const isReversed = sortValue.includes('asc') ? 1 : -1;
              return isReversed * a.title.localeCompare(b.title);
            } else if (sortValue.includes('price')) {
              if (sortValue.includes('asc')) {
                return a.price - b.price;
              } else {
                return b.price - a.price;
              }
            }
          })
            .filter(
              (product) =>
                product.title.includes(searchValue) ||
                product.category.includes(searchValue)
            )
            .map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export async function getStaticProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      products: allProducts,
    },
    revalidate: 3600,
  };
}

export default Products;

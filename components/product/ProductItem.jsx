import React from 'react';

import Link from 'next/link';
import { Card, Col, Button } from 'react-bootstrap';

import styles from './ProductItem.module.css';

const ProductItem = (props) => {
  const productDetailsLink = `/products/${props.id}`;

  return (
    <Col>
      <Card border='dark' className={styles.card}>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <h3>{props.title}</h3>
          <h4>$ {props.price}</h4>
          <h6 className={styles.category}>{props.category}</h6>
          <h5>{props.rating}</h5>
          <div >
            <Link href={productDetailsLink}>
              <a>
                <Button className={styles.btn} variant='outline-dark'>View Details</Button>
              </a>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;

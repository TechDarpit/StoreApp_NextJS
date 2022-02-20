import { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import Link from 'next/link';
import NotificationContext from '../../store/notification-context';
import { useRouter } from 'next/router';

import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  const { title, price, category, description, image, rating } = props;

  const editProductLink = `/edit-product/${props.id}`;

  const deleteProductHandler = () => {
    notificationCtx.showNotification({
      title: 'Delete Product',
      message: 'Deleting product info',
      status: 'info',
    });

    fetch(`https://fakestoreapi.com/products/${props.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Product Deleted Successfully',
          status: 'success',
        });
        router.push('/products');
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'danger',
        });
      });
  };

  return (
    <Card>
      <Card.Header as='h2'>{title}</Card.Header>
      <Card.Body>
        <Row className={styles.body}>
          <Col>
            <Card.Img className={styles.col1Img} variant='top' src={image} />
          </Col>
          <Col>
            <div>
              <Card.Title as='h3'>Description</Card.Title>
              <Card.Text className={styles.paddingbottom}>
                {description}
              </Card.Text>
              <Card.Title as='h3' className={styles.paddingbottom}>
                Price: $ {price}
              </Card.Title>
              <Card.Text className={styles.paddingbottom}>
                Category: {category}
              </Card.Text>
              <Rating initialValue={rating} />
              <Row className={styles.btnrow}>
                <Col>
                  <Link href={editProductLink}>
                    <a>
                      <Button className={styles.btn} variant='primary'>
                        Edit Product
                      </Button>
                    </a>
                  </Link>
                </Col>
                <Col>
                  <Button
                    className={styles.btn}
                    variant='danger'
                    onClick={deleteProductHandler}
                  >
                    Delete Product
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;

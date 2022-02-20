import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';
import EditProductForm from '../../components/edit-product-form/EditProductForm';
import { getProductById } from '../../helpers/api-util';

const EditProduct = () => {
  const [productData, setProductData] = useState({});
  const router = useRouter();
  const productid = router.query.pId;

  useEffect(() => {
    const getProductData = async () => {
      const data = await getProductById(productid);
      setProductData(data);
    };
    getProductData();
  }, [productid]);

  return (
    <Fragment>
      <EditProductForm
        id={productData.id}
        title={productData.title}
        price={productData.price}
        category={productData.category}
        description={productData.description}
        image={productData.image}
      />
    </Fragment>
  );
};

export default EditProduct;

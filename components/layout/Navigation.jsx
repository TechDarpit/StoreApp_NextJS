import Link from 'next/link';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href='/products'>All Products</Link>
        </li>
        <li>
          <Link href='/add-product'>Add New Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

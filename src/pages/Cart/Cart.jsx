import SubHeader from '@components/SubHeader'
import CartForm from '@pages/Cart/components/CartForm';
import React from 'react'
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <SubHeader
        parentPageHref={<Link to="/">Home</Link>}
        titleHref={<Link to="cart">Cart</Link>}
      ></SubHeader>

      <CartForm></CartForm>
    </>
  );
}

export default Cart

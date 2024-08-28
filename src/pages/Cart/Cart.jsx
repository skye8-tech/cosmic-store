import SubHeader from '@components/SubHeader'
import CartForm from '@pages/Cart/components/CartForm';
import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Cart() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  return (
    <>
      <SubHeader
        paths={paths}
      />

      <CartForm></CartForm>
    </>
  );
}

export default Cart

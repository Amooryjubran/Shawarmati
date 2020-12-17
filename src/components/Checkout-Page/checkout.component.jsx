import React from "react";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  HeaderTitle,
  Total,
  Nav,
  SubmitBtn,
} from "./checkout.style";

import { useStateValue } from "./../../StateProvider";

import Header from "./../Header/Header.component";

import CheckoutItem from "../Checkout-item/checkout-item.copmonent";

import StripeButtonCheckout from "../Stripe/stripe-button.component";
import Sidebar from "../Sidebar/Sidebar.component";
import Navbar from "../Navbar/Navbar.component";

const CheckoutPage = () => {
  const [{ cartItems }] = useStateValue();

  const total = (cartItems) =>
    cartItems.reduce(
      (previousQuantity, cartItem) =>
        previousQuantity + cartItem.quantity * cartItem.price,
      0
    );

  return (
    <>
      <Nav>
        <Header />
      </Nav>
      <CheckoutPageContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <HeaderTitle>Product</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Description</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Quantity</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Price</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Remove</HeaderTitle>
          </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <Total>Total : ${Math.round(total(cartItems) * 100) / 100}</Total>

        <SubmitBtn>
          <StripeButtonCheckout price={total(cartItems)} />
        </SubmitBtn>
      </CheckoutPageContainer>
    </>
  );
};

export default CheckoutPage;

import React from "react";

import { useStateValue } from "./../../../StateProvider";

// import { withRouter } from 'react-router-dom'

import {
  DropdownContainer,
  CartItems,
  EmptyCart,
  ButtonWrap,
  CloseBtn,
  CheckoutBtn,
} from "./cart-dropdown.style";

import CartItem from "./../cart-item/cart-item.component";

import { toggleCartHidden } from "./../cart.actions";

const CartDropdown = () => {
  const [{ cartItems }, dispatch] = useStateValue();

  console.log(cartItems);

  return (
    <DropdownContainer>
      <CartItems>
        <CloseBtn onClick={() => dispatch(toggleCartHidden())}>
          &#10005;
        </CloseBtn>

        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartItems>
      <ButtonWrap>
        <CheckoutBtn
          to="/checkout"
          onClick={() => dispatch(toggleCartHidden())}
        >
          Go To Checkout
        </CheckoutBtn>
      </ButtonWrap>
    </DropdownContainer>
  );
};

export default CartDropdown;

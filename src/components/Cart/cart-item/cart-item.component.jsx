import React from "react";

import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemQuantity,
  IncBtn,
  DecBtn,
} from "./cart-item.style";

import { useStateValue } from "./../../../StateProvider";

import { setStorage } from "./../../../Reducer";

import { addItem, removeItem } from "./../../Cart/cart.actions";

const CartItem = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const { name, price, imageUrl, quantity } = item;

  setStorage(cartItems);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
          {quantity} x ${price}
          <DecBtn onClick={() => dispatch(removeItem(item))}>-</DecBtn>
          <IncBtn onClick={() => dispatch(addItem(item))}>+</IncBtn>
        </ItemQuantity>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);

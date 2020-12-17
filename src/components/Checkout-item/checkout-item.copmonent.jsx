import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ArrowIcon,
  QuantityContainer,
  ItemsQuantity,
  Price,
  RemoveBtn,
} from "./checkout-item.style";

import { useStateValue } from "./../../StateProvider";

import { setStorage } from "./../../Reducer";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../components/Cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  setStorage(cartItems);

  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <QuantityContainer>
        <ArrowIcon onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </ArrowIcon>
        <ItemsQuantity>{quantity}</ItemsQuantity>
        <ArrowIcon onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </ArrowIcon>
      </QuantityContainer>
      <Price>${price}</Price>
      <RemoveBtn onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

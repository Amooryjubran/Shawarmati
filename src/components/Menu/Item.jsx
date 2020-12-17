import { Button } from "@material-ui/core";
import React from "react";

import {
  ItemWrapper,
  ItemHeader,
  ItemTitle,
  ItemDots,
  ItemPrice,
  ItemDescription,
  BuyBtn,
} from "./MenuElements";

import { useStateValue } from "./../../StateProvider";

import { addItem } from "./../Cart/cart.actions";

const Item = ({ item }) => {
  const [state, dispatch] = useStateValue();

  const { name, price, descreption } = item;

  return (
    <ItemWrapper>
      <ItemHeader>
        <ItemTitle>{name}</ItemTitle>
        <ItemDots />
        <ItemPrice>${price}</ItemPrice>
      </ItemHeader>
      <ItemDescription>
        {" "}
        {descreption}
        <BuyBtn onClick={() => dispatch(addItem(item))}>Buy</BuyBtn>
      </ItemDescription>
    </ItemWrapper>
  );
};

export default Item;

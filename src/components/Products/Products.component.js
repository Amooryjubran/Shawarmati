import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

import { useStateValue } from '../../StateProvider'

import { addItem } from '../Cart/cart.actions'

const Products = ({ heading, data }) => {

  const [state, dispatch] = useStateValue();

  const itemList = Object.keys(data).map(item => data[item]);

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, id) => {
          return (
            <ProductCard key={id}>
              <ProductImg src={product.imageUrl} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductButton onClick={() => dispatch(addItem(itemList[id]))}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;

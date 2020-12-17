import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 40%;
  }

  @media only screen and (max-width: 375px) {
    height: 60px;
  }
`;

export const ItemDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: black;
  padding: 10px 20px;
`;

export const ItemName = styled.span`
  font-size: 16px;
`;

export const ItemQuantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IncBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  height: 20px;
  width: 20px;
  border: 1px solid green;
  border-radius: 50%;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  margin: 0 5px;
`;

export const DecBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  height: 20px;
  width: 20px;
  border: 1px solid red;
  border-radius: 50%;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  margin: 0 5px;
`;

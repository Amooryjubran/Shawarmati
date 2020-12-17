import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  top: 82px;
  right: 55px;
  z-index: 5;

  @media only screen and (max-width: 680px) {
    width: 240px;
  }

  @media only screen and (max-width: 375px) {
    right: 35px;
    width: 200px;
    height: 330px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color: black;
`;

export const CloseBtn = styled.span`
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
`;

export const EmptyCart = styled.span`
  font-size: 1rem;
  margin: 5rem auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 10px;
`;

export const CheckoutBtn = styled(Link)`
  width: 100%;
  background: #ffc500;
  white-space: nowrap;
  padding: 16px 64px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #e31837;
    color: #fff;
  }
`;

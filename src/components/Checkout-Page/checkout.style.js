import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding: 2rem 6rem;

  @media only screen and (max-width: 680px) {
    width: 70%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    margin: 50px 0;
  }
`;
export const Nav = styled.div`
  background: #150f0f;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ef000d;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const HeaderTitle = styled.span``;
export const ResturantName = styled(Link)``;
export const Total = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.6rem;
  margin: 0 auto;
`;

export const SubmitBtn = styled.div`
  margin-left: auto;
  margin-top: 5rem;
`;

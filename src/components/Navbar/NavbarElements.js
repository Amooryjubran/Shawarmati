import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = styled.nav`
  backgroundColor: 'none';
  height: 80px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 100;
  transition: all .3s ease-in-out;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(GiHamburgerMenu)`
  font-size: 2rem;
  margin: 0 10px;
  transform: translate(-50%, -15%);
`;

export const CartIcon = styled.a`
  margin: 0 20px;
`;

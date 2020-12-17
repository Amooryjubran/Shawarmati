import React, { useEffect } from "react";
import { Bars, CartIcon, Nav, NavIcon, NavLink } from "./NavbarElements";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import {
  toggleMenuHidden,
  toggleCartHidden,
  isScrollingTop,
  isScrollingBack,
} from "./../Cart/cart.actions";

import { useStateValue } from "./../../StateProvider";

import { setStorage } from "./../../Reducer";

const Navbar = () => {
  const [
    { isMenuOpen, isCartOpen, navScrolled, cartItems },
    dispatch,
  ] = useStateValue();

  // to calculate all items quantity together

  const cartItemsCount = (cartItems) => {
    // To save items even refreshing the page
    setStorage(cartItems);
    return cartItems.reduce(
      (previousQuantity, cartItem) => previousQuantity + cartItem.quantity,
      0
    );
  };

  const toggleCart = () => {
    dispatch(toggleCartHidden(isCartOpen));
    return isCartOpen;
  };

  const toggleMenu = () => {
    dispatch(toggleMenuHidden(isMenuOpen));
    return isMenuOpen;
  };

  const changeBackground = () => {
    let scroll = window.scrollY;
    if (scroll < 120) {
      return dispatch(isScrollingTop());
    } else if (scroll > 120) {
      return dispatch(isScrollingBack());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <Nav style={navScrolled ? null : { backgroundColor: "black" }}>
        <NavLink to="/">Shawarmati</NavLink>
        <NavIcon>
          <CartIcon onClick={toggleCart}>
            <ShoppingBasketOutlinedIcon />
            {cartItemsCount(cartItems)}
          </CartIcon>
          <Bars onClick={toggleMenu} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

import React from "react";

import Navbar from "../Navbar/Navbar.component";
import Sidebar from "../Sidebar/Sidebar.component";

import { HeaderContainer } from "./Header.style";

import { toggleMenuHidden } from "../Cart/cart.actions";

import { useStateValue } from "../../StateProvider";

import CartDropdown from "../Cart/cart-dropdown/cart-dropdown.component";

const Header = () => {
  const [{ isMenuOpen, isCartOpen, itemsCount }, dispatch] = useStateValue();

  const toggle = () => {
    dispatch(toggleMenuHidden(isMenuOpen));
    return isMenuOpen;
  };

  return (
    <div>
      <HeaderContainer>
        <Navbar
          style={{ position: "relative !important" }}
          itemsCount={itemsCount}
        />
        {isCartOpen ? <CartDropdown /> : null}
        <Sidebar isOpen={isMenuOpen} toggle={() => toggle} />
      </HeaderContainer>
    </div>
  );
};

export default Header;

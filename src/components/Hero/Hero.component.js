import React from "react";

import Navbar from "../Navbar/Navbar.component";
import Sidebar from "../Sidebar/Sidebar.component";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroStrong,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

import { toggleMenuHidden } from "../Cart/cart.actions";

import { useStateValue } from "../../StateProvider";

import CartDropdown from "../Cart/cart-dropdown/cart-dropdown.component";

const Hero = () => {
  const [{ isMenuOpen, isCartOpen, itemsCount }, dispatch] = useStateValue();

  const toggle = () => {
    dispatch(toggleMenuHidden(isMenuOpen));
    return isMenuOpen;
  };

  return (
    <>
      <HeroContainer>
        <Navbar itemsCount={itemsCount} />
        {isCartOpen ? <CartDropdown /> : null}
        <Sidebar isOpen={isMenuOpen} toggle={() => toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Shawarmati</HeroH1>
            <HeroP>
              Middle Eastern Kitchen <HeroStrong> & </HeroStrong> Grill
            </HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;

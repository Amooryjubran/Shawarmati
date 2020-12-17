import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

import { useStateValue } from './../../StateProvider';
import { toggleMenuHidden } from './../Cart/cart.actions'


const Sidebar = () => {

  const [{ isMenuOpen }, dispatch] = useStateValue();

  const toggle = () => {
    dispatch(toggleMenuHidden(isMenuOpen));
    return isMenuOpen;
  };
  return (
    <SidebarContainer isOpen={isMenuOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Shawarmas</SidebarLink>
        <SidebarLink to="/">Menu</SidebarLink>
        <SidebarLink to="/">Contact</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

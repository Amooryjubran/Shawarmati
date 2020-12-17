import React, { useState } from "react";

import Item from "./Item";

import {
  MenuContainer,
  MenuHeader,
  MenuButtonContainer,
  MenuButton,
  MenuButtonActive,
  ItemContainer,
} from "./MenuElements";

const Menu = ({ data }) => {
  const [isActive, setIsActive] = useState("Shawarma");

  const catagories = ["Shawarma", "Fries", "Drinks"];

  // converting data from Object to Array
  const itemList = Object.keys(data).map((item) => data[item]);

  return (
    <MenuContainer>
      <MenuHeader>Menu</MenuHeader>

      <MenuButtonContainer>
        {catagories.map((catagory) => {
          if (catagory === isActive) {
            // Change button if it matched value of the state
            return (
              <MenuButtonActive
                key={catagory}
                onClick={() => setIsActive(catagory)}
              >
                {isActive}
              </MenuButtonActive>
            );
          } else {
            return (
              <MenuButton key={catagory} onClick={() => setIsActive(catagory)}>
                {catagory}
              </MenuButton>
            );
          }
        })}
      </MenuButtonContainer>

      <ItemContainer>
        {itemList.map((item) => {
          if (item.title === isActive) {
            return item.items.map((item) => <Item key={item.id} item={item} />);
          }
        })}
      </ItemContainer>
    </MenuContainer>
  );
};

export default Menu;

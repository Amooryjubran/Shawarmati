import React, { useEffect } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/Navbar/globalStyles";
import Hero from "./components/Hero/Hero.component";
import Products from "./components/Products/Products.component";
import { productData } from "./components/Products/data";
import MENU_DATA from "./components/Menu/data";
import Menu from "./components/Menu/Menu.component";
import ContactUs from "./components/Contact/Contact.component";
import About from "./components/About/About.component";
import CheckoutPage from "./components/Checkout-Page/checkout.component";

import { useStateValue } from "./StateProvider";
import { addItem } from "./components/Cart/cart.actions";

function App() {
  const [{ purchaseSuccess }] = useStateValue();

  return (
    <>
      <GlobalStyle />
      <Route exact path="/">
        <Hero />
        <About />
        <Products heading="Today's Deals" data={productData} />
        <Menu data={MENU_DATA} />
        <ContactUs />
      </Route>

      <Route
        path="/checkout"
        render={() =>
          purchaseSuccess ? <Redirect to="/" /> : <CheckoutPage />
        }
      />
    </>
  );
}

export default App;

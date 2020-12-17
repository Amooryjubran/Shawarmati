import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import { useStateValue } from "./../../StateProvider";

import {
  clearCart,
  purchaseSuccess,
  toggleCartHidden,
} from "./../Cart/cart.actions";

import { setStorage } from "./../../Reducer";

const StripeButtonCheckout = ({ price }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  setStorage(cartItems);

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HumdtCremSXmeq10sTQA52pjzqCFrF7J5cUw4qfbwN4UrFXuzuBCBdJaVdnd7TzGa9ggCdKOtLqWouYds04msMl00zXg7uPm9";

  const onToken = async (token, addresses) => {
    const getOrderedProducts = () => {
      const order = {
        id: "",
        price: 0,
        name: "",
        quantity: 0,
      };

      cartItems.forEach((item) => {
        order.name = `${order.name}, ${item.name}`;
        order.id = `${order.id}, ${item.id}`;
        order.quantity = Number(order.quantity) + Number(item.quantity);
        order.price =
          Number(order.price) + Number(item.price) * Number(item.quantity);
      });

      return order;
    };

    console.log("items", getOrderedProducts());
    const response = await axios.post(
      "https://90jzu.sse.codesandbox.io/checkout",
      {
        token,
        product: getOrderedProducts(),
      }
    );
    const { status } = response.data;
    console.log("Response:", response);
    if (status === "success") {
      console.log("Success! Check email for details", { type: "success" });
      dispatch(purchaseSuccess());
      dispatch(toggleCartHidden());
      dispatch(clearCart());
    } else {
      console.log("Something went wrong", { type: "error" });
    }
  };

  return (
    <StripeCheckout
      name="Shawermati"
      label="Pay Now"
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButtonCheckout;

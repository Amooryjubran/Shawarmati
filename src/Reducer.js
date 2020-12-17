import { addItemToCart, removeItemFromCart } from "./components/Cart/cart.util";

// To get items from the page

const getStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// To save items even refreshing the page

export const setStorage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const INITIAL_STATE = {
  cartItems: getStorage,
  itemsCount: 0,
  isCartOpen: false,
  isMenuOpen: false,
  navScrolled: true,
  purchaseSuccess: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "TOGGLE_MENU_HIDDEN":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case "IS_SCROLLING_TOP":
      return {
        ...state,
        navScrolled: true
      }
    case "IS_SCROLLING_BACK":
      return {
        ...state,
        navScrolled: false
      }
    case "SET_ITEM":
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "PURCHASE_SUCCESS":
      return {
        ...state,
        cartItems: [],
        purchaseSuccess: true,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        purchaseSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;

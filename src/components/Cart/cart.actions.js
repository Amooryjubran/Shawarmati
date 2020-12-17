export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const toggleMenuHidden = () => ({
  type: "TOGGLE_MENU_HIDDEN",
});

export const isScrollingTop = () => ({
  type: "IS_SCROLLING_TOP"
})

export const isScrollingBack = () => ({
  type: "IS_SCROLLING_BACK"
})

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const incItem = (quantity) => ({
  type: "INCREASE_ITEM",
  payload: quantity + 1,
});

export const setItems = (item) => ({
  type: "SET_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const purchaseSuccess = () => ({
  type: "PURCHASE_SUCCESS",
});

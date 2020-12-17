// import { createSelector } from 'reselect';

// const selectCart = '';

// export const selectCartItems = createSelector(
//     [selectCart],
//     cartState => cartState.cartItems
// )

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((previousQuantity, cartItem) =>
//         previousQuantity + cartItem.quantity, 0)
// )

// export const selectCartItemsTotal = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((previousQuantity, cartItem) =>
//         previousQuantity + cartItem.quantity * cartItem.price, 0)
// )

// export const selectPurchaseSuccess = createSelector(
//     [selectCart],
//     cartState => cartState.purchaseSuccess
// )
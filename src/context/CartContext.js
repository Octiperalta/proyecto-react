import React, { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (newItem, newQuantity) => {
    const currentItem = isInCart(newItem.productID);

    let newCart;
    let newItemQuantity;

    if (currentItem) {
      newCart = cart.filter(
        e => e.item.productID !== currentItem.item.productID
      );
      newItemQuantity = currentItem.quantity + newQuantity;
    } else {
      newCart = [...cart];
      newItemQuantity = newQuantity;
    }

    setCart([...newCart, { item: newItem, quantity: newItemQuantity }]);
  };

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.item.productPrice * item.quantity,
      0
    );
  };

  const isInCart = id => {
    return cart.find(e => e.item.productID === id);
  };

  const removeItem = itemID => {
    const newCart = cart.filter(e => e.item.productID !== itemID);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const data = { cart, addItem, removeItem, clearCart, cartTotal };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContext;

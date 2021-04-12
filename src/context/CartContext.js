import React, { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (newItem, newQuantity) => {
    const currentItem = isInCart(newItem.productID);
    if (currentItem) {
      // const newCart = cart.filter(c => c.productID !== currentItem.productID);
      // setCart([...newCart, {item: currentItem, quantity: item.quantity + newQuantity }])
      currentItem.quantity += newQuantity;
      setCart(cart);
    } else {
      setCart([...cart, { item: newItem, quantity: newQuantity }]);
    }
  };

  const isInCart = id => {
    return cart.find(e => e.item.productID === id);
  };

  const removeItem = itemID => {
    const newCart = cart.filter(e => e.item.productID !== itemID);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const data = { cart, addItem, removeItem, clear };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContext;

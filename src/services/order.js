import firebase from "firebase/app";
import { getFirestore } from "../firebase";

export const generateOrder = (
  cartItems,
  cartTotal,
  { fullName, email, phone }
) => {
  const db = getFirestore();
  const orders = db.collection("orders");

  const buyer = {
    name: fullName || "Joe Black",
    email: email || "joe.black@gmail.com",
    phone: phone || "123456789",
  };

  const items = cartItems.map(item => {
    return {
      id: item.item.productID,
      title: item.item.productName,
      price: item.item.productPrice,
      quantity: item.quantity,
    };
  });

  const newOrder = {
    buyer: buyer,
    items: items,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    totalPrice: cartTotal,
  };

  return orders.add(newOrder);
};

export const getOrder = async orderID => {
  const db = getFirestore();
  const orderCollection = db.collection("orders");
  const order = await orderCollection.doc(orderID).get();

  return order;
};

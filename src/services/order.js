// import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import { getFirestore } from "../firebase";

const getBuyer = () => {
  const form = document.getElementById("invoice-form");
  const buyer = {
    name: form.fullname.value || "Joe Black",
    phone: form.phone.value || "123456789",
    email: form.email.value || "joe.black@gmail.com",
  };

  return buyer;
};

export const generateOrder = (cartItems, cartTotal, setOrderID) => {
  console.log("Crear orden");
  const db = getFirestore();
  const orders = db.collection("orders");

  const buyer = getBuyer();
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

  orders
    .add(newOrder)
    .then(({ id }) => {
      console.log(id);
    })
    .catch(err => {
      console.log("Algo salio mal", err);
    });
};

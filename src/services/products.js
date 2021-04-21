import { getFirestore } from "../firebase";

export const getItems = async productID => {
  const db = getFirestore();
  const itemsCollection = db.collection("items");
  const itemDetail = itemsCollection.doc(productID).get();

  return itemDetail;
};

export const fetchItems = async categoryID => {
  const db = getFirestore();
  if (categoryID) {
    const itemsCollection = await db
      .collection("items")
      .where("category.categoryID", "==", categoryID)
      .get();

    const dbItems = itemsCollection.docs.map(item => {
      return { productID: item.id, ...item.data() };
    });

    return dbItems;
  }

  const itemsCollection = await db.collection("items").get();

  const dbItems = itemsCollection.docs.map(item => {
    return { productID: item.id, ...item.data() };
  });
  return dbItems;
};

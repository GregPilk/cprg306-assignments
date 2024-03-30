import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", { userId }, "items");
    const itemsSnapshot = await getDocs(itemsCollection);

    const itemsList = itemsSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return itemsList;
  } catch (error) {
    console.error("Error getting items: ", error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", { userId }, "items"), {
      name: item.name,
      category: item.category,
      quantity: item.quantity,
    });
    return docRef.userId;
  } catch (error) {
    console.error("Error adding item: ", error);
  }
};
export const deleteItem = async (id, userId) => {
  try {
    await deleteDoc(doc(db, "users", userId, "items", id));
  } catch (error) {
    console.error("Error deleting item", error);
  }
};

export const addUser = async (id) => {
  try {
    await addDoc(collection(db, "users", id));
  } catch (error) {
    console.error("Error adding user", error);
  }
};

export const getUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

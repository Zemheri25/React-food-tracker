import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "../components/Toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDMipROXxHJn_XXp6jR52qCEPFRmupwM3c",
  authDomain: "food-tracker-79498.firebaseapp.com",
  projectId: "food-tracker-79498",
  storageBucket: "food-tracker-79498.appspot.com",
  messagingSenderId: "1087645648334",
  appId: "1:1087645648334:web:1b13e9128a3746633bd79f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

const auth = getAuth(firebase);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    
    Toastify("The user has created")
  } catch (error) {
    Toastify(error.message)
  }
};

export const loginUser = async (email, password, navigate) => {
  try {
    let user = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(user);
    Toastify("The user has loged in")
  } catch (error) {
    Toastify(error.message)
  }
};

export const logOut = () => {
  signOut(auth);
  
  Toastify("The user has loged out")
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const Additem = (initialValues, currentUser) => {
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date1 = new Date();

  const database = getDatabase();
  const itemRef = ref(database, "baglanti3");
  const newİtem = push(itemRef);

  set(newİtem, {
    
    title: initialValues.title,
    imgurl: initialValues.imgurl,
    content: initialValues.content,
    city : initialValues.city,
    state : initialValues.state,
    type1 : initialValues.type1,
    date: `${
      months[date1.getMonth()]
    } ${new Date().getDate()} , ${new Date().getFullYear()}`,
    email : currentUser.email
  });
  Toastify("The item has added")
};

export const useFetch = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const database = getDatabase();
    const itemRef = ref(database, "baglanti3");

    onValue(itemRef, (snapshot) => {
      const data = snapshot.val();
      const myArray = [];
      for (let id in data) {
        myArray.push({ id, ...data[id] });
      }

      setItems(myArray);
    });
  }, []);

  return { items };
};


export const DeleteItem = (id) => {
  const database = getDatabase();
  remove(ref(database, "baglanti3/" + id))
  Toastify("The item has deleted")
}

export const editItem1 = (initialValues) => {
  const database = getDatabase();
  const updates = {};
  updates["baglanti3/"+initialValues.id] = initialValues;
  Toastify("The restraunt has updated")
  return update(ref(database), updates)
  
}

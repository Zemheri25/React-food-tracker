import { createContext, useState } from "react";
import { Additem, editItem1 } from "../helpers/firebase";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const [random, setRandom] = useState(true);
  const [initialValues, setInitialValues] = useState({
    title: "",
    imgurl: "",
    content: "",
    city: "",
    state: "",
    type1: "",
    date: "",
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Additem(initialValues, currentUser);
  };

  const handleForUpdate = (e) => {
    e.preventDefault();
    editItem1(initialValues);
  };

  const handleEdit = (
    id,
    title,
    imgurl,
    content,
    city,
    state,
    type1,
    email,
    date
  ) => {
    setInitialValues({
      id,
      title,
      imgurl,
      content,
      city,
      state,
      type1,
      email,
      date,
    });
  };

  return (
    <BlogContext.Provider
      value={{
        initialValues,
        setInitialValues,
        handleFormSubmit,
        handleEdit,
        handleForUpdate,
        random,
        setRandom
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

import React from "react";
import "./NewBlog.css";
import Blog from "../assets/blok.png";

import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContexts";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  const { initialValues } = useContext(BlogContext);
  const { setInitialValues } = useContext(BlogContext);
  const { handleFormSubmit } = useContext(BlogContext);

  const handleChange = (e) => {
    e.preventDefault();

    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="newblog"
      onSubmit={(e) => handleFormSubmit(e, navigate("/"))}
    >
      <img src={Blog} alt="" className="blokim" />
      <div className="blognew">
        <div className="leftnright"></div>
        <h1 className="h11">New Restraunt</h1>
        <div className="leftnright"></div>
      </div>

      <input
        type="text"
        name="title"
        placeholder="Restraunt Name*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.title}
      />
      <input
        type="text"
        name="imgurl"
        placeholder="Restraunt Img Url*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.imgurl}
      />
      <input
        type="text"
        name="city"
        placeholder="Restraunt City*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.city}
      />

      <input
        type="text"
        name="state"
        placeholder="Restraunt State*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.state}
      />

      <input
        type="text"
        name="type1"
        placeholder="Restraunt type*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.type1}
      />

      <textarea
        name="content"
        id="content"
        cols="52"
        rows="10"
        placeholder="Restraunt Content*"
        style={{ marginTop: "1rem" }}
        onChange={handleChange}
        value={initialValues.content}
      />
      <input type="submit" value="SUBMIT" className="newsubmit" />
    </form>
  );
};

export default NewBlog;

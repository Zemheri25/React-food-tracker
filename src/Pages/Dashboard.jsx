import React, { useEffect, useState } from "react";
import { useFetch } from "../helpers/firebase";
import BlogCard from "../components/BlogCard";
import "./Dashboard.css";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContexts";
import Random from "./Random";

const Dashboard = () => {
  const { items } = useFetch();
  const { random, setRandom } = useContext(BlogContext);
  const [randomRestraunt, setRandomRestraunt] = useState({});

  const handleRandom = () => {
    let RandomNumber = Math.floor(Math.random() * items.length);
    let RandomRest = items[RandomNumber];
    setRandomRestraunt(RandomRest);
    console.log(randomRestraunt);
    setRandom(false);
  };

  return (
    <div className="dhsb">
      {random ? (
        <div>
          <div className="dashh1">
            <div>
              <h1 style={{ color: "#046582" }}>Restraunts</h1>
            </div>
            <div>
              <button onClick={handleRandom} className="randombutton">
                Random Restraunt
              </button>
            </div>
          </div>
          <div className="container dashboard">
            {items?.map((item) => {
              return <BlogCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      ) : (
        <Random randomRestraunt={randomRestraunt} random = {random} setRandom = {setRandom}/>
      )}
    </div>
  );
};

export default Dashboard;

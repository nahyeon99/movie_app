import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import propTypes from "prop-types";

function Coffee({ name, rating, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const coffeeILike = [
  {
    name: "starbucks",
    rating: 5,
    img: "https://cdn.imweb.me/thumbnail/20201002/0f846113b6bee.jpg",
  },
  {
    name: "hollys",
    rating: 4,
    img: "https://cdn.imweb.me/thumbnail/20201002/0f846113b6bee.jpg",
  },
  {
    name: "twosome",
    rating: 3,
    img: "https://cdn.imweb.me/thumbnail/20201002/0f846113b6bee.jpg",
  },
  {
    name: "coffee bean",
    rating: 3,
    img: "https://cdn.imweb.me/thumbnail/20201002/0f846113b6bee.jpg",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    {coffeeILike.map((cafe) => (
      <Coffee name={cafe.name} rating={cafe.rating} picture={cafe.img} />
    ))}
  </React.StrictMode>,
  document.getElementById("root")
);

Coffee.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  picture: propTypes.string.isRequired,
};

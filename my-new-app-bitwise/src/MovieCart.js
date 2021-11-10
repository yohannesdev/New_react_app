import React from "react";
import "./App.css";

const MovieCart = ({ Poster, Title, Genre }) => {
  return (
    <div className="boxed">
      <img src={Poster} alt="" />
      <div className="container">
        <h4 style={{ color: "purple" }}>Title: {Title}</h4>
        <h4 className="button">Genre: {Genre}</h4>
      </div>
    </div>
  );
};

export default MovieCart;

import React from "react";
import PropTypes from "prop-types";

const MovieDetails = ({
  Poster,
  Title = "Batman v Superman: Dawn of Justice",
  Rated,
  Runtime,
  Genre,
  Plot,
  Actors,
  Rating,
}) => {
  return (
    <div className="boxed">
      <img src={Poster} alt={Title} />
      <div className="details">
        <div className="title-rating">
          <h2>{Title}</h2>
          <h3 className="but-two " style={{ color: "green" }}>
            {Rating}
          </h3>
        </div>

        <div className="rated">
          <div className="button but-one">
            <h4 className="rat-btn">{Rated}</h4>
          </div>
          <div className="button but-two">
            <h4 className="rat-btn">{Runtime}</h4>
          </div>
        </div>
        <div className="button but-two">
          <h4 className="rat-btn">{Genre}</h4>
        </div>
        <h2>Plot</h2>
        <p>{Plot}</p>
        <h2>Actors</h2>
        <p>{Actors}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  Poster: PropTypes.any,
  //   Rating: PropTypes.number,
  Title: PropTypes.string,
  Plot: PropTypes.string,
  Actors: PropTypes.string,
  Rated: PropTypes.string,
  Runtime: PropTypes.string,
};

export default MovieDetails;

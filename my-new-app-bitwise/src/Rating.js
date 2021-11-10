import React from "react";

const Rating = ({ Rated, Runtime, Genre }) => {
  return (
    <div>
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
    </div>
  );
};

export default Rating;

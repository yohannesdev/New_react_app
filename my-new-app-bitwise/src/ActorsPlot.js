import React from "react";

const ActorsPlot = ({ Plot, Actors }) => {
  return (
    <div>
      <h2>Plot</h2>
      <p>{Plot}</p>
      <h2>Actors</h2>
      <p>{Actors}</p>
    </div>
  );
};

export default ActorsPlot;

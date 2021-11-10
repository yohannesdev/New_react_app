import React from "react";

const Header = ({ Title, Rating }) => {
  return (
    <div>
      <div className="title-rating">
        <h2>{Title}</h2>
        <h3 className="but-two " style={{ color: "green" }}>
          {Rating}
        </h3>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import images from "../../images";

function Die({ rand = 1 }) {

  return (
    <div>
      <img src={images[rand]} alt={`Dice ${rand}`} className="logo" />
    </div>
  );
}

export default Die;

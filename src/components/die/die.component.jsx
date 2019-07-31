import React from "react";
import images from "../../images";

function Die({ rand }) {
  console.log(rand);
  return (
    <div>
      <img src={images[rand]} alt={`Dice ${rand + 1}`} className="logo" />
    </div>
  );
}

export default Die;

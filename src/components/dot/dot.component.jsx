import React from "react";

import "./dot.styles.css";

const Dot = ({ display }) => {
  return (
    <div className="one-dot-container">
      <span className={` ${display ? "show-dot" : "hide-dot"} dot`}></span>
    </div>
  );
};

export default Dot;

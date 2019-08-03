import React from "react";
import Dot from "../dot/dot.component";
import getRandonInt from "../../randomizer";
import { dieArray } from "../../reducers";
import "./die-face-view.styles.css";

const DieFaceView = ({ dotsToRender = dieArray[getRandonInt(1, 6)] }) => {
  return (
    <div className="dots-container">
      {dotsToRender.map((dot, index) => {
        console.log(dot);
        return <Dot key={index} display={dot} />;
      })}
    </div>
  );
};

export default DieFaceView;

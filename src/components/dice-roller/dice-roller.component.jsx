import React from "react";
import DieFaceView from "../die-face-view/die-face-view.component";
import getRandonInt from "../../randomizer";

function DiceRoller({
  dieOneSideArray,
  dieOneSideNumber,
  dieTwoSideArray,
  dieTwoSideNumber,
  rollDieOne,
  rollDieTwo
}) {
  console.log(dieOneSideArray);
  console.log(dieOneSideNumber);
  console.log(dieTwoSideArray);
  console.log(dieTwoSideNumber);
  // const [randOne, setRandOne] = useState(dieOne);
  // const [randTwo, setRandTwo] = useState(dieTwo);

  // useEffect(() => {
  //   // setState for dieOne
  //   setRandOne(dieOne);
  //   setRandTwo(dieTwo);
  // }, [dieOne, dieTwo]);

  const handleClick = () => {
    //dispatch an action to change to the current number rolled for each die
    rollDieOne(getRandonInt(1, 6));
    rollDieTwo(getRandonInt(1, 6));
  };

  return (
    <div className="container">
      <div className="dice-container">
        {/*<Die rand={randOne} className="dice" />*/}
        {/*<Die rand={randTwo} className="dice" />*/}
        <DieFaceView dotsToRender={dieOneSideArray} />
        <DieFaceView dotsToRender={dieTwoSideArray} />
      </div>
      <div>{dieOneSideNumber + dieTwoSideNumber}</div>
      <button onClick={handleClick}>Roll</button>
    </div>
  );
}

export default DiceRoller;

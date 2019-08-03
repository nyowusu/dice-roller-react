import { handleAction } from "redux-actions";
import { ROLL_DIE_ONE, ROLL_DIE_TWO } from "./actions";
import getRandonInt from "./randomizer";

const defaultDieOne = getRandonInt(1, 6);
const defaultDieTwo = getRandonInt(1, 6);

export const dieArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const dieOne = handleAction(
  ROLL_DIE_ONE,
  (state, { payload }) => ({
    dieSideArray: dieArray[payload],
    dieSideNumber: payload
  }),
  { dieSideArray: dieArray[defaultDieOne], dieSideNumber: defaultDieOne }
);

export const dieTwo = handleAction(
  ROLL_DIE_TWO,
  (state, { payload }) => ({
    dieSideArray: dieArray[payload],
    dieSideNumber: payload
  }),
  { dieSideArray: dieArray[defaultDieTwo], dieSideNumber: defaultDieTwo }
);

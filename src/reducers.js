import { handleAction } from "redux-actions";
import { ROLL_DIE_ONE, ROLL_DIE_TWO } from "./actions";

export const dieOne = handleAction(ROLL_DIE_ONE, (state, { payload }) => payload, 1);

export const dieTwo = handleAction(ROLL_DIE_TWO, (state, { payload }) => payload, 1);

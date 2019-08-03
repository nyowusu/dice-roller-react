import { connect } from "react-redux";
import { ROLL_DIE_ONE, ROLL_DIE_TWO } from "../../actions";
import DiceRoller from "../dice-roller/dice-roller.component";

const mapStateToProps = state => {
  return {
    dieOneSideArray: state.dieOne.dieSideArray,
    dieOneSideNumber: state.dieOne.dieSideNumber,
    dieTwoSideArray: state.dieTwo.dieSideArray,
    dieTwoSideNumber: state.dieTwo.dieSideNumber
  };
};

const mapDispatchToProps = dispatch => ({
  rollDieOne: number => dispatch(ROLL_DIE_ONE(number)),
  rollDieTwo: number => dispatch(ROLL_DIE_TWO(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiceRoller);

import { connect } from "react-redux";
import { ROLL_DIE_ONE, ROLL_DIE_TWO } from "../../actions";
import DiceRoller from "../dice-roller/dice-roller.component";

const mapStateToProps = state => {
  return { dieOne: state.dieOne, dieTwo: state.dieTwo };
};

const mapDispatchToProps = dispatch => ({
  rollDieOne: number => dispatch(ROLL_DIE_ONE(number)),
  rollDieTwo: number => dispatch(ROLL_DIE_TWO(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiceRoller);

import PropTypes from "prop-types";
import { InformationLayout } from "./InformationLayout";

export function Information(props) {

  return (
    <InformationLayout currentPlayer={props.currentPlayer} onResetClick={props.onResetClick} isGameEnded={props.isGameEnded}
      isDraw={props.isDraw} />

  )
}

Information.propTypes = {
  currentPlayer: PropTypes.string,
  onResetClick: PropTypes.func,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
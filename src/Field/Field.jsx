import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout"

export function Field(props) {

  return (
    <FieldLayout field={props.field} onFieldClick={props.onFieldClick} />

  )
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  onFieldClick: PropTypes.func,
};
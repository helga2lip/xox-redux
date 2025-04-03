import PropTypes from "prop-types"
import { Field } from "../Field/Field"
import { Information } from "../Information/Information"
import styles from './Game.module.css'

export const GameLayout = (props) => {
    return <div className={styles.gameLayout}>
        <Information currentPlayer={props.currentPlayer} onResetClick={props.onResetClick} isGameEnded={props.isGameEnded}
            isDraw={props.isDraw} />
        <Field field={props.field} onFieldClick={props.onFieldClick} />
    </div>
}

GameLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string),
    onFieldClick: PropTypes.func,
    currentPlayer: PropTypes.string,
    onResetClick: PropTypes.func,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
};
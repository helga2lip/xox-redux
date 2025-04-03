import PropTypes from 'prop-types';
import styles from './Information.module.css'

export const InformationLayout = (props) => {
    return <div className={styles.informationLayout}>
        <div className={styles.info}>
            {props.isGameEnded
                ? `Победа: ${props.currentPlayer}`
                : props.isDraw
                    ? 'Ничья'
                    : `Ходит: ${props.currentPlayer}`
            }
        </div>
        <button className={styles.startButton} onClick={props.onResetClick}>Начать заново</button>
    </div>
}

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string,
    onResetClick: PropTypes.func,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
};
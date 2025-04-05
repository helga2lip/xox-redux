import { useEffect, useState } from 'react';
import { store } from '../store';
import styles from './Information.module.css'

export const InformationLayout = () => {
    const [state, setState] = useState(store.getState());
    useEffect(
        () => {
            store.subscribe(() => {
                setState(store.getState())
            })
        }, []
    )
    const { currentPlayer, isGameEnded, isDraw } = state;

    const onResetClick = () => {
        store.dispatch({ type: 'RESTART_GAME' })
    }

    return <div className={styles.informationLayout}>
        <div className={styles.info}>
            {isGameEnded
                ? `Победа: ${currentPlayer}`
                : isDraw
                    ? 'Ничья'
                    : `Ходит: ${currentPlayer}`
            }
        </div>
        <button className={styles.startButton} onClick={onResetClick}>Начать заново</button>
    </div>
}

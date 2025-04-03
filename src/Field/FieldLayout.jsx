import PropTypes from 'prop-types';
import styles from './Field.module.css'

export const FieldLayout = (props) => {
    const onCellClick = (index) => {
        props.onFieldClick(index)
    }

    return <div className={styles.fieldLayout}>
        <div className={styles.fieldGrid}>
            {props.field.map((cell, index) => {
                return <div key={index} className={styles.fieldCell} onClick={() => onCellClick(index)}>
                    {cell}
                </div>
            })}

        </div>
    </div>
}

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string),
    onFieldClick: PropTypes.func,
};
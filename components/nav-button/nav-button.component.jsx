import React from 'react'
import styles from './nav-button.module.scss'

export default function NavButton(props) {
    console.log('props.section',props.section)
    return (
        <div className={`${styles['button']} ${props.isSelected ? styles['is-selected']: null}`} onClick={()=> props.onClickHandler(props.section)}>
            {props.text}
            <div className={styles['button-line']}></div>
        </div>
    )
}
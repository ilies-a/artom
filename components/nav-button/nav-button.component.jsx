import React from 'react'
import styles from './nav-button.module.scss'

export default function NavButton(props) {
    return (
        <div className={styles['button']}>
            {props.text}
            <div className={styles['button-line']}></div>
        </div>
    )
}
import React from 'react'
import styles from './nav-button.module.scss'
import { ButtonTextContainer } from './nav-button.styles'

export default function NavButton(props) {
    return (
        <div className={`${styles['button']} ${props.isSelected ? styles['is-selected']: null}`} onClick={()=> props.onClickHandler(props.section)}>
            <ButtonTextContainer text = {props.text} ></ButtonTextContainer>
            <div className={styles['button-line']}></div>
        </div>
    )
}
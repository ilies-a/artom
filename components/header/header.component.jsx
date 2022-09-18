import React from 'react'
import styles from './header.module.scss'
import NavButton from '../nav-button/nav-button.component'

export default function Header() {
    return (
        <div>
            <div className={styles['main-container']}>
                <img className={styles['artom-logo']} src='artom-logo.svg'/>
                <div className={styles['nav-container']}>
                    <NavButton text='ABOUT'/>
                    <NavButton text='SIGN UP'/>
                    <NavButton text='SIGN IN'/>
                </div>
            </div>
            <div className={styles['space']}></div>
        </div>
    )
}
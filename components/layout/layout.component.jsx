import React from 'react'
import Header from '../header/header.component'
import styles from './layout.module.scss'

export default function Layout(props){
    return(
        <div className={styles['main-container']}>
            <div className={styles['background-top-cover']}></div> {/* to add a padding top to background */}
            <Header/>
            {props.children}
        </div>
    )
}
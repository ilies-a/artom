import React from 'react'
import Header from '../header/header.component'

export default function Layout(props){
    return(
        <div>
            <Header/>
            {props.children}
        </div>
    )
}
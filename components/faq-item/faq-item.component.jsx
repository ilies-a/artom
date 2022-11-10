import React from 'react'
import Image from 'next/image'
import styles from './faq-item.module.scss'
import { FaqItemContainer, TitleAndButtonContainer } from './faq-item.styles'

export default class FaqItem extends React.Component {
    constructor(props){
        super(props)
        this.containerRef = React.createRef()
        this.contentRef = React.createRef()
        this.state = {
            contentHeight: null,
            isSelected: false
        }
    }
    handleClick =()=>{
        this.setState({contentHeight:this.contentRef.current.offsetHeight, isSelected:!this.state.isSelected});
    }

    render(){
        const {title, text} = this.props
        return(
            <FaqItemContainer contentHeight={this.state.contentHeight} isSelected = {this.state.isSelected} ref={this.containerRef}>
                <div ref={this.contentRef}>
                    <TitleAndButtonContainer>
                        <h1 className={styles['title']}>{title}</h1>
                        <div className={`${styles['arrow-button']} ${this.state.isSelected?styles['is-selected']:null}`} onClick={this.handleClick}>
                            <Image className={styles['arrow']} src='/arrow.png' alt='arrow' layout={'fill'} objectFit={'contain'}/>
                        </div>
                    </TitleAndButtonContainer>
                    <div className={styles['text']} dangerouslySetInnerHTML={{__html:text}} />
                </div>
            </FaqItemContainer>
        )
    }
}
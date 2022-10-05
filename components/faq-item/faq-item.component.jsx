import React from 'react'
import Image from 'next/image'
import styles from './faq-item.module.scss'
import { FaqItemContainer, TitleAndButtonContainer } from './faq-item.styles'

export default class FaqItem extends React.Component {
    constructor(props){
        super(props)
        this.containerRef = React.createRef()
        this.contentRef = React.createRef()
        this.unselectedContainerHeight = '50px'
        this.state = {
            contentHeight: null,
            isSelected: false
        }
    }
    componentDidMount(){
        window.addEventListener('resize',  this.handleResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = ()=>{
        if( this.contentRef.current === null || this.contentRef.current.offsetHeight === null){
            return
        }
        this.setState({contentHeight:this.contentRef.current.offsetHeight+'px'});
    }
    handleClick =()=>{
        this.setState({isSelected:!this.state.isSelected})
    }

    render(){
        const {title, text} = this.props
        const height = this.state.isSelected ? this.state.contentHeight : this.unselectedContainerHeight;
        
        return(
            <FaqItemContainer height={height} isSelected = {this.state.isSelected} ref={this.containerRef}>
                <div ref={this.contentRef}>
                    <TitleAndButtonContainer unselectedHeight = {this.unselectedContainerHeight}>
                        <h3 className={styles['title']}>{title}</h3>
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
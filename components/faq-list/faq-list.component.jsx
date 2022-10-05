import React from "react";
import styles from "./faq-list.module.scss";
import FaqItem from "../faq-item/faq-item.component";
import { faqs } from "./faq";

export default class FaqList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedFaqItemIndex: null
        }
    }

    handleClick = (index)=>{
        this.setState({selectedFaqItemIndex:index})
    }

    render(){
        var indexToSplit = faqs.length/2-1;
        var setOfFaqs1 = faqs.slice(0, indexToSplit+2);
        var setOfFaqs2 = faqs.slice(indexToSplit + 2);
        return(
            <div className={styles['main-container']}>
                <div className={styles['set-of-faqs-left']}>
                {
                    setOfFaqs1.map((value, index)=>{
                        return <div key={index} className={styles['faq-item-container']}><FaqItem onClick={()=>this.handleClick(index)} title={value.title} text={value.text} isSelected={this.state.selectedFaqItemIndex == index ? true:false}/></div>
                    })
                }
                </div>
                <div className={styles['set-of-faqs-right']}>
                {
                    setOfFaqs2.map((value, index)=>{
                        return <div key={index} className={styles['faq-item-container']}><FaqItem onClick={()=>this.handleClick(index)} title={value.title} text={value.text} isSelected={this.state.selectedFaqItemIndex == index ? true:false}/></div>
                    })
                }
                </div>
            </div>
        )
    }
}
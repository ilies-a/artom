import React from 'react'
import Image from 'next/image'
import styles from './home-page-anim.module.scss'

export default class HomePageAnim extends React.Component {

    constructor(props){
        super(props)
        this.state={
            animationIsOver: false
        }
        this.animationDuration = 3000
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({animationIsOver:true})
        },this.animationDuration)
    }

    render(){
        const totalOfFractionsByRow = 3
        const totalOfFractions = 9
        const fractions = new Array(totalOfFractions).fill('')
        const selectedFractionLeftIndex = totalOfFractionsByRow
        const selectedFractionTopIndex = 1
        return (
            <div className={styles['main-container']}>
                <div className={styles['text-container']}>
                    <div>Own Shares of Iconic Masterpieces</div>
                    <div>Collect, Sell and Trade Shares of Iconic Artworks</div>
                </div>
                <div className={styles['fractions-container']}>
                    <Image className={styles['artwork']} src={'/artwork.jpg'} alt='artwork' layout='fill' objectFit='contains' priority={true} />
                    {
                        fractions.map((value, index) =>{
                            return <div key={index} className={`${styles['fraction']} ${index == selectedFractionLeftIndex ? styles.selectedFractionLeft: index == selectedFractionTopIndex ? styles.selectedFractionTop: styles.unselectedFraction} ${this.state.animationIsOver? styles.animationOff:styles.animationOn}`}>
                                        <div className={styles['artwork-fraction']}><Image src={`${'/artwork-fractions/'+(index+1)+'.jpg'}`} alt='artwork-fraction' layout='fill' objectFit='contains' priority={true}/></div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
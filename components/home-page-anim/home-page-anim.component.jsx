import React from 'react'
import styles from './home-page-anim.module.scss'

class HomePageAnim extends React.Component {
    
    constructor(props){
        super()
        this.state={
            
        }
    }

    componentDidMount(){
        
    }

    render(){
        const totalOfFractionsByRow = 3
        const totalOfFractions = 9
        const fractions = new Array(totalOfFractions).fill('')
        const selectedFractionRightIndex = totalOfFractionsByRow*2 - 1
        const selectedFractionBottomIndex = totalOfFractionsByRow*3 - 2
        return (
            <div className={styles['main-container']}>
                <div className={styles['fractions-container']}>
                    <img src={`${'artwork.jpg'}`} className={styles['artwork']}/>
                    {
                        fractions.map((value, index) =>{
                            return <div key={index} className={`${styles.fraction} ${index == selectedFractionRightIndex ? styles.selectedFractionRight: index == selectedFractionBottomIndex ? styles.selectedFractionBottom: styles.unselectedFraction}`}>
                                        <img src={`${'artwork-fractions/artwork-'+(index+1)+'.jpg'}`}/>
                                    </div>
                        })
                    }
                </div>
                <div className={styles['text-container']}>
                    <h1>
                        Acquire a $20 fraction of art asset now
                    </h1>
                </div>
            </div>
        )
    }
}

export default HomePageAnim
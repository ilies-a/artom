import Image from 'next/image'
import styles from './home-page-anim.module.scss'

export default function HomePageAnim (){
        const totalOfFractionsByRow = 3
        const totalOfFractions = 9
        const fractions = new Array(totalOfFractions).fill('')
        const selectedFractionRightIndex = totalOfFractionsByRow
        const selectedFractionBottomIndex = totalOfFractionsByRow*3 - 2
        return (
            <div className={styles['main-container']}>
                <div className={styles['text-container']}>
                    <div>INVEST IN BLUE CHIP ART</div>
                    <div>Buy, Sell and Trade Shares of Iconic Artworks</div>
                </div>
                <div className={styles['fractions-container']}>
                    <Image className={styles['artwork']} src={'/artwork.jpg'} alt='artwork' layout='fill' priority={true} />
                    {
                        fractions.map((value, index) =>{
                            return <div key={index} className={`${styles['fraction']} ${index == selectedFractionRightIndex ? styles.selectedFractionRight: index == selectedFractionBottomIndex ? styles.selectedFractionBottom: styles.unselectedFraction}`}>
                                        <div className={styles['artwork-fraction']}><Image src={`${'/artwork-fractions/'+(index+1)+'.jpg'}`} alt='artwork-fraction' layout='fill' priority={true}/></div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
}
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
                    <div>BUY, SELL AND TRADE SHARES OF ICONIC ARTWORKS</div>
                </div>
                <div className={styles['fractions-container']}>
                    <Image src={`${'/artwork.jpg'}`} alt='artwork' layout='fill' priority className={styles['artwork']} />
                    {
                        fractions.map((value, index) =>{
                            return <div key={index} className={`${styles.fraction} ${index == selectedFractionRightIndex ? styles.selectedFractionRight: index == selectedFractionBottomIndex ? styles.selectedFractionBottom: styles.unselectedFraction}`}>
                                        <img src={`${'/artwork-fractions/'+(index+1)+'.jpg'}`} alt='artwork-fraction' layout='fill' priority/>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
}
import Image from 'next/image'
import styles from './how-it-works-card.module.scss'

export default function HowItWorksCard(props){
    return(
    <div className={`${styles['main-container']} ${props.isNotVisible ? styles['not-visible']:null} ${props.isLastCard ? styles['last-card']:null}`}>
        <div className={styles['header']}>{props.title}</div>
        <div className={styles['body']}>
            <div className={styles['text-container']}>{props.textHtml}</div>
            { props.imageName !== undefined ? 
            <div className={styles['image-container']}>
                <Image src={`${'/how-it-works-images/'+props.imageName}`} layout={'fill'} objectFit={'contain'}/>
            </div> : null }
        </div>
    </div>
    )
}
import styles from './how-it-works-card.module.scss'

export default function HowItWorksCard(props){
    return(
    <div className={`${styles['main-container']} ${props.isLastCard ? styles['last-card']:null}`}>
        <div className={styles['header']}>{props.title}</div>
        <div className={styles['body']}>
            <div className={styles['text-container']}>{props.textHtml}</div>
            { props.imageName !== undefined ? <img src={`${'how-it-works-images/'+props.imageName}`}/> : null }
        </div>
    </div>
    )
}
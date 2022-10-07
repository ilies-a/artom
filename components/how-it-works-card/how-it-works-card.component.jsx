import Image from 'next/image'
import styles from './how-it-works-card.module.scss'

export default function HowItWorksCard({number, title, text, imageName}){
    const numberPrefixedByZero= (number<10?'0':'')+number
    return(
    <div className={styles['main-container']}>
        <div className={styles['header']}>
            <div className={styles['number']}>{ numberPrefixedByZero }</div>
            <div className={styles['title']}>{ title }</div>
        </div>
        <div className={styles['body']}>
            <div className={styles['text-container']} dangerouslySetInnerHTML={{__html:text}}>

            </div>
            { imageName !== undefined ? 
            <div className= {`${styles['image-container']} ${styles['image-'+number+'-container']}`}>
                <Image src={`${'/how-it-works-images/'+imageName}`} layout={'fill'} objectFit={'contain'} priority/>
            </div> : null }
        </div>
    </div>
    )
}
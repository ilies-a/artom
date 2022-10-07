import styles from './how-it-works-cards.module.scss'
import HowItWorksCard from '../how-it-works-card/how-it-works-card.component'
import { cards } from './cards';

export default function HowItWorksCards(){
    return(
        <div className={styles['main-container']}>
            {cards.map((value, index) =>{
            return <HowItWorksCard key={index} number={index+1} title={value['title']} text={value['text']} imageName={value['imageName']}/>
            })}
        </div>
    )
}
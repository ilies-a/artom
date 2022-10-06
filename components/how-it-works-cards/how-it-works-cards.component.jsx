import styles from './how-it-works-cards.module.scss'
import HowItWorksCard from '../how-it-works-card/how-it-works-card.component'
import { cards } from './cards';

export default function HowItWorksCards(){
  
    return(
        <div className={styles['main-container']}>
            {cards.map((value, index) =>{
            const number = index+1;
            return <HowItWorksCard key={index} number={(number<10?'0':'')+number} title={value['title']} text={value['text']} imageName={value['imageName']}/>
            })}
        </div>
    )
}
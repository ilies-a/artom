import styles from './how-it-works-cards.module.scss'
import HowItWorksCard from '../how-it-works-card/how-it-works-card.component'

export default function HowItWorksCards(){
    const cards = [
        {
          textHtml:
            <div>
              <h3>We select the piece of art</h3>
              <p>Our experts determine which art object is available on the market and has the best growth potential</p>
            </div>,
          imageName:'hiw-1.jpg'
        },
        {
          textHtml:
            <div>
              <h3>Community acquires shares</h3>
              <p>For each artwork, 20&#8364; shares are created and are put on sale on the artom.io platform.</p>
            </div>,
          imageName:'hiw-2.png'
        },
        {
          textHtml:
            <div>
              <h3>artom.io acquires the art</h3>
              <p>Once all shares are bought by the community. We acquire the physical artwork on their on their behalf.</p>
            </div>,
          imageName:'hiw-3.png'
        },
        {
          textHtml:
            <div>
              <h3>Community receives their shares</h3>
              <p>Each buyer gets as many 20&#8364; Smart contracts as shares they have in their possession.</p>
            </div>,
          imageName:'hiw-4.png'
        },
        {
          textHtml:
            <div>
              <h3>Community trades Shares</h3>
              <p>Users trade their shares within the artom.io market or on any other compatible platform (opensea, rarible, etc.)</p>
            </div>,
          imageName:'hiw-5.png'
        },
        {
          textHtml:
            <div>
              <h3></h3>
              <p></p>
            </div>,
          imageName:''
        },
        {
          textHtml:
            <div>
              <h3>Art is landed to a museum</h3>
              <p>Once the artwork is acquired, it is either exposed in a museum, or within our facilities</p>
            </div>
        }
      ];

    const createHowItWorksCardsCrossingLine = ()=>{
        const circles = new Array(8).fill('')
        return(
          <div>
            <div className={`${styles['how-it-work-cards-crossing-line']} ${styles['how-it-work-cards-crossing-line1']}`}>
              <div className={styles['arrow']}></div>
            </div>
            <div className={`${styles['how-it-work-cards-crossing-line']} ${styles['how-it-work-cards-crossing-line2']}`}>
              <div className={styles['arrow']}></div>
            </div>
            {circles.map((value, index) =>{
              const number = index+1;
              return <div key={index} className={`${styles['circle']} ${styles['circle-'+number]}`}></div>
            })}
          </div>
        )
    }
    return(
        <div className={styles['how-it-work-cards-container']}>
            {cards.map((value, index) =>{
            const number = index==6? index:index+1;
            return <HowItWorksCard key={index} title={(number<10?'0':'')+number} textHtml={value['textHtml']} imageName={value['imageName']} isLastCard={ index==6 ? true:false} isNotVisible={ index==5 ? true:false}/>
            })}
            {createHowItWorksCardsCrossingLine()}
        </div>
    )
}
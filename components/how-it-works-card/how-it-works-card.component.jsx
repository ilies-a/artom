import Image from 'next/image'
import styles from './how-it-works-card.module.scss'

export default function HowItWorksCard({number, title, text, imageName}){


    const getIllustration1 = ()=>{
        return(
            <div className={styles['illustration-1']}>
                <div className={styles['artwork']}>
                    <div className={styles['target']}>
                        <div className={styles['target-text']}>&#x2713;</div>
                    </div>
                </div>
            </div>
        )
    }
    const getIllustration2 = ()=>{
        const fractions = new Array(9).fill('');
        return <div className={styles['illustration-2']}>
            {
            fractions.map((value, index) => {
                return(
                    <div key={index} className={styles['fraction']} style={{zIndex:index}}>
                        <div className={styles['price']}>$20</div>
                    </div>
                );
            })}
        </div>
    }

    const getIllustrationHtml = (number) => {
        var htmlIllustration;
        switch(number){
        case 1:
            htmlIllustration = getIllustration1();
            break;
        case 2:
            htmlIllustration = getIllustration2();
            break;
        default:
            break;
        }
        return htmlIllustration;
    }


    const numberPrefixedByZero= (number<10?'0':'')+number
    return(
    <div className={styles['main-container']}>
        <div className={styles['header-and-text-container']}>
            <div className={styles['header']}>
                <div className={styles['number']}>{ numberPrefixedByZero }</div>
                <div className={styles['title']}>{ title }</div>
            </div>
            <div className={styles['text-container']} dangerouslySetInnerHTML={{__html:text}}></div>
        </div>
        <div className= {`${styles['illustration-container']} ${styles['image-'+number+'-container']}`}>
            {getIllustrationHtml(number)}
        </div>
        {/* imageName !== undefined ? 
            <div className= {`${styles['image-container']} ${styles['image-'+number+'-container']}`}>
                <Image src={`${'/how-it-works-images/'+imageName}`} layout={'fill'} objectFit={'contain'} priority/>
    </div> : null */}
    </div>
    )
}
import Image from 'next/image'
import styles from './how-it-works-card.module.scss'

export default function HowItWorksCard({number, title, text, imageName}){


    const getIllustration1 = ()=>{
        return(
            <div className={styles['illustration-1']}>
                <div className={styles['artwork']}>
                    <Image src={`${'/artwork.jpg'}`} layout={'fill'} objectFit={'contain'} alt='artwork' priority/>
                </div>
            </div>
        )
    }
    const getIllustration2 = ()=>{
        const fractions = new Array(36).fill('');
        return <div className={styles['illustration-2']}>
            {
            fractions.map((value, index) => {
                return(
                    <div key={index} className={styles['fraction']} style={{zIndex:index}}>
                        <Image src={`${'/how-it-works-images/artwork-fractions/'+(index+1)}.jpg`} layout={'fill'} objectFit={'contain'} alt='artwork-fraction' priority/>
                    </div>
                );
            })}
        </div>
    }
    const getIllustration3 = ()=>{
        return(
            <div className={styles['illustration-3']}>
                <div className={styles['artwork']}>
                    <Image src={`${'/artwork.jpg'}`} layout={'fill'} objectFit={'contain'} alt='artwork' priority/>
                </div>
                <div className={styles['artom-logo']}>
                    <Image src={`${'/favicon.ico'}`} layout={'fill'} objectFit={'contain'} alt='artom-logo' priority/>
                </div>
            </div>
        )
    }
    const getIllustration4 = ()=>{
        return(
            <div className={styles['illustration-4']}>
                <div className={styles['vote-image']}>
                    <div className={styles['vote-image-shadow']}></div>
                    <Image src={`${'/how-it-works-images/4.png'}`} layout={'fill'} objectFit={'contain'} alt='vote' priority/>
                </div>
            </div>
        )
    }
    const getIllustration5 = ()=>{
        return(
            <div className={styles['illustration-5']}>
                <div className={styles['museum-image']}>
                    <Image src={`${'/how-it-works-images/5.jpg'}`} layout={'fill'} objectFit={'contain'} alt='museum' priority/>
                </div>
            </div>
        )
    }
    const getIllustration6 = ()=>{
        return(
            <div className={styles['illustration-6']}>
                <div className={styles['trade-image-1']}>
                    <Image src={`${'/how-it-works-images/artwork-fractions/14.jpg'}`} layout={'fill'} objectFit={'contain'} alt='trade-1' priority/>
                </div>
                <div className={styles['trade-image-2']}>
                    <Image src={`${'/how-it-works-images/artwork-fractions/16.jpg'}`} layout={'fill'} objectFit={'contain'} alt='trade-2' priority/>
                </div>
                <div className={styles['trade-arrow-1']}>
                    <Image src={`${'/how-it-works-images/trade-arrow.png'}`} layout={'fill'} objectFit={'contain'} alt='arrow-1' priority/>
                </div>
                <div className={styles['trade-arrow-2']}>
                    <Image src={`${'/how-it-works-images/trade-arrow.png'}`} layout={'fill'} objectFit={'contain'} alt='arrow-2' priority/>
                </div>
            </div>
        )
    }
    const getIllustration7 = ()=>{
        return(
            <div className={styles['illustration-7']}>
                <div className={styles['sell-image']}>
                    <div className={styles['sell-image-shadow']}></div>
                    <Image src={`${'/how-it-works-images/7.png'}`} layout={'fill'} objectFit={'contain'} alt='sell' priority/>
                </div>
            </div>
        )
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
        case 3:
            htmlIllustration = getIllustration3();
            break;
        case 4:
            htmlIllustration = getIllustration4();
            break;
        case 5:
            htmlIllustration = getIllustration5();
            break;
        case 6:
            htmlIllustration = getIllustration6();
            break;
        case 7:
            htmlIllustration = getIllustration7();
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
    </div>
    )
}
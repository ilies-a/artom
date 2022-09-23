import Image from 'next/image'
import styles from './preloader-wrapper.module.scss'

export default function PreloaderWrapper(props){
    return(
        <div>
            <div className={styles['main-container']}>
                <Image src={'/artom-logo.png'} layout='fill' priority/>
                <Image src={'/background-image.svg'} layout='fill' priority/>
                <Image src={'/prototype.png'} layout='fill' priority/>
                <Image src={'/artwork.jpg'} layout='fill' priority />
                <Image src={'/artwork-fractions/1.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/2.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/3.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/4.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/5.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/6.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/7.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/8.jpg'} layout='fill' priority/>
                <Image src={'/artwork-fractions/9.jpg'} layout='fill' priority/>
            </div>
            {props.children}
        </div>
    )
}
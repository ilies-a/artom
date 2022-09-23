import Image from 'next/image'
import styles from './images-preloader.module.scss'

export default function ImagesPreloader(){
    return(
        <div className={styles['main-container']}>
            <Image src={'/artwork.jpg'} alt='artwork' layout='fill' priority />
            <Image src={'/artwork-fractions/1.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/2.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/3.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/4.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/5.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/6.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/7.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/8.jpg'} alt='artwork-fraction' layout='fill' priority/>
            <Image src={'/artwork-fractions/9.jpg'} alt='artwork-fraction' layout='fill' priority/>
        </div>
    )
}
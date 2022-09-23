import React from 'react'
import Image from 'next/image'
import styles from './preloader-wrapper.module.scss'

class PreloaderWrapper extends React.Component {
    constructor(props){
        super(props)
        this.state={
            imagesArePreloaded: false
        }
        this.preloadedDelay = 500
    }
    async componentDidMount(){
        setTimeout(()=>{
        this.setState({imagesArePreloaded:true})
        }, this.preloadedDelay)
    }
    render(){
        return(
            <div>
                <div className={styles['images-container']}>
                    <Image src={'/artom-logo.png'} layout='fill' alt='' priority/>
                    <Image src={'/background-image.svg'} layout='fill' alt='' priority/>
                    <Image src={'/prototype.png'} layout='fill' alt='' priority/>
                    <Image src={'/artwork.jpg'} layout='fill' alt='' priority />
                    <Image src={'/artwork-fractions/1.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/2.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/3.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/4.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/5.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/6.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/7.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/8.jpg'} layout='fill' alt='' priority/>
                    <Image src={'/artwork-fractions/9.jpg'} layout='fill' alt='' priority/>
                </div>
                {this.state.imagesArePreloaded ? 
                    this.props.children:
                    <div className={styles['loader-wrapper']}>
                        <div className={styles['loader']}></div>
                    </div>
                }
            </div>
        )
    }
}

export default PreloaderWrapper
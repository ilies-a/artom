import React from 'react'
import Image from 'next/image'
import styles from './data-loader-wrapper.module.scss'
/* redux */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLoadingIsComplete } from '../../redux/data-loader/data-loader.selectors';
import { setLoadingIsComplete} from '../../redux/data-loader/data-loader.actions';

class DataLoaderWrapper extends React.Component {
    constructor(props){
        super(props)
        this.totalOfImages = 12//21
        this.loadedImages = 0;
    }
    handleImageLoad(){
        this.loadedImages++;
        if(this.loadedImages==this.totalOfImages){
            this.props.setLoadingIsComplete(true)
        }
    }
    render(){
        const dots = new Array(25).fill('');
        return(
            <div>
                <div className={styles['images-container']}>
                    <Image src='/artom-logo.png' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    {/*<Image src='/background-image.svg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>*/}
                    <Image src='/prototype.png' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()} />
                    <Image src='/artwork-fractions/1.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/2.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/3.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/4.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/5.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/6.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/7.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/8.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/artwork-fractions/9.jpg' layout='fill' alt='' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    {/*<Image src='/how-it-works-images/hiw-1.jpg' alt='artwork-fraction' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/how-it-works-images/hiw-2.png' alt='artwork-fraction' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/how-it-works-images/hiw-3.png' alt='artwork-fraction' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/how-it-works-images/hiw-4.png' alt='artwork-fraction' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/how-it-works-images/hiw-5.png' alt='artwork-fraction' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/facebook-logo.png' alt='facebook-logo' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/twitter-logo.png' alt='twitter-logo' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>
                    <Image src='/instagram-logo.png' alt='twitter-logo' layout='fill' priority onLoadingComplete={() => this.handleImageLoad()}/>*/}
                </div>
                {this.props.loadingIsComplete? 
                    this.props.children:
                    <div className={styles['loader-container']}>
                        <div className={styles['loader']}>
                        {
                            dots.map((value, index) =>{
                                return  <div key={index} className={styles['dot']}></div>
                            })
                        }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    loadingIsComplete: selectLoadingIsComplete,
  });
  
const mapDispatchToProps = dispatch =>({
    setLoadingIsComplete : isComplete => dispatch(setLoadingIsComplete(isComplete))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(DataLoaderWrapper);
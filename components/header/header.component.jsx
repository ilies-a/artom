import React from 'react'
import styles from './header.module.scss'
import NavButton from '../nav-button/nav-button.component'
import Image from 'next/image'
{/* redux */}
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedNavButton } from '../../redux/nav-bar/nav-bar.selectors';
import { setSelectedNavButton } from '../../redux/nav-bar/nav-bar.actions';
import { selectScrollToSectionFunction } from '../../redux/homepage-handler/homepage-handler.selectors';
import { scrollToTop } from '../../utils.js';
import { useRouter, push } from 'next/router';

const Header = (props) => {

    const scrollToSection = (section)=>{
        if(props.scrollToSectionFunction !== 'undefined'){
            props.scrollToSectionFunction(section);
            props.setSelectedNavButton(section);
        }
    }
    const {
        pathname
      } = useRouter();
    
    const isIndexPage = pathname=='/'? true:false;

    const handleClickOnSection = (section) => {
        if(isIndexPage){
            scrollToSection(section);
        }else{
            props.setSelectedNavButton(section);
            push('/');
        }
    }
    
    const navButtonIsSelected = (section)=>{
        return props.selectedNavButton == section ? true : false;
    }
    const openPrototypePage = ()=>{
        window.open("https://prototype.artom.io/");
    }


        return (
            <div>
                <div className={styles['main-container']}>
                    <div className={styles['artom-logo']}>
                        <Image src='/artom-logo.png' alt='artom-logo' layout={'fill'} objectFit={'contain'} priority onClick={scrollToTop}/>
                    </div>
                    <div className={styles['nav-container']}>
                        <NavButton text={{desktop:'ABOUT US', mobile:'About Us'}} onClickHandler={handleClickOnSection} section='about-us' isSelected={navButtonIsSelected('about-us')}/>
                        <NavButton text={{desktop:'HOW IT WORKS', mobile:'How it works'}} onClickHandler={handleClickOnSection} section='how-it-works' isSelected={navButtonIsSelected('how-it-works')}/>
                        <NavButton text={{desktop:'FAQ', mobile:'FAQ'}} onClickHandler={handleClickOnSection} section='faq' isSelected={navButtonIsSelected('faq')}/>
                        <NavButton text={{desktop:'STAY IN TOUCH', mobile:'Stay In Touch'}} onClickHandler={handleClickOnSection} section='stay-in-touch' isSelected={navButtonIsSelected('stay-in-touch')}/>
                    <div className={styles['prototype-icon']}>
                        <Image src='/prototype.png' alt='prototype-icon'  layout={'fill'} objectFit={'contain'} priority onClick={()=> openPrototypePage()}/>
                    </div>
                    </div>
                </div>
                <div className={styles['space']}></div>
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
    scrollToSectionFunction: selectScrollToSectionFunction,
    selectedNavButton: selectSelectedNavButton
 });
const mapDispatchToProps = dispatch =>({
    setSelectedNavButton : navButtonName => dispatch(setSelectedNavButton(navButtonName)) 
});
 export default connect(mapStateToProps, mapDispatchToProps)(Header);
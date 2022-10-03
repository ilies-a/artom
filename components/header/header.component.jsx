import React from 'react'
import styles from './header.module.scss'
import NavButton from '../nav-button/nav-button.component'
{/* redux */}
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedNavButton } from '../../redux/nav-bar/nav-bar.selectors';
import { setSelectedNavButton } from '../../redux/nav-bar/nav-bar.actions';
import { selectScrollToSectionFunction } from '../../redux/homepage-handler/homepage-handler.selectors';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    scrollTo = (section)=>{
        if(this.props.scrollToSectionFunction !== 'undefined'){
            this.props.scrollToSectionFunction(section);
            this.props.setSelectedNavButton(section)
        }
    }
    openPrototypePage = ()=>{
        window.open("https://artom.io/");
    }
    navButtonIsSelected = (section)=>{
        return this.props.selectedNavButton == section ? true : false;
    }

    render(){
        return (
            <div>
                <div className={styles['main-container']}>
                    <img className={styles['artom-logo']} src='artom-logo.png' onClick={()=> this.scrollTo('')}/>
                    <div className={styles['nav-container']}>
                        <NavButton text='ABOUT US' onClickHandler={this.scrollTo} section='about-us' isSelected={this.navButtonIsSelected('about-us')}/>
                        <NavButton text='HOW IT WORKS' onClickHandler={this.scrollTo} section='how-it-works' isSelected={this.navButtonIsSelected('how-it-works')}/>
                        <NavButton text='FAQ' onClickHandler={this.scrollTo} section='faq' isSelected={this.navButtonIsSelected('faq')}/>
                        <NavButton text='STAY IN TOUCH' onClickHandler={this.scrollTo} section='stay-in-touch' isSelected={this.navButtonIsSelected('stay-in-touch')}/>
                        <img src='/prototype.png' className={styles['prototype-icon']} onClick={()=>this.openPrototypePage()}/>
                    </div>
                </div>
                <div className={styles['space']}></div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    scrollToSectionFunction: selectScrollToSectionFunction,
    selectedNavButton: selectSelectedNavButton
 });
const mapDispatchToProps = dispatch =>({
    setSelectedNavButton : navButtonName => dispatch(setSelectedNavButton(navButtonName)) 
});
 export default connect(mapStateToProps, mapDispatchToProps)(Header);
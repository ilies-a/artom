import React from 'react'
import styles from './header.module.scss'
import NavButton from '../nav-button/nav-button.component'
{/* redux */}
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectScrollToSectionFunction } from '../../redux/homepage-handler/homepage-handler.selectors';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedNavButton: undefined
        }
    }
    scrollTo = (section)=>{
        if(this.props.scrollToSectionFunction !== 'undefined'){
            this.props.scrollToSectionFunction(section);
            this.setState({selectedNavButton: section});
        }
    }
    openPrototypePage = ()=>{
        window.open("https://artom.io/");
    }
    navButtonIsSelected = (section)=>{
        return this.state.selectedNavButton == section ? true : false;
    }

    render(){
        return (
            <div>
                <div className={styles['main-container']}>
                    <img className={styles['artom-logo']} src='artom-logo.png'/>
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
 });
 
 export default connect(mapStateToProps, null)(Header);
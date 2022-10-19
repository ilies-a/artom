import Image from 'next/image'
import Link from 'next/link';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styles from './footer.module.scss'
import { scrollToTop } from '../../utils.js';

import { selectSelectedNavButton } from '../../redux/nav-bar/nav-bar.selectors';
import { setSelectedNavButton } from '../../redux/nav-bar/nav-bar.actions';
import { selectScrollToSectionFunction } from '../../redux/homepage-handler/homepage-handler.selectors';

const Footer = (props)=>{
  const scrollToSection = (section)=>{
    if(props.scrollToSectionFunction !== 'undefined'){
        props.scrollToSectionFunction(section);
        props.setSelectedNavButton(section);
    }
  }
    return(
        <footer className={styles.footer}>
        <div className={styles['footer-block-1']}>
          <div className={styles['artom-logo-container']}>
            <div className={styles['artom-logo']} onClick={scrollToTop}>
              <Image className={styles['artom-logo']} src='/artom-logo.png' alt='artom-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
          </div>
            <ul>
              <li><span onClick={()=> scrollToSection('')}>Home</span></li>
              <li><span onClick={()=> scrollToSection('about-us')}>About Us</span></li>
              <li><span onClick={()=> scrollToSection('how-it-works')}>How it Works</span></li>
              <li><span onClick={()=> scrollToSection('faq')}>FAQ</span></li>
              <li><span onClick={()=> scrollToSection('stay-in-touch')}>Stay in Touch</span></li>
            </ul>

            <div><span>White Paper</span></div>
            <a className={styles['artom-email']}><span>hello@artom.io</span></a>
        </div>
        <div className={styles['footer-block-2']}>
          <div><span><Link href="/terms-and-conditions">Terms & Conditions</Link></span></div>
          <div><span><Link href="/fraction-terms">Fraction Terms</Link></span></div>
          <div><span>artom.io &#169; 2022</span></div>
        </div>
      </footer>
    )
}

const mapStateToProps = createStructuredSelector({
  scrollToSectionFunction: selectScrollToSectionFunction,
  selectedNavButton: selectSelectedNavButton
});
const mapDispatchToProps = dispatch =>({
  setSelectedNavButton : navButtonName => dispatch(setSelectedNavButton(navButtonName)) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
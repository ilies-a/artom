import Image from 'next/image'
import Link from 'next/link';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styles from './footer.module.scss'
import { scrollToTop } from '../../utils.js';

import { selectSelectedNavButton } from '../../redux/nav-bar/nav-bar.selectors';
import { setSelectedNavButton } from '../../redux/nav-bar/nav-bar.actions';
import { selectScrollToSectionFunction } from '../../redux/homepage-handler/homepage-handler.selectors';
import { useRouter, push } from 'next/router';

const Footer = (props)=>{
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

  const handleClickOnArtomLogo = ()=>{
    if(isIndexPage){
      scrollToTop();
    }else{
        props.setSelectedNavButton("");
        push('/');
    }
  }

    return(
        <footer className={styles.footer}>
        <div className={styles['footer-block-1']}>
          <div className={styles['artom-logo-container']}>
            <div className={styles['artom-logo']} onClick={handleClickOnArtomLogo}>
              <Image className={styles['artom-logo']} src='/artom-logo.png' alt='artom-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
          </div>
            <ul>
              <li><span onClick={()=> handleClickOnSection('')}>Home</span></li>
              <li><span onClick={()=> handleClickOnSection('about-us')}>About Us</span></li>
              <li><span onClick={()=> handleClickOnSection('how-it-works')}>How it Works</span></li>
              <li><span onClick={()=> handleClickOnSection('faq')}>FAQ</span></li>
              <li><span onClick={()=> handleClickOnSection('stay-in-touch')}>Stay in Touch</span></li>
            </ul>

            <div><span><Link href="/white-paper">White Paper</Link></span></div>
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
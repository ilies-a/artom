import React from 'react'
import styles from '../styles/Home.module.scss'
import HomePageAnim from '../components/home-page-anim/home-page-anim.component'
import HowItWorksCards from '../components/how-it-works-cards/how-it-works-cards.component'
import Image from 'next/image'
import { scrollTo } from "seamless-scroll-polyfill";
import FaqList from '../components/faq-list/faq-list.component'
import Footer from '../components/footer/footer.component'
import Spinner from '../components/spinner/spinner.component'
/* redux */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectScrollToSectionFunction } from '../redux/homepage-handler/homepage-handler.selectors';
import { selectSelectedNavButton } from '../redux/nav-bar/nav-bar.selectors';
import { setScrollToSectionFunction } from '../redux/homepage-handler/homepage-handler.actions';
import { setSelectedNavButton } from '../redux/nav-bar/nav-bar.actions';

import { 
  LARGE_SCREEN_HEADER_HEIGHT,
  SMALL_SCREEN_HEADER_HEIGHT,
  MEDIUM_SCREEN_MAX_WIDTH,
} from '../styles/variables';

import {
  API_URL
} from '../global-variables'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      emailRequestStatus: null,
      emailRequestErrMsg: null
    };

    this.sectionsContainer = React.createRef()
    this.section2 = React.createRef()
    this.section1 = React.createRef()
    this.section2 = React.createRef()
    this.section3 = React.createRef()
    this.section4 = React.createRef()
    this.mainContainer = React.createRef()
    this.enableSetSelectedNavButton = true;
  }
  async componentDidMount(){
    this.props.setScrollToSectionFunction(this.scrollToSection)
    this.addScrollListenerToWindow();
    if(this.props.selectedNavButton!==null){
      this.scrollToSection(this.props.selectedNavButton);
    }
  }

  componentWillUnmount(){
    this.removeScrollListenerToWindow();
    this.props.setSelectedNavButton(null);
  }

  addScrollListenerToWindow(){
    window.addEventListener('scroll', this.handleScroll);
  }
  removeScrollListenerToWindow(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  getDesktopOrMobileHeight(){
    return window.innerWidth>MEDIUM_SCREEN_MAX_WIDTH ? LARGE_SCREEN_HEADER_HEIGHT : SMALL_SCREEN_HEADER_HEIGHT;
  }

  handleScroll = event => {
    if(this.enableSetSelectedNavButton){
      this.getCurrentScrolledSection(window.scrollY);
    }
  };

  getCurrentScrolledSection = (scrollY) =>{

    const vh = window.innerHeight;
    const shift = -this.getDesktopOrMobileHeight();
    const section1Top = this.section1.current.offsetTop - vh/2 + shift;
    const section2Top = this.section2.current.offsetTop - vh/2 + shift;
    const section3Top = this.section3.current.offsetTop - vh/2 + shift;
    const section4Top = this.section4.current.offsetTop - vh/2 + shift;
    const section4Bottom = section4Top+this.section4.current.offsetHeight;

    let sectionToSelect

    if(scrollY>=section1Top && scrollY<=section2Top)
    {
      sectionToSelect='about-us'
    }
    else if(scrollY>section2Top && scrollY<=section3Top)
    {
      sectionToSelect='how-it-works'
    }
    else if(scrollY>section3Top && scrollY<=section4Top)
    {
      sectionToSelect='faq'
    }
    else if(scrollY>section4Top && scrollY<=section4Bottom)
    {
      sectionToSelect='stay-in-touch'
    }
    else{
      sectionToSelect=''
    }
    this.props.setSelectedNavButton(sectionToSelect)

  }
  
  scrollToSection = (section)=>{
    var sectionRef
    switch(section) {
      case 'about-us':
        sectionRef = this.section1
        break
      case 'how-it-works':
        sectionRef = this.section2
        break
      case 'faq':
        sectionRef = this.section3
        break;
      case 'stay-in-touch':
        sectionRef = this.section4
        break;
      default:
        sectionRef = this.mainContainer
        break
    }
    this.disableSetSelectedNavButtonForShortTime()
    this.scrollToY(sectionRef.current.offsetTop-this.getDesktopOrMobileHeight())
  }

  scrollToY = (y) =>{
    scrollTo(window, { behavior: "smooth", top: y});
  }

  disableSetSelectedNavButtonForShortTime(){
    this.enableSetSelectedNavButton = false;
    setTimeout(()=>{
      this.enableSetSelectedNavButton = true;
    },500)
  }

  handleEmailChange = (event) =>{
    this.setState({"email": event.target.value});
  }

  sendEmail = async () => {
    try {
      this.setState({emailRequestStatus: "pending"});
      const res = await fetch(`${API_URL}/emails/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: this.state.email.trim()})
      });
      if(res.ok){
        this.setState({emailRequestStatus: "success"});
      }
      else{
        let emailRequestErrMsg;
        switch (res.status) {
          case 400:
            emailRequestErrMsg = "Oops! Your email is invalid.";
            break
          case 403:
            emailRequestErrMsg = "We already saved your email. Thank you for your subscribing!";
            break;
          default:
            emailRequestErrMsg = "Sorry, an internal error has occurred. Please try again later.";
            break;
        }
        this.setState({emailRequestStatus: "failure", emailRequestErrMsg});
      }
    } catch (err) {
      this.setState({emailRequestStatus: "failure", emailRequestErrMsg: "Sorry, an internal error has occurred. Please try again later."});
    }
  }

  render(){
    return (
      <div className={styles.container} ref={this.mainContainer}>
        <HomePageAnim/>
        <div className={styles['sections-container']} ref={this.sectionsContainer}>
        <section className={`${styles['section']} ${styles['about-us']}`} ref={this.section1}>
          <div className={styles['about-us-content-container']}>
            <div className={styles['about-us-title-and-text-container']}>
              <h1 className={`${styles['section-title']} ${styles['about-us-title']}`} >A Diversfied<br/>Portfolio</h1>
              <div className={styles['about-us-text']}>
                <p>
                  artom.io is a unique community-driven platform that enables you to buy, sell and trade shares of blue-chip art using blockchain technology.
                </p>
                <p>
                  Members of the artom.io Community can build a diversified portfolio of iconic artworks curated by our industry-leading research team.
                </p>
              </div>
            </div>
            <div className={styles['about-us-illustration']}>
              <Image src='/about-us-illustration.png' alt='about-us-illustration' layout={'fill'} objectFit={'contain'} priority/>
            </div>
          </div>
        </section>
        <section className={`${styles['section']} ${styles['how-it-works']}`} ref={this.section2}>
          <h1 className={`${styles['section-title']} ${styles['how-it-works-title']}`}>How It Works</h1>
          <div className={styles['how-it-works-cards-wrapper']}>
            <HowItWorksCards/>
          </div>
        </section>
        <section className={`${styles['section']} ${styles['faq']}`} ref={this.section3}>
          <h1 className={`${styles['section-title']} ${styles['faq-title']}`} >Frequently Asked Questions</h1>
          <FaqList/>
        </section>
        <section className={`${styles['section']} ${styles['stay-in-touch']}`} ref={this.section4}>
          <h1 className={`${styles['section-title']} ${styles['stay-in-touch-title']}`} >Stay In Touch</h1>
          <div className={styles['email-input-container']}>
            <input type='text' className={styles['stay-in-touch-email-input']} placeholder='Email...' onChange={(e) => {this.handleEmailChange(e)}}/>
            <button onClick={this.sendEmail}>Ok</button>
            { this.state.emailRequestStatus === "pending" ? <Spinner/>:
              this.state.emailRequestStatus === "success" ? <span className={styles['check-symbol']}>&#10003;</span>:null}
          </div>
          {
            this.state.emailRequestStatus === "success" ? <div>Thank you for your subscribing!</div>:
            this.state.emailRequestStatus === "failure" ? <div>{this.state.emailRequestErrMsg}</div>:null
          }
          <div className={styles['social-network-buttons-container']}>
            <div className={styles['social-network-logo']}>
              <Image src='/facebook-logo.png' alt='facebook-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
            <div className={styles['social-network-logo']}>
              <Image src='/twitter-logo.png' alt='twitter-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
            <div className={styles['social-network-logo']}>
              <Image src='/instagram-logo.png' alt='instagram-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
            <div className={styles['social-network-logo']}>
              <Image src='/discord-logo.png' alt='discord-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
            <div className={styles['social-network-logo']}>
              <Image src='/telegram-logo.png' alt='telegram-logo' layout={'fill'} objectFit={'contain'} priority/>
            </div>
          </div>
        </section>
      </div>
    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  scrollToSectionFunction: selectScrollToSectionFunction,
  selectedNavButton: selectSelectedNavButton
});

const mapDispatchToProps = dispatch =>({
  setScrollToSectionFunction : scrollToSectionFunction => dispatch(setScrollToSectionFunction(scrollToSectionFunction)),
  setSelectedNavButton : navButtonName => dispatch(setSelectedNavButton(navButtonName)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

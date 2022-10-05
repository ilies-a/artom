import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = (props)=>{
    return(
        <footer className={styles.footer}>
        <div className={styles['footer-block-1']}>
          <div className={styles['artom-logo-container']}>
            <div className={styles['artom-logo']} onClick={()=> props.handleClick('')}>
              <Image className={styles['artom-logo']} src='/artom-logo.png' alt='artom-logo' layout={'fill'} objectFit={'contain'}/>
            </div>
          </div>
            <ul>
              <li><span onClick={()=> props.handleClick('')}>Home</span></li>
              <li><span onClick={()=> props.handleClick('about-us')}>About Us</span></li>
              <li><span onClick={()=> props.handleClick('how-it-works')}>How it Works</span></li>
              <li><span onClick={()=> props.handleClick('faq')}>FAQ</span></li>
              <li><span onClick={()=> props.handleClick('stay-in-touch')}>Stay in Touch</span></li>
            </ul>

            <div><span>White Paper</span></div>
            <a className={styles['artom-email']}><span>hello@artom.io</span></a>
        </div>
        <div className={styles['footer-block-2']}>
          <div><span>Terms & Conditions</span></div>
          <div><span>Privacy Policy</span></div>
          <div><span>artom.io &#169; 2022</span></div>
        </div>
      </footer>
    )
}

export default Footer
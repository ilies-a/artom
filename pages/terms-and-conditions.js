import styles from '../styles/terms-and-conditions-and-fraction-terms.module.scss';

const TermsAndConditions = () =>{
    return(
        <div className={styles['main-container']}>
            <h1>Terms & Conditions</h1>
            <div className={`${styles['list']}  ${styles['external-list']}`}>
                <div>
                    <h3>What these terms apply to</h3>
                    <div className={`${styles['list']}  ${styles['internal-list']}`}>
                        <div>
                            artom project operates a platform, which is accessible through the artom.io website: http://artom.io, 
                            which allows users to search for and purchase fractions of real physical artworks (“The Service”).
                        </div>
                        <div>
                            This document and any documents referred to within it (collectively, the &quot;Fraction Terms&quot;) set out the 
                            terms on which we will issue and sell Fractions to you, and the rights attaching to those Fractions. You 
                            will need to agree to these Fraction Terms before purchasing any Fractions issued by artom.io. It is important 
                            that you read and understand the Fraction Terms, and in particular what rights are attached to the Fractions 
                            issued by artom.io and the risks associated with purchasing Fractions, before you subscribe to purchase Fractions.
                        </div>
                        <div>
                            If you do not agree to these Fraction Terms, you should not buy any Fractions through the Service.
                        </div>
                        <div>
                            If you are purchasing Fractions from anyone other than artom.io platform, please see paragraph 18.2 below which 
                            sets out terms that apply to your purchase and ownership of the Fractions.                        
                        </div>
                    </div>
                </div>
            

                <div>
                    <h3>Information about us</h3>
                    <div className={`${styles['list']}  ${styles['internal-list']}`}>
                        <div>
                            artom.io is provided Artom Project S.L a Spanish company with its registered address at [Address to be included 
                            once company is domiciliated] (&quot;artom&quot;, “artom.io” &quot;we&quot;, &quot;our&quot; or &quot;us&quot;). If you would like to contact us, please 
                            email us at info@artom.io. 
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Information about you</h3>
                    <div className={`${styles['list']}  ${styles['internal-list']}`}>
                        <div>
                            Your privacy is important to us. Please read our Privacy Notice at https://www.artom.io./privacy-policy to understand 
                            how we collect, use and share your private data.
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default TermsAndConditions;
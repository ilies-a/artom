import { ItemListContainer, TitleListContainer } from '../styles/custom-list.styles';
import styles from '../styles/terms-and-conditions-and-fraction-terms.module.scss';

const TermsAndConditions = () =>{
    var counter = -1;

    const getIncrementedCounter = () => {
        counter++;
        return counter;
    }

    return(
        <div className={styles['main-container']}>
            <h1 className={styles['title']}>Terms & Conditions</h1>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Welcome to the artom.io</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                artom project operates a platform, which is accessible through the artom.io website: http://artom.io, which allows users to search for and purchase fractions of real physical artworks (“The Service”). 
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Information about us</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                artom.io is provided Artom project S.L a Spanish company with its registered address at [Address to be included once company is domiciliated] (&quot;artom&quot;, “artom.io” &quot;we&quot;, &quot;our&quot; or &quot;us&quot;). If you would like to contact us, please email us at info@artom.io. 
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Information about you</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                Your privacy is important to us. Please read our Privacy Notice at https://www.artom.io./privacy-policy to understand how we collect, use and share your private data.

                </li>
            </ItemListContainer>

            
            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Your relationship with us</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                These terms and conditions (the &quot;Terms & Conditions&quot;) set out the terms on which we will provide the artom.io to you. It is important that you read and understand these Terms & Conditions before using the Service. We will ask you to agree to these Terms and Conditions when you using the service. You will not be allowed to use the service if you do not agree to these Terms & Conditions. 
                </li>
                <li>
                Additional terms will apply to the sale of Fractions to you through the artom.io platform, which are set out at https://www.artom.io/fraction-terms (&quot;Fraction Terms&quot;). You should ensure that you read and understand these Fraction Terms before you buy any Fractions through the artom.io platform, as we will ask you to agree to them when you buy Fractions through the Service.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Important warnings about your use of the Service</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                Buying and selling Fractions
                </li>
                <li>
                The Service is not available to residents of certain countries. For more information about the restricted countries please visit https://www.artom.io/restricted-countries.

                </li>
                <li>
                Buying and selling Fractions and other token is still relatively new and unregulated in many jurisdictions. The regulatory status of blockchain technologies and affiliated cryptocurrencies and token under existing laws in many jurisdictions is therefore unclear. If you are in a jurisdiction where using the Service through the artom.io platform is or becomes illegal, your access to the may be suspended. You should ensure that you are able to use the Service lawfully to buy or sell Fractions. 

                </li>
                <li>
                Dealing or trading in Fractions and other Tokens is also inherently risky, as the prices of the physical artwork can change rapidly. We cannot guarantee that the value of Fractions that you purchase will not decrease. You therefore buy or sell any Fractions through the Service at your own risk.

                </li>
                <li>
                Keeping your crypto wallet secure

                </li>
                <li>
                When signing up to the artom.io Service, you will be able to create a new crypto &quot;wallet&quot; to execute transactions involving Fractions or link an existing supported wallet to your account on the artom.io Service. In either case, your crypto wallet is only accessible through a combination of a particular private key and public key. The way your private key is secured and stored will vary depending on which third-party service you use to create your crypto wallet. For instance, your private key may be encrypted and stored by your wallet provider, linked to your phone number or stored on your device.

                </li>
                <li>
                You should ensure that you take all of the steps recommended by your wallet provider to keep your private key secure. You will not be able to gain access to the Fractions or any other token in your wallet without it, and if someone else gains access to your private key they may be able to access and execute transactions involving your Fractions and other token. We will not be able to reissue any Fractions to you if they are stolen or if you lose access to them, and we will not be responsible to you for any losses that you suffer if you lose your private key or if your private key is stolen.

                </li>
                <li>
                Tax
                </li>
                <li>
                The purchase and sale of Fractions may have tax consequences for you. You are responsible for ensuring that you comply with all tax obligations applicable to your purchase and sale of Fractions. artom.io shall not be deemed for any amounts you are required to pay in tax or any penalties you face in connection with your purchase or sale of Fractions.

                </li>
                <li>
                Suspicious activity

                </li>
                <li>
                We may monitor transactions made using the Service for suspicious activity and fraud. If we suspect that you are using the Service in an unlawful manner, we may immediately end or suspend your use to your account.

                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Accessing the Service</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
            <li>
            In order to use the Service, you will need to connect to the platform. You can do this by:
                <ul>
                                    <li>
                                    entering and confirming your email address via our third-party service provider; 
                                    </li>
                                    <li>
                                    or connecting an existing third-party wallet, such as Metamask.
                                    </li>
                            </ul>
                </li>
                <li>
                You are responsible for maintaining the confidentiality of your password and for any activities that occur under your Account.
                </li>
                <li>
                You must be 18 years or older and capable in your country of residence of entering into a legally binding agreement to use the Service. Resident of countries listed as restricted shall not be able to access and use the service. Please check the list of restricted countries in the following link: https://www.artom.io/restricted-countries.

                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Setting up or connecting your crypto wallet</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>You will need to set up a new crypto wallet or connect an existing crypto wallet to your account, in each case using the features and functionalities of the Service.
                </li>
                <li>
                artom.io does not set up, operate nor manage crypto wallets. Notwithstanding, should you want to set up a new crypto wallet through the artom.io platform you can do so through a third-party integrated wallet provider. Your use of this crypto wallet is subject to the third party’s terms and conditions. You will be asked to agree to the third party’s Terms when you set up your crypto wallet with, so please ensure that you have read and understood them before proceeding with creating a new crypto wallet through the Service.
                </li>
            </ItemListContainer>
            
            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Your right to use the Service</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                The materials and content comprising the Service is the sole property of Artom Project S.L or Artom Project S.L third-party licensors, and we give you permission to use these materials and content for the sole purpose of using the Service in accordance with these Terms and Conditions.
                </li>
                <li>
                Your right to access and use the Service is personal and not transferable. Your right to use the Service does limit us from giving other people the right to use the access or use the Service.
                </li>
                <li>
                We allow you to use or download the App for use on your device in order to access and use the Service in accordance with these Terms and Conditions, and we grant you a non-exclusive, personal, non-transferable license for this purpose only.
                </li>
                <li>
                Unless allowed by these Terms and Conditions and as permitted by the functionality of the Service, you agree:
                <ul>
                                    <li>
                                    not to copy any portion of the Service and/or App;
                                    </li>
                                    <li>
                                    not to give or sell or otherwise make available any portion of the Service and/or App to anybody else;
                                    </li>
                                    <li>
                                    not to change any portion of the Service and/or App in any way;
                                    </li>
                                    <li>
                                    not to look for or access the code of any portion of the Service and/or App that we have not expressly published publicly for general use.
                                    </li>
                            </ul>
                </li>
                <li>
                You agree that all confidential information, copyright and other intellectual property rights in the Service and/or App belong to Artom Project S.L or the people who have licensed those rights to Artom Project S.L.

                </li>
                <li>
                You agree that you have no rights in or to any portion of the Service and/or App other than the right to use it in accordance with these Terms & Conditions.

                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Fees</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                The access to the artom.io Platform and the use of the artom.io Services are totally free of charge. Notwithstanding, purchase of fractions through the artom.io platform and the exercise of certain rights granted to the holders of Fractions issued by artom.io are subject to certain fees. Such fees are further detailed in the Fraction Terms. 
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>App Store Terms</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                By using this platform, users acknowledge that these Terms & Conditions set out the terms of the agreement between Artom Project S.L and the user only, and do not apply to your relationship with Google Ireland Limited, Apple, Inc. or any other provider of an app store or distribution platform from which you download the artom.io App (the &quot;Store Provider&quot;).
                </li>
                <li>
                Artom Project S.L is the sole responsible for the artom.io App, any content made available through the artom.io App and any support or maintenance in respect of the artom.io App.  
                </li>
                <li>
                Artom Project S.L is the sole responsible in the event that the artom.io app does not comply with any warranties or other promises (including any promises made in respect of its functionality, suitability or fitness for purpose). To the maximum extent permitted by law, the Store Provider will not be responsible to you for any claims in relation to the artom.io App.
                </li>
                <li>
                In the event of any claim that the artom.io App infringes another person's intellectual property rights, Artom Project S.L will be solely responsible for investigating, defending, settling or otherwise dealing with any such intellectual property infringement claim.
                </li>
                <li>
                You acknowledge that:
                <ul>
                                    <li>
                                    you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country; and
                                    </li>
                                    <li>
                                    you are not listed on any U.S. Government list of prohibited or restricted parties.
                                    </li>
                                    <li>
                                    The Store Provider (and members of its corporate group) are third party beneficiaries under these Terms and Conditions and have the right to enforce these Terms and Conditions against you.  
                                    </li>
                            </ul>
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Rules of Acceptable Use</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                In addition to the other requirements within these Terms & Conditions, this section describes specific rules that apply to your use of the artom.io Service (the &quot;Rules of Acceptable Use&quot;).
                </li>
                <li>
                When using the artom.io Service you must not:
                <ul>
                                    <li>
                                    circumvent, disable or otherwise interfere with any security related features of the Service;
                                    </li>
                                    <li>
                                    permit another person to use the Service on your behalf unless such person is authorized by you;
                                    </li>
                                    <li>
                                    use the Service if we have suspended or banned you from using it;
                                    </li>
                                    <li>
                                    advocate, promote or engage in any illegal or unlawful conduct, including any criminal activity, fraud or money laundering, or conduct that causes damage or injury to any person or property;
                                    </li>
                                    <li>
                                    modify, interfere, intercept, disrupt or hack the Service;
                                    </li>
                                    <li>
                                    misuse the Service by knowingly introducing viruses, Trojans, worms, logic bombs or other material which would harm the Service or the equipment of any other user of the Service;
                                    </li>
                                    <li>
                                    collect any data from the Service other than in accordance with these Terms & Conditions;
                                    </li>
                                    <li>
                                    use any automated system, including without limitation &quot;robots&quot;, &quot;spiders&quot; or &quot;offline readers&quot; to access the Service in a manner that send more request messages to the Service than a human can reasonably produce in the same period of time.
                                    </li>
                            </ul>
                </li>
                <li>
                We may monitor the transactions you execute through the Service to ensure that you comply with the Rules of Acceptable Use, including to ensure that you do not purchase any Fractions with funds obtained illegally.

                </li>
                <li>
                Failure to comply with Rules of Acceptable Use constitutes a serious breach of these Terms and Conditions, and may result in our taking all or any of the following actions (with or without notice):
                <ul>
                                    <li>
                                    immediate, temporary or permanent withdrawal of your right to use the Service;
                                    </li>
                                    <li>
                                    issuing of a warning to you;
                                    </li>
                                    <li>
                                    legal action against you including proceedings for reimbursement of all costs (including, but not limited to, reasonable administrative and legal costs) resulting from the breach;
                                    </li>
                                    <li>
                                    disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
                                    </li>
                            </ul>
                </li>
                <li>
                The responses described in paragraph 11.4 are not limited, and we may take any other action we reasonably deem appropriate.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Ending our relationship</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If at any time you do not feel that you can agree to these Terms & Conditions or any changes made to the Terms and Conditions or the Service, you must immediately stop using the Service.
                </li>
                <li>
                We may immediately end your use of the Service if you break the Rules of Acceptable Use, any other important rule(s), or Terms & Conditions we set for accessing and using the Service including these Terms & Conditions.
                </li>
                <li>
                We may also withdraw the Service as long as we give you reasonable notice that we plan to do this.
                </li>
                <li>
                If you or we end your use of the Service or we withdraw the Service as described in this section, you will lose any rights you have to use the Service. We will not offer you compensation for any losses you might suffer as a result.
                </li>
                <li>
                The termination of your use of the Service shall not affect any of your obligations to pay any sums due to us.
                </li>
                <li>
                Nothing in this paragraph 12 affects any legal rights you may have under the law of the country in which you are resident.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Our liability/responsibility to you</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We do our best to ensure that the Service itself is of a reasonable standard and quality and matches any descriptions we have provided to you. However, the Service may contain some content owned or developed by third parties, and your use of certain functionalities of Service requires the Service to interact with services and content provided by third parties (such as your crypto wallet). As we do not own or produce such third-party content or services, we cannot be responsible for them in any way. We will not be responsible to you if any transaction you enter into through Service fails as a result of any error or unavailability of these third-party services or the networks they rely on (such as Ethereum, Polygon and other blockchain networks).
                </li>
                <li>
                We will do our best to ensure that any elements of the Service that require a connection to the internet will always be available to you. However, due to the nature of the internet and technology, any such features of the Service may be unavailable if we need to undertake any emergency or scheduled maintenance on our systems. This means that we are unable to promise that your use of those features of the Service will always be uninterrupted, without delays, error-free or meet your expectations. We will notify you of any planned outages; however, we may not be able to do this if any outages are caused by circumstances outside of our control.
                </li>
                <li>
                In any case, we will never be responsible to you for any loss or damage that is not reasonably foreseeable or that is caused by a failure by you to comply with these Terms & Conditions or a failure by you to take reasonable care when using the Service. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time you agree to these Terms & Conditions, both we and you knew it might happen.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Resolving disputes</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you have a dispute with us relating to the Service, we would welcome the opportunity to try and make things right and resolve the dispute with you ourselves. In the first instance please contact us using the details set out in paragraph 2 of these Terms and Conditions so that we can attempt to resolve the dispute informally through our internal complaints handling process.
                </li>
                <li>
                If you are in the European Economic Area, you may (but are not obliged to) seek resolution of any dispute with us through consumer mediation services. You can do this through the European Online Dispute Resolution (ODR) platform, available at this link: https://ec.europa.eu/consumers/odr/.
                </li>
                <li>
                In the unlikely event that we have not been able to resolve a dispute informally, we will discuss and agree with you the most effective way of resolving our dispute through a formal dispute resolution process.
                </li>
                <li>
                This paragraph does not affect your statutory rights.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Changes to the Service</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We are constantly updating and improving the Service to try and find ways to provide you with new and innovative features and services. Improvements and updates are also made to reflect changing technologies, tastes, behaviors and the way people use the Internet and the Service.
                </li>
                <li>
                In order to do this, we may need to update, reset, stop offering and/or supporting a particular part of the Service, or feature relating to the Service (&quot;changes to the Service&quot;). These changes to the Service may affect your past activities on the Service and certain features that you use (&quot;Service Elements&quot;). Any changes to the Service could involve your Service Elements being deleted or reset.
                </li>
                <li>
                You agree that a key characteristic of the Service is that changes to the Service will take place over time and this is an important basis on which we grant you access to the Service. Once we have made changes to the Service, your continued use of the Service will show that you have accepted any changes to the Service. You are always free to stop using the Service.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Changes to the documents</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                The current version of the Terms and Conditions contains the only terms and conditions that apply to our relationship with you.
                </li>
                <li>
                We intend to rely on these Terms & Conditions as setting out the written terms of our agreement with you for the provision of the Service. If part of the Terms and Conditions cannot be enforced then the remainder of the Terms and Conditions will still apply to our relationship.
                </li>
                <li>
                If you do not comply with these Terms and Conditions and we do not take action immediately, this does not mean we have given up any right we have and we may still take action in the future.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Law</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you are in Spain, Spanish law will apply to all disputes and the interpretation of these Terms and Conditions. The Spanish courts will have non-exclusive jurisdiction over any dispute arising from or related to your use of the Service. This does not affect your rights under the law of the country in which you are resident, including (where applicable) your right to have a dispute in relation to your use of the Service heard in the courts of that country. 
                </li>
                <li>
                If you are in another country of the European Economic Area, these Terms and Conditions are governed by the law of the country in which you are resident, and we agree that any dispute arising from or related to your use of the Service will be heard in the courts of that country.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Contact, feedback and complaints</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We value hearing from our users, and are always interested in learning about ways we can improve the Service. By providing your feedback you agree that you are giving up any rights you have in your feedback so that we may use and allow others to use it without any restriction and without any payment to you.                
                </li>
            </ItemListContainer>
        </div>
    );
}

export default TermsAndConditions;
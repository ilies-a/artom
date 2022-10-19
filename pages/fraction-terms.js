import { ItemListContainer, TitleListContainer } from '../styles/custom-list.styles';
import styles from '../styles/terms-and-conditions-and-fraction-terms.module.scss';

const FractionTerms = () =>{
    var counter = -1;

    const getIncrementedCounter = () => {
        counter++;
        return counter;
    }

    return(
        <div className={styles['main-container']}>
            <h1 className={styles['title']}>Fraction Terms</h1>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>What these terms apply to</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                    artom project operates a platform, which is accessible through the artom.io website: http://artom.io, which 
                    allows users to search for and purchase fractions of real physical artworks (“The Service”). 
                </li>
                <li>
                    This document and any documents referred to within it (collectively, the &quot;Fraction Terms&quot;) set out the terms 
                    on which we will issue and sell Fractions to you, and the rights attaching to those Fractions. You will need 
                    to agree to these Fraction Terms before purchasing any Fractions issued by artom.io. It is important that you 
                    read and understand the Fraction Terms, and in particular what rights are attached to the Fractions issued by 
                    artom.io and the risks associated with purchasing Fractions, before you subscribe to purchase Fractions.
                </li>
                <li>
                    If you do not agree to these Fraction Terms, you should not buy any Fractions through the Service.
                </li>
                <li>
                    If you are purchasing Fractions from anyone other than artom.io platform, please see paragraph 18.2 below which 
                    sets out terms that apply to your purchase and ownership of the Fractions.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Information about us</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                    artom.io is provided Artom Project S.L a Spanish company with its registered address at [Address to be included once 
                    company is domiciliated] (&quot;artom&quot;, “artom.io” &quot;we&quot;, &quot;our&quot; or &quot;us&quot;). If you would like to contact us, please email us 
                    at info@artom.io. 
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Information about you</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                    Your privacy is important to us. Please read our Privacy Notice at https://www.artom.io./privacy-policy to understand how 
                    we collect, use and share your private data.
                </li>
            </ItemListContainer>

            
            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Important information about Fractions issued by artom.io</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                    Eligibility
                </li>
                <li>
                    The sale of Fractions in accordance with these Fraction Terms is not being offered in any state or jurisdiction where the offer 
                    or sale is not permitted. To view a list of the countries where the offer or sale of Fractions is not permitted, please visit 
                    https://www.artom.io/restricted-countries.
                </li>
                <li>
                    You are not permitted to purchase Fractions through the Service if you are resident in the United States.
                </li>
                <li>
                    Rights associated with Fractions
                </li>
                <li>
                    Fractions are not investment tools. Fractions are not an offer for the sale or purchase of any financial or security tools or 
                    participation in any kind of investment option.
                </li>
                <li>
                    Fractions are not an investment in Artom Project S.L and, other than as set out in these Fraction Terms, they do not give you any 
                    rights with respect to Artom Project S.L, our revenues or assets (including any asset to which a Fraction issued by us relates). 
                    This means that, other than as expressly set out in these Fraction Terms, you will not own any part of Artom Project S.L or its 
                    assets, have any rights to receive any amount on the dissolution or winding up of Artom Project S.L, or any right to information 
                    about us or our affiliates, to receive any dividends or to vote on any matters concerning Artom Project S.L or its affiliates. When 
                    you buy Fractions, you are not making a loan to Artom Project S.L and, other than as set out in these Fraction Terms, any amount you 
                    pay us when you buy Fractions will not be repayable to you.
                </li>
                <li>
                    The legal status of tokens such as Fractions is unclear or unsettled in many jurisdictions. Changes in applicable laws may affect any 
                    rights and functionalities associated with the Fractions.
                </li>
                <li>
                    If you have any questions about these Fraction Terms or the Fractions issued by artom.io you should speak to your stockbroker, bank manager, 
                    solicitor, attorney, accountant or other professional adviser.
                </li>
                <li>
                    We can refuse to sell you Fractions or exchange Fractions
                </li>
                <li>
                    All orders for Fractions are subject to acceptance by us. We may need to conduct certain checks in order to verify your identity before we can 
                    issue a Fraction to you. We may refuse to issue Fractions to you if we are unable to verify your identity, or if we identify you as an 
                    individual exposed to a high risk of money laundering or financing terrorism, or if we suspect that you are intending to use the Fractions in 
                    an unlawful manner.
                </li>
                <li>
                    We may also need to conduct these or similar checks if you exercise a right to redeem Fractions as set out in these Fraction Terms. We may refuse 
                    to exchange any Fractions that you hold if we are unable to verify your identity, or if we identify you as an individual exposed to a high risk 
                    of money laundering or financing terrorism, or if we suspect that you are using the Fractions in an unlawful manner.
                </li>
                <li>
                    General risks associated with buying Tokens
                </li>
                <li>
                    Dealing or trading in Fractions is, like all Cryptocurrencies and Blockchains, inherently risky, as prices and valuations may change rapidly. We cannot 
                    guarantee that the value of any Fractions that you purchase will not fall. You therefore buy or sell Fractions at your own risk. You should ensure 
                    that you are able to accept this risk before you buy any Fractions and for as long as you hold any Fractions.
                </li>
                <li>
                    The purchase of Fractions may not be subject to the protections of any laws or regulations in the country where you live governing the purchase and sale of financial products. You may therefore not benefit from the same protections you might have under applicable laws as you might do when you buy other financial products.
                </li>
                <li>
                    Newly created Fractions will be sent to your crypto &quot;wallet address&quot; (your “Wallet”) at the time of purchase. The crypto Wallet that executes transactions involving Fractions is only accessible through a combination of a particular private key and public key. Together, the private key and public key form your unique identifier on the relevant blockchain network (your &quot;Key Pair&quot;). Your Wallet can only be accessed by you and if you lose access this can only be recovered using a specific &quot;recovery code&quot; (also known as a &quot;Seed&quot;, “Seed Phrase”, or &quot;Mnemonic&quot;) made up of a series of 12 or 24 random words.
                </li>
                <li>
                You are responsible for keeping your Key Pair and recovery code secure. You should never give your Key Pair or your recovery code to any other person, as this will enable them to execute transactions using your Wallet. artom.io will never ask for this information. We will not be responsible for any losses you might suffer from disclosing your Key Pair or recovery code to another person (whether intentionally or accidentally) or any unlawful access to your Wallet, your recovery code, your funds or your Fractions by another person.
                </li>
                <li>
                If you lose access to your Wallet and your recovery code, you will no longer be able to access or use your Fractions or any other assets within your Wallet. Each Fraction is unique, so we will not be able to re-issue any Fractions to you if you lose access to your Wallet or your Fractions, and you will be responsible for any losses you might suffer as a result.
                </li>
                <li>
                Dealing with Tokens also carries other risks inherent in the decentralized technology that allows for the creation, purchase and sale of tokens. For instance, the blockchain network on which the Fractions are deployed may be unavailable at certain times, or may suffer a security breach. You should ensure that you are sufficiently familiar with all of the relevant risks before you purchase or sell Fractions.
                </li>
                <li>
                Fractions may have no value in the secondary market
                </li>
                <li>
                If there is a secondary market for Fractions, the price of Fractions will depend on the liquidity of that potential secondary market for the sale and purchase of Fractions. This will be influenced by a number factors, including the number of particular Fractions in circulation, regulatory developments and legal restrictions on the sale and purchase of Fractions. Changes in laws may also restrict your ability to buy or sell Fractions or severely affect the price at which you can buy or sell Fractions. We will not be responsible for any losses you might suffer as a result of any changes in the value of your Fractions.
                </li>
                <li>
                Tax  
                </li>
                <li>
                The purchase and receipt of Fractions may have tax consequences for you. You are responsible for ensuring that you comply with all tax obligations applicable to your purchase and receipt of Fractions. We will not be responsible to you for any amounts you are required to pay in tax or any penalties you face in connection with your purchase or receipt of Fractions. 
                </li>

            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>What Fractions do we make available?</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>Each Fraction that we issue is unique and associated with a real-world asset held by us (the &quot;Fraction Asset&quot;) as identified to you on the Service, and gives you the right to:
                    <ul>
                        <li>
                        own the Fraction Asset and have it delivered to you, in accordance with paragraphs 11 and 12 of these Fraction Terms;
                        </li>
                        <li>
                        vote on any important matters relating to the Fraction Asset, such as a sale of the Fraction Asset as set out in paragraph 13;
                        </li>
                        <li>
                        receive a share of the proceeds from the sale of a Fraction Asset, as set out in paragraph 13,
                        </li>
                        <li>
                        (collectively, the &quot;Fraction Holder Rights&quot;).
                        </li>
                    </ul>
                </li>
                <li>
                For more information about Fractions that we issue and Fraction Holder Rights, please see our FAQs at https://www.artom.io/faq.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Conditions and eligibility</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>In order to purchase, receive or exchange Fractions, you must:
                    <ul>
                        <li>
                        be 18 years or older and capable in your country of residence of entering into a legally binding agreement;
                        </li>
                        <li>
                        have passed any identity verification and other diligence checks that we carry out in accordance with paragraphs 14 and 15.
                        </li>
                        <li>
                        not have been previously refused Fractions by us;
                        </li>
                        <li>
                        have set up a Wallet;
                        </li>
                        <li>
                        not be a resident in one of the countries listed at https://www.artom.io/restricted-countries.
                        </li>
                    </ul>
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>How to purchase Fractions</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                You can purchase Fractions through the artom.io platform or through the artom.io App by connecting your Wallet and selecting the number of Fractions you wish to purchase. The price of each Fraction and any transaction or other fees that we charge in respect of the issue of the Fraction and storage of the Fraction Asset (together, the &quot;Purchase Price&quot;) will be as quoted on the Service and displayed to you when you select the number of Fractions you wish the Purchase.
                </li>
                <li>You will be able to check and amend any errors before confirming your purchase of the Fractions. When you purchase a Fraction, you will:
                    <ul>
                        <li>
                        be asked to agree to these Fraction Terms; and
                        </li>
                        <li>
                        be asked to confirm that you wish to proceed with the purchase.
                        </li>
                    </ul>
                </li>
                <li>
                Please take the time to read and check your purchase, including all of the above information, before you complete your purchase. Providing incomplete or incorrect information with your purchase may mean that we are unable to proceed with the transaction, or, if you provide us with the wrong Wallet, you may be unable to access the Fractions that are issued to you. We will not be responsible to you for any losses that you suffer as a result of providing us with inaccurate information when you proceed with your purchase. Every Fraction is unique, so we will not be able to reissue any Fractions to a different Wallet if the Wallet you provide to us is incorrect.
                </li>
                <li>
                Once you have confirmed that you wish to proceed with the purchase, the Fractions will be created (minted) and automatically sent to the wallet address you have connected to the platform. Payment will be taken from your connected Wallet at the time of Fraction minting.
                </li>
                <li>
                The contract for purchase between you and us will only be made once the transaction has been completed on the relevant blockchain in accordance with paragraph 7.4 above.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Payment options for your Fractions</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>We accept payment in USDC and other stablecoins as notified to you through the Service. 
                </li>
                <li>You can purchase stablecoins through the Service using our integrated third-party crypto exchange provider. Your use of this functionality will be subject to the third party’s terms and conditions. Please make sure you have read and understood these terms before you purchase any stablecoins through the Service, as you will be asked to agree to them before completing any purchase of stablecoins through the Service.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Delivery and accessing your Fractions</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>In accordance with paragraph 7 above, Fractions will be sent to the Wallet you have connected to the platform. 
                </li>
                <li>You should ensure that you keep your Key Pair and your recovery code confidential and secure. We will not be responsible to you for any losses you may suffer if you lose your Key Pair or your recovery code or if you disclose your Key Pair or recovery code to another person.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Refunds policy</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                By purchasing a Fraction or conducting any transaction via the platform, you acknowledge the finality of all transactions, whether they are completed or pending. Blockchain transactions are immutable and irreversible and thus cannot be changed once completed, due to the nature of blockchain technology itself.
                </li>
                <li>
                By using the Service, you acknowledge that we have no ability to reverse any transactions.
                </li>
                <li>
                We may decline your purchase of Fractions if we are unable to verify your identity or conduct any other checks that we are required to conduct.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Exchanging Fractions for Fraction Assets</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you own all of the Fractions associated with a particular Fraction Asset, you can exchange those Fractions for that Fraction Asset as set out in this paragraph 11.
                </li>
                <li>In respect of each Fraction Asset, we will either:
                    <ul>
                        <li>
                        own the Fraction Asset prior to fractionalization; or
                        </li>
                        <li>
                        purchase the Fraction Asset once we have received sufficient funds from sales of the Fractions to which the Fraction Asset relates (&quot;Consigned Fraction Asset&quot;).

                        </li>
                    </ul>
                </li>
                <li>
                For Consigned Fraction Assets, where we do not receive sufficient funding to purchase the Consigned Fraction Asset within a time period specified on the Service, we will refund to you the applicable Purchase Price paid by you for any related Fraction(s) and you may retain such Fraction(s).  
                </li>
                <li>If you would like to exchange your Fractions as set out in paragraph 11.1, please contact us at redeem@artom.io specifying:
                    <ul>
                        <li>
                        the number of Fractions that you hold in respect of the Fraction Asset and the Wallet they are held in;
                        </li>
                        <li>
                        the Fraction Asset to which those Fractions relate; and
                        </li>
                        <li>
                        the physical address to which you would like the Fraction Asset to be delivered.
                        </li>
                    </ul>
                </li>
                <li>If the number of Fractions that you hold matches the total number of Fractions issued in respect of the relevant Fraction Asset, and provided that we are able to verify your identity and conduct any other checks in accordance with paragraphs 14 and 15, we will provide you with:
                    <ul>
                        <li>
                        our Wallet address; and
                        </li>
                        <li>
                        a statement of the amounts payable for delivering the Fraction Asset to you (&quot;Delivery Costs&quot;).
                        </li>
                    </ul>
                </li>
                <li>
                Once we have received from you all of the Fractions relating to the Fraction Asset in our Wallet, together with the stablecoin equivalent of the Delivery Costs, we will dispatch the Fraction Asset to you.
                </li>
                <li>
                Ownership of the Fraction Asset will pass to you when we receive the Fractions relating to that Fraction Asset and any Delivery Costs or any other sums due to us in respect of the delivery of the Fraction Asset.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Delivering your Fraction Asset</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We will provide you with an estimated date on which we will deliver the Fraction Asset to you at the address you provided to us. We will aim to deliver the Fraction Asset to you as soon as reasonably possible and in any event within 30 calendar days after the day on which we receive the Fractions and Delivery Costs from you.
                </li>
                <li>
                Unfortunately, although we will make every reasonable effort to ensure your Fraction Asset is delivered within the estimated timescales, we cannot guarantee that they will not be affected by unforeseen issues affecting the warehouse where the Fraction Asset is stored or our delivery partners. If we are unable to meet the estimated delivery date, we will contact you with a revised estimated delivery date.                </li>
                <li>
                Your delivery will be completed when we deliver the Fraction Asset to the address you gave us. If your delivery requires a signature and no one is available at your address to take delivery, we will leave you a note with information about how to rearrange delivery.                
                </li>
                <li>
                We will send you an email with tracking information when your Fraction Asset is out for delivery. Please follow the applicable link in the email we provide to you to find out about the status of your order or track its progress.
                </li>
                <li>
                The Fraction Asset will be your responsibility from the time of delivery.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Sales of Fraction Assets</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We will publicly notify users via our Discord server at [Input discord address here] (“artom.io Official Discord Channel”) and/or via email if we have your email address, of any proposed sale of the Fraction Asset to which your Fractions relate by providing you with a &quot;Sale Notice&quot; setting out:                        
                    <ul>
                            <li>
                            the Fraction Asset to be sold;
                            </li>
                            <li>
                            the proposed sale price for the Fraction Asset;
                            </li>
                            <li>
                            any fees payable by you to us in respect of arranging the sale;
                            </li>
                            <li>
                            the amount payable to you on completion of the sale, calculated by:                    
                            <ul>
                                    <li>
                                    dividing the sale price by the total number of Fractions relating to the relevant Fraction Asset and multiplying this number by the number of Fractions in respect of that Fraction Asset that you hold; and
                                    </li>
                                    <li>
                                    deducting any fees owed to us in respect of the sale;
                                    </li>
                                </ul>
                            </li>
                            <li>
                            the date, which will be not less than 7 days from the date of the Sale Notice, by which you will need to let us know if you would like to proceed with the sale; and
                            </li>
                            <li>
                            instructions on how to notify us whether you agree or do not agree to the sale.
                            </li>
                        </ul>
                </li>
                <li>
                The provision of a Sale Notice is not a recommendation or endorsement of the terms of the proposed sale of the Fraction Asset. You will need to conduct your own research and (where appropriate) seek your own independent advice about how you respond to a Sale Notice.  
                </li>
                <li>
                If holders of more than 60% (in aggregate) of the Fractions relating to the Fraction Asset referred to in the Sale Notice notify us that they agree to the sale before the date set out in the Sale Notice and in accordance with the instructions in the Sale Notice, we will arrange the sale of the Fraction Asset on the terms set out in the Sale Notice.
                </li>
                <li>
                We will notify you once any sale of the Fraction Asset is complete and, upon receiving the Fraction back from you and completing any identity and diligence checks as set out in paragraphs 14 and 15, we will pay you the amounts owed to you as identified in the Sale Notice by transferring funds to your Wallet in stablecoin.
                </li>
                <li>
                It is solely your responsibility to monitor our Discord server to ensure you are aware of upcoming and current votes that require your attention. The Service currently has no way to notify you directly of votes linked to Fractions you own. We will not be responsible to you if you lose your opportunity to respond to a Sale Notice, if someone else responds to a Sale Notice instead of you, or you do not receive notice to collect any proceeds of the sale of a Fraction Asset, in each case because you have not monitored our Discord server for voting announcements.
                </li>
                <li>
                If you hold, within a single Wallet address, more than 5% (in aggregate) of the Fractions relating to a particular Fraction Asset, you can also contact us at redeem@artom.io to propose a sale of the Fraction Asset, provided that you may propose no more than 1 sale in any 2-week period. Please provide the following details to enable us to assess the proposal and put it to the other holders of the Fractions relating to that Fraction Asset in accordance with paragraph 13.1:                 
                            <ul>
                                    <li>
                                    the Fraction Asset to be sold;                                    
                                    </li>
                                    <li>
                                    the proposed sale price for the Fraction Asset;
                                    </li>
                                    <li>
                                    the identity of the proposed buyer.
                                    </li>
                            </ul>
                </li>
                <li>
                If you propose a sale of the Fraction Asset to us, neither you nor any of your immediate family members will be eligible to vote in respect of that sale. The sale will proceed if the holders of more than 60% (in aggregate) of the remaining Fractions (after excluding yours and your family members') notify us that they agree to the sale in accordance with the relevant Sale Notice. We reserve the right to refuse to proceed with a sale if we believe, acting reasonably, that the sale would constitute or result in any fraudulent or other deceptive or misleading activity.
                </li>
                <li>
                From time to time and when deemed relevant, artom.io may also propose a resell of the physical asset. Such proposal shall be submitted to a vote through the artom.io official Discord Channel. The sale will proceed if the holders of more than 60% (in aggregate) of the Fractions agree to it. 
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Verifying your identity</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We will need to verify your identity in order for you to receive Fractions from us. This is known as &quot;Know Your Customer&quot; or &quot;KYC&quot;, which we are required to do by law.                </li>
                <li>
                We may ask you to provide certain information to help us verify your identity, information about the source of the funds you use to pay the Purchase Price or any other amounts paid to us and, if you are buying Fractions on behalf of a company, information about all direct or indirect beneficial owners of that company. You must ensure that any information you provide is accurate, as we will not be responsible to you if we are unable to verify your identity because of any errors or omissions in the information you have provided to us.
                </li>
                <li>
                Your identity may be subject to verification including, but not limited to, validation against third party databases or the verification of one or more official government or legal documents that confirm your identity and your place of residence.
                </li>
                <li>
                Some of the searches which we or a third party may perform, such as a credit check, may leave a soft footprint on your credit history. This will not affect your credit rating.
                </li>
                <li>
                If we are unable to verify your identity, we may refuse to issue Fractions to you, redeem Fractions for Fraction Assets, pay you any amounts following a sale of a Fraction Asset, or pay any refunds or reimbursements to you.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Money Laundering</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
            <li>
            We are committed to preventing money laundering and any activity that facilitates money laundering, financing terrorism or any other criminal activity. We may therefore, from time to time:
                            <ul>
                                    <li>
                                    conduct enhanced or periodic identity checks where we suspect that any unlawful activity may have taken place, or as part of our ongoing risk management procedures;
                                    </li>
                                    <li>
                                    monitor how you use Fractions to identify any suspicious transactions, including unusual transaction sizes, volumes or patterns; 
                                    </li>
                                    <li>
                                    report any suspicious activity to local regulators, enforcement bodies and other compliance bodies.
                                    </li>
                            </ul>
                </li>
                <li>
                We may refuse to issue Fractions to you, exchange Fractions for Fraction Assets, pay you any amounts following a sale of a Fraction Asset, or pay any refunds or reimbursements to you, if:
                            <ul>
                                    <li>
                                    we are unable to complete any diligence checks on you;
                                    </li>
                                    <li>
                                    we have previously identified you as an individual engaged in suspicious activity;
                                    </li>
                                    <li>
                                    you are in a country considered to be exposed to a high risk of money laundering or financing terrorism;
                                    </li>
                                    <li>
                                    you are a politically exposed person, or are a family member or known close associate of a politically exposed person;
                                    </li>
                                    <li>
                                    you are listed on a sanctions list in any of the jurisdictions in which we may issue Fractions; or
                                    </li>
                                    <li>
                                    we otherwise identify you as an individual exposed to a high risk of money laundering or financing terrorism.
                                    </li>
                            </ul>
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Our responsibility to you</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                Your rights in respect of the Fraction Assets
                </li>
                <li>
                If we fail to provide Fraction Assets to you that are as described, fit for purpose and of satisfactory quality:                            
                    <ul>
                                    <li>
                                    Up to 30 days from delivery: if you are in Spain, you can reject the Fraction Asset and return it to us for a reimbursement of the Purchase Price paid for the Fractions you exchange for the Fraction Asset;
                                    </li>
                                    <li>
                                    Up to 2 years from delivery: if the Fraction Asset is faulty, you can ask us to repair or replace the Fraction Asset. If it cannot be repaired or replaced within a reasonable time (and, in any event, no longer than 1 month) or if we refuse to repair or replace it because it would result in a disproportionate cost for us, then depending on the nature of the defect you may be able to claim a full or partial reimbursement of the Purchase Price paid for the Fractions you exchange for the Fraction Asset.
                                    </li>
                            </ul>
                </li>
                <li>
                This paragraph 16 is not exhaustive and does not affect any rights you have under applicable law, including the right to bring a claim against us if you suffer damage as a result of any defect in the Fractions or Fraction Assets. If the law in your jurisdiction provides for longer warranty periods than those specified in paragraphs 16.1 and 16.2, then those longer periods will apply to our agreement with you instead.

                </li>
                <li>
                What we are not responsible for
                </li>
                <li>
                We will not be responsible to you for any defect that has occurred solely as a result of:
                <ul>
                                    <li>
                                    your failure to use and store Fractions or Fraction Assets in accordance with a reasonable standard of care and, where applicable, in accordance with any written care instructions we have provided to you;
                                    </li>
                                    <li>
                                    repairs or alterations made to the Fraction Assets by anyone other than us or one of our approved contractors; or
                                    </li>
                                    <li>
                                    an accident or event that affects the Fraction Assets once they are in your possession that is outside of our control (such as a fire, lightning strike or storm damage).

                                    </li>
                            </ul>
                </li>
                <li>
                Certain features of the Fractions may rely on networks and connections that are beyond our control or on content owned or developed by third parties (including, for example, the Ethereum network and smart contracts operated by third parties). As we do not own or produce such third party content or networks we cannot be responsible for it or its effect on the Fractions in any way.
                </li>
                <li>
                Fractions and Fraction Assets are supplied for domestic and private use only. We will not be responsible to you for any loss of profit, loss of business, business interruption or loss of business opportunity if you use the Fractions or Fraction Assets for any commercial, business or re-sale purpose.
                </li>
                <li>
                In every case, we will never be responsible for any loss or damage that is not reasonably foreseeable, or that is caused by a failure by you to comply with these Fraction Terms. Loss or damage is reasonably foreseeable if either it is obvious that it will happen or if, at the time you purchase the Fractions or exchange them for Fraction Assets, both we and you knew it might happen.
                </li>
                <li>
                The above does not affect your rights under the applicable law of the country in which you are resident, including our responsibility to you for any personal injury or death caused by our negligence.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Resolving disputes</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you have a dispute with us relating to the Fractions or Fraction Assets, we would welcome the opportunity to try and make things right and resolve the dispute with you ourselves. In the first instance please contact us using the details in paragraph 2 above so that we can attempt to resolve the dispute informally through our internal complaints handling process.
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
                <li>Transferring your Fractions and Fraction Holder Rights</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you transfer your Fractions to someone else, the Fraction Holder Rights and associated obligations will transfer to that person as well.
                </li>
                <li>
                If you purchase Fractions from anyone other than through the Service, the following paragraphs of these Fraction Terms will apply to you and your ownership, including the Fraction Holder Rights as described in paragraphs 5 and 16, and associated obligations and limitations as described in paragraphs 6, 11, 13 and 19 of these Fraction Terms.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Transferring our obligations</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
            <li>
            We may transfer the Fraction Assets and our obligations under these Fraction Terms to a third party, including another company or other entity owned by us, or another company or other entity which has the same ultimate owners as us. If we do so, we will:
                <ul>
                                    <li>
                                    notify you that we have done so; and
                                    </li>
                                    <li>
                                    ensure that that company performs our obligations in the same way that we do, and that you can exercise your rights under these Fraction Terms against that company in the same way as you would against us.
                                    </li>
                            </ul>
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Changes to the documents</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                We may revise these Fraction Terms from time to time but the most current version will always be at https://www.artom.io/fraction-terms.
                </li>
                <li>
                Changes will usually occur because of changes in the law or where we need to clarify our position on something.
                </li>
                <li>
                Normally, we will try to give you some warning before any new terms become effective. However, sometimes changes will need to be made immediately and if this happens, we will not give you any notice.
                </li>
                <li>
                We will always notify you in advance if any of the changes affect your Fraction Holder Rights.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Documents that apply to our relationship with you</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                The current version of the Fraction Terms will be the only terms and conditions that apply to our relationship with you.
                </li>
                <li>
                We intend to rely on these Fraction Terms as setting out the written terms of our agreement with you for the issue of Fractions and exercise of Fraction Holder Rights. If part of these Fraction Terms cannot be enforced, for instance, if it is judged to be illegal or unenforceable, then the remainder of the Fraction Terms will still apply to our relationship.
                </li>
                <li>
                If you do not comply with these Fraction Terms and we do not take action immediately, this does not mean we have given up any right we have and we may still take action in the future.
                </li>
            </ItemListContainer>

            <TitleListContainer className={styles['title-list']} index={getIncrementedCounter()}>
                <li>Law</li>
            </TitleListContainer>
            <ItemListContainer className={styles['item-list']}>
                <li>
                If you are in Spain, Spanish law will apply to all disputes and the interpretation of these Fraction Terms. The Spanish courts will have non-exclusive jurisdiction over any dispute arising from or related to our agreement with you in relation to the Fractions and the exercise of Fraction Holder Rights. This does not affect your rights under the law of the country in which you are resident, including (where applicable) your right to have a dispute in relation to our agreement with you heard in the courts of that country.
                </li>
                <li>
                If you are in another country of the European Economic Area, these Fraction Terms are governed by the law of the country in which you are resident, and we agree that any dispute arising from or related to our agreement with you will be heard in the courts of that country.
                </li>
            </ItemListContainer>
        </div>
    );
}

export default FractionTerms;
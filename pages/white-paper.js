import styles from '../styles/white-paper.module.scss';

import Image from 'next/image';

const WhitePaper = () => {
    return(
        <div className={styles['main-container']}>
            <div className={styles['logo-and-title-container']}>
                <div className={styles['artom-logo']}>
                    <Image src='/artom-logo.png' alt='artom-logo' layout={'fill'} objectFit={'contain'} priority/>
                </div>
                <div className={styles['main-title-container']}>
                    <h1><span className={styles['bold']}>artom.io</span></h1>
                    <h2>Buy, sell and trade<br/>shares of iconic pieces of art</h2>
                </div>
            </div>
            <div className={styles['body']}>
                <h3 className={styles['underlined-title']}>B.L.U.F.</h3>
                <ul>
                    <li>
                        <span className={styles['bold']}>A Community-driven project</span>: This concept is born from a global vision of art, understood as a good of the Community, tangible, usable by any individual and owned by the Community. <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span> wants to promote the co-acquisition of the artworks and the co-participation by the users in any process invulving the artwork. Artom\'s unique platform will enable anyone to buy and sell shares of iconic artworks using the blockchain technulogy.
                    </li>
                    <li>
                        <span className={styles['bold']}>Democratization of the art market:</span> For a long time, the art market has been trusted by a few wealthy individuals. Our long-term ambition is to make it accessible to the mass by enabling anyone to acquire pieces/shares of iconic artworks. 
                    </li>
                    <li>
                    <span className={styles['bold']}>Access to liquidity:</span> Art is usually a long-term investment with a typical 5–10-years horizon, it is therefore not attractive to middle market investor. Hence, we aim to allow and encourage owners of a Piece of Art to exchange and/or trade their shares on our secondary market. 
                    </li>
                    <li>
                    <span className={styles['bold']}>A participative model to make art more accessible:</span> our vision is not only to allow people to invest in art. Once a piece art is acquired by the Community, we make sure to have it exposed in iconic locations (Museum, Foundations, etc.). Such exposure is decided by all the owners of the art object through a voting process.  

                    </li>
                    <li>
                        <span className={styles['bold']}>A much larger vision:</span> we also aim to include adds-on to the platform, main one is the <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span> club. Users of the Community shall get art-related rewards based on their level of investment in the platform.

                    </li>
                </ul>

                <h3 className={styles['underlined-title']}>Executive Summary:</h3>
                <p>
                    This white paper is split into two different parts<br/>
                    <span className={`${styles['bold']} ${styles['italic']}`}>Part 1 - </span>definition of the problem <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span> is sulving, and the sulutions and the impact we aim to have<br/>
                    <span className={`${styles['bold']} ${styles['italic']}`}>Part 2 - </span>An explanation of our long-term strategy, business model, and other relevant information 
                </p>

                <ul>
                    <li>Part 1
                        <ul>
                            <li>
                                Problem
                            </li>
                            <li>
                                Solution
                            </li>
                            <li>The <span className={styles['bold']}>artom.io</span> Project
                                <ul>
                                    <li>
                                        Buy, sell and trade shares of iconic artworks
                                    </li>
                                    <li>
                                        The process
                                    </li>
                                    <li>
                                        Physical asset logistics
                                    </li>
                                    <li>
                                        Underlying asset sale
                                    </li>
                                </ul>                            
                            </li>
                            <li>Our Impact
                                <ul>
                                    <li>
                                        Affordability
                                    </li>
                                    <li>
                                        Liquidity
                                    </li>
                                    <li>
                                        Control
                                    </li>
                                    <li>
                                        Accessibility
                                    </li>
                                    <li>
                                        Disrupting traditional sales channels
                                    </li>
                                </ul>                                    
                            </li>
                        </ul>
                    </li>
                    <li>Part 2
                        <ul>
                            <li>
                                Market Opportunity
                            </li>
                            <li>
                                Business Model
                                <ul>
                                    <li>
                                        Overview
                                    </li>
                                    <li>
                                        Forecasted Number of Minted Tokens
                                    </li>
                                    <li>
                                        Number of token Max Cap
                                    </li>
                                    <li>
                                        Secondary and tertiary markets
                                    </li>
                                </ul>   
                            </li>
                            <li>
                                The <span className={styles['bold']}>artom.io</span> Social Club
                            </li>
                            <li>
                            	The team behind the project
                            </li>
                            <li>
                            	The <span className={styles['bold']}>artom.io</span> projected team
                            </li>
                            <li>
                            	Project roadmap & timeline
                            </li>
                        </ul>
                    </li>
                    <li>
                    	Appendix
                        <ul>
                            <li>
                            	Terms & Conditions
                            </li>
                            <li>
                            	Fraction terms
                            </li>
                        </ul>
                    </li>
                </ul>

            <h3 className={styles['part-title']}>PART 1: Definition of the problem <span className={styles['bold']}>artom.io</span> is solving, and the solutions and the impact we aim to have.</h3>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>Problem</li></ul>
            <p>
            To this date, the art market is reserved only for a wealthy minority and all access is highly restricted. The main restriction is obviously financial. Interesting art objects, whether classic or contemporary, are negotiated at prices that only a handful can afford. But the financial aspect is not the only constraint, knowledge of the market is also a barrier. There are thousands of artists and millions of art objects, so how do we know which artist to invest in or which work of art to buy when we have no knowledge of the market?
            </p>
            <p>
            Moreover, another massive investment problem in works of art is the lack of liquidity in this area. Art is usually a long-term investment with a typical 5–10-years horizon, it is therefore not attractive to middle market investor. Meanwhile, art is one of the most valuable asset classes, but its investment potential is still hidden. 
            </p>
            <ul className={styles['title-ul']}><li className={styles['bold']}>Solution</li></ul>
            <p>At <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span>, we are genuinely convinced that we can disrupt the art market.</p>
            <p>We want to make art accessible to everyone. No matter their financial means or their knowledge in art, we aim to offer the possibility to our entire Community to invest in iconic pieces of art and allow them to get involved in any process related to the pieces of art that co-acquire.</p>
            <p>To do so, the atom.io platform we will rely on the blockchain technology and tokenization. Such technology will enable us to fractionalize/tokenize iconic pieces of art to make it more affordable to our Community. Token owners will also be able to take part in any decision regarding the pieces of art they have in their possession (Where to expose it, when to sell it, etc.) We truly want to democratize art investment opportunities to a wider audience and make the user journey seamless, whether they are OGs or totally new to Web3.</p>
            
            <ul className={styles['bold']}><li>The <span className={styles['bold']}>artom.io</span> Project</li></ul>

            <ul>
                <li className={styles['bold']}>Buy, sell and trade shares of iconic artworks</li>
                <li>Users of the <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span> platform will be able to buy shares of iconic physical pieces of art. Such artworks will be curated by our network of international art experts. </li>
                <li>Art objects may be introduced in the platform in various ways: 
                    <ul>
                        <li><span className={styles['underlined']}>Consignment</span>:<br/>
                        a Piece of Art will be consigned from a seller and listed on the platform with a predetermined sale window. If the necessary funds are raised during the allocated time-period, then the artwork is acquired, alternatively the consignment will be cancelled with funds being returned to users.
                        </li>
                        <li><span className={styles['underlined']}>Pre-purchase from the seller</span> (museum, gallery, private owner, artist):<br/>
                        <span className={styles['bold']}><span className={styles['bold']}>artom.io</span></span> shall acquire the Piece of Art with reserved funds or debt.
                        </li>
                        <li><span className={styles['underlined']}>Funding</span> (in the future):<br/>
                        we also aim to invite the Community to fund on-demand pieces of art from iconic artists. 
                        </li>
                        <li><span className={styles['underlined']}>Live auctions</span> (in the future): <br/>
                        Always using the blockchain technology (e.g., DAO) we aim to enable users to take part in live auctions. Such process shall always be coordinated by <span className={styles['bold']}>artom.io</span>
                        </li>
                    </ul>
                </li>
            </ul>

            <p>
            Shares owners will be able to contribute to key decisions regarding each artwork, such as when to sell the art object or where it should be exhibited. A voting process shall be put in place and coordinated by <span className={styles['bold']}>artom.io</span>, either directly in the platform or alternatively on our discord channel.
            </p>
            <p>
            Moreover, shares owners will be given a digital certificate (smart contract) certifying their ownership of the artwork, they will also be able to display a digital representation of the artwork on their personal gallery. 
            </p>
            <p>
            In order to remain in line with our democratization goal, members of the Community will not be allowed to acquire more than a certain number of shares on the primary market. Such number shall be further defined. 
            </p>
            <p>
            Last but not least, Community will be able to sell their shares via the <span className={styles['bold']}>artom.io</span> secondary market and on 3rd party marketplaces.
            </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>The process</li></ul>
            <p>Depending on the way the artworks are introduced in the platform, steps 1, and 5 of the process may vary. Notwithstanding, it shall be reflected as per the following:</p>
            <table className={styles['functionalities-table']}>
                <tr>
                    <td>1</td>
                    <td>Sourcing</td>
                    <td>We rely on our industry leading experts to source, verify the artworks</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Minting</td>
                    <td>For each sourced artwork, we mint on the Polygon Blockchain unique digital security tokens that are linked to the real asset. Each artwork will have a fixed number of tokens that cannot change overtime.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Acquiring</td>
                    <td>Once the artwork has been fractionalized, and all the Shares bought by the community, the artwork is acquired and Shares are distributed among the buyers.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Voting</td>
                    <td>When acquiring your Shares, you will be requested to vote from a list of preselected locations, on where the artwork will be displayed. One Share is equal to one vote</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Displaying</td>
                    <td>After the voting process is over, the artwork will be moved to the location that received most of the votes</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Trading</td>
                    <td>Once you are the owner of one or more Shares of an artwork, you are ready to sell and trade them in our secondary market. Otherwise, you can keep your Shared until the artwork is sold and collect your benefits</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Selling</td>
                    <td>from time to time and always depending on the market evolution, Owners will be requested to vote on whether the artwork should be sold. If a majority of owners decide to sell it, it is then sold and owners receive their benefits in exchange of their Shares.</td>
                </tr>
            </table>

            <ul className={styles['title-ul']}><li className={styles['bold']}>The logistic</li></ul>
            <p>All authentication certification, logistics, and insurance will be taken care of by <span className={styles['bold']}>artom.io</span>, or alternatively by the museums or foundations to which the artworks are landed. This shall remove the usual day-to-day hassle associated with physical art objects. </p>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>Selling the artwork</li>
                <li>There are two possible scenarios to proceed with the sale of the artworks: 
                    <ul>
                        <li>
                        <span className={styles['bold']}>artom.io</span> receives an offer: <br/>
                        Artworks owned by the Community are publicly known to the market. In case <span className={styles['bold']}>artom.io</span> receive an offer regarding an artwork it will consult the Community via the platform and based on the votes will sell or keep the artwork. 
                        </li>
                        <li>
                        <span className={styles['bold']}>artom.io</span> consultation:  <br/>
                        From time to time, and based on the evolution of the art market and the valuation of each artwork, <span className={styles['bold']}>artom.io</span> may consult the Community on whether to sell or not an artwork. Based on the results of the consultation, the artwork may be put on sale, either in an auction, or to a private acquirer
                        </li>
                    </ul>
                </li>
            </ul>
            <p>In both ways, a vote will be held and if a 51% majority is reached, the art object will be sold for the agreed price. Shares owners will have an allocated time to respond to a vote. If the vote passes, and the asset is sold, net proceeds will be returned to shares holders in exchange for their Smart contract. Every resell process will always be assessed and supervised by our experts. </p>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>Our Impact</li></ul>
            <p>
            We aim to disrupt the art market by (1) unlocking millions of dollars’ worth of pieces of art and (2) allowing users to have access to liquidity by being able to sell their participation in iconic artworks. 

            </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Affordability</li></ul>
            <p>
            Iconic art objects are currently inaccessible to all but the wealthiest <span className={styles['bold']}>artom.io</span> aims to change this status-quo by opening up this market to everyone by fractioning them into 20€ (Twenty Euro) shares. Such fractioning will enable our Community to enjoy the benefits or investing in art without the need to spend much. 

            </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Liquidity</li></ul>
            <p>
            One of the main issues with art investment is the lack of liquidity. Art has a typical 5–10-year horizon analogous to other alternative investments, which makes is unattractive to middle market investor. 

            </p>
            <p>
            The fractionalization of high-value item will provide an unprecedented level of liquidity for historically illiquid assets. User will be enabled to resell their shares at any given time on the <span className={styles['bold']}>artom.io</span> secondary market or via any compatible 3rd party market place. 

            </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Control</li></ul>
            <p>
            Artworks related decisions are controlled by the users via a democratic voting process. Each owner will have the ability to vote on topics related to the artwork such as when the artwork should be sold or where it should be exhibited.

            </p>
            <p>
            In the mid-term, the Community will also get the opportunity to decide/propose artworks and/or artists to be introduced in the platform. 

            </p>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>	Accessibility</li></ul>
            <p>
            Not only we aim to open up the art market but we also plan to make art accessible. We do not want to store the art we acquire in safes or in banks but rather land/rent it to museums all over the world for it to be exhibited and always visible while in the possession of the Community members. 

            </p>
            <p>
            Alike any other decision related to an artwork, owners of each Piece of Art will get to decide where the art shall be exhibited. This decision will be done through a voting process that will take place either in the platform or alternatively in our discord official channel. 

            </p>          
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>	Disrupting traditional sales channels </li></ul>
            <p>
            The art market is dominated by a few wealthy collectors, certified dealers and big auction houses. They take large margins and restrain access to outsiders. 

            </p>
            <p>
            We genuinely believe that we can change the status-quo by opening-up this market through the fractionalization of real-world assets. We aim to allow our Community to act as one and be able to compete with big actors in the acquisition of iconic pieces of art. 

            </p>     


            <h3 className={styles['part-title']}>PART 2: An explanation of our long-term strategy, business model, and other relevant information.</h3>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>	Market Opportunity</li></ul>

            <p className={styles['italic']}>
            The below data is extracted from “The Art Market 2022, An Art Basel & UBS Report”

            </p>
            <p>
            Following its biggest recession for 10 years in 2020, the global art market recovered strongly in 2021, with aggregate sales of art and antiques by dealers and auction houses reaching an estimated <span className={`${styles['bold']} ${styles['italic']}`}>$65.1 billion, up by 29% from 2020</span>, with values also surpassing pre-pandemic levels of 2019.

            </p>
            <p>
            The online market continued to expand in 2021, <span className={`${styles['bold']} ${styles['italic']}`}>growing by 7% to reach an estimated $13.3 billion</span>. Online sales accounted for 20% of sales in the art market, down by 5% in share year-on-year but still more than double the level of 2019 (9%).
            </p>

            <p>
            Outside of the art market’s $65.1 billion in turnover, sales of art and collectibles NFTs saw substantial growth in 2021. External sales in these two categories on NFT platforms on the Ethereum, Flow, and Ronin blockchains have grown from $4.6 million in 2019 to $11.1 billion in 2021. <span className={`${styles['bold']} ${styles['italic']}`}>The value of sales for art-related NFTs expanded over a hundredfold year-on-year reaching $2.6 billion</span>.

            </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Business Model</li></ul>
            <ul className={styles['title-ul']}><li className={styles['bold']}>Overview</li></ul>

            <p><span className={styles['bold']}>artom.io</span> business model is simple and transparent. The revenues of the platform will be generated by the following business lines: </p>
            <ul>
                <li><span className={styles['bold']}>Commission on art acquisition:</span> <span className={styles['bold']}>artom.io</span> will be entitled to an 12% commission on every single artwork sold via the platform. This level of commission is way below the market standard practice that usually goes above 20%.</li>
                <li><span className={styles['bold']}>Fees on share´s acquisition:</span> 1,7% will be invoiced on shares acquisition to align long-term interests. This percentage ownership will change over time as <span className={styles['bold']}>artom.io</span> helps provide secondary market liquidity or offers marketing promotions. </li>
                <li><span className={styles['bold']}>Management fees:</span> 2.3% will be levied on all future transactions on our secondary market and third- party marketplaces. This helps cover ongoing costs including storage and insurance (if any). </li>
            </ul>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Forecasted number of minted Token</li></ul>
            <p>The number Token issued will depend on the number of acquired pieces of art. In year 1, <span className={styles['bold']}>artom.io</span> is planning to issue 1.000.000 token for a value of 20.000.000€. The 20.000.000€ shall be broke down as follow:</p>
            
            <div className={styles['scheme-1']}>
                <Image src='/white-paper/scheme-1.png' alt='scheme-1' layout={'fill'} objectFit={'contain'} priority/>
            </div>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Number of token Max Cap</li></ul>
            <p>Each and every single piece of art that is acquired will be fractioned into a maximum number of Tokens. These Tokens will be only linked to the piece art itself and will only grant voting rights for decisions that are concerning the piece of art.</p>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>Example :</li></ul>

            <div className={styles['scheme-2']}>
                <Image src='/white-paper/scheme-2.png' alt='scheme-2' layout={'fill'} objectFit={'contain'} priority/>
            </div>

            <ul className={styles['title-ul']}><li className={styles['bold']}>Secondary and tertiary markets</li></ul>
            <p>In addition to the above forecasted revenues, <span className={styles['bold']}>artom.io</span> shall be entitled to royalties on secondary market transactions: a certain percentage to be further defined will be invoiced on secondary market transactions, weather these transactions are made on <span className={styles['bold']}>artom.io</span> platform or on any third-party compatible platform. </p>
            
            <p>An additional commission will be taken by <span className={styles['bold']}>artom.io</span> once the piece of art is resold. Both commissions on secondary market and tertiary market are to be further defined. </p>
            
            <ul className={styles['title-ul']}><li className={styles['bold']}>Owner’s rights and obligations</li></ul>

            <p className={styles['italic']}>The rights and obligations are detailed in the Terms and Conditions and Fraction Terms attached to this document. </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}><span className={styles['bold']}>artom.io</span> Social Club </li></ul>
            <p>All users of <span className={styles['bold']}>artom.io</span> will become members of the <span className={styles['bold']}>artom.io</span> Social Club. Their level in the club will be determined by the value of the art portfolio they have acquired through the platform.<br/> 
            Depending on their membership level, members will have access to special benefits. This add-on project comes in line with the objective of democratizing access to art to our newly created art-lover Community
            </p>
            <p>
            Here is a none exclusive list of benefits that that will be granted to members of the Community. These benefits will be made possible thanks to the museum network we are aiming to build and are to be bundled according to members locations.

            </p>
            <ul>
                <li>
                Exclusive access to selected exhibitions
                </li>
                <li>
                Special Rates to partnering museums
                </li>
                <li>
                Exclusive access art fares and congresses
                </li>
                <li>
                Private visits in museums and galleries
                </li>
                <li>
                Access to special art classes 
                </li>
                <li>
                Open access to selected auctions
                </li>
                <li>
                Exclusive access to special art objects
                </li>
                <li>
                Decision on where to exhibit the art objects
                </li>
                <li>
                Guided tour of exhibition with the curator
                </li>
                <li>
                Thematic guided tours of the collections
                </li>
                <li>
                Private behind-the-scene tours (restoration workshop and storage areas)
                </li>
                <li>
                Artistic performances
                </li>
                <li>
                Meet and great with artists
                </li>
                <li>
                Meet the Director General of the Museum
                </li>
            </ul>

            <p>Members of the club will be gifted a Token to reflect their membership level. Benefits will be automatically included in the token according to users’ investment. </p>

            <ul className={styles['title-ul']}><li className={styles['bold']}>The team behind the project</li></ul>
            <table className={styles['team-table']}>
                <tr>
                    <td>
                        <div className={`${styles['member']} ${styles['member-1']}`}>
                            <Image src='/white-paper/member-1.png' alt='member-1' layout={'fill'} objectFit={'contain'} priority/>
                        </div>
                    </td>
                    <td>
                        <div className={`${styles['member']} ${styles['member-2']}`}>
                            <Image src='/white-paper/member-2.png' alt='member-2' layout={'fill'} objectFit={'contain'} priority/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Ali Aissaoui</td>
                    <td>Andrea Palma</td>
                </tr>
                <tr>
                    <td>I have more than 11 years of experience in Business Development, Commercial and project management. I have worked for the biggest organizations in the field of sports: agencies like Lagardère Sports and Right Holders such as FC Barcelona and the Confédération Africaine de Football - I am very creative and passionate about new challenges.</td>
                    <td>I am a numismatist, coins dealer and auction advisor with more than 15 years of experience. I’m currently working for the most important European auction houses such as Roma Numismatics, Morton&Eden, SoleryLlach as well as being a numismatic advisor for the Bank of Morocco. </td>
                </tr>
            </table>

            <ul className={styles['title-ul']}><li className={styles['bold']}>The <span className={styles['bold']}>artom.io</span> projected team</li></ul>

            <div className={styles['scheme-3']}>
                <Image src='/white-paper/scheme-3.png' alt='scheme-3' layout={'fill'} objectFit={'contain'} priority/>
            </div>

            <ul className={styles['title-ul']}><li className={styles['bold']}>1 year Project Road Map</li>
                <li><span className={styles['bold']}>Q2 2022</span>
                    <ul>
                        <li>Finalized the concept and the pitch presentation. </li>
                        <li>Designed platform architecture and built the user-flow. </li>
                        <li>Finalized the business plan and defined scaled the project potential </li>
                        <li>Worked with lawyers to establish a scalable and legally compliant structure to fractionalize real-world assets </li>
                    </ul>
                </li>
                <li><span className={styles['bold']}>Q3 2022</span>
                    <ul>
                        <li>Finalize the design of the logo and the look and feel of the platform. </li>
                        <li>Create and test the first prototype of the platform</li>
                        <li>Onboard independent art experts to assist with asset sourcing and curation </li>
                        <li>Sign MOUs and secure partnerships with museums, galleries and foundations. </li>
                        <li>Raise 1.5m€ from prominent business angels </li>
                        <li>Hire the minimum viable team.</li>
                    </ul>
                </li>
                <li><span className={styles['bold']}>Q4 2022</span>
                    <ul>
                        <li>Launch and test <span className={styles['bold']}>artom.io</span> Beta Version. </li>
                        <li>Develop Community with content promotion, IRL events and strategic partnership. </li>
                        <li>Launch <span className={styles['bold']}>artom.io</span> V1 web3 app (Minimum Viable Product) </li>
                        <li>Launch initial artworks drop </li>
                        <li>Run user testing and feedback sessions</li>
                        <li>Begin development of the secondary market</li>
                    </ul>
                </li>
                <li><span className={styles['bold']}>Q1 2023</span>
                    <ul>
                        <li>Release V2 <span className={styles['bold']}>artom.io</span> Web3 App with secondary market. </li>
                        <li>Start heavy online and IRL promotion and invest in user acquisition. </li>
                        <li>Drop iconic artworks in platform</li>
                        <li>Strat the development of the <span className={styles['bold']}>artom.io</span> Social Club.  </li>
                        <li>Sign partnership with Museum to secure exclusive benefits to member of the club</li>
                        <li>Second round on investment</li>
                    </ul>
                </li>

                <li><span className={styles['bold']}>Q2 2023</span>
                    <ul>
                        <li>Launch of the <span className={styles['bold']}>artom.io</span> Social Club</li>
                        <li>Drop for {'>'}5m€ of blue-chip art in the platform.  </li>
                        <li>Improve the available liquidity in the secondary market. </li>
                    </ul>
                </li>
            </ul>


            </div>
        </div>
    )

}

export default WhitePaper;
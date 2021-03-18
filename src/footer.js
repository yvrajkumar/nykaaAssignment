import {Table,Button,Image} from 'react-bootstrap';
import googlePlay from './images/footer/googlePlay.svg';
import appStore from './images/footer/appStore.svg';
import mobile from './images/footer/mobile.svg';
import msg from './images/footer/msg.svg';
import help from './images/footer/help.svg';
import call from './images/footer/call.svg';
import nykaa from './images/footer/nykaa.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Footer() {
  return (
    <div>
       <div className="desktop-footer-style">
        <Table responsive variant="dark" className="table-margin table-borderless">
            <tbody>
                <tr>
                    <td className="footer-style1" align="center">
                        <p className="white-text"><img src={msg} alt="Mobile APP" width="30" height="20"/>&nbsp;&nbsp;GET SPECIAL DISCOUNT IN YOUR INBOX</p>
                        <td>
                        <input type="text" name="email" value="" placeholder="Enter Your Email Id" className="footer-input null"/>
                        </td>
                        <td>
                        <Button variant="secondary">Send</Button>
                        </td>
                    </td>
                    <td className="footer-style1" align="center">
                        <p className="white-text"><img src={mobile} alt="Mobile APP" width="15" height="30"/>&nbsp;&nbsp;EXPERIENCE THE NYKAA MOBILE APP</p>
                        <a href="home"><img src={googlePlay} alt="Google Play" width="100" height="50"/></a>&nbsp;&nbsp;&nbsp;
                        <a href="home"><img src={appStore} alt="App Store" width="100" height="50"/></a>
                    </td>
                    <td className="footer-style1" align="center">
                        <p className="white-text"><img src={call} alt="Mobile APP" width="20" height="30"/>&nbsp;&nbsp;FOR ANY HELP YOU MAY CALL US AT</p>
                        <p>1800-267-4444</p>
                        <p className="white-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7PM)</p>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive className="footer-style2 table-borderless">
            <tbody>
                <tr>
                    <td className="white-text">
                        <img src={nykaa} alt="Nykaa" width="80" height="80"/>
                        <p>WHO ARE WE?</p>
                        <p>CAREERS</p>
                        <p>AUTHENTICITY</p>
                        <p>PRESS</p>
                        <p>TESTIMONIALS</p>
                        <p>NYKAA CSR</p>
                        <p>RESPONSIBLE DISCLOSURE</p>
                    </td>
                    <td className="white-text">
                        <p><b>HELP</b></p>
                        <p>CONTACT US</p>
                        <p>FREQUENTLY ASKED QUESTIONS</p>
                        <p>STORE LOCATOR</p>
                        <p>CANCELLATION & RETURN</p>
                        <p>SHIPPING & DELIVERY</p>
                    </td>
                    <td className="white-text">
                        <p><b>INSPIRE ME</b></p>
                        <p>BEAUTY BOOK</p>
                        <p>NYKAA TV</p>
                        <p>NYKAA NETWORK</p>
                        <p>ROUTINE FINDER</p>
                        <p>BUYING GUIDES</p>
                    </td>
                    <td className="white-text">
                        <p><b>QUICK LINKS</b></p>
                        <p>OFFER ZONE</p>
                        <p>NEW LAUNCHES</p>
                        <p>NYKAA MAN</p>
                        <p>NYKAA FASHION</p>
                        <p>NYKAA PRO</p>
                        <p>NYKAA FEMINA BEAUTY AWARDS WINNERS 2019</p>
                        <p>SITEMAP</p>
                    </td>
                    <td className="white-text">
                        <p><b>TOP CATEGORIES</b></p>
                        <p>MAKEUP</p>
                        <p>SKIN</p>
                        <p>HAIR</p>
                        <p>PERSONAL CARE</p>
                        <p>APPLIANCES</p>
                    </td>
                    <td className="white-text">
                        <p><br></br></p>
                        <p>MOM AND BABY</p>
                        <p>WELLNESS</p>
                        <p>FRAGRANCE</p>
                        <p>NATURAL</p>
                        <p>LUXE</p>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive className="table-borderless">
            <tbody>
                <tr>
                    <td>
                        <td>
                            <img src="images/footer/post.png" alt="Mobile APP" width="50" height="50"/>
                        </td>
                        <td>
                            <b>1500 + BRANDS</b>
                            <p>Well Curated 3Lakh + Products</p>
                        </td>
                    
                    </td>
                    <td>
                        <td>
                            <img src="images/footer/trans.png" alt="Mobile APP" width="50" height="50"/>
                        </td>
                        <td>
                            <b>FREE SHIPPING</b>
                            <p>For Orders Above INR 500</p>
                        </td>                        
                    </td>
                    <td>
                        <td>
                            <img src="images/footer/prod.png" alt="Mobile APP" width="50" height="50"/>
                        </td>
                        <td>
                            <b>GENUINE PRODUCTS</b>
                            <p>Sourced Directly From Brands</p>
                        </td>       
                    </td>
                    <td>
                        <tr>
                            <b>SHOW US SOME LOVE</b><img src="images/footer/love.png" alt="Mobile APP" width="25" height="30"/><b>ON SOCIAL MEDIA</b>
                        </tr>
                        <tr>
                            <img src="images/footer/instagram.png" alt="Mobile APP" width="30" height="30"/>
                            <img src="images/footer/fb.png" alt="Mobile APP" width="30" height="30"/>
                            <img src="images/footer/youtube.png" alt="Mobile APP" width="30" height="30"/>
                            <img src="images/footer/twitter.png" alt="Mobile APP" width="30" height="30"/>
                            <img src="images/footer/pinterset.png" alt="Mobile APP" width="30" height="30"/>
                        </tr>       
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive className="footer-style3">
            <tbody>
                <tr>
                    <br></br>
                    <div className="white-text">
                        <b>TERMS & CONDITIONSSHIPPING&nbsp;&nbsp;&nbsp;POLICYCANCELLATION&nbsp;&nbsp;&nbsp;POLICYPRIVACY&nbsp;&nbsp;&nbsp;POLICY</b>
                    </div>
                </tr>
                <tr>
                    <br></br>
                    <div className="white-text">
                        © 2021 Nykaa E-Retail Pvt. Ltd. All Rights Reserved
                    </div>
                    <br></br>
                </tr>
            </tbody>
        </Table>
        </div>
        <div className="mobile-footer-style">
            <div align="center" className="dark-bg">
                        <br></br>
                        <p className="white-text"><Image src={mobile} alt="Mobile APP"  fluid/>&nbsp;&nbsp;EXPERIENCE THE NYKAA MOBILE APP</p>
                        <a href="home"><img src={googlePlay} alt="Google Play" width="100" height="50"/></a>&nbsp;&nbsp;&nbsp;
                        <a href="home"><img src={appStore} alt="App Store" width="100" height="50"/></a>
            </div>
            <div align="center">
                <Table responsive className="table-borderless">
                    <tr align="center">
                        <td>
                            <Image src="images/footer/post.png" alt="Mobile APP" fluid/> 
                        </td>
                        <td>
                            <Image src="images/footer/trans.png" alt="Mobile APP" fluid/>
                        </td>
                        <td>
                            <Image src="images/footer/prod.png" alt="Mobile APP" fluid/>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <b>1500 + BRANDS</b>
                        </td>
                        <td>
                            <b>FREE SHIPPING</b>
                        </td>
                        <td>
                            <b>GENUINE PRODUCTS</b>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <p>Well Curated 3Lakh + Products</p>
                        </td>
                        <td>
                            <p>For Orders Above INR 500</p>
                        </td>
                        <td>
                            <p>Sourced Directly From Brands</p>
                        </td>
                    </tr>
                </Table>
            </div>
            <div align="center">
                <b>SHOW US SOME LOVE</b><img src="images/footer/love.png" alt="Mobile APP" width="25" height="30"/><b>ON SOCIAL MEDIA</b>    
                <Table responsive className="table-borderless">
                    <tr>
                        <td>
                            <Image src="images/footer/instagram.png" alt="Mobile APP" fluid/>
                        </td>
                        <td>
                            <Image src="images/footer/fb.png" alt="Mobile APP" fluid/>
                        </td>
                        <td>
                            <Image src="images/footer/youtube.png" alt="Mobile APP" fluid/>
                        </td>
                        <td>
                            <Image src="images/footer/twitter.png" alt="Mobile APP" fluid/>
                        </td>
                        <td>
                            <Image src="images/footer/pinterset.png" alt="Mobile APP" fluid/>
                        </td>
                    </tr>
                </Table>
            </div>
            <div align="center" className="dark-bg">
                        <p className="white-text"><img src={msg} alt="Mobile APP" width="30" height="20"/>&nbsp;&nbsp;GET SPECIAL DISCOUNT IN YOUR INBOX</p>
                        <Table responsive className="table-borderless">
                        <tbody>
                            <tr align="center">
                                <td align="right">
                                    <input type="text" name="email" value="" placeholder="Enter Your Email Id" className="footer-input null"/>
                                </td>
                                <td aligh="left">
                                    <Button variant="secondary">Send</Button>
                                </td>
                            </tr>
                        </tbody>
                        </Table>
            </div>
            <div align="center" className="footer-style3">
            <br></br>
                <Table responsive className="footer-border">
                <tbody>
                <tr align="center">
                    <img src={help} alt="Mobile APP" width="30" height="20"/>
                    <span className="white-text">&nbsp;HELP CENTER</span>  
                </tr>
                <tr>
                <br></br>
                </tr>
                </tbody>
                </Table>
                <br></br>
                <p className="white-text"><span>©</span> 2021 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
                <br></br>
            </div>
        </div>
    </div>
    
  );
}

export default Footer;
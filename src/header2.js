import {Table, InputGroup, FormControl,OverlayTrigger,Tooltip,Image,Button} from 'react-bootstrap';
import Nykaa from './NykaaLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Header2() {
    const beautyAdvice= (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <div className="overlay-bg">
          <Table responsive className="table-borderless">
            <tbody>
              <tr>
                  <td>
                      <a href="home" className="a-style"><Image src="images/header/BeautyAdvice/img1.jpg" fluid/>
                      <p><b>BEAUTY BOOK</b><br></br>Nykaa's Digital Magazine</p></a>

                  </td>
                  <td>
                      <a href="home" className="a-style"><Image src="images/header/BeautyAdvice/img2.png" fluid/>
                      <p><b>NYKAA TV</b><br></br>Masterclasses By Experts & Vloggers</p></a>
                  </td>
                  <td>
                      <a href="home" className="a-style"><Image src="images/header/BeautyAdvice/img3.jpg" fluid/>
                      <p><b>BEAUTY BUYING GUIDES</b><br></br>So You Always Make The Right Choice</p></a>

                  </td>
                  <td>
                       <a href="home" className="a-style"><Image src="images/header/BeautyAdvice/img4.jpg" fluid/>
                      <p><b>BEAUTY ROUTINE FINDER</b><br></br>Skin, Hair & Wellness Regime In A Minute</p></a>

                  </td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Tooltip>
      );

  return (
    <div>
        <Table responsive className="table-borderless">
            <tbody>
            <tr>
                    <td>
                        <a href="home" className="nykaa-img-pad"><Image src={Nykaa} alt="Nykaa" width="100" height="50" fluid/></a>
                    </td>
                    <td>
                        <a href="home" className="a-style">CATEGORIES&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={beautyAdvice}
                            >
                        <Button variant="link">BRANDS&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={beautyAdvice}
                            >
                        <Button variant="link">NYKAA FASHION&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={beautyAdvice}
                            >
                        <Button variant="link">BEAUTY ADVICE&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </OverlayTrigger>
                        <a href="home" className="a-style">NYKAA NETWORK</a>
                    </td>
                    <td>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <img src="images/header/search.png" alt="" width="20" height="20"/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search for Products, Brands etc."
                        />
                    </InputGroup>
                    </td>
                    <td>
                        <img src="images/header/user.png" alt="" width="20" height="20"/>
                        Account&nbsp;&nbsp;
                        <img src="images/header/bag.png" alt="" width="20" height="20"/>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default Header2;
import {Table, InputGroup, FormControl} from 'react-bootstrap';
import Nykaa from './NykaaLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Header() {
  return (
    <div>
        <Table responsive>
            <tbody>
                <tr className="header-img">
                    <td>
                        <div className="header-left">
                            <b>BEAUTY BONANZA Get Your Daily Dose of Amazing Offers</b>
                        </div>
                    </td>
                    <td>
                        <div className="header-left">
                            <img src="images/mobile-phone.png" alt="" width="20" height="20"/>
                            GetApp&nbsp;&nbsp;|&nbsp;&nbsp;
                            <img src="images/store.png" alt="" width="20" height="20"/>
                            Store & Events&nbsp;&nbsp;|&nbsp;&nbsp;
                            <img src="images/gift.png" alt="" width="20" height="20"/>
                            Gift Card&nbsp;&nbsp;|&nbsp;&nbsp;
                            <img src="images/help.png" alt="" width="20" height="20"/>
                            Help&nbsp;&nbsp;
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive>
            <tbody>
            <tr>
                    <td>
                        <img src={Nykaa} alt="Nykaa" width="100" height="50"/>
                    </td>
                    <td>
                        CATEGORIES&nbsp;
                        BRANDS&nbsp;
                        NYKAA FASHION&nbsp;
                        BEAUTY ADVICE&nbsp;
                        NYKAA NETWORK&nbsp;
                    </td>
                    <td>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <img src="images/search.png" alt="" width="20" height="20"/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search for Products, Brands etc."
                        />
                    </InputGroup>
                    </td>
                    <td>
                        <img src="images/user.png" alt="" width="20" height="20"/>
                        Account&nbsp;&nbsp;
                        <img src="images/bag.png" alt="" width="20" height="20"/>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive>
            <tbody>
            <tr>
                <div className="header3-left">
                    <td>
                        Makeup&nbsp;&nbsp;&nbsp;&nbsp;
                        Skin&nbsp;&nbsp;&nbsp;&nbsp;
                        Hair&nbsp;&nbsp;&nbsp;&nbsp;
                        Appliances&nbsp;&nbsp;&nbsp;&nbsp;
                        Personal Care&nbsp;&nbsp;&nbsp;&nbsp;
                        Natural&nbsp;&nbsp;&nbsp;&nbsp;
                        Mom & Baby&nbsp;&nbsp;&nbsp;&nbsp;
                        Health & Wellness&nbsp;&nbsp;&nbsp;&nbsp;
                        Men&nbsp;&nbsp;&nbsp;&nbsp;
                        Fragrance&nbsp;&nbsp;&nbsp;&nbsp;
                        LUXE&nbsp;&nbsp;&nbsp;&nbsp;
                        offers&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </div>
            </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default Header;
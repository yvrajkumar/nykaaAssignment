import {Table, InputGroup, FormControl} from 'react-bootstrap';
import Nykaa from './NykaaLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Header() {
  return (
    <div>
        <Table responsive className="table-borderless">
            <tbody>
                <tr className="header-img">
                    <td>
                            <p>BEAUTY BONANZA Get Your Daily Dose of Amazing Offers</p>
                    </td>
                    <td>
                            <img src="images/header/mobile-phone.png" alt="" width="20" height="20"/>
                            &nbsp;GetApp&nbsp;|&nbsp;
                            <img src="images/header/store.png" alt="" width="20" height="20"/>
                            &nbsp;Store & Events&nbsp;|&nbsp;
                            <img src="images/header/gift.png" alt="" width="20" height="20"/>
                            &nbsp;Gift Card&nbsp;|&nbsp;
                            <img src="images/header/help.png" alt="" width="20" height="20"/>
                            &nbsp;Help
                    </td>
                </tr>
            </tbody>
        </Table>
        <Table responsive className="table-borderless">
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
        <Table responsive className="table-borderless">
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
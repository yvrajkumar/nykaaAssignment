import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from './header2.js';
import Header3 from './header3.js';
import './App.css';

function Header() {
  return (
    <div>
    <div className="desktop-header-style">
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
        <Header2 />
        <Header3 />
    </div>
    </div>
  );
}

export default Header;
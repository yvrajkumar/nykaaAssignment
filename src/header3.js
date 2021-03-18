import {Table,OverlayTrigger,Tooltip,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Header3() {
      const makeup= (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <div className="overlay-bg">
          <Table  responsive className="table-borderless">
            <tbody>
              <tr>
                  <td>
                    <tr><a href="home" className="a-style"><b>FACE</b></a></tr>
                    <tr><a href="home" className="a-style">Face Primer</a></tr>
                    <tr><a href="home" className="a-style">Concealer</a></tr>
                    <tr><a href="home" className="a-style">Foundation</a></tr>
                    <tr><a href="home" className="a-style">Compact</a></tr>
                    <tr><a href="home" className="a-style">Contour</a></tr>
                    <tr><a href="home" className="a-style">Loose Powder</a></tr>
                    <tr><a href="home" className="a-style">Blush</a></tr>
                    <tr><a href="home" className="a-style">Bronzer</a></tr>
                    <tr><a href="home" className="a-style">BB & CC Cream</a></tr>
                    <tr><a href="home" className="a-style">Highlighters</a></tr>
                    <tr><a href="home" className="a-style">Setting Spray</a></tr>
                    <tr><a href="home" className="a-style">Makeup Remover</a></tr>
                    <tr><br></br></tr>
                    <tr><a href="home" className="a-style"><b>BODY ART</b></a></tr>
                    <tr><br></br></tr>
                  </td>
                  <td>
                    <tr><a href="home" className="a-style"><b>EYES</b></a></tr>
                    <tr><a href="home" className="a-style">Kajal</a></tr>
                    <tr><a href="home" className="a-style">Eyeliner</a></tr>
                    <tr><a href="home" className="a-style">Mascara</a></tr>
                    <tr><a href="home" className="a-style">Eye Shadow</a></tr>
                    <tr><a href="home" className="a-style">Eye Brow Enhancers</a></tr>
                    <tr><a href="home" className="a-style">Eye Primer</a></tr>
                    <tr><a href="home" className="a-style">False Eyelashes</a></tr>
                    <tr><a href="home" className="a-style">Eye Makeup Remover</a></tr>
                    <tr><a href="home" className="a-style">Under Eye Concealer</a></tr>
                    <tr><a href="home" className="a-style">Contact Lenses</a></tr>
                    <tr><br></br></tr>
                    <tr><a href="home" className="a-style"><b>MAKEUP KITS</b></a></tr>
                    <tr><a href="home" className="a-style">Eye Palettes</a></tr>
                    <tr><a href="home" className="a-style">Face Palettes</a></tr>
                    <tr><a href="home" className="a-style">Customize Your Palette</a></tr>
                    <tr><br></br></tr>
                  </td>
                  <td>
                    <tr><a href="home" className="a-style"><b>LIPS</b></a></tr>
                    <tr><a href="home" className="a-style">Lipstick</a></tr>
                    <tr><a href="home" className="a-style">Liquid Lipstick</a></tr>
                    <tr><a href="home" className="a-style">Lip Crayon</a></tr>
                    <tr><a href="home" className="a-style">Lip Gloss</a></tr>
                    <tr><a href="home" className="a-style">Lip Liner</a></tr>
                    <tr><a href="home" className="a-style">Lip Plumper</a></tr>
                    <tr><a href="home" className="a-style">Lip Stain</a></tr>
                    <tr><a href="home" className="a-style">Lip Balm</a></tr>
                    <tr><br></br></tr>
                    <tr><a href="home" className="a-style"><b>NAILS</b></a></tr>
                    <tr><a href="home" className="a-style">Nail Polish</a></tr>
                    <tr><a href="home" className="a-style">Nail Art Kits</a></tr>
                    <tr><a href="home" className="a-style">Nail Polish Sets</a></tr>
                    <tr><a href="home" className="a-style">Nail Care</a></tr>
                    <tr><a href="home" className="a-style">Nail Polish Remover</a></tr>
                    <tr><a href="home" className="a-style">Manicure & Pedicure Kits</a></tr>
                    <tr><br></br></tr>
                  </td>
                  <td>
                    <tr><a href="home" className="a-style"><b>TOOLS & BRUSHES</b></a></tr>
                    <tr><a href="home" className="a-style">Face Brush</a></tr>
                    <tr><a href="home" className="a-style">Blush Brush</a></tr>
                    <tr><a href="home" className="a-style">Eye Brush</a></tr>
                    <tr><a href="home" className="a-style">Lip Brush</a></tr>
                    <tr><a href="home" className="a-style">Brush Sets</a></tr>
                    <tr><a href="home" className="a-style">Sponges & Applicators</a></tr>
                    <tr><a href="home" className="a-style">Eyelash Curlers</a></tr>
                    <tr><a href="home" className="a-style">Tweezers</a></tr>
                    <tr><a href="home" className="a-style">Sharpeners</a></tr>
                    <tr><a href="home" className="a-style">Mirrors</a></tr>
                    <tr><a href="home" className="a-style">Makeup Pouches</a></tr>
                    <tr><br></br></tr>
                  </td>
                  <td>
                    <tr><a href="home" className="a-style"><b>TOP BRANDS</b></a></tr>
                    <tr><a href="home" className="a-style">M.A.C</a></tr>
                    <tr><a href="home" className="a-style">Maybelline New York</a></tr>
                    <tr><a href="home" className="a-style">L'Oreal Paris</a></tr>
                    <tr><a href="home" className="a-style">Lakme</a></tr>
                    <tr><a href="home" className="a-style">Nykaa Cosmetics</a></tr>
                    <tr><a href="home" className="a-style">Nyx Pro.Makeup</a></tr>
                    <tr><br></br></tr>
                  </td>
                  <td>
                    <tr><a href="home" className="a-style"><b>QUICK LINKS</b></a></tr>
                    <tr><a href="home" className="a-style">Combos @ Nykaa</a></tr>
                    <tr><a href="home" className="a-style">New Launches</a></tr>
                    <tr><a href="home" className="a-style">NFBA Nominees 2020</a></tr>
                    <tr><a href="home" className="a-style">Gifts @ Nykaa</a></tr>
                    <tr><a href="home" className="a-style">Party Makeup Looks</a></tr>
                    <tr><a href="home" className="a-style">The Gift Store</a></tr>
                    <tr><br></br></tr>
                    <tr><a href="home" className="a-style"><b>TRENDING SEARCHES</b></a></tr>
                    <tr><a href="home" className="a-style">Nude Lipstick</a></tr>
                    <tr><a href="home" className="a-style">Matte Lipstick</a></tr>
                    <tr><a href="home" className="a-style">Red Lipstick</a></tr>
                    <tr><a href="home" className="a-style">Pink Lipstick</a></tr>
                    <tr><br></br></tr>
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
                <div className="header3-left">
                    <td>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Makeup</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Skin</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Hair</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Appliances</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Personal Care</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Natural</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Mom & Baby</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Health & Wellness</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Men</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">Fragrance</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger="focus"
                            placement="bottom"
                            overlay={makeup}
                        >
                        <Button variant="link">LUXE</Button>
                        </OverlayTrigger>
                        <a href="home"><img src="images/header/offers.png" alt="" width="70" height="30"/></a>
                    </td>
                </div>
            </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default Header3;
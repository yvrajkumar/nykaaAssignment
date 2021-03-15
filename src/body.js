import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Image} from 'react-bootstrap';
import './App.css';

function Body() {
  return (
    <div>
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img1.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img2.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img3.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img4.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img5.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/img6.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
        </Carousel>
        <div align="center">
            <a href="home"><Image src="images/img7.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>IN THE SPOTLIGHT</h3>
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img8.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img9.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img10.gif" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img11.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img12.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img13.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/img14.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>SPECIAL SELECTION FOR YOU</h3>
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img15.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img16.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img17.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img18.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/img19.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>STORE IN FOCUS</h3>
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img20.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img21.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/img22.jpg" alt="img"fluid/></a>
            <a href="home"><Image src="images/img23.gif" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>FEATURED BRANDS</h3>
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img24.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img25.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img26.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img27.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/img28.gif" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img29.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img30.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/img31.gif" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/img32.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/img33.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  );
}

export default Body;
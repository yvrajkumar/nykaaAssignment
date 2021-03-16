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
                    src="images/carousel/img1.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/carousel/img2.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/carousel/img3.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/carousel/img4.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/carousel/img5.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src="images/carousel/img6.jpg"
                    alt="First slide"
                fluid/>
            </Carousel.Item>
        </Carousel>
        <div align="center">
            <a href="home"><Image src="images/img1.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>IN THE SPOTLIGHT</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/InTheSpotlight/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/InTheSpotlight/img2.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/InTheSpotlight/img3.gif" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/InTheSpotlight/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/InTheSpotlight/img5.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/InTheSpotlight/img6.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/img2.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>SPECIAL SELECTION FOR YOU</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/SpecialSelection/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/SpecialSelection/img2.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/SpecialSelection/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/SpecialSelection/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/SpecialSelection/img5.jpg" alt="img"fluid/></a>
        </div>
        <div align="center">
            <h3>STORE IN FOCUS</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/StoreInFocus/img20.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/StoreInFocus/img21.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <h3>CATEGORY IN FOCUS</h3>
            <a href="home"><Image src="images/CategoryInFocus/img1.jpg" alt="img"fluid/></a>
            <a href="home"><Image src="images/CategoryInFocus/img2.gif" alt="img"fluid/></a>
        </div>
        <div align="center" className="table-center">
            <h3>FEATURED BRANDS</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img2.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img5.gif" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img6.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img7.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/FeaturedBrands/img8.gif" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td align="right">
                            <a href="home"><Image src="images/FeaturedBrands/img9.jpg" alt="img"fluid/></a>
                        </td>
                        <td align="left">
                            <a href="home"><Image src="images/FeaturedBrands/img10.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center" className="table-center">
            <h3>DISCOVER NOW</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/DiscoverNow/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/DiscoverNow/img2.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/DiscoverNow/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/DiscoverNow/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center" className="table-center">
            <h3>EDITOR'S CHOICE</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img2.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img5.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img6.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img7.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/EditorsChoice/img8.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center" className="table-center">
            <h3>MORE OFFERS FOR YOU</h3>
            <Table responsive>
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img2.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img5.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img6.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img7.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/MoreOffersForYou/img8.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center" className="table-center">
            <h3>BUYING GUIDES</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img2.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img5.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img6.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img7.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BuyingGuides/img8.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center">
            <a href="home"><Image src="images/img3.jpg" alt="img"fluid/></a>
        </div>
        <div align="center" className="table-center">
            <h3>POP-UP STORES</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/PopUpStores/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/PopUpStores/img2.gif" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/PopUpStores/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/PopUpStores/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div align="center" className="table-center">
            <h3>BEAUTY ADVICE</h3>
            <Table responsive className="table-borderless">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="images/BeautyAdvice/img1.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BeautyAdvice/img2.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="home"><Image src="images/BeautyAdvice/img3.jpg" alt="img"fluid/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="images/BeautyAdvice/img4.jpg" alt="img"fluid/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  );
}

export default Body;
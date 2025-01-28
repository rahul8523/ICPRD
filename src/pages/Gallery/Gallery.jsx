import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import VideoCarousel from '../Home/VideoCarousel';
import Banner from "../../components/Banner/Banner";
import BannereconomicPolicy from "../../assets/images/people/people.png";
import Container from 'react-bootstrap/esm/Container';
import { Modal, Button, Row, Col } from "react-bootstrap"; 
// Images import here
import BannerTwo from '../../assets/images/HOMEPAGE/banner2.jpg';
import BannerThree from '../../assets/images/HOMEPAGE/banner3.jpg';
import BannerFour from '../../assets/images/HOMEPAGE/banner4.jpg';
import BannerFive from '../../assets/images/HOMEPAGE/climate-change.jpg';
import BannerSix from '../../assets/images/HOMEPAGE/banner2.jpg';
import BannerSeven from '../../assets/images/HOMEPAGE/Banner7.jpg';
import BannerEight from '../../assets/images/HOMEPAGE/Banner9.jpg';
import BannerNine from '../../assets/images/HOMEPAGE/BannerThirteen.jpg';
import BannerTen from '../../assets/images/HOMEPAGE/BannerEleven.jpg';
import BannerEleven from '../../assets/images/HOMEPAGE/BannerTwelve.jpg'
import BannerTwelve from '../../assets/images/HOMEPAGE/BannerFourteen.jpg'
import BannerThirteen from '../../assets/images/HOMEPAGE/BannerFifteen.jpg'
import BannerFourteen from '../../assets/images/HOMEPAGE/BannerSixteen.jpg'
import BannerFifteen from '../../assets/images/HOMEPAGE/BannerSeventeen.jpg'
import BannerSixteen from '../../assets/images/HOMEPAGE/BannerEighteen.jpg'
import BannerSeventeen from '../../assets/images/HOMEPAGE/BannerNineteen.jpg'

const Gallery = () => {


    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const linksForHome = [
        { text: 'Home', url: '/' },
        {
            text: 'About us', url: '/aboutUs',
            dropdown: false,
            dropdownOptions: [
                { text: 'About Us', url: '/aboutUs' },
                { text: 'President Desk', url: '/president' },
            ],
        },
        {
            text: 'Verticals',
            dropdown: true,
            dropdownOptions: [
                { text: 'Economic Policy', url: '/economicPolicy' },
                { text: 'International Relations & Foreign Policy', url: '/intrel' },
                { text: 'Climate Change', url: '/climateChange' },
                { text: 'Food Security', url: '/foodSecurity' },
                { text: 'Education & Training', url: '/educationTraining' },
                { text: 'Rural Urbanisation', url: '/ruralUrbanisation' },
                { text: 'Trade & Commerce', url: '/tradeCommerce' },
                { text: 'Agriculture', url: '/agriculture' },
                { text: 'HealthCare', url: '/healthcare' },
            ]
        },
        {
            text: 'Media',
            dropdown: true,
            dropdownOptions: [
                { text: 'Media Report', url: '' },
                { text: 'News', url: '/news' },
                { text: 'Article', url: '/research-articles' },
                { text: 'Blog', url: '/blog' },
                { text: 'Gallery', url: '/gallery' }


            ],
        },
        { text: 'Event', url: '/event' },
        { text: 'Team Behind us', url: '/people-behind-us' },
        {
            text: 'GlobalChapter',
            dropdown: true,
            dropdownOptions: [
                { text: 'USA', url: '/' },
                { text: 'UK', url: '/' },
                { text: 'South Africa', url: '/' },
            ],
        },
        { text: 'Support Us', url: '/support' },
        { text: 'Contact Us', url: '/contact' },
        // ... other links
    ];
    const bannerDataForPage2 = {
        backgroundImage: BannereconomicPolicy,
        text: "Gallery",
        subText: "Home / Gallery",
    };
    // Images data here
    const galleryImages = [
        { id: 1, img: BannerTwo, altTag: '' },
        { id: 2, img: BannerThree, altTag: '' },
        { id: 3, img: BannerFour, altTag: '' },
        { id: 4, img: BannerFive, altTag: '' },
        { id: 5, img: BannerSix, altTag: '' },
        { id: 6, img: BannerSeven, altTag: '' },
        { id: 7, img: BannerEight, altTag: '' },
        { id: 8, img: BannerNine, altTag: '' },
        { id: 9, img: BannerTen, altTag: '' },
        { id: 10, img: BannerEleven, altTag: '' },
        { id: 11, img: BannerTwelve, altTag: '' },
        { id: 12, img: BannerThirteen, altTag: '' },
        { id: 13, img: BannerFourteen, altTag: '' },
        { id: 14, img: BannerFifteen, altTag: '' },
        { id: 15, img: BannerSixteen, altTag: '' },
        { id: 16, img: BannerSeventeen, altTag: '' },
    ]

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <div className="home">
                <div className='main'>
                    <Navbar links={linksForHome} />
                    <Banner {...bannerDataForPage2} />
                </div>

                <div className="galleryWrapper p-4">
                    <h1>Our Gallery</h1>
                    <Row className="d-flex justify-content-center align-items-center">
                        {galleryImages.map((item, index) => (
                            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                                <img onClick={() => handleImageClick(item.img)} src={item.img} alt={item.altTag} className="img-fluid" />
                            </Col>
                        ))}
                    </Row>
                    {/* Modal */}
                    <Modal closeButton show={showModal} onHide={handleCloseModal} centered>
                        {/* <Modal.Header closeButton> 
                        </Modal.Header> */}
                        <Modal.Body>
                            {selectedImage && (
                                <img src={selectedImage} alt="Selected" className="w-100" />
                            )}
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button  onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer> */}
                    </Modal>
                </div>



            </div>
        </>
    )
}

export default Gallery
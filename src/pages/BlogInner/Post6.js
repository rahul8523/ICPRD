import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/Blog/HEALTH.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function Post6({ Date, titles }) {
    const navlinks = [
        { text: "Home", url: "/" },
        {
            text: "About us",
            dropdown: true,
            dropdownOptions: [
                { text: "About Us", url: "/aboutUs" },
                { text: "President Desk", url: "/president" },
            ],
        },
        {
            text: "Verticals",
            dropdown: true,
            dropdownOptions: [
                { text: "Economic Policy", url: "/economicPolicy" },
                { text: "International Relations & Foreign Policy", url: "/intrel" },
                { text: "Climate Change", url: "/climateChange" },
                { text: "Food Security", url: "/foodSecurity" },
                { text: "Education & Training", url: "/educationTraining" },
                { text: "Rural Urbanisation", url: "/ruralUrbanisation" },
                { text: "Trade & Commerce", url: "/tradeCommerce" },
                { text: "Agriculture", url: "/agriculture" },
            ],
        },
        {
            text: 'Media',
            dropdown: true,
            dropdownOptions: [
                { text: 'Media Report', url: '' },
                { text: 'News', url: '/news' },
                { text: 'Article', url: '/research-articles' },
                { text: 'Blog', url: '/blog' },
            ],
        },
        { text: "Event", url: "/event" },
        { text: "Team Behind us", url: "/people-behind-us" },
        {
            text: 'GlobalChapter',
            dropdown: true,
            dropdownOptions: [
                { text: 'USA', url: '/' },
                { text: 'UK', url: '/' },
                { text: 'South Africa', url: '/' },
            ],
        },
        { text: "Support Us", url: "/support" },
        { text: "Contact Us", url: "/contact" },
        // ... other links
    ];
    const bannerData = {
        backgroundImage: BannerImg,
        text: "Health in a Warming World",
        subText: "Home / Health in a Warming World",
    };
    return (
        <div className="icprdVerticalPage">
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <Container className="py-4">
                <Row>
                    <Col sm={12} md={12}>
                        <p className="small float-right">18/12/2023</p>
                    </Col>
                    <Col sm={12} md={12}>
                        <h2 className="pb-3 textbo"> {bannerData.text}</h2>
                        <p className="text-justify">

                            <p>
                                In an era where climate change reshapes our environment, its effects on human health are
                                becoming increasingly critical. The article navigates how a warming world impacts public health,
                                offering insights into direct and indirect consequences and underscoring the need for a robust
                                healthcare response.
                            </p>
                            <p>
                                With rising global temperatures come more frequent and severe heatwaves. These extreme heat
                                events pose immediate health risks, including heatstroke and the exacerbation of chronic medical
                                conditions, mainly affecting cardiovascular and respiratory health.
                            </p>
                            <p>
                                Furthermore, climate change significantly influences the spread of infectious diseases. Warmer
                                temperatures and altered precipitation patterns create favourable conditions for the proliferation
                                of vectors like mosquitoes, leading to a broader geographical spread of diseases such as malaria
                                and dengue.
                            </p>
                            <p>
                                Climate Change impacts air quality and respiratory human health, something we call "The
                                Invisible Enemy". The impact of climate change on air quality cannot be overstated, as the
                                increased pollution levels worsen respiratory conditions like asthma, while heightened pollen
                                counts due to extended warm seasons aggravate allergies and respiratory issues.
                            </p>
                            <p>
                                Climate change significantly impacts food and water security, which is the foundation of health.
                                Changing climatic conditions impacts the reliability of food and water sources. The unpredictable
                                weather patterns threaten agricultural productivity, leading to challenges in food security and the
                                heightened risk of malnutrition and waterborne diseases worldwide.
                            </p>
                            <p>
                                Another vital parameter is the impact of changing and damaging ecosystems on the psychological
                                health of humans. Often overlooked, the mental health implications of climate change are
                                profound. The stress and anxiety induced by the increasing frequency of natural disasters and the
                                general uncertainty surrounding environmental changes contribute to a spectrum of mental
                                health issues.
                            </p>
                            <p>
                                The devastating climate changes impact the vulnerable populations at the frontline of climate
                                challenges. Multiple demographics, including children, the elderly, and low-income communities,
                                face heightened health risks from climate change
                            </p>
                            <p>
                                With all the above impacts, we must rise to the Challenge called "Climate Change". The harmful
                                health challenges climate change poses require healthcare systems worldwide to adapt and
                                prepare. The above involves developing strategies and infrastructures to respond to various
                                health threats exacerbated by climate change.
                            </p>
                            <p>
                                In conclusion, the more we confront the realities of a warming world, the more we understand
                                that the multifaceted impact of climate change on human health is crucial. Comprehensive public
                                health strategies must address our changing climate's direct and indirect health consequences,
                                ensuring a healthier future for all.
                            </p>

                            <p><strong>Authored By: Prachi Jain</strong> </p>
                        </p>
                    </Col>
                </Row>
            </Container>

            <SupportUs />
            <Footer />
        </div>
    );
}

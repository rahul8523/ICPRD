import React from 'react';
import "./AboutUs.css";
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import BannerVideos from '../../assets/images/Aboutus/BannerVideos.jpg'
import AboutBox from '../../components/AboutBox/AboutBox';
import AboutUsCard from '../../components/AboutUsCustomComponents/AboutUsCard';
import Videos02 from "../../assets/images/Aboutus/Videos02.jpg"
import VisionVideoes from "../../assets/images/Aboutus/VisionVideos.png"
import OurMissionVideos from "../../assets/images/Aboutus/OurMissionVideos.jpg"
// import Timeline from '../../components/Timeline/Timeline';
import SupportUs from '../../components/SupportUs/SupportUs';
import Footer from '../../components/Footer/Footer';


export default function AboutUs() {
    const linksForAbout = [
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
        backgroundImage: BannerVideos,
        text: "About Us",
        subText: "Home / About Us"
    };
    return (
        <div className='aboutUs'>
            <Navbar links={linksForAbout} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerDataForPage2} />
            <AboutBox
                title="ABOUT US"
                description="India Centre for Policy Research and Development (ICPRD) is India's prominent think tank on public policy and advocacy."
                imageSrc={Videos02}
                text="  It has been conceived as a premier institution of Indian intelligentsia for intellectual interactions on a wide spectrum of developmental issues and related matters guiding policy formulation in the country. ICPRD is devoted to policy research, advocacy and outreach with the expressed objective to make policy interventions in the best interest of the country for the wider public good. It aims to develop indigenous hyper-local solutions for policy challenges by holding discussions, coupled with effective implementation of strategies, to achieve rapid socio-economic development."
            />
            <AboutUsCard />
            <div className='about-text'>
                <h2>
                    These concepts form the bedrock of ICPRD. We, at ICPRD, endeavor to inform, innovate and support the policy design of India with effective implementation strategies to achieve these three attributes.
                </h2>
                <br />
                <p>


                    ICPRD is shaped by the vision of a committed team of renowned experts and intellectuals with deep insights and understanding of the current challenges and issues around the globe. It is capable of dealing with policy issues through extensive research, surveys and feedback from the grassroots. </p> 
                    <p>  We are dedicated to the process of Nation Building and are geared up to contribute substantially and unreservedly in the national efforts to achieve the dream of 'Creating a New India' so as to usher the country into a new era of peace, progress and prosperity for all. </p>
                    <p> The dream is not far from reality, when ICPRD in association with the best minds of India, would make India the 'Vishwa Guru'.</p>
            </div>
            <AboutBox
                title="Our Vision "
                imageSrc={VisionVideoes}
                text="Our vision is to be an integral part of the process of nation-building by facilitating the formation of desirable policies aimed at people's welfare. Promoting the holistic socio-economic growth of the county and transforming India in to a developed nation and Vishwa Guru (Global Leader) by 2047"
                classNameUnique="vision-about"
            />
             <AboutBox
                title="Our Mission "
                imageSrc={OurMissionVideos}
                text={["To contribute to the national socio-economic development policies and programmes to make them engendered, equitable, and for the public good",
                    "To conduct research and issue publications as a means for the creation, storage, and dissemination of skills and knowledge resources",
                    "To encourage collaborations and partnerships with leading academic institutions, multilateral agencies, and progressive policy groups, globally, and bring them together on one platform",
                    "To bring an alignment between the national and the global policy-making processes for the new world order",
                    "To recheck and break the stereotypes wherever necessary to move towards a new definition of public policy and its advocacy in the more significant social interest",
                    "To spread mass awareness on issues that matter the most, to ensure that the common people are at the center of the country's growth and development."]}
                classNameUnique="mission-about"
            />
         
            <SupportUs />
            <Footer />
            
           
        </div>
    )
}

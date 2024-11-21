import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Map from '../../components/Home/Map/Map';
import AboutSection from '../../components/Home/About/AboutSection';
import Verticals from '../../components/Home/Verticals/Verticals';
import SupportUsHome from '../../components/Home/SupportUsHome/SupportUsHome';
import Features from '../../components/Home/Features/Features';
import Dignitaries from '../../components/Home/Dignitaries/Dignitaries';
import Events from '../../components/Home/Events/Events';
import Tabs from '../../components/Home/Tabs/Tabs';
import VideoSection from '../../components/Home/VideoSection/VideoSection';
import Footer from '../../components/Footer/Footer';





export default function Home() {
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
                { text: 'Healthcare', url: '/' },
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
    return (
        <div className="home">
            <div className='main'>
                <Navbar links={linksForHome} />

                <div className="header-image-container">
                    <Map />
                    <div className="scroll-indicator">
                        <div>
                            Scroll to down to <br /> begin <br /> <span><i className="ri-arrow-left-s-line"></i></span>
                        </div>

                    </div>

                </div>
            </div>
             <section style={{marginTop:"-2px"}}>
                <div className="header-content">
                    <h1>INDIA CENTRE FOR POLICY RESEARCH & DEVELOPMENT [ICPRD]</h1>
                    <AboutSection />
                </div>
            </section>
            <Verticals />
            <SupportUsHome/>
            <Features />
            <Dignitaries />
            <Events/>
            <Tabs />
            <VideoSection />
            
            <Footer/>
           
        </div>
    )
}

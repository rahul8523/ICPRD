import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import BannerImg from '../../../assets/images/VerticlesBanners/healthcareim.jpeg'
import AboutBox from '../../../components/AboutBox/AboutBox'
import '../IcprdVerticals.css'
export default function HealthCare() {
    const navlinks = [
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
    const bannerData = {
        backgroundImage: BannerImg,
        text: "Health Care",
        subText: "Home / Health Care"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />

            <AboutBox
                title="Health Care"
                text={[""]}
                classNameUnique="pad-4-s-2 trade morepaff"


            />
            <div className="msg-container pad-4-s-2 trade morepaff">
                <div className="About-container">
                    <h2>Towards a Healthier Future</h2>
                    <p>ICPRD is committed to creating a roadmap for healthcare and wellness that merges 
                    traditional wisdom with modern science. 
                    Through collaboration, research, advocacy and community engagement, we aim to 
                    improve health outcomes, promote natural well-being and ensure healthcare 
                    systems are resilient and inclusive.</p>
                    <p>
                    Our vision aligns with India's rich legacy of natural wellness and global health goals, 
                    fostering a world that values "<em>Sarve Santu Niramaya</em>" — <em>May all be free from 
                        illness</em>.</p>
                   
                   <div className='px-5'>
                   <ol>
                        <li>
                            <h3>One Health Approach</h3>
                        </li>
                    </ol>
                    <p>The One Health approach recognizes the interconnectedness of human, 
                        animal and environmental health. ICPRD emphasizes this holistic 
                        strategy to address public health challenges, reduce disease 
                        outbreaks and create sustainable healthcare systems. 
                        By promoting collaboration across disciplines, we aim 
                        to foster resilience in healthcare ecosystems and ensure 
                        healthier lives for all. </p>
                    <ol start="2">
                        <li>
                            <h3>Natural Well-being</h3>
                        </li>
                    </ol>
                    <p>India has a rich heritage of natural wellness rooted in traditional practices.
                     ICPRD focuses on advocating for natural well-being by combining modern 
                     healthcare solutions with time-tested traditions. We promote natural 
                     therapies, dietary habits and lifestyle practices that are proven to 
                     enhance overall health and mental well-being. </p>
                    <ol start="3">
                        <li>
                            <h3>Yoga and Ayurveda</h3>
                        </li>
                    </ol>
                    Yoga and Ayurveda, the ancient sciences of India, are key pillars o
                    f preventive and curative healthcare. ICPRD works to:
                    <ul>
                        <li>Promote Yoga as a holistic physical and mental wellness tool 
                            for stress management, immunity building and lifestyle improvement.</li>
                        <li>Support Ayurveda's role in disease prevention and its 
                            integration with modern medicine for chronic conditions 
                            and lifestyle-related diseases.</li>
                    </ul>
                    <p>We believe that Yoga and Ayurveda can address contemporary health c
                    hallenges and contribute to achieving global health goals.</p>
                    <ol start="4">
                        <li>
                            <h3>Mental Health and Emotional Wellness</h3>
                        </li>
                    </ol>
                    <p> In a fast-paced, ever-evolving world, ICPRD acknowledges 
                    the increasing importance of mental health. Through research 
                    and programs, ICPRD works on raising awareness about emotional
                     well-being, reducing stigma and enabling access to mental health support.</p>
                    <h3>Key Initiatives:</h3>
                    <ul>
                        <li>Awareness campaigns on mental health.</li>
                        <li>Workshops on mindfulness, meditation and stress management.</li>
                        <li>Collaboration with mental health experts to address emotional wellness needs across demographics.</li>
                    </ul>
                    <ol start="5">
                        <li>
                            <h3>Holistic Healthcare Systems</h3>
                        </li>
                    </ol>
                    <p> ICPRD believes in strengthening healthcare infrastructure while 
                    integrating both traditional and modern practices. By supporting a 
                    holistic healthcare ecosystem, we strive to provide affordable, 
                    accessible and quality healthcare to all, particularly underserved 
                    communities.</p>

                    <p>Our focus areas include:</p>
                    <ul>
                        <li>Research and advocacy for Universal Healthcare.</li>
                        <li>Promoting public-private partnerships (PPPs) to expand healthcare access.</li>
                        <li>Encouraging preventive healthcare strategies.</li>
                    </ul>
                    <ol start="6">
                        <li>
                            <h3>Promoting Sustainable Practices</h3>
                        </li>
                    </ol>
                    <p> Health and wellness are intrinsically tied to environmental sustainability. 
                    ICPRD works to advocate for clean air, safe water and healthy food systems 
                    as fundamental drivers of health. Our approach includes: </p>
                    <ul>
                        <li>Addressing pollution-related health concerns.</li>
                        <li>Promoting sustainable agriculture and organic food systems.</li>
                        <li>Researching the impact of climate change on health.</li>
                    </ul>
                   </div>
                </div>
            </div>
            <SupportUs />
            <Footer />
        </div>
    )
}

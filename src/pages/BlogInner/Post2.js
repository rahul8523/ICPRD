import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import SupportUs from '../../components/SupportUs/SupportUs'
import BannerImg from '../../assets/images/VerticlesBanners/low-angle.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../BlogInner/post.css'

export default function Post2( {Date,titles}) {
    const navlinks = [
        { text: 'Home', url: '/' },
        {
            text: 'About us',
            dropdown: true,
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
    const bannerData = {
        backgroundImage: BannerImg,
        text: "Changing Corporate Scape around the Changing Climate",
        subText: "Home / Changing Corporate Scape around the Changing Climate"
    };
    return (
        <div className='icprdVerticalPage tenter'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData}/>
            <Container className='py-4'>
                <Row>
                <Col sm={12} md={12}>  
                <p className='small float-right' >05/10/2022</p>
                </Col>
                    <Col sm={12} md={12}>
                    <h2 className='pb-3 textbo'> {bannerData.text}</h2>
                    <p className='text-justify'>            
<p>As people around the world have become aware of the ramifications of the climate crisis, the entities with the most power and scope to mitigate it—The corporations—have begun to tremble. Corporations manufacture nearly everything we buy, use, and discard, and they make a substantial contribution to global greenhouse emissions. It is critical that we understand the corporate world’s contributions to climate change, but it is even more critical that major corporations drastically decrease their contributions as quickly as possible. These ostensible global environmental leaders have a lot of work to do, to be able to address theimpact of the corporate world on the climate. Measuring and reporting emissions is a good starting point. A good second step would be to ensure the accuracy of this measurement and transparent reporting.</p>

<p>Climate risk and decarbonization have emerged as critical boardroom issues that must be addressed. CEOs are now driving climate risk and resilience from the top. Businesses are increasingly aware that climate change will almost certainly result in significant changes to their operations. But there is a significant knowledge gap regarding what is required to create, a net zero-carbon business. Fortunately, with the recent increased focus on the effects of climate change on all sectors of our economy, it is now widely acknowledged that the climate agenda can provide opportunities for businesses. Most businesses regard climate risk as a critical business issue. There is a clear recognition that climate risk is equivalent to financial risk. Companies are now focusing much more on becoming climate resilient.</p>

<p>Climate change was primarily regarded as a corporate social responsibility (CSR) issue at the time. It now has a place in the C-suite. As a report by KPMG done to study the correlation between Climate Change and Corporate Values demonstrates, the corporate sector is under pressure to act on climate change from a variety of sources, including customers and employees, as well as investors, lenders, auditors, and credit rating agencies. For example, Climate Action 100+ (an investor group of 500 firms with over US$47 trillion AUM) recently wrote to the world's 160 largest companies, which account for 80% of industrial emissions, demanding that they publish strategies to reduce emissions by 45% by 2030 and achieve net zero by 2050.</p>

<p>Companies, big and small, have tried to compensate for their climate contributions in two major ways: Corporate Social Responsibility (CSR) and Environment, Social & Governance (ESG) sustainability reports. CSR manifests itself in a variety of ways. Making a small donation to a local food bank can have a big impact on social change. Among the most common examples of CSR are: carbon footprint reduction; enhancing labour policies; fairtrade participation; inclusion, equity, and diversity; global charitable giving; volunteering in the community and online; environmentally friendly corporate policies; and environmentally and socially conscious investments, and so on. A viral video in 2018 sparked outrage over the racially motivated arrests of two African-American men at a Philadelphia Starbucks. Starbucks responded by closing all of its locations across the country for a four-hour racial bias training session. When Unilever launched its Farewell To The Forest campaign in 2015, it demonstrated alignment between philanthropic goals and business practices. Unilever made donations to non-profit organizations such as the World Wildlife Fund, but it also went above and beyond. The multinational consumer goods corporation reaffirmed its commitment to significant supply chain changes, including a 2020 goal of sourcing four key commodities with zero net deforestation. Pfizer has made similar changes to their business practices in order to attain its humanitarian goal of increasing healthcare access. In 2016, the pharmaceutical company announced that it would provide discounted vaccines to relief organizations. Despite potential financial consequences, Pfizer also leads an education campaign to prevent the overuse of antibiotics.</p>

<p>Companies communicate their performance and impacts on a broad variety of sustainability concerns, encompassing environmental, social, and governance (ESG) dimensions, through sustainability reporting. It enables businesses to be more open about the threats and opportunities they face, providing stakeholders with a better understanding of performance outside of the bottom line. A number of standards have arisen that allow a wide range of stakeholders to more efficiently review and compare sustainability reports as businesses around the world increasingly adopt sustainability reporting. However, according to CRISIL's Environmental, Social, and Governance (ESG) risk assessment of 586 Indian companies across 53 sectors, only one-fifth have published their sustainability report. Service companies, including IT, lending, and auto OEMs, are the leaders in terms of ESG disclosures, while chemicals, mining, construction, EPC, and transportation infrastructure are not. In addition, CRISIL discovered that, when compared to the previous year's report, 12 companies published detailed sustainability reports for the first time. And nine of the companies that published earlier have yet to publish for fiscal 2021</p>
</p>
                    </Col>
                </Row>
            </Container>

            <SupportUs />
            <Footer />
        </div>
    )
}

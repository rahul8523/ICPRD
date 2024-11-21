import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import SupportUs from '../../components/SupportUs/SupportUs'
import BannerImg from '../../assets/images/VerticlesBanners/beautif.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../BlogInner/post.css'

export default function Post1( {Date,titles}) {
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
        text: "India's Climate Change Policy",
        subText: "Home / Blog / India's Climate Change Policy"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <Container className='py-4'>
                <Row>
                <Col sm={12} md={12}>  
                <p className='small float-right' >04/10/2022</p>
                </Col>
                    <Col sm={12} md={12}>
                    <h2 className='pb-3 textbo'> {bannerData.text} </h2>
                        <p className='text-justify'>

<p>Back in 2014, the Union Ministry of Environment and Forests changed its name to the Union Ministry of Environment, Forests, and Climate Change. The ministry's portfolio did include climate change earlier as well, but the focus had been primarily on international negotiations. The change in nomenclature clearly indicated a shift in priorities and the government's recognition of the threat that climate change poses. Climate change was then designated as one of the Ministry's three priority areas, indicating that the government views the issue as having domestic implications. The renaming represented a broadening of the mandate and recognition of the impact of climate change on growth. The revised mandate ensures that the ministry plays an important and necessary role in integrating climate action with the development agenda.</p>

<p>India, as a populous tropical developing country, faces a greater challenge in dealing with the effects of climate change than most other countries. Climate change is a global phenomenon with local implications. India's climate change policy has both external and domestic dimensions, as articulated in two key documents. The first is the National Action Plan on Climate Change (NAPCC), which was approved on June 30, 2008. The other is India's Intended Nationally Determined Contributions (INDC), which were submitted to the United Nations Framework Convention on Climate Change (UNFCCC) on October 2, 2015. The NAPCC is primarily concerned with domestic issues. The INDC is a climate change action plan announced in the run-up to the Paris Climate Change summit, COP 21, in December of the same year of 2015.</p>

<p>The NAPCC incorporates India's vision of environmentally sustainable development as well as the steps that will be taken to implement it. It is based on the realization that climate change action must take place concurrently in several interconnected domains, including energy, industry, agriculture, water, forests, urban spaces, and the fragile mountain environment. This was the setting for the NAPCC's eight National Missions from the year 2008. Only a few years later, the UN adopted the 17 Sustainable Development Goals, recognizing the need for converging policies and coordinated action (SDG) in 2015. Solar Energy, improving energy efficiency, creating a sustainable urban habitat, conserving water, sustaining the fragile Himalayan Ecosystem, creating a Green India through expanded Forests, making agriculture sustainable, and creating a strategic Knowledge platform to serve All National Missions are among the national missions.</p>

<p>The NAPCC recognized that Climate Change and Energy Security were two sides of the same coin, and that India needed to make a strategic shift away from its current reliance on fossil fuels and towards a pattern of economic activity that was increasingly based on renewable sources of energy such as solar energy and cleaner sources such as nuclear energy. Such a shift would improve India's energy security while also contributing to the fight against climate change. As a result, India's climate change strategy is based on a co-benefit approach. The NAPCC represents India's response to climate change based on its own resources, but it recognizes that it is inextricably linked to the parallel multilateral effort to establish a global climate change regime based on the principles and provisions of the UNFCCC.</p>

<p>It was India's hope that the ongoing multilateral negotiations under the UNFCCC would result in an agreed outcome based on the principles of Common but Differentiated Responsibility and Respective Capabilities (CBDR), allowing developing countries like India to accelerate their transition to a future of renewable and clean energy through international financial support and technology transfer. While India has made significant progress in implementing several national missions, its hopes for a supportive international climate change regime based on equitable burden sharing among nations have largely been dashed. In this context, one should assess India's subsequent nationally determined contributions (NDCs), which was submitted on the eve of the crucial Paris Climate Change Summit in December 2015.</p>

<p>In August 2022, India submitted its updated "nationally determined contributions'' (NDCs) to the United Nations Framework Convention on Climate Change (UNFCC). According to the Ministry of Environment, Forest, and Climate Change (MoEFCC), the NDCs cover the period up to 2030 and are a step toward the country's long-term goal of reaching net zero emissions by 2070. Over time, India's goal is to reduce overall emission intensity and improve energy efficiency in its economy. This would safeguard the economy's and society's most vulnerable sectors. Since 2005, India has revised its target to reduce its GDP's emission intensity by 45 percent by 2030. It was previously 30%. It has also revised the target for non-fossil fuel capacity addition.</p>

<p>India is making significant progress towards ensuring a clean energy future for its people, drawing on its ingrained civilizational characteristics and implementing a wide range of policy interventions under the legal framework of the Energy Conservation Act, which covers 15 energy-intensive industries, and the Energy Conservation Building Code, which covers all new urban infrastructure. The Indian Union's 32 states have developed and begun implementing their own State Action Plans on Climate Change (SAPCC). There is also a vibrant civic society that promotes citizen awareness of the threat of climate change and what each of us can do as individuals to address it. It is hoped that India's leadership in addressing its own challenges of climate change and energy security will serve as a catalyst for other countries to increase their own contributions to meeting this global and existential threat. Failure to do so condemns humanity to an uncertain and potentially disastrous outcome..</p>
                        </p>
                    </Col>
                </Row>
            </Container>

            <SupportUs />
            <Footer />
        </div>
    )
}

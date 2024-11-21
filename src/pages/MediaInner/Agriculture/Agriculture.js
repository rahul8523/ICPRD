import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import BannerImg from '../../../assets/images/VerticlesBanners/Agriculture.jpg'

import '../IcprdVerticals.css'
import AboutBox from '../../../components/AboutBox/AboutBox'
export default function Agriculture() {
    const navlinks = [
        { text: 'Home', url: '/irprd' },
        {
            text: 'About ICPRD',
            dropdown: false,
            dropdownOptions: [
                { text: 'About Us', url: '/aboutUs' },
                { text: 'President Desk', url: '/president' },
            ],
        },
        {
            text: 'ICPRD Verticals',
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
            text: 'GlobalChapter',
            dropdown: true,
            dropdownOptions: [
                { text: 'USA', url: '/' },
                { text: 'UK', url: '/' },
                { text: 'South Africa', url: '/' },
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
        
        { text: "Connect With Us", url: "/contact"},

        // ... other links
    ];
    const bannerData = {
        backgroundImage: BannerImg,
        text: "Agriculture",
        subText: "Home / Agriculture"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <div className='economic-facts'>
                <div>
                    <h1>1.</h1>
                    <p>70% population of India depends on agriculture and allied activities for livelihood</p>
                </div>
                <div>
                    <h1>2.</h1>
                    <p>Agriculture sector contributes to 14% of India’s GDP</p>
                </div>
                <div>
                    <h1>3.</h1>
                    <p>India 9th among agriculture produce exporters</p>
                </div>
            </div>
            <AboutBox
                title="Agriculture "
                text={[
  "The history of agriculture in India dates back to 7000 BC, with archaeological evidence suggesting farming in the Indus Valley civilization was common from as early as 2500 BC. With almost 70% of the population engaged in agriculture and allied activities and the agriculture sector contributing nearly 14% of the Country’s GDP, no other sector of the Indian economy engages, employs, and nurtures as many people as agriculture does.",
  "From the mission of “combating hunger” just after independence, India’s agriculture sector has come a long way and has made noteworthy progress in attaining grain self-sufficiency. India today ranks 9th amongst the top 10 agricultural produce exporters. The India Brand Equity Foundation (IBEF) established by the Ministry of Commerce, Government of India, in its report suggests that the size of Indian agriculture is predicted to increase to USD 24 billion by 2025. Additionally, IBEF, while referring to 30% year-on-year growth in the exports of India’s agricultural and processed food products, states that it stood at USD 9598 million in FY 2022-23.",
  "The sector amidst resource-intensive and regionally biased production is still besieged by challenges that stem from small and fragmented land holdings, lack of access to quality seeds and mechanization at affordable prices, soil erosion of fertile land, sinking underground water table, dearth of irrigation systems, scarcity of capital and low productivity because of soil exhaustion. The impact is that the sector is often dubbed as being of just sustenance level and not remunerative for farming communities leading to a debt trap. Redemptive measures are required to counter these challenges.",
  "Recognizing the strong correlation between food security and socio-economic growth alongside the overall well-being of the population, and to redress the issues plaguing the farming community, the Government of India has launched laudable schemes from time to time. The total budget allocated to the Department of Agriculture and Farmers' Welfare stands at Rs 1.24 lakh crores, a considerable 3.1% of the total projected expenditure for 2022-23.",
  "Moreover, the Government has not only set up a network of 729 Krishi Vigyan Kendra at the district level across the country but also initiated the noteworthy Digital Agriculture Mission for 2021-25. Impetus is being given to promote agro start-ups and the development of irrigation sources has been considered while planning new schemes. Kisan credit card scheme to provide affordable credit to farmers has been expanding rapidly. The year 2022 has witnessed the launch of Kisan Drones to facilitate the spraying of insecticides and nutrients, and crop assessment and digitization of land records have also been initiated.",
  "While appreciating the contribution of the farming community and prioritizing their socioeconomic betterment and overall well-being, the focus is to ensure that farmers keep abreast of the latest technology and advancement in agricultural science to reap the most benefits and increase their yield.",
  "ICPRD is a forum that keeps a tab on issues related to the agriculture sector, as the fate of not only farmers but all Indians is inextricably linked to it. Our team hopes to show a way out of the current stagnation and threats that the sector is faced with. Workable steps, ideas, and innovations that are called for to revive and save agriculture are being examined by our experts."
]}
                classNameUnique="pad-4-s-2"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}

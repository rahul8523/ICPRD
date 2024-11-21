import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import BannerImg from '../../../assets/images/VerticlesBanners/trade.jpg'
import AboutBox from '../../../components/AboutBox/AboutBox'
import '../IcprdVerticals.css'
export default function TradeAndCommerce() {
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
        text: "Trade & Commerce",
        subText: "Home / Trade & Commerce"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <div className='economic-facts'>
                <div>
                    <h1>1.</h1>
                    <p>India ranks 14th as an importer globally and 20th in exports

</p>
                </div>
                <div style={{borderRight:'none'}}>
                    <h1>2.</h1>
                    <p>India’s overall exports are estimated at USD 499.67 billion (in November 2022)</p>
                </div>
               
            </div>
            <AboutBox
                title="TRADE & COMMERCE"
                text={[
  "The development of a country depends majorly on its trade and commerce, and this is determined to a large extent by its geography. Trade and commerce allow people to assess how people in other countries live and consume in their environment. It promotes the growth of new industries and technology, connects nations and markets, creates more jobs, increases earnings for citizens, improves product quality, and leads to expanding economic opportunities for all.",
  "During ancient and medieval times, India was the leading exporter of silk, cotton, sugar, and precious stones. India was also the exporter of spices to the west and this was done through the spice route. All these items were exported in exchange for gold and silver from other nations. Indian-made goods were renowned worldwide for their quality and uniqueness. This primal position was compromised during the postcolonial period.",
  "In the years following the Independence, due to India’s highly protected domestic market, the country’s import and export trade developed at a slow pace. This resulted in trade deficits for a long period. As a result, the growth of the Indian economy was slowed by a lack of foreign trade. However, regular revisions to the Trade and Commerce Policy took place to keep up with changing economic conditions both domestically and internationally. The development of trade and commerce has played a significant role in the evolution of the Indian economy since the liberalization of the economy in 1991.",
  "India’s strategic location permits trade connectivity with the far-east and other Asian countries as well as with the Middle East, Africa, Europe, and America. Currently, India ranks 14th as an importer globally and 20th in exports. India’s overall exports (merchandise and services combined) in November 2022 are estimated at USD 499.67 billion, out of which merchandise accounts for USD 295.26 billion and services USD 204.41 billion. India’s total imports in November 2022 are estimated at USD 610.70 billion. India has certain sectoral advantages in technology-driven IT, consumer durables, electronic components, and pharmaceuticals. For example, the pharmaceutical sector fulfills over 50% of the global demand for vaccines. The Indian IT industry is a major exporter of IT and ITE services and employs over 4.47 million people.",
  "Businesses in India are often categorized as formal and informal. This is also the case with the trade of most goods and services. India has a large informal or unorganized sector that needs channelization into the formal sector. One of the results of this is that the informal sector and many functions related to it remain largely or barely taxed, limiting the government’s reach and resources greatly.",
  "AI and manufacturing automation will be important future trends with increased consumer preference. These are directly connected to technological advancements and their applications across multiple sectors. Global corporations view India as one of the key markets from where future growth is likely to emerge. The growth in India’s consumer market would be primarily driven by a favourable population composition and increasing disposable income.",
  "The government of India has taken several policy initiatives including fiscal incentives to MSMEs, allowing foreign direct investment (FDI) up to 100% under automatic route in many sectors. These are like electronic system design and manufacturing sector, single brand retail, productivity linked incentive (PLI) for IT hardware, white goods, electronic components, bulk drugs, medical devices, telecom, and food processing. The “Make in India, Make for the World'' policy of the government is offering a big encouragement to a large number of manufacturing and trade sectors ranging from consumer durables to technology-driven electronic components. Consumers are also showing an affinity and preference for homegrown products. Thus, domestic and international trade and commerce need constant redefining and liberalization, while protecting national interests, to make it more viable where the government is suitably taken along to ensure better rewards for those engaged in trading at all levels. Besides this, reforming this sector is also called for to augment exports of goods and services.",
  "ICPRD is deeply engaged in observing the urgent needs of the trading sector to show the best possible way out for the much-needed reforms that it calls for."
]}
                classNameUnique="pad-4-s-2 trade morepaff"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}

import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import BannereconomicPolicy from "../../../assets/images/Economicpolicy/BannereconomicPolicy.jpg"
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import Graph from "../../../assets/images/Economicpolicy/Graph.jpg"
import '../IcprdVerticals.css'

export default function EconomicPolicy() {
    const navlinks = [
        { text: 'Home', url: '/' },
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
        { text: 'Resources' },
        { text: 'Event' },
        { text: 'Media' },
        { text: "Connect With Us", url: "/contact"},
        // ... other links
    ];
    const bannerDataForPage2 = {
        backgroundImage: BannereconomicPolicy,
        text: "Economic Policy",
        subText: "Home / Economic Policy"
    };
    return (
        <div className='economic-policy icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerDataForPage2} />
            <div className='economic-facts'>
                <div>
                    <h1>1.</h1>
                    <p>India is the world's fifth largest economy</p>
                </div>
                <div>
                    <h1>2.</h1>
                    <p>India is third largest in the world in term of Purchasing Power Parity (PPP) </p>
                </div>
                <div>
                    <h1>3.</h1>
                    <p>India's Gross Domestic Product was worth $ 3385.09 billion in 2022 </p>
                </div>
            </div>
            <div className='economicGraph'>
                <img src={Graph} alt="" />
            </div>
            <div className='ecopolicy'>
                <p>
                    The economy of the Indian subcontinent was believed to be one of the largest in the world till the first half of the 18th century. However, starting in 1757, a sharp decline in status was seen due to poverty, unemployment, and lack of industrial growth in the colonial era. <br /> <br />
                    Since independence, efforts have been made by successive governments to restore the economy and make it self-reliant and vibrant once again. Initially, the model adopted for economic growth was that of a mixed and planned economy given the precarious conditions of those times. <br /><br />
                    However, the Indian economy has now transitioned into a developing social market economy with notable state intervention in strategic sectors. It is the world's fifth-largest economy by nominal GDP and the third-largest by purchasing power parity (PPP). The share of the Indian economy currently stands at 7.5% of the world economy in PPP terms. After having surpassed the UK as the fifth largest economy, India is now likely to overtake Japan and Germany by the end of the current decade to emerge as the third largest economy in the world. <br /> <br />
                    Since the start of the 21st century, India's annual average GDP growth has been 6% to 7%. Nearly 70% of India's GDP is driven by domestic private consumption and India is the world's sixth-largest consumer market. Apart from private consumption, India's GDP is also fuelled by exports and government spending in key sectors. India has made rapid strides on the World Bank's ease of doing business index. Reforms aimed to bring ease of doing business coupled with reduced cost of doing business, unified domestic market, and focus on boosting the manufacturing sector through incentive schemes have led to the sustained growth of the economy. The clarion call by the Prime Minister is "Make in India, Make for the World".
                    <br /><br />
                    The service sector makes up 50% of GDP and remains the fastest growing sector, while the industrial sector and the agricultural sector employ a majority of the labour force. India is the world's sixth-largest manufacturer, representing approximately 2.6% of global manufacturing output. India is the world's largest manufacturer of generic drugs, and its pharmaceutical sector fulfills over 50% of the global demand for vaccines. The Indian IT industry is a major exporter of IT and ITE services and employs close to 4.5 million people. India ranks second globally in food and agricultural production. India's telecommunication industry is the world's second-largest as per the numbers of mobile phone, smartphone, and internet users. India also has one of the fastest-growing e-commerce markets, with all major global brands vying for a presence in India. In key sectors like the production of coal, steel, and cement, India ranks as the second largest producer. India has the world's fourth largest natural resources, and its mining sector makes a substantial contribution of about 11% to the country's industrial GDP. <br /><br />
                    The Indian economy has made phenomenal strides since independence and is on the verge of a breakthrough both in terms of growth and productivity to ensure a better and more equitable social order than what has been the case so far. Even though the pandemic in 2020 has affected trade, India stands out as a bright star with the economy estimated to grow at around 7% in FY2023. Its long-term growth perspective remains positive due to its young productive population, healthy savings, and investment rates, and enhanced integration with the global economy. <br /> <br />
                    However, volatile oil prices, unemployment, and the Russia-Ukraine war leading to supply-demand gaps in the availability of essential goods to the consumer and rising commodity prices add to the vulnerabilities and pose challenges for the Indian economy in the short and medium run. These need to be addressed keeping the well-being of citizens in mind. <br /><br />
                    India's G-20 presidency has come at an appropriate time, allowing it to influence the global agenda based on its priority of accelerated and inclusive growth. <br /> <br /> To secure the lives and livelihoods of its large population the country needs to relook at its economic and social indicators and undertake stimulus measures (both fiscal and monetary) to boost growth and generate demand. To achieve sustainable economic development, India needs to focus on public sector reforms, infrastructure development, agricultural and rural development, removal of antiquated land and labour regulations, financial inclusion, giving impetus to private investment and exports, education, and public health. Economic growth, asset-building, and development need to be linked with actual progress in the lives of people to shape their productive and positive role in society with reasonably decent and improved levels of living.
                    <br /><br />
                    ICPRD strives towards finding ways and means to contribute to the growth of the Indian economy and vision of making India a developed economy by 2047. This can be achieved by collecting data, carrying out research, taking feedback from the ground, engaging with domain experts with proven track records and commitment to India's socio-economic growth, and making valuable suggestions to policymakers. We intend to contribute our bit for a stable, progressive, and peaceful India to eventually pave the way for global welfare with the vision of "One Earth, One Family, and One Future". <br /><br />


                </p>

            </div>
            <SupportUs />
            <Footer />
        </div>
    )
}

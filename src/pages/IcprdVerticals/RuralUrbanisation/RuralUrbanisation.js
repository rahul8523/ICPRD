import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import RuralUrbanisationImg from '../../../assets/images/VerticlesBanners/RuralUrbanisation.jpg'

import '../IcprdVerticals.css'
import AboutBox from '../../../components/AboutBox/AboutBox'
export default function RuralUrbanisation() {
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
        backgroundImage: RuralUrbanisationImg,
        text: "Rural Urbanisation",
        subText: "Home / Rural Urbanisation"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <div className='economic-facts'>
                <div>
                    <h1>1.</h1>
                    <p>India has 600,000 + villages and only 7,000+ towns

</p>
                </div>
                <div style={{borderRight:'none'}}>
                    <h1>2.</h1>
                    <p>The rural population is 69% while the urban is only 31%</p>
                </div>
               
            </div>
            <AboutBox
                title="RURAL URBANISATION"
                text={[
  "The rural-urban divide, a symptomatic term describing the contrasts in income distribution, consumption patterns, and quality of life, is a phenomenon found in most of developing countries. Rural-urban disparities in post-colonial countries have been a major concern for policymakers. India, with its vast population of 1.38 billion has more than 6 lakh villages while there are only around 7000 towns and urban centres grappling with this problem with the rural population accounting for 69% and the urban population 31% of the total population, as per the last census.",
  "The divide leads to a lack of livelihood opportunities, basic infrastructure & amenities to access basic health services, education, drinking water, and nutritious food in rural areas. From ancient human history to the present day, India has primarily evolved into Planned Rural Urbanisation (PRU) and unplanned Rural Urbanisation (URU). Examples of URU are suburbanization, nonmetropolitan industrialization, urban sprawl and counter-urbanization processes, and the activities of diaspora migrants and hometown associations.",
  "About 70% of the population in our country continues to live in rural areas and depends on the rural economy. While the employment rates are not very encouraging globally, 50% of the labour force continues to depend on the allied sector. The rural per capita income has largely remained stagnant over the years. The lack of productivity in the agri-sector has only accentuated the lack of resources in the rural areas. With a GDP contribution of 21% from the allied sector, where industries and service sectors contribute 24% and 55% respectively, the rural economy awaits a much-needed overhaul.",
  "While doses of poverty alleviation programmes, Rural employment and livelihood schemes and Health missions attempted to improve crucial development indicators of rural areas, the benefits have not reached the rural population due to varied reasons including lack of transparency in the system, wrong identification of beneficiaries and lack of political and administrative will and accountability amongst others. The economic policies since independence have been largely focussed on urban areas, assuming that the benefit of India’s high growth and expansion of industrial/urban centres would automatically percolate down to rural areas.",
  "Slow development of rural areas, which impedes rural productivity, manifests itself in inadequate infrastructure and quality of life leading to unequal income opportunities and a sense of deprivation amongst a large chunk of the rural population. As a result, the vast majority of India’s rural population has remained untouched by India’s development story for a long time.",
  "One of the concerning outcomes of tardy development in rural areas is the migration of the rural population. Rural urbanisation is a product of numerous push and pull factors that result in people moving from rural areas to larger urban centres and small & intermediate towns. Many have little choice but to live in small scattered urban settlements/slums in peri-urban areas of cities and towns, or along urban transportation corridors.",
  "Factors like poor land holding patterns, technological advances in agriculture, logistics, quality assurance and markets; rural debt, impacts of remittances on local economies; climate change impacts, and the dynamics of labour markets are dramatically transforming the landscape of rural areas in India. As a result, the population left in the villages are only those depending largely on agriculture and related/ancillary activities, while the rest prefer to move out and live in cities and urban centres which offer more opportunities, better incomes and comfort. Small and intermediary cities offer opportunities for subsistence living for a growing marginalised population in transitioning from a rural to an urban lifestyle.",
  "Since this has become a huge challenge for policymakers, human settlement patterns and preferences call for a thorough relook. A re-connect between rural and urban India is required in order to strike a fair and optimum balance between urban and rural parts on a sustainable basis. Managing the development of these towns, which are at the front line of rural-urban migration, in rapidly urbanising economies is proving to be a challenge. Many are becoming poverty traps for people leaving the land either by choice or force. Socio-economic convergence between urban and rural areas needs to be reached now sooner than ever before.",
  "Dr Shyama Prasad Mukherji Rurban Mission (SPMRM) is being implemented to develop such rural areas by provisioning economic, social and physical infrastructural facilities. Acknowledging the fact that large parts of rural areas are not stand-alone but part of cluster settlements, the primary focus is to provide village clusters with modern amenities, enhanced basic services and infrastructure attracting investments and providing employment and resulting in economic development. The clusters once developed can be classified as “Rurban”. Another strategy being adopted is the Rural-Urban synergy aimed at creating linkages between rural and urban areas. It will lead to a smooth flow of agricultural and other commodities from peripheral rural areas to adjoining urban markets. Similar linkages will be developed in the form of a transition of people, money, household items, information, and service sectors. The Sansad Adarsh Gram Yojana scheme is also under implementation since 2015, wherein a Member of Parliament has to choose villages in his constituency to be transformed into model villages with all social, welfare and infrastructure facilities.",
  "ICPRD will focus on the study of rural-urbanisation patterns with the idea of bridging the socio-economic and technological divide between rural and urban areas and exploring which National and State/local governments' policy responses - existing and new - could improve the sustainability of rural urbanisation and development in small and intermediate towns, with a focus on India and other developing economies."
]}
                classNameUnique="pad-4-s-2 rural morepaff"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}

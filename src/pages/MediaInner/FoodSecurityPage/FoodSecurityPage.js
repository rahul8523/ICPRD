import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import FoodSecurity from '../../../assets/images/VerticlesBanners/FoodSecurity.jpg'
import AboutBox from '../../../components/AboutBox/AboutBox'
import '../IcprdVerticals.css'

export default function FoodSecurityPage() {
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
    const bannerData = {
        backgroundImage: FoodSecurity,
        text: "Food Security",
        subText: "Home / Food Security"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <AboutBox
                title="Food Security "
                text={ [
  "There is global recognition of food’s role as going beyond being a source of sustenance and playing a pivotal role in ensuring national security, political stability, economic growth, and peaceful coexistence of the members of society.",
  "India was ranked at 68th position in the Global Food Security (GFS) Index 2022 out of 113 countries on the GFS Index. According to the UN, there are nearly 195 million undernourished people in India. This forms a quarter of the world's hunger burden. Also, roughly 43% of children in India are chronically undernourished. There are regional or state-wise disparities in the food security index as well.",
  "Food security as a multidimensional concept is characterized by four identified pillars related to physical and economic access to food. These are purchasing power, the income of the population, transport, and market infrastructure. There can be nothing more worrisome than the fact that India still lags in providing basic and healthy food to its citizens. Children and women are the worst sufferers. Of late, India has been sliding down in the World Food Security Index. The quality of food available for the poor strata of society is woefully short of the desired nutrition levels. This adversely affects the working class's health and efficiency at work.",
  "Recognizing the unequivocal and undeniable reality that unhindered physical and economic access to food is inextricably entwined with national security and that any population’s access to sufficient quantity of safe and nutritious food is a core state interest, the Government of India enacted the National Food Security Act in 2013 (NFSA). This provides subsidies to cover 50% of the population in urban areas and 75% of the population in rural areas. There are two categories of beneficiary households under the NFSA- Antyoday Anna Yojna (AAY) and the priority households. The AAY households are entitled to 35 kg of food-grains per month irrespective of the number of family members whereas the priority households get 5kg of food-grains per family member. This has to some extent ameliorated the problem of population below the poverty line, particularly during the long pandemic period.",
  "To ensure national security, balanced economic growth, and achieving food security for a growing population through higher food production long-term measures need to be taken. This inter-alia includes education and literacy, tackling climate change impact, improved technology adoption, integrated nutrient management, integrated water management, crop diversification, augmentation of storage capacity to prevent wastage, streamlining public distribution system, and logistics, etc.",
  "Thus, the food security law needs to be taken forward by creating an ecosystem to ensure that citizens are provided with adequate, safe, and nutritious food to lead an active and healthy life. This can enable them to efficiently contribute to the growth of the country.",
  "ICPRD is drawing a plan to make this possible for all Indians without any exceptions."
]}
                classNameUnique="pad-4-s-2"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}

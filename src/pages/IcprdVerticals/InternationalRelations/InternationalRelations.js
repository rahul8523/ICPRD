import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import InternationalRelationsForeignPolicy from '../../../assets/images/VerticlesBanners/InternationalRelationsForeigneolicy.jpg'
import AboutBox from '../../../components/AboutBox/AboutBox';
import '../IcprdVerticals.css'
export default function InternationalRelations() {
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
        backgroundImage: InternationalRelationsForeignPolicy,
        text: "International Relations & Foreign Policy",
        subText: "Home / International Relations & Foreign Policy"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <AboutBox
                title="INTERNATIONAL RELATIONS & FOREIGN POLICY"
                text={[
                    "Core values and ideas of India’s foreign policy are drawn from its rich civilization, history, culture, and traditions. Since its independence in 1947, India has put in place institutions, practices and processes to pursue an independent and distinctly unambiguous foreign policy. Modern India has pursued many simultaneous foreign policy goals with a few underlying beliefs based on peaceful co-existence, being recognized as a great power, and maintaining complete independence from foreign power blocks through non-alignment. These ideals are drawn from the freedom struggle and “Purna Swaraj” by the founding fathers of the nation.",
                    "India’s key foreign policy goals of non-alignment, constructivism, identification of shared beliefs and modernization have largely remained constant even in the phases of the bipolar, Cold War era and the subsequent emergence of a multi-polar world, following the disintegration of the Soviet Union, and also the current Russia Ukraine war. Being consistent with India’s non-alignment policy, Hon’ble Prime Minister Shri Narendra Modi, in his address at the US Congress stated while maintaining a neutral stand that the era is not of war but of dialogue and diplomacy. He emphasized how the war is causing great pain in the area and with the involvement of major powers, the consequences are severe.",
                    "Through the past decades, there has been a profound change in the world order, be it the 2008 global financial crisis to the 2020 Coronavirus pandemic. The very nature of international relations and its rules are changing at a rapid pace. For India, this means optimal relationships with all the major powers to take forward its well-defined goals. It also requires an enhanced, non-reciprocal engagement to forge extensive economic and strategic relationships with the South East Asian neighbourhood. This is reflected in India’s “Act East” policy.",
                    "In the fast-changing world order bringing frequent shifts in the security environment and myriad other areas like trade, travel, and technological exchanges among countries and continents, India’s foreign policy and diplomacy need to be put on a more sure-footing, forward assessment, and planning than ever before. In this respect, the recent COVID-19 pandemic can well be a case study. India with its great strength in pharmaceutical and allied industries quickly rose to the challenge and was able to effectively launch “vaccine diplomacy” for the countries that were in need of the vaccine.",
                    "Today’s closely interconnected world calls for a greater watch over trends and events right from the immediate neighbourhood to the far-off parts of the world. Bridging the existing gaps in data and feedback from around the world is a call that experts and diplomats need for forward planning and safeguarding the country’s interests. India has a large pool of talented and experienced diplomatic corps. It is so both in its missions abroad and back home. They are ably guided by political leadership. This forms the backbone for meeting India’s foreign policy planning in strategic, political, and economic terms as per her best interests. India’s Diaspora is also a trusted partner in its economic growth and plays a unique role in soft diplomacy and cultural outreach.",
                    "The current period of global upheaval entails greater expectations from India. This calls for putting India on the path to take more responsibilities and exhibit larger capabilities and influence since the world looks at it as a growing global power. The assumption of the presidency of G-20 nations for the year 2023, offered a great opportunity for India to launch its global footprint that leverages India's greater capability and relevance. The theme for India’s G-20 presidency is in sync with the key template of Prime Minister Narendra Modi’s foreign policy vision of “Vasudev Kutumbakam” or “One Earth, One Family, One Future”.",
                    "ICPRD looks forward to meaningful interactions with all such experts, and diplomatic hands both from the Indian Foreign Service and members of academia specializing in international relations, diplomacy, and region-specific studies for a better understanding of the issues and to raise India’s standing in the world further with the aim being progress, peace, and prosperity for all."
                ]}
                classNameUnique="pad-4-s-2 nodemake"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}

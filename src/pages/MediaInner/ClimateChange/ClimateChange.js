import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import climate from '../../../assets/images/VerticlesBanners/climate.jpg'
import AboutBox from '../../../components/AboutBox/AboutBox'
import '../IcprdVerticals.css'
export default function ClimateChange() {
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
        backgroundImage: climate,
        text: "Climate Change",
        subText: "Home / Climate Change"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <div className='economic-facts'>
                <div>
                    <h1>1.</h1>
                    <p>India is 4th in the world in installed renewable energy capacity</p>
                </div>
                <div style={{borderRight:'none'}}>
                    <h1>2.</h1>
                    <p>Despite having more than 17% of the global population, its contribution to the global cumulative greenhouse gas emission is only 4%</p>
                </div>
               
            </div>
            <AboutBox
                title="Climate Change "
                text={[
  "The Global Climate Risk Index 2021 places India 7th among the countries most affected by climate change. The report showed that 110% of the average rainfall occurred from June to September 2019, and the floods caused by the heavy rains led to 1800 deaths across 14 states and 1.8 million people being displaced.",
  "According to the 'Assessment of Climate Change Over the Indian Region', a report of the Ministry of Earth Sciences (MoES), Government of India, the average temperature of India has risen by 0.7°C between 1901 to 2018. The report says that the average temperature of the country may rise by approximately 4.4° C by the end of the twenty-first century. The report also revealed that the sea surface temperature (SST) of the tropical Indian Ocean has increased by 1°C on average between 1951–2015 and the summer monsoon precipitation has declined by 6% leading to increased droughts in India.",
  "Minister of State for Environment, Forest and Climate Change, Mr. Ashwini Kumar Choubey informed that while India has more than 17% of the global population, its contribution to the global cumulative greenhouse gas emission is only 4%.",
  "Today, India stands 4th in the world in installed renewable energy capacity. The non-fossil fuel energy of the country has increased by over 25% in the last 7 years and is 40% of the energy mix.",
  "At the UN Climate Change Conference in Glasgow (COP26), Prime Minister Mr. Narendra Modi unveiled the idea of ‘Panchamrit - the five nectar elements’, India’s commitment to deal with the challenge of climate change."
]}
                classNameUnique="pad-4-s-2"
            />
              <div className='economic-facts climate-facts'>
                <div>
                    <h1>1.</h1>
                    <p>India will take its non-fossil energy capacity to 500 GW by 2030</p>
                </div>
                <div >
                    <h1>2.</h1>
                    <p>India will meet 50 percent of its energy requirements from renewable energy by 2030</p>
                </div>
                <div >
                    <h1>3.</h1>
                    <p>India will reduce the total projected carbon emissions by one billion </p>
                </div>
                <div style={{marginTop:"2rem"}} >
                    <h1>4.</h1>
                    <p>India will reduce the carbon intensity of its economy by less than 45 percent by 2030</p>
                </div>
                <div style={{marginTop:"2rem"}}>
                    <h1>5.</h1>
                    <p>India will achieve the target of Net Zero by 2070</p>
                </div>

               
            </div>
            <AboutBox
                
                text={[
  "These ambitious commitments, when fulfilled, will not just change the situation of climate change in India, but globally.",
  "However, the Indian government has been working to address climate change issues for a long time. In a bold move in 2014, the Indian government announced climate change to be a priority by renaming the Union Ministry of Environment and Forests to the Ministry of Environment, Forests and Climate Change. India is also a party to the United Nations Framework Convention on Climate Change and its Paris Agreement and Kyoto Protocol.",
  "A number of programmes and schemes are being implemented by the Government of India to address climate change. The National Action Plan on Climate Change (NAPCC) is one of the major programmes that outlines a national strategy to increase the ecological sustainability of the country's path of development and enable the country to not just adapt to but also address climate change. The National Adaptation Fund for Climate Change (NAFCC) was set up to support adaptation activities in states and union territories vulnerable to climate change. Additionally, disaster-specific guidelines have been issued by the National Disaster Management Authority (NDMA) to deal with disasters caused by climate change like heat waves, floods, and cyclones.",
  "ICPRD strongly feels that there is an immediate need for a new roadmap to make emission cuts possible and improve the lives and livelihood of people during the process with their safety and security in mind. Accepting its responsibility and the role it can play in addressing the issue of climate change, ICPRD, as a global think tank, aims to take forward the vision and mission of Prime Minister Shri Narendra Modi and support the government, in any way it can, in making of the new India.",
  "One of the major focus areas of ICPRD will be to highlight India’s stand and commitment to address climate change globally, while at the same time, changing any negative perception that the world has of India’s role in contributing to the problem. This will be done by publishing and promoting the various findings, policies and initiatives of the Government of India on different media platforms, nationally and globally.  ICPRD will also play a leading advocacy role in bringing together all stakeholders like governments, policymakers, communities, corporates, and civil society organizations on the same page so they can work together to address the climate change issue. Also, ICPRD will work on identifying the various steps and interventions of not just the government but also civil society organizations and other stakeholders that are making a positive impact in making a sustainable ecology so they can be given recognition and be replicated and mainstreamed."
]}
                classNameUnique="pad-4-s-2"
            />
            <SupportUs />
            <Footer />
        </div>
    )
}

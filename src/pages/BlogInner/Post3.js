import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import SupportUs from '../../components/SupportUs/SupportUs'
import BannerImg from '../../assets/images/VerticlesBanners/posti.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../BlogInner/post.css'

export default function Post3( {Date,titles}) {
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
        text: "Education Paradigm and Climate Change",
        subText: "Home / Education Paradigm and Climate Change"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <Container className='py-4'>
                <Row>
                <Col sm={12} md={12}>  
                <p className='small float-right'>04/10/2022</p>
                </Col>
                    <Col sm={12} md={12}>
                    <h2 className='pb-3 textbo' > {bannerData.text}</h2>
                    <p className='text-justify'>

<p>Climate change mitigation relies heavily on education. Parties to the UN Framework Convention on Climate Change (UNFCCC) are responsible for conducting educational and public awareness campaigns on climate change, as well as ensuring public participation in programs and information access on the issue.</p>
 
 <p>Education can help people change their attitudes and behaviors, as well as make informed decisions. Young people can be taught about the effects of global warming and how to adapt to it in the classroom. Education empowers everyone, but it especially motivates young people to take action. Knowing the facts, helps to alleviate fear of an issue that is frequently characterized by doom and gloom in the public sphere. A recent report fromStanford University examined how this subjectbenefited students from nursery school to the end of secondary school, concluding that 83% of students improved their environmental behavior.</p>
 <p>Climate Change education, according to UNESCO, allows students to "understand and address the impacts of the climate crisis, empowering them with the knowledge, skills, values, and attitudes needed to act as agents of change." The protection of the environment is everyone's responsibility. Teachers should educate students about the climate crisis and the importance of maintaining environmental health (clean air, safe chemical use, sound agricultural practices, radiation protection, and so on), and encourage them to take proactive steps to become climate action champions</p>

<p>India is ranked last among 180 countries in the World Economic Forum's Environmental Performance Index (EPI) 2022, which measures countries' environmental health and sustainability. Shocking? Is it bothering us in any way? We have been unconcerned about such reports as a country because we appear to believe that climate change is not a real issue. Few parliamentarians and legislators are interested in discussing this issue. Our television networks do not consider the climate crisis to be a topic worth debating. We don't seem to be interested in figuring out why temperatures are rising and why cyclones and floods are becoming more common. Our callous behavior toward the climate crisis could be explained by a lack of a sense of belonging to the planet.</p>


<p>As a result, our educational system places insufficient emphasis on climate change education and lacks a climate change curriculum. It is a source of concern for us because many countries, including New Zealand, Italy, and the United Kingdom, have taken proactive measures and implemented CCE in schools with the goal of raising student awareness and producing climate action champions. Unfortunately, India does not appear to understand the importance of its response.</p>
 
 <p>Prime Minister Modi emphasized the importance of including climate change adaptation policies in the school curriculum during his speech at the 26th UN Climate Change Conference of the Parties (COP26) in Glasgow in 2021, but the National Council of Educational Research and Training (NCERT) recently removed chapters on climate change (Class 11: Greenhouse effect, Class 7: weather, climate and water and Class 9: the Indian monsoon). The explanation offered was that it was an attempt to reduce the workload of students. It was not only a step backward, but it also demonstrated a lack of sensitivity. Following widespread outrage from educators and activists, Education Minister Dharmendra Pradhan announced shortly that the dropped chapters would be reinstated.</p>
 <p>How can educational training be brought into schools? In addition to making it a compulsory subject, there are numerous climate change-related activities that can be carried out in schools, with Italy being the only European country to do so thus far. For example, environmental activities in nature such as clean-up operations, visits to farms and nurseries to learn firsthand how to care for animals and plants, recycling courses and workshops, and so on.</p>
 
<p> Under the first climate-change school curriculum introduced by an Indian state, students in Maharashtra will begin learning about worsening droughts, floods, and storms on a hotter planet, as well as how to map and reduce their carbon footprint. The Maharashtra curriculum aims to get at least some of that right, with farm visits to identify crops and how much water they consume, rain gauge activities, and video screenings on rising seas and cyclones. The English and Marathi lessons for Class 1 to Class 8 students aim to spark conversations in homes about extreme weather and rising seas, according to officials, as efforts worldwide ramp up to raise awareness that climate change is not a distant threat. In classes that are likely to be introduced during this academic year, which began in June, approximately 1.4 crore students in over 1,00,000 schools will learn what is fueling these and other climate shifts. The new curriculum will also cover the fuels used by planes, trains, buses, and cars, and will help students understand why public transportation is the most environmentally friendly option, according to officials. The new curriculum, which includes more than 100 lessons, will conclude with "green habits," which aim to reduce the carbon footprint of students' households through behaviour changes such as turning off lights and using solar power. The lessons will also shed light on local efforts to transition from coal to solar power, as well as global climate action goals such as the 2015 Paris Agreement's warming targets, environmental protection, and air quality.</p>

                        </p>
                    </Col>
                </Row>
            </Container>

            <SupportUs />
            <Footer />
        </div>
    )
}

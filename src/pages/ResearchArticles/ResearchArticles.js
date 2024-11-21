import React from 'react'

import Economic_Policy from '../../assets/images/ResearchArticles/Layer676.png'
import BannereconomicPolicy from "../../assets/images/ResearchArticles/bannersarti.jpg";
import Banner from "../../components/Banner/Banner";
import Resarch from './Resarch'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SupportUs from '../../components/SupportUs/SupportUs';

export default function Verticals() {
  const cardsData = [
    {
      id: 1,
      imageSrc: Economic_Policy,
      heading: 'Sujeet Kumar Dubey',
      url:"/research-articles-detail",
      content: 'Effect Of Arsenic Ingestion',
      linkhead:'Read More',
      text: 'Bihar is one of major arsenic affected state of India....',
    },

  ];

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
            { text: 'Healthcare', url: '/' },
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
  const bannerDataForPage2 = {
    backgroundImage: BannereconomicPolicy,
    text: "Research Articles",
    subText: "Home / Research Articles",
  };

  return (
    <>


    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"}/>
      <Banner {...bannerDataForPage2} />

      <div className='icprdVerticals'>
    {/* <h1 class="text-with-line text-center">Research Articles</h1> */}

      <div className="vertical-card-container">
        {/* Use map to dynamically create product cards */}
        {cardsData.map((card) => (
          <Resarch
            key={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            text={card.text}
            url={card.url}
            linkhead={card.linkhead}
            content={card.content}
            
          />
        ))}
      </div>
    </div>
  
    <SupportUs/>
      <Footer/>
    </div>
    </>
  );
}

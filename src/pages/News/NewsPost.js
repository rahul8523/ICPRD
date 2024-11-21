import React from "react";
import BannereconomicPolicy from "../../assets/images/Media/mediareports.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import News from "./News";

export default function NewsPost() {
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
    text: "News",
    subText: "Home / News",
  };
  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />
      <div className="ecopolicy pt-3">
  
<News/>

 
       
      </div>

      <Footer />
    </div>
  );
}

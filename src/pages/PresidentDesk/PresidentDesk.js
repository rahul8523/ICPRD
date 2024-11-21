import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import BannerVideos from "../../assets/images/PresidentsDesk/BannerVideos.png"
import Letter from '../../components/Letter/Letter';
import PresidentDeskAbout from '../../components/PresidentDeskAbout/PresidentDeskAbout';
import SupportUs from '../../components/SupportUs/SupportUs';
import Footer from '../../components/Footer/Footer';
// import AboutPresident from '../../components/PresidentDesk/AboutPresident/AboutPresident';
// import Footer from '../../components/home/footer/Footer';
// import SupportUs from '../../components/PresidentDesk/SupportUs/SupportUs';
import "./PresidentDesk.css"

export default function PresidentDesk() {
  const linksForAbout = [
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
    backgroundImage: BannerVideos,
    text: "From The President's Desk",
    subText: "Home / From The President's Desk"
  };
  return (
    <div>
      <Navbar links={linksForAbout} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />
      <Letter />
      <PresidentDeskAbout/>
      <SupportUs />
      <Footer />
     
    </div>
  )
}

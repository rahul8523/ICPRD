import React from "react";
import Graph from "../../assets/images/support/supportbutton.png";
import BannereconomicPolicy from "../../assets/images/support/banner.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./support.css";

export default function Support() {
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
    text: "Support Us",
    subText: "Home / Support Us",
  };
  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />

     
      <div className="SupportUs morepaff">
        <div className="icprdVerticals"><h1 class="text-with-line text-center">OBJECTIVE</h1></div>
        
        <p className="para text-center pt-3">
          India Centre for Policy Research and Development (ICPRD) is a
          voluntary and non-profit organisation. A team of committed members of
          policy experts and intellectuals have conceptualised it with the idea
          to make effective policy intervention to bring change and give a new
          thrust to policy making. The main focus of the ICPRD is to bridge the
          gap between policy and public. The participation of stakeholders in
          policy making is the key area for us and it is with the sole intent to
          improve the lot of India and Indians. ICPRD believes in gathering
          policy inputs from the people or direct stakeholders in order to
          review the existing policies and assess their efficacy before drawing
          any conclusion.
        </p>
   
        <p className="para text-center">
          A thorough research of public policy and issues related to its
          implementation has always been felt in India. So ICPRD is committed to
          connect policy making with the larger public sphere to ward off its
          failure, glitches and sloths. A robust policy mechanism is what ICPRD
          is for putting in place to speed up India's growth story and its
          people's prosperity.
        </p>
        <div className="SupportUs"><h1 class="text-with-line text-center">SUPPORT US</h1></div>
        <p className="para text-center">
          India Centre for Policy Research and Development (ICPRD) looks for
          financial support from independent sources so that our work and
          mission in the field of correct policy evolvement is not influenced in
          any manner whatsoever.
        </p>
        <p className="para text-center">
          Grants to the ICPRD can be made from both governmental and
          non-governmental sources from within the country and abroad as per the
          existing rules and guidelines of Government of India. This is expected
          to be with the explicit intent on the part of the donors to support
          our independent initiative in policy making and its implementation in
          the best interests of the country and its people and not with any
          partisan interests.
        </p>
       
      </div>
      <div className="economicGraph py-3">
        <a href="https://pages.razorpay.com/icprdpay" target="_blank" rel="noreferrer"><img src={Graph} alt="" style={{width:"25%"}}/></a>
      </div>
      <Footer />
    </div>
  );
}

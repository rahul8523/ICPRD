import React from "react";
import Graph from "../../assets/images/support/supportbutton.png";
import BannereconomicPolicy from "../../assets/images/support/privacypolicy.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./Privacypolicies.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


export default function PrivacyPolicies() {
  const navlinks = [
    { text: "Home", url: "/" },
    {
      text: 'About us', url: '/aboutUs',
      dropdown: false,
      dropdownOptions: [
        { text: "About Us", url: "/aboutUs" },
        { text: "President Desk", url: "/president" },
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
    { text: "Event", url: "/event" },
    { text: "Team Behind us", url: "/people-behind-us" },
    {
      text: 'GlobalChapter',
      dropdown: true,
      dropdownOptions: [
          { text: 'USA', url: '/' },
          { text: 'UK', url: '/' },
          { text: 'South Africa', url: '/' },
      ],
  },
    { text: "Support Us", url: "/support" },
    { text: "Contact Us", url: "/contact" },
    // ... other links
  ];
  const bannerDataForPage2 = {
    backgroundImage: BannereconomicPolicy,
    text: "Privacy Policies",
    subText: "Home / Privacy Policies",
  };
  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
      <Banner {...bannerDataForPage2} />
      <Container fluid>
        <Row style={{width:"95%",margin:"auto"}}>
      <div className="ecopolicy morepaff">


        <p className="para text-left pt-3">
          This is to state that INDIA CENTRE FOR POLICY RESEARCH & DEVELOPMENT
          (ICPRD) does not collect any information on our website except the
          expressly stated modes below. We do not share this data with anybody
          for any reason except where described below.
        </p>
        <br></br>
        <p className="para text-left">
          (1) We thank you for your interest in ICPRD and welcome your
          suggestions to improve our website or to offer your service. You may
          also wish to contact us for availing assistance of any kind. The
          “Contact Us” section is our window of communication. You may choose to
          share information such as email address/ phone number/ mailing address
          in the form to enable proper response to your query. This information
          will be stored and used to send you reports on the work we pursue. You
          will have the option to Unsubscribe at any time.
        </p>
        <p className="para text-left">
          (2) We look to our readers to donate funds which enable us to continue
          our work. The “Donate” section is the gateway which allows you to
          contribute. We are conscious of the concerns of donors regarding the
          safeguarding of sensitive financial and personal information during
          the transaction. This policy sets out the system in place to ensure
          your security.
        </p>
        <p className="para text-left">
          • Your donation is protected and encrypted to enable complete end to
          end security.
        </p>
        <p className="para text-left">
          • We will be issuing a receipt and 80G certificate against your
          deduction and must therefore collect your name, address, phone number,
          residence status, PAN Number and email address to dispatch an
          e-receipt and/or courier a hard copy. If you only want an e-receipt,
          you need not provide your mailing address and phone number. No hard
          copy will be issued, nor is it necessary to claim IT benefits. You may
          choose not to share your PAN Number. In such a case, CPAA will be
          required to pay income tax at current rates, normally 30% of donated
          amount.
        </p>
        <p className="para text-left">
          • This data will be stored securely with us to ensure we can retrieve
          information which may be needed by you at a later point of time such
          as due to loss of a receipt and/or for requests from the proper
          authorities in case of scrutiny.
        </p>
        <div className="SupportUs">
          <h1 class="text-with-line text-center">Disclaimer :</h1>
        </div>
        <p className="para text-left">
          The information contained in this site is intended for general
          reference purposes only. It is India’s prominent Think Tank on Public
          Policy and advocacy. It is an ideal forum for intellectual interaction
          on varied developmental issues and related matters guiding policy
          formulation.
        </p>
        <div className="SupportUs">
          <h1 class="text-with-line text-center w-20">Refund Policy :</h1>
        </div>
        <ul>
          <li className="para text-left">
            In case of the unlikely event of an erroneous donation or if the
            donor would like to cancel his donation, the donor may send ICPRD an
            email, within 2 days of making the donation, to info@icprd.org.in
            with valid reasons for the same.
          </li>
          <li className="para text-left">
            Email must be sent from the same email id mentioned during donating.
          </li>
          <li className="para text-left">A proof of deduction of the donation amount must be included.</li>
          <li className="para text-left">
            ICPRD will respond to the donor within 7 working days of receiving a
            valid request for refund. A valid refund request will be processed,
            depending upon the type of banking instrument used during the
            transaction and the payee bank.
          </li>
          <li className="para text-left">
          Incase the tax exemption certificate has been already issued; we will unfortunately, not be able to refund the donation.
          </li>
        </ul>
        <p className="para text-left">
        Contact info@icprd.org.in for any further information regarding privacy policy.
        </p>
      </div>

      </Row>
    </Container>
    <div className="economicGraph py-5">
    <a href="https://pages.razorpay.com/icprdpay" target="_blank" rel="noreferrer"><img src={Graph} alt="" style={{width:"30%"}}/></a>
      </div>
      <Footer />
    </div>
  );
}

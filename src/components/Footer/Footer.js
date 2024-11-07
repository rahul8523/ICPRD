import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo/logo.png";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import { Link } from 'react-router-dom'
import ContGlobal from '../../assets/images/contact/website.png';
import Nav from 'react-bootstrap/Nav'

export default function Footer() {
  return (
    <div className="footer">
      <div className="org-title">
        <img src={logo} alt="Logo" style={{width:"400px"}}/>
        {/* <span>
          Indian Center
          <br />
          For Policy Research <br /> & Development
        </span> */}
      </div>
      <div className="row org-details">
        <div className="org-address col-lg-5">
        <h4>Contact</h4>
          <div className="address">
            <p>India Centre for Policy Research and Development </p>
           
          </div>
          <div className="contact-info">
          <p> <i class="ri-map-pin-line"></i>705, New Delhi House, Barakhamba Road, Connaught <br/> Place, New Delhi -110001</p>
            <p>
              <i class="ri-phone-line"></i> <a href="tel:+911141101333"> +91 (11)41101333</a>
            </p>
            <p>
              <i class="ri-smartphone-line"></i><a href="tel:+919717316565">+91 9717 316 565,</a> <a href="+919899811007">+91 9899 811
              007</a>
            </p>
            <p>
              <i class="ri-mail-line"></i><a href="mailto:secretariat.icprd@gmail.com">secretariat.icprd@gmail.com  ,</a><a href="mailto:secretarialt@icprd.org.in">secretariat@icprd.org.in</a>
            </p>
            <p>
            <img src={ContGlobal} alt="ContGlobal" width={19}/><a href="https://www.icprd.org.in">https://www.icprd.org.in</a>
            </p>
          </div>
        </div>

        
          <div className="page-links col-lg-2 org-address2">
          <h4>Important Links</h4>
              <nav>
                <ul className="footer-links">
                  <li>
                    <Nav.Link href="/aboutUs">About ICPRD</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/research-articles">Resources</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/event">Events</Nav.Link>
                  </li>

                  <li>
                    <Nav.Link href="/media-reports">Media</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/support">Support Us</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
                  </li>
                </ul>
              </nav>
            </div>


            <div className="page-links col-lg-3 org-address2">
            <h4>ICPRD Verticals</h4>
              <nav>
              <ul className="footer-links">
                  <li>
                    <Nav.Link href="/economicPolicy">Economic Policy</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/intRel">International Relations and Foreign Policy</Nav.Link>
                  </li>

                  <li>
                    <Nav.Link href="/climateChange">Climate Change</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/foodSecurity">Food Security</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="#">Legal Terms</Nav.Link>
                  </li>

                  <li>
                    <Nav.Link href="/educationTraining#">Education & Training</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/ruralUrbanisation">Rural Urbanisation</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/tradeCommerce">Trade & Commerce</Nav.Link>
                  </li>
                  <li>
                  <Nav.Link href="/agriculture">Agriculture</Nav.Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 org-address2 org-addres">
            <h4>Social Links</h4>
            <div className="social-links">
            <Link to="https://www.facebook.com/icprd" target="_blank"><img src={facebook} alt="" title="NAME"/>Facebook</Link>
            <Link to="https://www.linkedin.com/company/icprdindia/" target="_blank"><img src={linkedin} alt="" />LinkedIn</Link>
            <Link to="https://www.instagram.com/icprdindia/" target="_blank"> <img src={instagram} alt="" />Instagram</Link>
              <Link to="https://twitter.com/icprdindia" target="_blank"> <img src={twitter} alt="" />Twitter</Link>
             
              {/* <Link to="https://www.youtube.com/@indiacenterforpolicyresear390" target="_blank"><img src={youtube} alt="" />Youtube</Link> */}
   
        

            </div>
          </div>

      </div>
      <div className="copyright">
        <small>
        © 2023 India Centre for Policy Research and Development. All Rights
          Reserved
        </small>
        {/* <small>Design & Development by Digital Xplode</small> */}
      </div>
    </div>
  );
}

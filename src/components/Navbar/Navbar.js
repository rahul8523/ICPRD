import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo/logo.png"
import Imagetop from "../../assets/images/Azadi-Ka-Amrit-Mahotsav-new.png"
import { Link } from 'react-router-dom';


export default function Navbar({ links, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the dropdown options
const dropdownOptions = [
  { text: 'President', url: '/president' },
  { text: 'Economic Policy', url: '/economicPolicy' }
  
];

  // create a function to update the date and time
  function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);



  return (
    <nav className={`navbar ${className ? className : " "}`}>
      <div className="navbar-logo">
     
       <Link to={"/"}>
       <img src={logo} alt="Logo" />
       </Link> 
        {/* <span>Indian Center<br />For Policy Research <br /> & Development</span> */}
      </div>
   
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
  
        {links ? links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
            {link.dropdown && (
              <ul className="submenu">
                {link.dropdownOptions && link.dropdownOptions.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <Link to={option.url}>{option.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )) : " "}


<div className='datetester text-center'>
        <img src={Imagetop} style={{width:"100px"}}/><br/>
       <p id="p1" class="datetime text-right"><span id="datetime"></span></p>
       
      </div>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
    </nav>
  )
}

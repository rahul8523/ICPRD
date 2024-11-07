import React from 'react';
import "./SupportUsHome.css"

export default function SupportUsHome() {
  return (
    <div className="footerVerticals">
        <div className='supportUs'>
            {/* <article>
  
                <h1>Support Us</h1>
            </article> */}
            <div>
            India Centre for Policy Research and Development (ICPRD) looks 
for financial support from independent sources so that our work and mission in the field of correct policy evolvement is not influenced in any manner whatsoever.
            </div>
            <div>
            <p style={{margin: "-7px",textAlign:"center",fontSize:"16px"}}>Click below to</p>
            <button><a href="https://pages.razorpay.com/icprdpay">Support Us</a>
            </button>
            </div>

        </div>
        <div className='whoWeAre'>
        <article> 
                <h1 className='whoweare'>Who We Are</h1>
            </article>
            <div>Our years of experience have laid the foundation to build a portfolio of 8 verticals from Agriculture to Climate Change, Food Security and Education.</div>
        </div>
    </div>
  )
}

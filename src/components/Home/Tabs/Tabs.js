import React, { useState } from 'react'
import "./Tabs.css"
import { act } from 'react-dom/test-utils';
import Nav from 'react-bootstrap/Nav'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('news'); // State to track active tab
  const [currentCard, setCurrentCard] = useState(1);
  const handleDotClick = (e, index) => {
    e.target.click()
    if (index === 0) {
      setCurrentCard(0)
    } else {
      console.log(index);
      setCurrentCard(index)
    }

  };
  // Sample data for articles and blogs (you can replace this with your actual data)
  const news = [
    { id: 1, title: 'SMART System Flight-Tested by DRDO', content: '1 MAY 2024: The Supersonic Missile-Assisted Release of Torpedo (SMART) system was successfully flight-tested at around 0830 hrs on May 01, 2024 from Dr APJ Abdul Kalam Island off the coast of Odisha...', Author: "ICPRD", date: "May 01, 2024",url: "/news/smart-system-flight-tested-by-drdo" },
    { id: 2, title: 'India Witnesses 8% Growth in Mineral Production', content: '3 MAY 2024: The index of mineral production of the mining and quarrying sector for the month of February 2024 (Base: 2011-12=100) at 139.6 is 8% higher as compared ....', Author: "ICPRD", date: "May 03, 2024",url: "/news/India-witnesses-8percentage-growth-in-mineral-production" },
    { id: 3, title: '2nd Session of India-Nigeria Joint Trade Committee Held', content: '3 May 2024: A seven-member delegation from India led by Additional Secretary, Department of Commerce, Ministry of Commerce and Industry, Shri Amardeep Singh Bhatia....', Author: "ICPRD", date: "May 03, 2024",url: "/news/2nd-session-of-India-nigeria-joint-trade-committee-held" },
    // Add more articles here
  ];

  const blogs = [
    { id: 1, title: 'Climate Change Policy', content: 'Back in 2014, the Union Ministry of Environment and Forests changed its name to the Union Ministry of Environment, Forests, and Climate Change. The ministrys portfolio did include climate change earlier as well, but the focus had been primarily on international negotiations. The change in nomenclature clearly indicated....', Author: "ICPRD", date: "October 04, 2022 ",url: "/blog/indias-climate-change-policy" },
    { id: 2, title: 'Climate change & Corporate-Scape', content: 'As people around the world have become aware of the ramifications of the climate crisis, the entities with the most power and scope to mitigate it—The corporations—have begun to tremble. Corporations manufacture nearly everything we buy, use, and discard...', Author: "ICPRD", date: "October 05, 2022 ",url: "/blog/changing-corporate-scape-changing-climate" },
    { id: 3, title: 'Legalities around Climate Change', content: 'India is one of the countries vulnerable to climate change. Agriculture and other climate-sensitive industries employ roughly half of Indias population. About 12% of India is prone to flooding, while 16% is prone to drought. India is now the worlds third largest emitter of...', Author: "ICPRD", date: "October 05, 2022 ",url: "/blog/legalities-around-climate-change" }
    // Add more blogs here
  ];
  const aricl = [
    { id: 1, title: 'Effect of Arsenic Ingestion', content: 'Bihar is one of the majorarsenic-affectedstatesofIndia.Inarsenic-affecteddistrictsofBihar, we got information on various problems i.e, not only physical harm but also so many typesof mental illness.....', Author: "ICPRD", date: "October 04, 2022 ",url: "/blog/indias-climate-change-policy" },
    { id: 2, title: ' change & Corporate-Scape', content: 'As people around the world have become aware of the ramifications of the climate crisis, the entities with the most power and scope to mitigate it—The corporations—have begun to tremble. Corporations manufacture nearly everything we buy, use, and discard...', Author: "ICPRD", date: "October 05, 2022 ",url: "/blog/changing-corporate-scape-changing-climate" },
    { id: 3, title: ' around Climate Change', content: 'India is one of the countries vulnerable to climate change. Agriculture and other climate-sensitive industries employ roughly half of Indias population. About 12% of India is prone to flooding, while 16% is prone to drought. India is now the worlds third largest emitter of...', Author: "ICPRD", date: "October 05, 2022 ",url: "/blog/legalities-around-climate-change" }
    // Add more blogs here
  ];
  // Function to toggle between "Articles" and "Blogs" tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderDots = (activeTab) => {
    if (activeTab === "news") {
      return news.map((_, index) => (
        <label for={`t${index}`} id={`tab${index}`} key={index}
                
                onClick={(e) => handleDotClick(e,index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span
                
            ></span></label>
      ));
    } if (activeTab === "aricl") {
      return aricl.map((_, index) => (
        <label for={`t${index}`} id={`tab${index}`} key={index}
                
                onClick={(e) => handleDotClick(e,index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span
                
            ></span></label>
      ));
    } 
    else {
      return blogs.map((_, index) => (
        <label for={`t${index}`} id={`tab${index}`} key={index}
                
                onClick={(e) => handleDotClick(e,index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span
                
            ></span></label>
      ));
    }

    

  };

  return (
    <div className="tab-component">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => handleTabClick('news')}
        >
          <h1 className='aticalesm articlss'>News</h1>
        </button>
        <button
          className={`tab-button ${activeTab === 'aricl' ? 'active' : ''}`}
          onClick={() => handleTabClick('aricl')}
        >
           <h1 className='aticalesm articlss' > Articles </h1>

        </button>
        <button
          className={`tab-button ${activeTab === 'blogs' ? 'active' : ''}`}
          onClick={() => handleTabClick('blogs')}
        >
           <h1 className='aticalesm articlss' >Blogs</h1>

        </button>
        
      </div>
      <div className="content-wrapper">
      <input type="radio" name="sliderTab" class="d-none" id="t0" />
                <input type="radio" name="sliderTab" class="d-none" id="t1" checked />
                <input type="radio" name="sliderTab" class="d-none" id="t2" />
        {activeTab === 'news' ? (
          <div className="card-list" >
            {news.map((newss,index) => (
              <div className="card" key={newss.id} id={`tabCard${index}`}>
                <h3>{newss.title}</h3>
                <hr className='card-hr' />
                <p>{newss.content}</p>
                <footer className='article-card-footer'>
                  <div>
                    <h5>{newss.Author}</h5>
                    <p>{newss.date}</p>
                  </div>
                  <a href={newss.url} target='_blank'>View All 1</a>
                </footer>
              </div>
            ))}
          </div>
        ) :
        activeTab === 'aricl' ? (
          <div className="card-list" >
            {aricl.map((aricls,index) => (
              <div className="card" key={aricls.id} id={`tabCard${index}`}>
                <h3>{aricls.title}</h3>
                <hr className='card-hr' />
                <p>{aricls.content}</p>
                <footer className='article-card-footer'>
                  <div>
                    <h5>{aricls.Author}</h5>
                    <p>{aricls.date}</p>
                  </div>
                  <a href={aricls.url} target='_blank'>View All</a>
                </footer>
              </div>
            ))}
          </div>
        )
        : (
          <div className="card-list">
            {blogs.map((blog,index) => (
              <div className="card" key={blog.id} id={`tabCard${index}`}>
                <h3>{blog.title}</h3>
                <hr className='card-hr' />
                <p>{blog.content}</p>

                <footer className='article-card-footer'>
                  <div>
                    <h5>{blog.Author}</h5>
                    <p>{blog.date}</p>
                  </div>
                  <a href={blog.url} target='_blank'>View All</a>
                </footer>
              </div>

            ))}
          </div>
        )}
      </div>

      <div className="carousel-dots">{renderDots(activeTab)}
        <hr className="slider-hr" /></div>
    </div>
  );
}

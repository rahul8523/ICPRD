import React from 'react'
import "./Blog.css"


import Avtarim from '../../assets/images/Blog/avtar.png'
import Economic_Policy1 from '../../assets/images/VerticlesBanners/beautif.jpg'
import Economic_Policy2 from '../../assets/images/VerticlesBanners/corporate.jpg'
import Economic_Policy4 from '../../assets/images/VerticlesBanners/susta.jpg'
import Economic_Policy5 from '../../assets/images/VerticlesBanners/post5.jpg'
import Economic_Policy6 from '../../assets/images/Blog/HEALTH.jpg'
import Economic_Policy7 from '../../assets/images/Blog/decode.jpg'
import Arrows from '../../assets/images/Blog/Arrows.png'

import BlogList from './BlogList/BlogList'
// import { Link } from 'react-router-dom'


export default function Blog() {
  const cardsData = [

    {
      id: 6,
      imageSrc: Economic_Policy6,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Prachi Jain',
      Date: 'December 18, 2023',
      url:"blog/health-in-a-warming-world",
      titles:"Health in a Warming World",
      text: 'India is one of the countries vulnerable to climate...',
    },

    {
      id: 7,
      imageSrc: Economic_Policy7,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Prachi Jain',
      Date: 'December 20, 2023',
      url:"blog/decoding-climate-change",
      titles:"Decoding Climate Change",
      text: 'India is one of the countries vulnerable to climate...',
    },
    {

      
      id: 1,
      imageSrc: Economic_Policy1,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'October 04, 2022',
      url:"blog/indias-climate-change-policy",
      titles:"India's Climate Change Policy",
      text: 'Back in 2014, the Union Ministry of Environment...',
    },
    {
      id: 2,
      imageSrc: Economic_Policy2,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Daijword',
      Date: 'October 05, 2022',
      url:"blog/changing-corporate-scape-changing-climate",
      titles:"Changing Corporate Scape around the Changing Climate",
      text: 'As people around the world have become aware...',
    },
  
    {
      id: 4,
      imageSrc: Economic_Policy4,
      Icon: Avtarim,
      Arrow: Arrows,
      url:"blog/esg-sustainability-reporting",
      heading: 'Prachi Jain',
      Date: 'December 22, 2023',
      titles:"ESG Sustainability Reporting",
      text: 'Companies communicate their performance...',
    },
    {
      id: 5,
      imageSrc: Economic_Policy5,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Prachi Jain',
      Date: 'December 15, 2023',
      url:"blog/legalities-around-climate-change",
      titles:"Legalities around Climate Change",
      text: 'India is one of the countries vulnerable to climate...',
    },


  
  ];
  return (
    cardsData &&
    <div className='container'>
      <div className="row">
     
        {/* Use map to dynamically create product cards */}
        {cardsData.map((card) => (
          <BlogList
            key={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            text={card.text}
            titles={card.titles}
            url={card.url}
            Date={card.Date}
            Icon={card.Icon}
            Arrow={card.Arrow}
          />
        ))}
      </div>
    </div>
  )
}

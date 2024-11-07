import React from 'react'
import Avtarim from '../../assets/images/Blog/avtar.png'
import Economic_Policy1 from '../../assets/images/news/May3_nigeria.jpg'
import Economic_Policy2 from '../../assets/images/news/May3_mineral.jpg'
import Economic_Policy4 from '../../assets/images/news/47909627.jpg'
import Economic_Policy6 from '../../assets/images/news/May1SMART.jpg'
import Economic_Policy7 from '../../assets/images/news/May2_India.jpg'
import Arrows from '../../assets/images/Blog/Arrows.png'
import NewsList from './NewsList/NewsList'


// import { Link } from 'react-router-dom'


export default function News() {
  const cardsData = [

    {
      id: 6,
      imageSrc: Economic_Policy6,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 01, 2024',
      url:"news/smart-system-flight-tested-by-drdo",
      titles:"SMART System Flight-Tested by DRDO",
      text: '1 MAY 2024: The Supersonic Missile-Assisted Release...',
    },

    {
      id: 7,
      imageSrc: Economic_Policy7,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 02, 2024',
      url:"news/11th-India-new-zealand-jtc-meeting-held",
      titles:"11th India - New Zealand JTC Meeting Held ",
      text: '2 MAY 2024: A delegation led by the Commerce Secretary...',
    },
    {

      
      id: 1,
      imageSrc: Economic_Policy1,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 03, 2024',
      url:"news/2nd-session-of-India-nigeria-joint-trade-committee-held",
      titles:"2nd Session of India-Nigeria Joint Trade Committee Held",
      text: '3 May 2024: A seven-member delegation from India...',
    },
    {
      id: 2,
      imageSrc: Economic_Policy2,
      Icon: Avtarim,
      Arrow: Arrows,
      heading: 'Admin',
      Date: 'May 03, 2024',
      url:"news/India-witnesses-8percentage-growth-in-mineral-production",
      titles:"India Witnesses 8% Growth in Mineral Production",
      text: '3 MAY 2024: The index of mineral production...',
    },
  
    {
      id: 4,
      imageSrc: Economic_Policy4,
      Icon: Avtarim,
      Arrow: Arrows,
      url:"news/india-to-host-ACTM-46-CEP-26-in-may",
      heading: 'Admin',
      Date: 'May 01, 2024',
      titles:"India to Host ACTM 46 & CEP 26 in May",
      text: '01 MAY 2024: The Ministry of Earth Sciences...',
    },



  
  ];
  return (
    cardsData &&
    <div className='container'>
      <div className="row">
        {/* Use map to dynamically create product cards */}
        {cardsData.map((card) => (
          <NewsList
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

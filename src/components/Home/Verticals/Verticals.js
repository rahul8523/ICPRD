import React from 'react'
import "./Verticals.css"
import VerticalCards from './VerticalCards/VerticalCards'
import Climate_change from '../../../assets/images/HOMEPAGE/Climate_Change.jpg'
import Economic_Policy from '../../../assets/images/HOMEPAGE/Economic_Policy.jpg'
import Food_Security from '../../../assets/images/HOMEPAGE/Food_Security.jpg'
import Education_Training from '../../../assets/images/HOMEPAGE/Education_Training.jpg'
import International_Relations_Foreign_Policy from '../../../assets/images/HOMEPAGE/International_Relations_Foreign_Policy.jpg'
import Rural_Urbanisation from '../../../assets/images/HOMEPAGE/Rural_Urbanisation.jpg'
import TradeECommerce from '../../../assets/images/HOMEPAGE/TradeCommerce.jpg'
import Agriculture from '../../../assets/images/HOMEPAGE/Agriculture.jpg'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


export default function Verticals() {
  const cardsData = [
    {
      id: 1,
      imageSrc: Economic_Policy,
      heading: 'Economic Policy',
      url:"/economicPolicy",
      text: 'Indian economy needs to make a breakthrough both in terms of growth and productitvit to ensure a better...',
    },
    {
      id: 2,
      imageSrc: International_Relations_Foreign_Policy,
      heading: 'International Relations & Foreign Policy',
      url:"/intrel",
      text: 'In the fast changing world order bringing frequent shifts ins ecurity environment and myriad other areas like trade',
    },
    {
      id: 3,
      imageSrc: Climate_change,
      heading: 'Climate Change',
      url:"/climateChange",
      text: "India's commitments at COP26 climate change of conference in giasgow made by Prime Minister Shri Narendra Modi",
    },
    {
      id: 4,
      imageSrc: Food_Security,
      url:"/foodSecurity",
      heading: 'Food Security',
      text: 'There can be nothing more worrieosme that the fact that India lags behind in the supply of basic and health foood ...',
    },
    {
      id: 5,
      imageSrc: Education_Training,
      heading: 'Education & Training',
      url:"/educationTraining",
      text: 'The route to real empowerment of any people goes through education. Though India has made great strdie in ....',
    },
    {
      id: 6,
      imageSrc: Rural_Urbanisation,
      heading: 'Rural Urbanisation',
      url:"/ruralUrbanisation",
      text: 'The Rural-Urban divide, as symptomatiic term describing the contrasts in income distribution, consumtion patters.... ',
    },
    {
      id: 7,
      imageSrc: TradeECommerce,
      heading: 'Trade & Commerce',
      url:"/tradeCommerce",
      text: 'Inida is thought to be a country of sharp contrasts and this can also be seen in the way sale and purchase of both .. ',
    },
    {
      id: 8,
      imageSrc:Agriculture,
      heading: 'Agriculture',
      url:"/agriculture",
      text: 'No other sector of the Indian economy engages, employs and nurtures as many people as agriculture does...',
    },
  ];
  return (
    cardsData &&
    <div className='icprdVerticals'>
    <span>ICPRd</span>
      <h1>ICPRD VERTICALS</h1>
      {/* <p className='text-with-line'>Process of Nation Building</p> */}
      <div className="vertical-card-container">
      
        {/* Use map to dynamically create product cards */}
        {cardsData.map((card) => (
          <VerticalCards
            key={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            text={card.text}
            url={card.url}
          />
        ))}
      </div>
    </div>
  )
}

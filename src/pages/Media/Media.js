import React from 'react'
import "./Media.css"

import Digital1 from '../../assets/images/Media/media.png'
import Digital2 from '../../assets/images/Media/digital.png'
import Digital3 from '../../assets/images/Media/digital00.jpg'
import Digital4 from '../../assets/images/Media/digital2.png'
import Digital5 from '../../assets/images/Media/digital3.png'
import Digital6 from '../../assets/images/Media/digital5.png'
import Digital7 from '../../assets/images/Media/digital6.png'
import Digital8 from '../../assets/images/Media/digital7.png'
import Digital9 from '../../assets/images/Media/digital9.jpg'
import MediaList from './MediaList/MediaList'
// import { Link } from 'react-router-dom'


export default function Media() {
  const cardsData = [
    {
      id: 1,
      imageSrc: Digital2,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://daijiworld.com/news/newsDisplay?newsID=944897#.Yk0AYcd2XF4.whatsapp",
      text: 'Disruption in Parliament not acceptable: Ex-Union Minister',
    },
    {
      id: 2,
      imageSrc: Digital1,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://twitter.com/ians_india/status/1511384056620978177?t=cU3KdRNTWK_qKCHru7cRWw&s=08",
      text: 'Stating that disruption in the Parliament is not acceptable, former Union Minister',
    },
    {
      id: 3,
      imageSrc: Digital4,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://www.navodayatimes.in/news/khabre/in-the-name-of-secularism-youth-were-kept-away-from-yoga-sri-sri-ravi-shankar/196429/",
      text: "सेकुलरिज्म के नाम पर युवाओं को योग से दूर रखा गया : श्री श्री रविशंकर",
    },
    {
      id: 4,
      imageSrc: Digital5,
      url:"https://m.punjabkesari.in/dharm/news/sri-sri-ravi-shankar-1577780?amp=",
      heading: 'Daijword',
      Date: 'October 11, 2023',
      text: 'युवाओं को योग से दूर रखा गया: श्री श्री रविशंकर',
    },
    {
      id: 5,
      imageSrc: Digital3,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://indiaeducationdiary.in/in-the-name-of-secularism-youths-were-kept-away-from-yoga-gurudev-sri-sri-ravi-shankar/",
      text: 'In The Name Of Secularism, Youths Were Kept Away From Yoga: Gurudev Sri Sri Ravi Shankar',
    },
    {
      id: 6,
      imageSrc: Digital6,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://hindi.thenationalbulletin.in/shri-ravi-shankar-said-this-in-the-amrit-mahotsav-program-of-independence",
      text: 'आजादी के अमृत महोत्सव कार्यक्रम में श्री रविशंकर ने कही ये बात',
    },
    {
      id: 7,
      imageSrc: Digital7,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"/tradeCommerce",
      text: 'श्री श्री रविशंकर अमृत महोत्सव पर: युवाओं को सेकुलरिज्म के नाम पर योग से दूर रखा गया',
    },
    {
      id: 8,
      imageSrc:Digital8,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"/agriculture",
      text: 'सेकुलरिज्म के चक्कर में युवाओं को आध्यात्म, योग व दर्शन के ज्ञान से वंचित रखा गया :  श्री रविशंकर',
    },

    {
      id: 1,
      imageSrc: Digital9,
      heading: 'Daijword',
      Date: 'October 11, 2023',
      url:"https://www.socialnews.xyz/2022/04/05/disruption-in-parliament-not-acceptable-ex-union-minister/",
      text: 'Disruption in Parliament not acceptable: Ex-Union Minister',
    },

  ];
  return (
    cardsData &&
    <div className='container'>
      <div className="row">
     
        {/* Use map to dynamically create product cards */}
        {cardsData.map((card) => (
          <MediaList
            key={card.id}
            imageSrc={card.imageSrc}
            // heading={card.heading}
            text={card.text}
            url={card.url}
            // Date={card.Date}
          />
          
        ))}
      </div>
    </div>
  )
}

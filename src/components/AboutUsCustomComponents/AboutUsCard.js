import React from 'react'
import "./AboutUsCard.css"
import LabhPalalnaVideos from "../../assets/images/Aboutus/LabhPalalnaVideos.jpg"
import YogaKshemaVideos from "../../assets/images/Aboutus/YogaKshemaVideos.jpg"
import LokaSangrahaVideos from "../../assets/images/Aboutus/LokaSangrahaVideos.jpg"

export default function AboutUsCard() {
    const cardData = [
        {
            id: 1,
            imageSrc: YogaKshemaVideos,
            heading: 'Yoga Kshema',
            text: 'Well-being and presperity of the community',
        },
        {
            id: 2,
            imageSrc: LokaSangrahaVideos,
            heading: 'Loka Sangraha',
            text: 'Universal welfare and preserving societal order',
        },
        {
            id: 3,
            imageSrc: LabhPalalnaVideos,
            heading: 'Labh Palana',
            text: "Secure socio-economic progress",
        },
    ]
    return (
        <div className='aboutUs-Cards'>
            <h1>Ancient India scriptures have emphasized three necessities for the holistic socio-economic development of a nation.</h1>
            <div className='aboutUs-cardContainer'>
                {
                    cardData.map((item) => <div className="card">
                        {item.imageSrc && <img src={item.imageSrc} alt={item.title} />}
                        <div className="card-content">
                            <h2>{item.heading}</h2>
                            <p>{item.text}</p>
                            {/* <p>{item.text2}</p> */}
                        </div>
                    </div>)
                }
            </div>


        </div>
    )
}

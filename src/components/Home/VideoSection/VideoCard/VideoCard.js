import React from 'react'
import './VideoCard.css'

export default function VideoCard({ title, videoUrl,index }) {
    return (
        <div className="video-card" id={`videoCard${index}`}>


            <div className="video-thumbnail">
            <iframe width="240" height="180" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <hr className='card-hr' />
            <div class="card-body">
                <h3 className="video-title">{title}</h3>
            </div>


        </div>

    )
}

import React from 'react'
import './research.css'
import { Link } from 'react-router-dom'
import avtar_imh from "../../assets/images/ResearchArticles/avtar.png";

export default function Resarch({ imageSrc, heading,linkhead,content, text,url}) {
  return (
    <>

    <div class="container">
        <div class="row mb-5">
            <div class="col-sm-6 col-md-4 col-lg-4 mt-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top w-100" src={imageSrc} alt="avatars"/>
                    <div class="card-block">
                        <figure class="proffile profile-inline">
                            <img src={avtar_imh} class="profile-avatar" alt="avatars"/>
                        </figure>
                        <h6 class="card-title text-black">{heading}</h6>
                        <div class="card-text">
                            <h2>{content}</h2>
                         <p>{text}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <Link to={url} className='smaller'>{linkhead}</Link>
                    </div>
                </div>
            </div>
        </div>
</div>
    
    
    
    </>
  )
}

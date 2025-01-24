import React from 'react'
import "./PresidentDeskAbout.css"
// import dalaiLama from "../../../assets/images/dignitaries/dalaiLama.png"
import RajivRanjan from "../../assets/images/PresidentsDesk/PresidentImg.jpg"




export default function PresidentDeskAbout() {
    return (
        <>
        <div className="about-president">

            <div className="msg-container">
                <div className="profile">
                    <div className='profileImg'><img src={RajivRanjan} alt="" /></div>
                    <div className='profileName'><h2>Kr. Rajiv Ranjan Singh</h2></div>
                </div>
                <div className="About-container">
                    <p style={{ fontWeight: 'bold', fontFamily: "Optima" }}>About</p>
                    <br />
                    <h1 style={{
                        fontFamily: "Optima",
                        
                        marginTop: "-15px"
                    }}>Kr. Rajiv Ranjan Singh <span>______</span></h1>
                    <br />

                    <p className='about'>


                        The brains behind ICPRD, Kr. Rajiv Ranjan Singh is a social and political activist and youth leader with the avowed mission to envision and realize a safe, secure and prosperous future for all in the society. <br /><br />
                        The next generation's well-being and a more meaningful role for them in society have been the cornerstones of his visionary hard work so far. <br /><br />
                        It is with this idea that after consultations with a wide spectrum of experts and domain specialists, he founded ICPRD, a new and vibrant think-tank for policy research and advocacy. <br /><br />
                        Educated from Delhi University, Kr. Singh has been deeply moved by poverty, illiteracy, and deprivation dogging vast sections of Indian society, since his childhood. <br /><br />
                        Like many others, he observed with deep pain and dissatisfaction the slow pace of progress during the growing years of his life. This is why he adopted and followed the motto - 'You must be the change you wish to see in the world.' <br /><br />
                        This led him to the path of engagement and interactions with thought leaders from varied fields and after a thorough analysis, he decided to set upon himself the goal of bringing together a highly knowledgeable group of individuals who shared his passion for radical change. <br /><br />
                        He is tirelessly working to position India effectively on the global stage with an unwavering commitment to the public good.
                    </p>
                </div>

            </div>
        </div>
       </>
    )
}

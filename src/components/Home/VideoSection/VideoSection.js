import React,{useState} from 'react'
import './VideoSection.css'
import VideoCard from './VideoCard/VideoCard'
import Nav from 'react-bootstrap/Nav'


export default function VideoSection() {
  const [currentCard, setCurrentCard] = useState(1);
    const handleDotClick = (e,index) => {
e.target.click()
        if (index === 0) {
            setCurrentCard(0)
        } else {
            console.log(index);
            setCurrentCard(index)
        }

    };
  const videoData = [
     {
       id: 1,
       title: 'India @75 keynote speech by Gurudev Sri Sri Ravishankar Ji',
       videoUrl: 'https://www.youtube.com/embed/KDoDWSdpQXA?si=fGILlDBjZnweQQe8', // Replace with actual image URL
     },
     {
       id: 2,
       title: 'Speech by Dr Karan Singh on Parliament Disruption at "India at 75" Seminar| 5 April 2021',
       videoUrl: 'https://www.youtube.com/embed/YmtzdF53Vsg?si=hT7caB3UxtF-MzNU', // Replace with actual image URL
     },
     {
       id: 3,
       title: 'Kr. Rajiv Ranjan Singh, President ICPRD giving the inaugural speech at the the "India at 75" Seminar | 22 sept 2022',
       videoUrl: 'https://www.youtube.com/embed/iAryOS5ySoE?si=ikOt0hX-8wqwYPqU', // Replace with actual image URL
    },
    {
      id: 4,
      title: 'A360° security umbrella for the world leaders assembly for the forthcoming G-20 summit in New Delhi with special Focus on IAF preparations.',
      videoUrl: 'https://www.youtube.com/embed/Ds1x2NfuCYc?si=NXKWMXUdePBe27-E', // Replace with actual image URL
    },
    {
      id: 5,
      title: 'Shri Shyam Jaju, Ex VP, BJP, talks about life in rural India an power of rural economy',
      videoUrl: 'https://www.youtube.com/embed/gN0IneQyfp0?si=Vf5Rs3JmnrcwBVIs', // Replace with actual image URL
    },
  ];
  const renderDots = () => {
    return videoData.map((_, index) => (
      <label for={`v${index}`} id={`video${index}`} key={index}

onClick={(e) => handleDotClick(e, index)} className={`carousel-dot ${index === currentCard ? 'active-dot' : ''}`}><span

></span></label>
    ));
};


  return (
    <div className="videoSection">
      <header>
        <div>

          <h1>Videos</h1>
        </div>
        <Nav.Link href="https://www.youtube.com/@icprd/videos" target="_blank"><button>View All</button></Nav.Link>

      </header>
      <div className="video-wrapper">
      <input type="radio" name="sliderVideo" class="d-none" id="v0" />
                <input type="radio" name="sliderVideo" class="d-none" id="v1" checked />
                <input type="radio" name="sliderVideo" class="d-none" id="v2" />
                <input type="radio" name="sliderVideo" class="d-none" id="v3" />
                <input type="radio" name="sliderVideo" class="d-none" id="v4" />
      <div className="video-card-list" >
        {videoData.map((card,index) => (
          <VideoCard
            videoUrl={card.videoUrl}
            title={card.title}
            index={index}
         />
        ))}
      </div>

      </div>
      <div className="carousel-dots domrt" >{renderDots()}
                <hr className="slider-hr" /></div>

    </div>
  )
}
// import React, { useState, useEffect } from 'react';
// import './VideoSection.css'
// import VideoCard from './VideoCard/VideoCard'
// import { Button } from 'primereact/button';
// import { Carousel } from 'primereact/carousel';
// import { Tag } from 'primereact/tag';

// //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// export default function VideoSection() {
//   const [products, setProducts] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0); // Track the active index
//   const responsiveOptions = [
//     {
//       breakpoint: '2560px',
//       numVisible: 3,
//       numScroll: 1
//     },
//     {
//       breakpoint: '1199px',
//       numVisible: 3,
//       numScroll: 1
//     },
//     {
//       breakpoint: '991px',
//       numVisible: 2,
//       numScroll: 1
//     },
//     {
//       breakpoint: '767px',
//       numVisible: 1,
//       numScroll: 1
//     }
//   ];

//   const getSeverity = (product) => {
//     switch (product.inventoryStatus) {
//       case 'INSTOCK':
//         return 'success';

//       case 'LOWSTOCK':
//         return 'warning';

//       case 'OUTOFSTOCK':
//         return 'danger';

//       default:
//         return null;
//     }
//   };
//   const videoData = [
//     {
//       id: 1,
//       title: 'India @75 keynote speech by Gurudev Sri Sri Ravishankar Ji',
//       videoUrl: 'https://www.youtube.com/embed/KDoDWSdpQXA?si=fGILlDBjZnweQQe8', // Replace with actual image URL
//     },
//     {
//       id: 2,
//       title: 'Speech by Dr Karan Singh on Parliament Disruption at "India at 75" Seminar| 5 April 2021',
//       videoUrl: 'https://www.youtube.com/embed/YmtzdF53Vsg?si=hT7caB3UxtF-MzNU', // Replace with actual image URL
//     },
//     {
//       id: 3,
//       title: 'Kr. Rajiv Ranjan Singh, President ICPRD giving the inaugural speech at the the "India at 75" Seminar | 22 sept 2022',
//       videoUrl: 'https://www.youtube.com/embed/iAryOS5ySoE?si=ikOt0hX-8wqwYPqU', // Replace with actual image URL
//     },
//     {
//       id: 4,
//       title: 'IAF Security for G-20 in Delhi',
//       videoUrl: 'https://www.youtube.com/embed/Ds1x2NfuCYc?si=NXKWMXUdePBe27-E', // Replace with actual image URL
//     },
//     {
//       id: 5,
//       title: 'Shri Shyam Jaju, Ex VP, BJP, talks about life in rural India an power of rural economy',
//       videoUrl: 'https://www.youtube.com/embed/gN0IneQyfp0?si=Vf5Rs3JmnrcwBVIs', // Replace with actual image URL
//     },
//   ];

//   // useEffect(() => {
//   //   ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
//   // }, []);

//   const productTemplate = (product) => {
//     return (
//       <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//         <div className="video-card">


//           <div className="video-thumbnail">
//             <iframe width="240" height="180" src={product.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//           </div>
//           <hr className='card-hr' />
//           <div class="card-body">
//             <h3 className="video-title">{product.title}</h3>
//           </div>


//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="videoSection">
//       <header>
//         <div>

//           <h1>Videos</h1>
//         </div>
//         <div><button>View All</button></div>

//       </header>
//       <div className="card">

//         <Carousel
//           value={videoData}
//           numScroll={1}
//           numVisible={3}
//           responsiveOptions={responsiveOptions}
//           itemTemplate={productTemplate}
        
//         />
//       </div>
//     </div>

//   )
// }


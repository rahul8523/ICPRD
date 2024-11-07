
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function NumScrollDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '2560px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
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
          title: 'IAF Security for G-20 in Delhi',
          videoUrl: 'https://www.youtube.com/embed/Ds1x2NfuCYc?si=NXKWMXUdePBe27-E', // Replace with actual image URL
        },
        {
          id: 5,
          title: 'Shri Shyam Jaju, Ex VP, BJP, talks about life in rural India an power of rural economy',
          videoUrl: 'https://www.youtube.com/embed/gN0IneQyfp0?si=Vf5Rs3JmnrcwBVIs', // Replace with actual image URL
        },
      ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="video-card">


                    <div className="video-thumbnail">
                        <iframe width="240" height="180" src={product.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <hr className='card-hr' />
                    <div class="card-body">
                        <h3 className="video-title">{product.title}</h3>
                    </div>


                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={videoData} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}

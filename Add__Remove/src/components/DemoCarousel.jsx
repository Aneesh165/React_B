import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
    const scroll = () => {
        // Custom scroll functionality (if needed)
    };

    return (
        <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            style={{ width: '600px' }}
        >
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbcV6qrTKqgtXHwLOPyLabtk9oIRmceg8dg&s" alt="Slide 1" />
            </div>
            <div>
                <img src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="Slide 3" />
            </div>
        </Carousel>
    );
};

export default DemoCarousel;

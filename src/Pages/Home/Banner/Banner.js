import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/bag01.png';
import banner2 from '../../../images/bag0.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    // src={`https://i.ibb.co/sCWKtx3/pexels-asad-photo-maldives-1024960.jpg`}

                    alt="First slide"
                />
                {/* <Carousel.Caption style={{display:'flex',justifyContent:'center', alignItems:'center', position:'absolute top-50 start-50'}}> */}
                <Carousel.Caption className='position-absolute top-10 start-10'>
            
                        <div>
                            {/* <h1>This is first page</h1> */}
                            <h4>Welcome To</h4> <h2>SHIL PHOTOGRAPHY</h2>
                            <p className='text-dark bg-white w-100 fw-lighter'>Hi friend, thanks for stopping by.I focuse on getting to know my clients and be part of the big moments of their life!</p>
                        </div>
                    
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='position-absolute top-30 start-30'>
                    {/* <h3>Welcome To Shil Photography</h3>
                <p className='text-dark bg-white w-100 fw-lighter'>Hi friend, thanks for stopping by.I focuse on getting to know my clients and be part of the big moments of their life!</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
import React, { useState } from 'react';
import'./Banner.css'
import { Carousel, CarouselItem } from 'react-bootstrap';
import img1 from '../../../images/banner/banner1.jpg.jpg'
import img2  from '../../../images/banner/banner2.jpg.jpg'
import img3 from '../../../images/banner/banner3.jpg.jpg'
const Banner = () => {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    return  (
             <div>
                 <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block w-100 mx-auto banner1"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hello My name's Emon</h3>
          <p>I am proffitional Photograper</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner1"
          src={img3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hello My name's Emon</h3>
          <p>I am proffitional Photograper</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner1"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Hello My name's Emon</h3>
          <p>I am proffitional Photograper</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

             </div>        

        )
};

export default Banner;
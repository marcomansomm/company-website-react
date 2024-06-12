import CarouselItem from './CarouselItem'
import './homeCarousel.css'
import React, { useState, useEffect } from 'react';

const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        image: `${process.env.PUBLIC_URL}/images/companyPictures/cesarEntry.jpg`,
        altText: "First slide",
        captionTitle: "We're Marcus",
        captionText: "A leading performance AI solution that drives guaranteed technology for the world's top brands.",
        captionPosition: "text-right"
      },
      {
        image: `${process.env.PUBLIC_URL}/images/companyPictures/Colaboradores-CESAR-1.jpg`,
        altText: "Second slide",
        captionTitle: "Another example headline.",
        captionText: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        captionPosition: ""
      },
      {
        image: `${process.env.PUBLIC_URL}/images/companyPictures/recife.jpeg`,
        altText: "Third slide",
        captionTitle: "Example headline.",
        captionText: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        captionPosition: "text-left"
      },
      {
        image: `${process.env.PUBLIC_URL}/images/companyPictures/companypeople.jpg`,
        altText: "Fourth slide",
        captionTitle: "Another example headline.",
        captionText: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        captionPosition: ""
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }, [items.length]);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    return (
      <div id="myCarousel" className="carousel slide">
        <ol className="carousel-indicators">
          {items.map((item, index) => (
            <li
              key={index}
              data-target="#myCarousel"
              data-slide-to={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              image={item.image}
              altText={item.altText}
              captionTitle={item.captionTitle}
              captionText={item.captionText}
              captionPosition={item.captionPosition}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };
  
  export default HomeCarousel;
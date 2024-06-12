import React from 'react';
import './Featurette.css'


const Featurette = ({ heading, subheading, text, isReversed, mediaSrc, isVideo }) => {
  return (
    <div className={`row featurette ${isReversed ? 'order-md-2' : ''}`}>
      <div className={`col-md-7 ${isReversed ? 'order-md-2' : ''}`}>
        <h2 className="featurette-heading">
          {heading} <span className="text-muted">{subheading}</span>
        </h2>
        <p className="lead">{text}</p>
      </div>
      <div className={`col-md-5 ${isReversed ? 'order-md-1' : ''}`} style={{ justifyContent: 'center'}}>
        <div className="embed-responsive embed-responsive-16by9">
          {isVideo ? (
            <iframe
              className="embed-responsive-item"
              src={mediaSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Featurette Video"
              style={{ border: '0' ,  width:'500px' ,height:'300px'}}
            ></iframe>
          ) : (
            <img
              className="embed-responsive-item"
              src={mediaSrc}
              alt="Featurette Image"
              style={{ border: '0' , height:'300px'}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Featurette;

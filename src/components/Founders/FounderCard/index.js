import React from 'react';
const FounderCard = ({ imageSrc, name, title, description }) => {
    return (
      <div className="col-lg-4" style={{ textAlign: 'center'}}>
        <img className="rounded-circle" src={imageSrc} alt={`Image of ${name}`} width="140" height="140" />
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p>{description}</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    );
  };
  
  export default FounderCard;
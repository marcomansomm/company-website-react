import React from 'react';
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref={`#${icon}`} />
        </svg>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="btn btn-primary">
          Primary button
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

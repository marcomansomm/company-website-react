import './CarouselItem.css'
const CarouselItem = ({ image, altText, captionTitle, captionText, captionPosition, isActive }) => {
    return (
      <div className={`carousel-item ${isActive ? 'active' : ''}`}>
        <img className="d-block w-100" src={image} alt={altText} />
        <div className="container">
          <div className={`carousel-caption ${captionPosition}`}>
            <h1>{captionTitle}</h1>
            <p>{captionText}</p>
            <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
    );
}
  
export default CarouselItem;
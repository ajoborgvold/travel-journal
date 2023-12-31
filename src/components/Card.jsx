export default function Card(props) {
    const { imageUrl, alt, location, googleMapsUrl, title, startDate, endDate, description } = props.item
    
    return (
        <div className="card">
            <img src={imageUrl} className="card__img" alt={alt}/>
            <div className="card__top">
                <i className="fa-solid fa-location-dot"></i>
                <p className="card__location">{location}</p>
                <a 
                    href={googleMapsUrl}
                    className="card__map-link" 
                    target="_blank"
                    rel="noreferrer">
                    View on Google Maps</a>
            </div>
            <div className="card__bottom">
                <h1 className="card__title">{title}</h1>
                <p className="card__date">{startDate} - {endDate}</p>
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}
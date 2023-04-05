import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    model,
    imageUrl,
    year,
}) => {
    return (
        <div className="allCars">
            <div className="allCars-info">
                <img src={imageUrl} />
                <h2>Mercedes {model}</h2>
                <h6>Year: {year}</h6>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
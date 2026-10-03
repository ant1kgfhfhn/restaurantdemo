import { Link } from "react-router-dom";
import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <Link to={`/property/${property.id}`} className="property-card__image">
        <img src={property.image} alt={property.title}/>
        <span className="property-card__tag">{property.status}</span>
        <span className="property-card__arrow"><ArrowUpRight/></span>
      </Link>
      <div className="property-card__body">
        <div className="property-card__location">{property.location}</div>
        <h3><Link to={`/property/${property.id}`}>{property.title}</Link></h3>
        <div className="property-card__meta">
          <span><BedDouble/> {property.beds} rooms</span>
          <span><Bath/> {property.baths} bath</span>
          <span><Ruler/> {property.area} m²</span>
        </div>
        <strong className="property-card__price">{property.price}</strong>
      </div>
    </article>
  );
}
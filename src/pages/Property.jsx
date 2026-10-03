import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BedDouble, Bath, Ruler, Check, Phone } from "lucide-react";
import { properties } from "../data/properties";

export default function Property() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  if (!property) return <div className="not-found"><h1>Immobilie nicht gefunden.</h1><Link className="button" to="/properties">Zurück zu Properties</Link></div>;

  return (
    <div className="property-detail">
      <div className="property-detail__top">
        <div className="container"><Link className="back-link" to="/properties"><ArrowLeft/> All Properties</Link></div>
      </div>
      <section className="property-detail__hero">
        <img src={property.image} alt={property.title}/>
        <div className="property-detail__hero-copy"><span>{property.status}</span><h1>{property.title}</h1><p>{property.location}</p></div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <div className="detail-price">{property.price}</div>
            <div className="detail-meta"><span><BedDouble/> {property.beds} bedrooms</span><span><Bath/> {property.baths} bathrooms</span><span><Ruler/> {property.area} m² living area</span></div>
            <p className="detail-lead">{property.description}</p>
            <h2>Highlights</h2>
            <div className="features">{property.features.map(f=><span key={f}><Check/>{f}</span>)}</div>
            <div className="detail-gallery">{property.gallery.map((img,i)=><img key={img} src={img} alt={`${property.title} ${i+1}`}/>)}</div>
          </div>
          <aside className="contact-card">
            <div className="eyebrow">Personale Consultation</div>
            <h3>Interested in this property?</h3>
            <p>Our team will answer your questions and arrange a private viewing.</p>
            <Link className="button button--dark" to="/contact">Send inquiry <ArrowUpRight/></Link>
            <a className="contact-card__phone" href="tel:+498912345670"><Phone/> +49 89 123 45 670</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
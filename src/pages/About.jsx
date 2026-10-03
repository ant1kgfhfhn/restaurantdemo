import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Compass, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div className="page">
      <section className="page-hero page-hero--about"><div className="container"><div className="eyebrow eyebrow--light">03 / About us</div><h1>We don't sell<br/><em>square meters.</em></h1></div></section>
      <section className="section">
        <div className="container about-grid">
          <SectionTitle eyebrow="Our philosophy" title={<>Ein House ist ein Ort.<br/>Ein Zuhause ist ein Gefühl.</>} />
          <div className="about-copy"><p className="lead">Seit 2012 beraten wir Menschen beim Kauf und Verkauf besonderer Properties in Bayern.</p><p>We believe in fewer properties and more attention. Our team combines local market knowledge with an international network and a high standard of presentation, communication and service.</p><Link className="text-link" to="/contact">Talk to us <ArrowUpRight/></Link></div>
        </div>
      </section>
      <section className="dark-section section"><div className="container"><div className="eyebrow eyebrow--light">Our values</div><div className="value-grid"><div><Compass/><h3>Local expertise</h3><p>We know the markets, neighborhoods and developments that shape property value.</p></div><div><Award/><h3>High standards</h3><p>From property photography to negotiation, every detail matters.</p></div><div><Users/><h3>Personal</h3><p>Ein fester Ansprechpartner, klare Kommunikation und ehrliche Consultation.</p></div></div></div></section>
    </div>
  );
}
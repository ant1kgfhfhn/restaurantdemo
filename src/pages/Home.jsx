import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, ShieldCheck, KeyRound, Handshake } from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__image"/>
        <div className="hero__overlay"/>
        <div className="container hero__content">
          <div className="eyebrow eyebrow--light">MUNICH · AUGSBURG · ALPINE REGION</div>
          <h1>Spaces that<br/><em>stay with you.</em></h1>
          <p>Exclusivee Properties. Personale Consultation. Eine Entscheidung, die sich richtig anfühlt.</p>
          <Link className="button button--light" to="/properties">Properties entdecken <ArrowUpRight/></Link>
        </div>
        <div className="hero__scroll"><ArrowDown/> Scroll to explore</div>
      </section>

      <section className="intro section">
        <div className="container intro__grid">
          <SectionTitle eyebrow="01 / Our philosophy" title={<>Properties sind mehr<br/>als vier Wände.</>} />
          <div className="intro__copy">
            <p className="lead">We bring architecture, location and lifestyle together to find a property that truly fits you.</p>
            <p>ESTATEHAUS steht für eine persönliche Propertiesberatung mit Blick fürs Detail. Von der ersten Besichtigung bis zum erfolgreichen Abschluss begleiten wir Sie diskret und verlässlich.</p>
            <Link className="text-link" to="/about">More about us <ArrowUpRight/></Link>
          </div>
        </div>
      </section>

      <section className="properties section section--sand">
        <div className="container">
          <div className="section-row">
            <SectionTitle eyebrow="02 / Selection" title="Ausgewählte Properties" text="A curated selection of exceptional properties across Southern Germany." />
            <Link className="text-link" to="/properties">All Properties <ArrowUpRight/></Link>
          </div>
          <div className="property-grid">{properties.slice(0, 3).map(p => <PropertyCard key={p.id} property={p}/>)}</div>
        </div>
      </section>

      <section className="statement section">
        <div className="container statement__inner">
          <div className="eyebrow">03 / Why ESTATEHAUS</div>
          <h2>From the first search to the handover of the keys — <em>by your side.</em></h2>
          <div className="benefits">
            <div><ShieldCheck/><h3>Discretion</h3><p>Vertrauliche Consultation und persönliche Ansprechpartner.</p></div>
            <div><KeyRound/><h3>Expertise</h3><p>Market knowledge, valuation and carefully selected properties.</p></div>
            <div><Handshake/><h3>Partnership</h3><p>We support you beyond the closing.</p></div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__image"/>
        <div className="cta__overlay"/>
        <div className="container cta__content">
          <div className="eyebrow eyebrow--light">Let's talk</div>
          <h2>Your next property<br/><em>starts with a conversation.</em></h2>
          <Link className="button button--light" to="/contact">Book a consultation <ArrowUpRight/></Link>
        </div>
      </section>
    </>
  );
}
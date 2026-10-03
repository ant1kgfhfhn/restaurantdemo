import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); }
  return (
    <div className="page">
      <section className="page-hero page-hero--contact"><div className="container"><div className="eyebrow eyebrow--light">04 / Contact</div><h1>Let's<br/><em>talk.</em></h1></div></section>
      <section className="section"><div className="container contact-grid">
        <div><div className="eyebrow">Personaler Contact</div><h2>How can we<br/>help you?</h2><p className="lead">Are you looking for a new home, planning to sell a property, or looking for a discreet market valuation?</p>
          <div className="contact-details"><a href="tel:+498912345670"><Phone/>+49 89 123 45 670</a><a href="mailto:hello@estatehaus.de"><Mail/>hello@estatehaus.de</a><span><MapPin/>Maximilianstraße 18<br/>80539 München</span></div>
        </div>
        <div className="form-card">{sent ? <div className="success"><CheckCircle2/><h3>Thank you.</h3><p>Your inquiry has been received. We will get back to you personally.</p><button className="button button--dark" onClick={()=>setSent(false)}>New inquiry</button></div> : <form onSubmit={submit}><div className="form-row"><label>First name<input required placeholder="Max"/></label><label>Last name<input required placeholder="Mustermann"/></label></div><label>E-Mail<input type="email" required placeholder="max@beispiel.de"/></label><label>Telefon<input placeholder="+49 ..."/></label><label>I am interested in<select defaultValue="Kauf"><option>Buying a property</option><option>Selling a property</option><option>Valuation</option><option>Allgemeine Consultation</option></select></label><label>Message<textarea rows="5" placeholder="How can we help you?"/></label><button className="button button--dark" type="submit">Send inquiry <ArrowUpRight/></button></form>}</div>
      </div></section>
    </div>
  );
}
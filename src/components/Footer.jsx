import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="logo logo--footer"><span>ESTATE</span>HAUS</div>
            <p>Properties mit Anspruch.<br/>Personal. Diskret. Kompetent.</p>
          </div>
          <div className="footer__links">
            <div><strong>Navigation</strong><Link to="/properties">Properties</Link><Link to="/about">About us</Link><Link to="/contact">Contact</Link></div>
            <div><strong>Contact</strong><a href="mailto:hello@estatehaus.de">hello@estatehaus.de</a><a href="tel:+498912345670">+49 89 123 45 670</a><span>Maximilianstraße 18, Munich</span></div>
            <div><strong>Social</strong><a href="#"><Instagram size={17}/> Instagram</a><a href="#"><Linkedin size={17}/> LinkedIn</a></div>
          </div>
        </div>
        <div className="footer__bottom"><span>© 2026 ESTATEHAUS</span><span>Legal notice · Privacy</span></div>
      </div>
    </footer>
  );
}
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="logo" to="/" onClick={close}>
          <span>ESTATE</span>HAUS
        </Link>
        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/properties" onClick={close}>Properties</NavLink>
          <NavLink to="/about" onClick={close}>About us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <Link className="nav__cta" to="/contact" onClick={close}>Consultation <ArrowUpRight size={16}/></Link>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
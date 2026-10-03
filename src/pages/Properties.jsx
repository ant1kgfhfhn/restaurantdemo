import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const types = ["All", "Villa", "Penthouse", "House", "Apartment", "Loft", "Chalet"];

  const filtered = useMemo(() => properties.filter(p =>
    (type === "All" || p.type === type) &&
    `${p.title} ${p.location}`.toLowerCase().includes(query.toLowerCase())
  ), [type, query]);

  return (
    <div className="page">
      <section className="page-hero page-hero--properties">
        <div className="container"><div className="eyebrow eyebrow--light">02 / Properties</div><h1>Find your<br/><em>next space.</em></h1></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filterbar">
            <div className="filterbar__search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by location or property..." /></div>
            <div className="filterbar__types"><SlidersHorizontal/>{types.map(t=><button key={t} className={type===t?"active":""} onClick={()=>setType(t)}>{t}</button>)}</div>
          </div>
          <div className="property-grid property-grid--full">{filtered.map(p=><PropertyCard key={p.id} property={p}/>)}</div>
          {!filtered.length && <div className="empty">Keine passenden Properties gefunden.</div>}
        </div>
      </section>
    </div>
  );
}
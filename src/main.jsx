import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Baby, BatteryCharging, Building2, Car, Check, ChevronLeft,
  ChevronRight, Dumbbell, Home, Mail, MapPin, Menu, MessageCircle,
  PersonStanding, Phone, TreePine, Waves, X, Footprints
} from 'lucide-react';
import './styles.css';

const ASSETS = {
  logo: 'https://housingsociety.net/housing_society.png',
  contactLogo: 'https://housingsociety.net/contact_logo.png',
  layout: 'https://housingsociety.net/layout.png',
  floorplan:'https://housingsociety.net/layoutPlan.jpg',
  mapview:'https://housingsociety.net/map.jpg',
  status3: 'https://housingsociety.net/status3.jpg',
  status4: 'https://housingsociety.net/status4.jpg',
  status5: 'https://housingsociety.net/status5.png',
  status6: 'https://housingsociety.net/status6.png'
};

const stats = [
  ['112', 'UNITS'], ['1.4 Acres', 'TOTAL AREA'], ['3', 'BHK'],
  ['East & West', 'FACING'], ['14', 'FLOORS'], ['1150–1266', 'SQ.FT']
];

const amenities = [
  [Dumbbell, 'Gym'], [PersonStanding, 'Yoga'], [Waves, 'Pool'],
  [Footprints, 'Walking Area'], [Building2, 'Conference Room'],
  [BatteryCharging, 'EV Charging'], [Baby, 'Creche'], [Building2, 'Auditorium'],
  [TreePine, 'Garden'], [Car, 'Car Parking']
];

const schools = [
  ['Urban International School', '1.9 KM'],
  ['Geetanjali Concept School', '2.6 KM'],
  ['Tatva Global School', '2.6 KM'],
  ['Bachpan A Play School', '3.0 KM'],
  ['Orchids The International School', '3.2 KM']
];
const hospitals = [
  ['Lifespan Super Speciality Hospital', '2.3 KM'],
  ['Malla Reddy Narayana Multispeciality Hospital', '3.3 KM'],
  ['Usha Mullapudi Cardiac Centre Shapur', '3.6 KM'],
];

const transport = [
  ['Jeedimetla Bus Depot', '1.2 KM'],
  ['KPHB Metro Station', '7.4 KM'],
  ['Kukatpally Metro Station', '8.3 KM']
];

const malls = [
  ['TRENDS', '2.9 KM'],
  ['TNR Northcity Mall & Multiplex', '8.3 KM'],
  ['LULU Mall', '9.1 KM'],
  ['Nexus Mall', '10.5 KM'],
  ['Manjeera Majestic Commercial', '8.8 KM']
];

const educationalInstitutions  = [
  ['Malla Reddy Engineering College', '6.7 KM'],
  ['St. Peter’s Engineering College', '7.6 KM'],
  ['APJ Abdul Kalam Junior College', '3.6 KM'],
  ['Capital Degree & PG College', '3.7 KM']
];

const parks = [
  ['Prashantha Vanam', '3.2 KM'],
  ['Pranavayu Urban Forest Park', '2.7 KM'],
  ['Children’s Park', '2.6 KM']
];

const slides = [
  { src: ASSETS.status3, title: 'Project Progress', text: 'Current construction view of the residential towers.' },
  { src: ASSETS.status4, title: 'Township View', text: 'Aerial view of the surrounding Sahira Township area.' },
  { src: ASSETS.status5, title: 'B06 Tower', text: 'B06 Tower highlighted from the project surroundings.' },
  { src: ASSETS.status6, title: 'B06 Perspective', text: 'B06 Tower from the approach road.' }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['home', 'Home'], ['about', 'About'], ['plans', 'Plans'],
    ['location', 'Location'], ['amenities', 'Amenities'], ['contact', 'Contact']
  ];

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="header">
      <div className="nav-wrap">
        <button className="brand" onClick={() => scrollToId('home')} aria-label="Housing Society home">
          <img src={ASSETS.logo} alt="Housing Society" />
        </button>
        <nav className={open ? 'nav open' : 'nav'}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => { scrollToId(id); setOpen(false); }}>{label}</button>
          ))}
        </nav>
        <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function EnquireBar() {
  return <button className="enquire-bar" onClick={() => scrollToId('contact')}>ENQUIRE NOW</button>;
}

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-copy">
        <div>
          <span className="eyebrow">SAHIRA TOWNSHIP · B06 TOWER</span>
          <h1>Comfortable living.<br /><em>Made attainable.</em></h1>
          <p>Explore a value-driven 3 BHK residential opportunity at Rajiv Swagruha Township, Gajularamaram.</p>
          <button className="primary-btn" onClick={() => scrollToId('contact')}>Enquire Now <ArrowRight size={18} /></button>
        </div>
        <div className="hero-note"><span>Current Project Status</span><strong>Nov 2025</strong></div>
      </div>
      <div className="hero-frame">
        <img src={ASSETS.status5} alt="B06 Tower" />
      </div>
      <div className="stats-grid">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-kicker">ABOUT HOUSING SOCIETY</div>
      <h2>Real estate made clearer.</h2>
      <p>HousingSociety is a platform created to promote real estate projects — including apartments, plots, and townships — that are affordable and value-driven. Our goal is to help people find reliable, low-cost housing options that fit their budget. With a focus on transparency and accessibility, we aim to connect communities with genuine, budget-friendly projects, making property ownership easier and more attainable for everyone.</p>
      <div className="about-points">
        {['Value-driven projects', 'Transparent information', 'Budget-friendly options'].map((x) => <div key={x}><Check size={17} />{x}</div>)}
      </div>
    </section>
  );
}

function Plans() {
  const [tab, setTab] = useState('Site Layout');
  return (
    <section id="plans" className="section plans-section">
      <div className="section-kicker">PROJECT PLANS</div>
      <h2>Site Layout &amp; Floor Plans</h2>
      <div className="tabs">
        {['Site Layout', 'Floor Plan', 'Map Location'].map(t => <button className={tab === t ? 'active' : ''} onClick={() => setTab(t)} key={t}>{t}</button>)}
      </div>
      <div className="tab-panel">
        {tab === 'Site Layout' && <img src={ASSETS.layout} alt="Sahira Township site layout" />}
        {tab === 'Floor Plan' && <img src={ASSETS.floorplan} alt="Sahira Township floor plan" />}
        {tab === 'Map Location' && <img src={ASSETS.mapview} alt="Sahira Township map view" />}
      </div>
    </section>
  );
}

function Location() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const next = () => setIndex(v => (v + 1) % slides.length);
  const prev = () => setIndex(v => (v - 1 + slides.length) % slides.length);
  return (
    <section id="location" className="section location-section">
      <div className="section-kicker">PROJECT LOCATION</div>
      <h2>See where B06 stands.</h2>
      <div className="slider">
        <img src={slide.src} alt={slide.title} />
        <button className="arrow left" onClick={prev} aria-label="Previous image"><ChevronLeft /></button>
        <button className="arrow right" onClick={next} aria-label="Next image"><ChevronRight /></button>
        <div className="slide-caption"><span>{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span><b>{slide.title}</b><small>{slide.text}</small></div>
      </div>
      <div className="location-grid">
        <div>
          <span className="mini-label">LOCATION</span>
          <h3>Rajiv Swagruha Township</h3>
          <p>Find us at Mettakanigudem, Gajularamaram, Hyderabad, Telangana 500055.</p>
          <button className="outline-btn" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Rajiv+Swagruha+Township+Mettakanigudem+Hyderabad', '_blank')}>Open in Maps <MapPin size={17}/></button>
        </div>
        <div className="address-card">
          <MapPin size={22} />
          <div><strong>Meghdoot Exotica 6 (B06) Tower</strong><span>Rajiv Swagruha Sahira Township,<br />Mettakanigudem, Gajularamaram,<br />Hyderabad, Telangana 500055</span></div>
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  const [category, setCategory] = useState("SCHOOLS");

  const categories = [
    "SCHOOLS",
    "HOSPITALS",
    "TRANSPORT",
    "MALLS",
    "EDUCATIONAL INSTITUTIONS",
    "PARKS",
  ];

  const categoryData = {
    SCHOOLS: schools,
    HOSPITALS: hospitals,
    TRANSPORT: transport,
    MALLS: malls,
    "EDUCATIONAL INSTITUTIONS": educationalInstitutions,
    PARKS: parks,
  };

  const currentData = categoryData[category];

  return (
    <section id="amenities" className="section amenities-section">
      <div className="section-kicker">LIFE AT B06</div>

      <h2>Extra fun, more happiness.</h2>

      <p>
        Extra fun for children &amp; alike starts the moment you are on the
        elevation at the grand floor. Designated blocks have their own areas
        for children so that they don’t have to move far from the block once
        they come down. Adventurous ones in an extra proactive area for
        growing and sweating out — swing over or slide &amp; glide, you sure
        are in for extra fun here!
      </p>

      <div className="amenities-grid">
        {amenities.map(([Icon, label]) => (
          <div className="amenity" key={label}>
            <Icon />
            <b>{label}</b>
          </div>
        ))}
      </div>

      <div className="highlights-head">
        <div className="section-kicker">NEARBY</div>
        <h2>Location highlights</h2>
      </div>

      <div className="chips">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "selected" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="highlight-list">
        {currentData.map(([name, km]) => (
          <div key={name}>
            <span>
              <ArrowRight />
              {name}
            </span>
            <b>{km}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const initial = useMemo(() => ({ name: '', email: '', phone: '', location: '', message: '', consent: false }), []);
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);
  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const submit = e => { e.preventDefault(); if (!form.name || !form.email || form.phone.length !== 10 || !form.consent) return; setSent(true); };
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-copy">
          <img src={ASSETS.contactLogo} className="contact-logo" alt="Housing Society" />
          <div className="section-kicker">ABOUT B06 TOWER</div>
          <h2>A place to call your own.</h2>
          <p>Sahira Township, Gajularamaram is a large residential community in North Hyderabad. Spread over 35 acres, it offers 3 BHK apartments with modern amenities like a gym, power backup, and play areas. Located near major roads, schools, and hospitals, it provides great connectivity and is ideal for both living and investment.</p>
          <div className="address"><MapPin /><div><strong>Housingsociety</strong><span>B06 Tower, Sahira Township,<br />Gajularamaram, Hyderabad,<br />Telangana 500055</span></div></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-head"><span>GET IN TOUCH</span><h3>Have a question?</h3><p>Fill out the form and our team will reach out to you soon.</p></div>
          <label>Name<input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Enter your name" /></label>
          <label>Email<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="Enter your email" /></label>
          <label>Phone<div className="phone"><span>+91</span><input required value={form.phone} onChange={e => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Enter phone number" /></div></label>
          <label>Location<input value={form.location} onChange={e => update('location', e.target.value)} placeholder="Enter your location" /></label>
          <label>Message<textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="How can we help?" rows="4" /></label>
          <label className="consent"><input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} /><span>I authorize Housingsociety.net to contact me via Email, SMS, WhatsApp, and Call. This will override DND/NDNC preferences.</span></label>
          <button className="submit" type="submit">Submit enquiry <ArrowRight size={18} /></button>
          {sent && <div className="success">Thank you! Your enquiry has been recorded.</div>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div><img src={ASSETS.logo} alt="Housing Society" /><span>Value-driven housing information.</span></div><p>© 2026 | Housingsociety.net — All Rights Reserved.</p><small>Powered by CFO</small></footer>;
}

function App() {
  return <><Header /><main><Hero /><About /><Plans /><Location /><Amenities /><Contact /></main><Footer /><EnquireBar /></>;
}

createRoot(document.getElementById('root')).render(<App />);

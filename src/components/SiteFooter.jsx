import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig, createWhatsAppUrl } from "../config/site";
import BrandMark from "./BrandMark";
import "./SiteFooter.css";

function SiteFooter() {
  const { companyName, descriptor, contacts, business } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <BrandMark light />
          <div>
            <strong>{companyName}</strong>
            <p>{descriptor}</p>
            <span>{siteConfig.tagline}</span>
          </div>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <strong>Explore</strong>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Order</Link>
          <Link to="/about">About</Link>
          <Link to="/christmas-drive">Christmas Drive</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy</Link>
        </nav>

        <div className="site-footer__contact">
          <strong>Order & Contact</strong>
          <a href={`tel:${contacts.primary.phoneNumber}`}>
            {contacts.primary.phoneDisplay}
          </a>
          <a href={`mailto:${contacts.primary.email}`}>{contacts.primary.email}</a>
          <a
            className="site-footer__whatsapp"
            href={createWhatsAppUrl("Hi Restore Diligence, I have a question.")}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp us
          </a>
        </div>

        <div className="site-footer__details">
          <strong>Useful details</strong>
          <span>{business.serviceArea}</span>
          <span>{business.orderLeadTime}</span>
          <span>{business.collectionNote}</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        <p>Freshly made. Thoughtfully shared.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;

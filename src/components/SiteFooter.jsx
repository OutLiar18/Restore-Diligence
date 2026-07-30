import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import BrandMark from "./BrandMark";
import "./SiteFooter.css";

function SiteFooter() {
  const location = useLocation();
  const isGivingDrive = location.pathname.startsWith("/christmas-drive");
  const { companyName, descriptor, contacts, business, christmasDrive } = siteConfig;

  const whatsappMessage = isGivingDrive
    ? `Hi ${companyName}, I have a question about the ${christmasDrive.year} Christmas Giving Drive.`
    : `Hi ${companyName}, I have a question about an order.`;

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <BrandMark light />
          <div>
            <strong>{companyName}</strong>
            <p>{isGivingDrive ? christmasDrive.title : descriptor}</p>
            <span>
              {isGivingDrive ? "Practical giving. Dignity protected." : siteConfig.tagline}
            </span>
            <small><span aria-hidden="true">✝</span> {siteConfig.faithLine}</small>
          </div>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <strong>Explore</strong>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Cart & Payment</Link>
          <Link to="/about">About</Link>
          <Link to="/christmas-drive">Christmas Drive</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy</Link>
        </nav>

        <div className="site-footer__contact">
          <strong>{isGivingDrive ? "Giving Drive Contact" : "Order & Contact"}</strong>
          <a href={`tel:${contacts.primary.phoneNumber}`}>{contacts.primary.phoneDisplay}</a>
          <a href={`mailto:${contacts.primary.email}`}>{contacts.primary.email}</a>
          <a
            className="site-footer__whatsapp"
            href={createWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp us
          </a>
        </div>

        <div className="site-footer__details">
          <strong>{isGivingDrive ? "Giving Drive Rules" : "Useful Details"}</strong>
          {isGivingDrive ? (
            <>
              <span>{christmasDrive.moneyPolicy}</span>
              <span>Deadline: {christmasDrive.collectionDeadline}</span>
              <span>Drop-off: {christmasDrive.dropOffLocation}</span>
            </>
          ) : (
            <>
              <span>{business.serviceArea}</span>
              <span>{business.orderLeadTime}</span>
              <span>{business.collectionNote}</span>
            </>
          )}
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        <p>
          {isGivingDrive
            ? "Approved goods only. No monetary donations."
            : "Prepared with gratitude. Shared with purpose."}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

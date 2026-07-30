import { FaGift, FaShoppingBasket, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import { useCart } from "../context/CartContext";
import "./MobileActionBar.css";

function MobileActionBar() {
  const location = useLocation();
  const isGivingDrive = location.pathname.startsWith("/christmas-drive");
  const { totalItems } = useCart();

  if (isGivingDrive) {
    return (
      <nav className="mobile-action-bar mobile-action-bar--drive" aria-label="Giving drive options">
        <a href={`tel:${siteConfig.contacts.primary.phoneNumber}`}>
          <span>Call</span>
        </a>
        <a
          className="mobile-action-bar__whatsapp"
          href={createWhatsAppUrl("Hi Restore Diligence, I have a question about the Christmas Giving Drive.")}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>Ask</span>
        </a>
        <a className="mobile-action-bar__primary" href="#donate">
          <FaGift aria-hidden="true" />
          <span>Offer Items</span>
        </a>
      </nav>
    );
  }

  return (
    <nav className="mobile-action-bar" aria-label="Quick order options">
      <a href={`tel:${siteConfig.contacts.primary.phoneNumber}`}>
        <span>Call</span>
      </a>

      <a
        className="mobile-action-bar__whatsapp"
        href={createWhatsAppUrl("Hi Restore Diligence, I would like to ask about an order.")}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <Link className="mobile-action-bar__primary" to="/order">
        <FaShoppingBasket aria-hidden="true" />
        <span>{totalItems ? `Cart (${totalItems})` : "View Cart"}</span>
      </Link>
    </nav>
  );
}

export default MobileActionBar;

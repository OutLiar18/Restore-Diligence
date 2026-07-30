import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import "./MobileActionBar.css";

function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick order options">
      <a href={`tel:${siteConfig.contacts.primary.phoneNumber}`}>
        <span>Call</span>
      </a>

      <a
        className="mobile-action-bar__whatsapp"
        href={createWhatsAppUrl(
          "Hi Restore Diligence, I would like to ask about an order.",
        )}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <Link className="mobile-action-bar__primary" to="/order">
        <span>Start Order</span>
      </Link>
    </nav>
  );
}

export default MobileActionBar;

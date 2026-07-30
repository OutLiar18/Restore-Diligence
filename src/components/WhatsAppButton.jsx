import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppUrl } from "../config/site";
import "./Buttons.css";

function WhatsAppButton({
  label = "Order on WhatsApp",
  compact = false,
  className = "",
  message = "Hi Restore Diligence, I would like to ask about placing an order.",
}) {
  const classes = [
    "whatsapp-button",
    compact ? "whatsapp-button--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export default WhatsAppButton;

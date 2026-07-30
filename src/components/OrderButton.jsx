import { Link } from "react-router";
import "./Buttons.css";

function OrderButton({ label = "Start an Order", compact = false, className = "", onClick }) {
  const classes = [
    "primary-button",
    compact ? "primary-button--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} to="/order" onClick={onClick}>
      <span>{label}</span>
      <span className="primary-button__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default OrderButton;

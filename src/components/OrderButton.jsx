import { Link } from "react-router";
import "./Buttons.css";

function OrderButton({
  label = "View Cart",
  compact = false,
  className = "",
  onClick,
  icon = null,
  to = "/order",
}) {
  const classes = [
    "primary-button",
    compact ? "primary-button--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} to={to} onClick={onClick}>
      {icon}
      <span>{label}</span>
      <span className="primary-button__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default OrderButton;

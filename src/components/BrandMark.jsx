import "./BrandMark.css";

function BrandMark({ compact = false, light = false }) {
  return (
    <span
      className={`brand-mark ${compact ? "brand-mark--compact" : ""} ${
        light ? "brand-mark--light" : ""
      }`}
      aria-hidden="true"
    >
      <span className="brand-mark__triangle">
        <span>RD</span>
      </span>
    </span>
  );
}

export default BrandMark;

import "./BrandMark.css";

function BrandMark({ compact = false, light = false }) {
  return (
    <span
      className={`brand-mark ${compact ? "brand-mark--compact" : ""} ${
        light ? "brand-mark--light" : ""
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" role="img">
        <path className="brand-mark__shield" d="M8 8h48v29c0 12-9 19-24 24C17 56 8 49 8 37V8Z" />
        <path className="brand-mark__cross" d="M42 13h7v9h8v7h-8v10h-7V29h-8v-7h8v-9Z" />
        <text x="15" y="43" className="brand-mark__letters">RD</text>
      </svg>
    </span>
  );
}

export default BrandMark;

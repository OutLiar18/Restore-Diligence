import "./BrandMark.css";

function BrandMark({ variant = "mark", compact = false, light = false }) {
  const isFullLogo = variant === "full";
  const className = [
    "brand-mark",
    isFullLogo ? "brand-mark--full" : "brand-mark--icon",
    compact ? "brand-mark--compact" : "",
    light ? "brand-mark--light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className} aria-hidden="true">
      {isFullLogo ? (
        <picture>
          <source
            srcSet="/brand/restore-diligence-logo-600.webp 600w, /brand/restore-diligence-logo.webp 1200w"
            type="image/webp"
          />
          <img
            src="/brand/restore-diligence-logo.png"
            alt=""
            width="1200"
            height="455"
            sizes="(max-width: 767px) 160px, 208px"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      ) : (
        <picture>
          <source
            srcSet="/brand/restore-diligence-mark-256.webp 256w, /brand/restore-diligence-mark.webp 512w"
            type="image/webp"
          />
          <img
            src="/brand/restore-diligence-mark.png"
            alt=""
            width="512"
            height="512"
            sizes="58px"
            decoding="async"
          />
        </picture>
      )}
    </span>
  );
}

export default BrandMark;

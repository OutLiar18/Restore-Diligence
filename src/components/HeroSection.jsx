import { Link } from "react-router";
import { siteConfig } from "../config/site";
import OrderButton from "./OrderButton";
import WhatsAppButton from "./WhatsAppButton";
import "./HeroSection.css";

const heroImage =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=84";

function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <div className="home-hero__trust">
          <span className="home-hero__trust-dot" aria-hidden="true" />
          Homemade in small batches
        </div>

        <h1>
          Golden, crisp
          <span> and made with care.</span>
        </h1>

        <p className="home-hero__description">
          Fresh samoosas and savouries prepared for family tables, office treats,
          celebrations and those “just one more” moments.
        </p>

        <div className="home-hero__actions">
          <OrderButton />
          <WhatsAppButton />
        </div>

        <p className="home-hero__reassurance">
          {siteConfig.business.orderLeadTime}. Prices and products are currently
          placeholder content.
        </p>
      </div>

      <div className="home-hero__visual">
        <div className="home-hero__image">
          <img
            src={heroImage}
            alt="Golden samoosas served with chutney"
            width="1600"
            height="1100"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="home-hero__image-overlay" aria-hidden="true" />
        </div>

        <article className="home-hero__feature-card">
          <span>Made for sharing</span>
          <strong>Family packs, office boxes & celebration platters</strong>
          <Link to="/menu">
            View the sample menu <span aria-hidden="true">→</span>
          </Link>
        </article>

        <div className="home-hero__service-tag">
          <span aria-hidden="true">✦</span>
          Made to order
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

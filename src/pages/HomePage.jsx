import { Link } from "react-router";
import { FaHeart, FaLeaf, FaRegClock } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

import FoodBusinessStructuredData from "../components/FoodBusinessStructuredData";
import HeroSection from "../components/HeroSection";
import OrderButton from "../components/OrderButton";
import PageMeta from "../components/PageMeta";
import ProductCard from "../components/ProductCard";
import WhatsAppButton from "../components/WhatsAppButton";
import { menuItems } from "../data/menuItems";
import { siteConfig } from "../config/site";
import "./Pages.css";

const driveImage =
  "https://images.pexels.com/photos/7156157/pexels-photo-7156157.jpeg?auto=compress&cs=tinysrgb&w=1500";

function HomePage() {
  const popularItems = menuItems.filter((item) => item.popular).slice(0, 4);

  return (
    <>
      <PageMeta
        title={siteConfig.seo.defaultTitle}
        description={siteConfig.seo.defaultDescription}
        canonicalPath="/"
      />
      <FoodBusinessStructuredData />

      <HeroSection />

      <section className="trust-strip" aria-label="What customers can expect">
        <div>
          <span className="trust-strip__icon" aria-hidden="true">
            <FaRegClock />
          </span>
          <div>
            <strong>Made to order</strong>
            <span>Prepared for the date and quantity you request</span>
          </div>
        </div>

        <div>
          <span className="trust-strip__icon" aria-hidden="true">
            <FaLeaf />
          </span>
          <div>
            <strong>Small-batch care</strong>
            <span>Thoughtful preparation rather than anonymous mass production</span>
          </div>
        </div>

        <div>
          <span className="trust-strip__icon" aria-hidden="true">
            <FaHeart />
          </span>
          <div>
            <strong>Family-kitchen warmth</strong>
            <span>Friendly ordering and food designed for sharing</span>
          </div>
        </div>
      </section>

      <section className="home-menu-preview">
        <div className="container">
          <div className="home-section-heading">
            <div className="section-heading">
              <p className="eyebrow">A taste of the menu</p>
              <h2>Reliable favourites, folded fresh.</h2>
            </div>

            <div className="home-section-heading__side">
              <p>
                Start with a popular flavour or build a mixed order for your
                family, workplace or event.
              </p>
              <Link to="/menu">
                See the full sample menu <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="product-grid">
            {popularItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="order-steps">
        <div className="container">
          <div className="section-heading order-steps__heading">
            <p className="eyebrow">Simple from craving to collection</p>
            <h2>Ordering should feel easy.</h2>
            <p>
              The website prepares the details. WhatsApp keeps the conversation
              personal and makes it simple to confirm availability.
            </p>
          </div>

          <div className="order-steps__grid">
            <article>
              <span>01</span>
              <h3>Choose</h3>
              <p>Browse flavours, quantities and sample prices.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Send</h3>
              <p>Use the order builder to prepare a complete WhatsApp request.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Confirm</h3>
              <p>Agree on the final total, date and collection or delivery details.</p>
            </article>
          </div>

          <div className="order-steps__actions">
            <OrderButton label="Build my order" />
            <WhatsAppButton label="Ask a quick question" />
          </div>
        </div>
      </section>

      <section className="story-preview">
        <div className="container story-preview__layout">
          <div className="story-preview__visual" aria-hidden="true">
            <div className="story-preview__shape story-preview__shape--one" />
            <div className="story-preview__shape story-preview__shape--two" />
            <div className="story-preview__quote">
              <span>Restore Diligence means</span>
              <strong>bringing care and effort back to everyday food.</strong>
            </div>
          </div>

          <div className="section-heading story-preview__content">
            <p className="eyebrow">The meaning behind the name</p>
            <h2>More care. More intention. Better sharing.</h2>
            <p>
              The name may be unexpected for a food business, so the brand turns
              it into a promise: prepare thoughtfully, communicate clearly and do
              each order properly.
            </p>
            <Link className="secondary-button" to="/about">
              Read the draft story
            </Link>
          </div>
        </div>
      </section>

      <section className="drive-preview">
        <div className="container drive-preview__layout">
          <div className="drive-preview__image">
            <img
              src={driveImage}
              alt="Boxes containing clothes and useful items for donation"
              width="1500"
              height="1000"
              loading="lazy"
              decoding="async"
            />
            <span>{siteConfig.christmasDrive.status}</span>
          </div>

          <div className="drive-preview__content">
            <p className="eyebrow eyebrow--light">Food with a wider purpose</p>
            <GiPartyPopper aria-hidden="true" />
            <h2>{siteConfig.christmasDrive.year} Christmas Giving Drive</h2>
            <p>
              A dedicated space for the community to contribute clean clothing,
              food-hamper items, hygiene products, blankets, toys and books for
              people who need extra care during the festive season.
            </p>

            <div className="drive-preview__actions">
              <Link to="/christmas-drive">
                View the giving drive <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container home-final-cta__layout">
          <div>
            <p className="eyebrow eyebrow--light">Ready when you are</p>
            <h2>Bring something crisp and memorable to the table.</h2>
            <p>
              Start with the order builder or message directly for a custom mix,
              office box or celebration platter.
            </p>
          </div>

          <div className="home-final-cta__actions">
            <OrderButton label="Start an order" />
            <WhatsAppButton label="WhatsApp directly" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

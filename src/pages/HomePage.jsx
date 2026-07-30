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
              Add items to your cart, review the total, confirm availability and
              pay securely by EFT once the business approves the final order.
            </p>
          </div>

          <div className="order-steps__grid">
            <article>
              <span>01</span>
              <h3>Add to cart</h3>
              <p>Browse flavours and keep adding items as you shop.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Review & confirm</h3>
              <p>Check quantities, choose a date and send the full order for confirmation.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Pay by EFT</h3>
              <p>Transfer only after confirmation. Preparation starts when payment clears.</p>
            </article>
          </div>

          <div className="order-steps__actions">
            <OrderButton label="Browse & add to cart" to="/menu" />
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
              <strong>serving with gratitude, diligence and care.</strong>
            </div>
          </div>

          <div className="section-heading story-preview__content">
            <p className="eyebrow">The meaning behind the name</p>
            <h2>More care. More intention. Better sharing.</h2>
            <p>
              The name may be unexpected for a food business, so the brand turns
              it into a promise rooted in faith and service: prepare thoughtfully,
              communicate clearly and do each order properly.
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
              A separate green-and-gold giving initiative accepting clean clothing,
              food-hamper items, hygiene products, blankets, toys and books. No
              cash or monetary donations are accepted.
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
              Add favourites to your cart, confirm the final total, then pay by EFT.
              Orders are processed within 24–48 hours after payment clears.
            </p>
          </div>

          <div className="home-final-cta__actions">
            <OrderButton label="Start shopping" to="/menu" />
            <WhatsAppButton label="WhatsApp directly" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

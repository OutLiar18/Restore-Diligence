import { FaHeart, FaHandsHelping, FaStar } from "react-icons/fa";

import OrderButton from "../components/OrderButton";
import PageMeta from "../components/PageMeta";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";
import "./Pages.css";

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Restore Diligence | Homemade Food Made with Care"
        description="Read the draft story and values behind Restore Diligence homemade samoosas and savouries."
        canonicalPath="/about"
      />

      <header className="page-intro page-intro--about">
        <div className="container page-intro__inner">
          <p className="eyebrow">A family-food brand with an unusual name</p>
          <h1>Care is the ingredient behind everything.</h1>
          <p>
            This page uses a polished placeholder story. Replace it with your 
            real background, food journey and reasons for starting the
            business.
          </p>
        </div>
      </header>

      <section className="about-story">
        <div className="container about-story__layout">
          <div className="about-story__statement">
            <span>Our draft interpretation</span>
            <blockquote>
              “Restore Diligence” means honouring God through thoughtful work,
              honest service and food prepared with genuine care.
            </blockquote>
          </div>

          <div className="about-story__copy">
            <p className="eyebrow">The story to refine</p>
            <h2>From a trusted kitchen to more tables.</h2>
            <p>
              Restore Diligence is shaped by a simple Christian principle: whatever
              work is placed in our hands should be done wholeheartedly. Familiar food
              becomes memorable when it is prepared properly, communicated honestly
              and served with gratitude.
            </p>
            <p>
              The business serves everyday cravings as well as family gatherings,
              office meetings and celebrations. The aim is not to pretend to be a
              huge factory. It is to make small-business care feel dependable.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Faith expressed through service</p>
            <h2>Warm, reliable and grounded in good values.</h2>
          </div>

          <div className="values-grid">
            <article>
              <FaHeart aria-hidden="true" />
              <h3>Diligence in the details</h3>
              <p>Thoughtful preparation, neat presentation and clear communication.</p>
            </article>
            <article>
              <FaStar aria-hidden="true" />
              <h3>Honesty over hype</h3>
              <p>Fair expectations, clear pricing and no exaggerated promises.</p>
            </article>
            <article>
              <FaHandsHelping aria-hidden="true" />
              <h3>Service beyond sales</h3>
              <p>Food as a way to gather people and practical giving as a way to serve.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-owner">
        <div className="container about-owner__layout">
          <div className="about-owner__portrait" aria-label="Owner photo placeholder">
            <span>Owner photo</span>
            <small>Replace with a warm, natural kitchen portrait</small>
          </div>

          <div className="section-heading about-owner__content">
            <p className="eyebrow">Meet the person behind the food</p>
            <h2>{siteConfig.contacts.primary.name}</h2>
            <p>
              Add a genuine first-person introduction here: what she loves to cook,
              what customers request most often and what quality means to her.
            </p>
            <div className="about-owner__actions">
              <OrderButton />
              <WhatsAppButton label="Say hello on WhatsApp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;

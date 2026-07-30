import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import PageMeta from "../components/PageMeta";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";
import "./Pages.css";

function ContactPage() {
  const { contacts, business } = siteConfig;

  return (
    <>
      <PageMeta
        title="Contact Restore Diligence"
        description="Contact Restore Diligence for homemade samoosas, custom platters, order questions and Christmas-drive donations."
        canonicalPath="/contact"
      />

      <header className="page-intro page-intro--contact">
        <div className="container page-intro__inner">
          <p className="eyebrow">Friendly, direct contact</p>
          <h1>Questions, orders and giving-drive enquiries.</h1>
          <p>
            Keep contact simple: WhatsApp for fast conversations, phone for urgent
            clarification and email for longer business enquiries.
          </p>
        </div>
      </header>

      <section className="contact-page">
        <div className="container contact-page__grid">
          <article>
            <FaWhatsapp aria-hidden="true" />
            <span>Fastest option</span>
            <h2>WhatsApp</h2>
            <p>Orders, custom requests and donation-drive enquiries.</p>
            <WhatsAppButton label="Open WhatsApp" compact />
          </article>

          <article>
            <FaPhoneAlt aria-hidden="true" />
            <span>Call</span>
            <h2>{contacts.primary.phoneDisplay}</h2>
            <p>Speak directly during the listed business hours.</p>
            <a href={`tel:${contacts.primary.phoneNumber}`}>Call now</a>
          </article>

          <article>
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
            <h2>Email enquiries</h2>
            <p>Useful for offices, events and larger written requests.</p>
            <a href={`mailto:${contacts.primary.email}`}>{contacts.primary.email}</a>
          </article>

          <article>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Service area</span>
            <h2>Local ordering</h2>
            <p>{business.serviceArea}</p>
            <small>Replace this with the confirmed suburb and delivery radius.</small>
          </article>
        </div>
      </section>

      <section className="hours-section">
        <div className="container hours-section__layout">
          <div className="section-heading">
            <p className="eyebrow">Draft trading times</p>
            <h2>Know when to expect a reply.</h2>
            <p>Replace these sample hours with the actual ordering and collection schedule.</p>
          </div>

          <div className="hours-card">
            {business.hours.map((entry) => (
              <div key={entry.days}>
                <strong>{entry.days}</strong>
                <span>{entry.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

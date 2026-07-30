import FAQSection from "../components/FAQSection";
import OrderForm from "../components/OrderForm";
import PageMeta from "../components/PageMeta";
import { orderFaqs } from "../data/faqs";
import { siteConfig } from "../config/site";
import "./Pages.css";

function OrderPage() {
  return (
    <>
      <PageMeta
        title="Order Samoosas on WhatsApp | Restore Diligence"
        description="Prepare a clear samoosa order request and send it to Restore Diligence through WhatsApp."
        canonicalPath="/order"
      />

      <header className="page-intro page-intro--order">
        <div className="container page-intro__inner">
          <p className="eyebrow">No account. No complicated checkout.</p>
          <h1>Build the request. Confirm it personally.</h1>
          <p>
            Complete the form once and it turns your choices into a WhatsApp
            message for {siteConfig.contacts.primary.name}.
          </p>
        </div>
      </header>

      <section className="form-page">
        <div className="container form-page__layout">
          <OrderForm />

          <aside className="order-sidebar">
            <p className="eyebrow">Before you send</p>
            <h2>Helpful order details</h2>
            <ul>
              <li>{siteConfig.business.orderLeadTime}</li>
              <li>Large platters may require additional preparation time.</li>
              <li>Final pricing is confirmed before the order is accepted.</li>
              <li>{siteConfig.business.collectionNote}.</li>
            </ul>

            <div className="order-sidebar__contact">
              <span>Prefer to speak directly?</span>
              <a href={`tel:${siteConfig.contacts.primary.phoneNumber}`}>
                {siteConfig.contacts.primary.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <FAQSection
        title="Questions people usually ask before ordering."
        intro="Keep these answers accurate and practical. They reduce repeated messages and make ordering easier."
        items={orderFaqs}
      />
    </>
  );
}

export default OrderPage;

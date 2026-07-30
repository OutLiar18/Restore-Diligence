import FAQSection from "../components/FAQSection";
import OrderForm from "../components/OrderForm";
import PageMeta from "../components/PageMeta";
import { siteConfig } from "../config/site";
import { orderFaqs } from "../data/faqs";
import "./Pages.css";

function OrderPage() {
  return (
    <>
      <PageMeta
        title="Cart & EFT Checkout | Restore Diligence"
        description="Add samoosas to your cart, review your order and receive Restore Diligence EFT payment instructions."
        canonicalPath="/order"
      />

      <header className="page-intro page-intro--order">
        <div className="container page-intro__inner">
          <p className="eyebrow">Cart • Details • EFT payment</p>
          <h1>A familiar checkout, with personal confirmation.</h1>
          <p>
            Build your cart like a food-delivery app, then confirm the order on
            WhatsApp and pay securely by direct bank transfer.
          </p>
        </div>
      </header>

      <section className="form-page checkout-page">
        <div className="container form-page__layout form-page__layout--single">
          <OrderForm />
        </div>
      </section>

      <section className="payment-promise">
        <div className="container payment-promise__layout">
          <div>
            <p className="eyebrow eyebrow--light">Clear expectations</p>
            <h2>Payment confirms your place in the preparation schedule.</h2>
          </div>
          <p>{siteConfig.business.orderLeadTime}. Larger and custom orders may require additional time, which will be confirmed before payment.</p>
        </div>
      </section>

      <FAQSection
        title="Questions people usually ask before ordering."
        intro="These answers explain the cart, EFT payment and production process."
        items={orderFaqs}
      />
    </>
  );
}

export default OrderPage;

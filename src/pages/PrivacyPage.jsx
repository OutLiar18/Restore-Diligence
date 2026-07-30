import PageMeta from "../components/PageMeta";
import "./Pages.css";

function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Restore Diligence"
        description="Draft privacy information for the Restore Diligence website."
        canonicalPath="/privacy-policy"
      />

      <article className="legal-page">
        <div className="container legal-page__inner">
          <p className="eyebrow">Draft website notice</p>
          <h1>Privacy Policy</h1>
          <p>
            This website currently does not store order or donation-form submissions.
            Forms prepare a message and then open WhatsApp, where communication is
            governed by WhatsApp and the user’s own privacy settings.
          </p>
          <h2>Information you choose to send</h2>
          <p>
            When you contact the business, you may provide a name, phone number,
            order details or donation information. Use this information only to reply,
            prepare the requested order or coordinate the stated donation.
          </p>
          <h2>Analytics and cookies</h2>
          <p>
            No analytics or advertising cookies are included in this draft. Update
            this page before adding tracking, online payments, newsletter tools or a
            database.
          </p>
          <h2>Corrections</h2>
          <p>
            Replace the dummy email address and contact details before launch, then
            add a real route for privacy questions.
          </p>
        </div>
      </article>
    </>
  );
}

export default PrivacyPage;

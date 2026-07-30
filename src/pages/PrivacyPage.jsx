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
            This website does not currently send order or giving-drive form data to
            a database. Final messages open in WhatsApp, where communication is
            governed by WhatsApp and the user’s own privacy settings.
          </p>

          <h2>Your shopping cart</h2>
          <p>
            Cart contents are stored locally in your browser so that selected items
            remain available while you move between pages or refresh the website.
            Clearing the cart or browser storage removes this information.
          </p>

          <h2>Information you choose to send</h2>
          <p>
            When you contact the business, you may provide a name, phone number,
            email address, order details or information about goods offered to the
            Christmas Giving Drive. This information should only be used to respond,
            prepare the requested order or coordinate the stated item contribution.
          </p>

          <h2>Payments</h2>
          <p>
            The website displays EFT details but does not request, collect or store
            card numbers, online-banking passwords, PINs or banking login details.
            Customers complete direct transfers through their own bank and send proof
            of payment to the business.
          </p>

          <h2>Giving Drive</h2>
          <p>
            The Christmas Giving Drive accepts approved goods only and does not accept
            cash, EFT or any other monetary donations through the website.
          </p>

          <h2>Analytics and cookies</h2>
          <p>
            No analytics or advertising cookies are included in this draft. Update
            this policy before adding tracking, card-payment services, newsletters or
            a customer database.
          </p>

          <h2>Corrections</h2>
          <p>
            Replace all dummy contact and bank details before launch and provide a
            confirmed channel for privacy questions.
          </p>
        </div>
      </article>
    </>
  );
}

export default PrivacyPage;

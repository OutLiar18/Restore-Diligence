import { FaBan, FaBookOpen, FaBoxOpen, FaGift, FaTshirt } from "react-icons/fa";
import { GiWrappedSweet } from "react-icons/gi";

import DonationForm from "../components/DonationForm";
import FAQSection from "../components/FAQSection";
import PageMeta from "../components/PageMeta";
import { siteConfig } from "../config/site";
import { driveFaqs } from "../data/faqs";
import "./Pages.css";

const driveImage =
  "https://images.pexels.com/photos/7156157/pexels-photo-7156157.jpeg?auto=compress&cs=tinysrgb&w=1700";

function ChristmasDrivePage() {
  const drive = siteConfig.christmasDrive;

  return (
    <>
      <PageMeta
        title={`${drive.year} Christmas Giving Drive | Restore Diligence`}
        description="Contribute approved clothing, food-hamper items and care products to the Restore Diligence Christmas Giving Drive. No money donations are accepted."
        canonicalPath="/christmas-drive"
      />

      <header className="drive-hero">
        <div className="container drive-hero__layout">
          <div className="drive-hero__content">
            <div className="drive-hero__status"><span aria-hidden="true" /> {drive.status}</div>
            <p className="eyebrow eyebrow--light">{drive.year} community initiative</p>
            <h1>Give warmth. Share provision. Restore hope.</h1>
            <p>
              A separate Christmas initiative collecting useful goods for homeless
              people and vulnerable or orphaned children—with dignity, transparency
              and practical care.
            </p>
            <div className="drive-hero__actions">
              <a href="#donate"><FaGift aria-hidden="true" /> Offer useful items</a>
              <span><FaBan aria-hidden="true" /> No money donations</span>
            </div>
          </div>

          <div className="drive-hero__image">
            <img
              src={driveImage}
              alt="Donation boxes filled with clothing and essential items"
              width="1700"
              height="1100"
              loading="eager"
              decoding="async"
            />
            <div className="drive-hero__image-note">
              <span>Important</span>
              <strong>Beneficiary partner still to be confirmed</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="drive-policy-banner" aria-label="Donation policy">
        <div className="container">
          <FaBan aria-hidden="true" />
          <div>
            <strong>Goods only—no cash, EFT or monetary donations</strong>
            <p>{drive.moneyPolicy}</p>
          </div>
        </div>
      </section>

      <section className="drive-needs">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What the drive can accept</p>
            <h2>Useful items, clean condition, genuine care.</h2>
            <p>
              Every contribution should protect the recipient’s dignity. Confirm
              the final list with the receiving organisation before collection begins.
            </p>
          </div>

          <div className="drive-needs__grid">
            <article><FaTshirt aria-hidden="true" /><span>01</span><h3>Clothing & blankets</h3><p>Clean, wearable clothing sorted by approximate size and season.</p></article>
            <article><FaBoxOpen aria-hidden="true" /><span>02</span><h3>Food-hamper items</h3><p>Sealed, non-perishable products with clear labels and valid dates.</p></article>
            <article><GiWrappedSweet aria-hidden="true" /><span>03</span><h3>Hygiene & care</h3><p>Unopened soap, toothpaste, sanitary items and practical essentials.</p></article>
            <article><FaBookOpen aria-hidden="true" /><span>04</span><h3>Toys & books</h3><p>Safe, complete items in good condition and suitable for children.</p></article>
          </div>
        </div>
      </section>

      <section className="drive-process">
        <div className="container drive-process__layout">
          <div className="section-heading">
            <p className="eyebrow eyebrow--light">How participation works</p>
            <h2>One clear process from offer to handover.</h2>
          </div>

          <ol>
            <li><span>1</span><div><strong>Choose useful goods</strong><p>Check that items are clean, safe, complete and suitable to give.</p></div></li>
            <li><span>2</span><div><strong>Describe the items</strong><p>Use the contribution form to share the item type and approximate quantity.</p></div></li>
            <li><span>3</span><div><strong>Confirm the handover</strong><p>Receive the verified drop-off point or discuss possible collection.</p></div></li>
            <li><span>4</span><div><strong>Share the outcome responsibly</strong><p>Publish a transparent update without exploiting or exposing recipients.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="drive-transparency">
        <div className="container drive-transparency__layout">
          <div><p className="eyebrow">Stewardship before promotion</p><h2>Details still requiring confirmation.</h2></div>
          <dl>
            <div><dt>Collection deadline</dt><dd>{drive.collectionDeadline}</dd></div>
            <div><dt>Distribution date</dt><dd>{drive.distributionDate}</dd></div>
            <div><dt>Drop-off point</dt><dd>{drive.dropOffLocation}</dd></div>
            <div><dt>Beneficiary partner</dt><dd>To be selected and verified</dd></div>
            <div><dt>Money donations</dt><dd>Not accepted</dd></div>
          </dl>
        </div>
      </section>

      <section className="form-page form-page--drive" id="donate">
        <div className="container form-page__layout form-page__layout--single">
          <DonationForm />
        </div>
      </section>

      <FAQSection
        eyebrow="Giving-drive questions"
        title="Clear boundaries protect everyone involved."
        intro="The giving drive is item-based only and remains separate from Restore Diligence food-order payments."
        items={driveFaqs}
      />
    </>
  );
}

export default ChristmasDrivePage;

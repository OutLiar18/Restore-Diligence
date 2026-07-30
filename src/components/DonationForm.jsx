import { useState } from "react";
import { FaGift, FaWhatsapp } from "react-icons/fa";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import "./Forms.css";

function DonationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Clothing",
    quantity: "",
    collection: "I can drop it off",
    notes: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      `Hi ${siteConfig.companyName}, I would like to offer items to the ${siteConfig.christmasDrive.year} Christmas Giving Drive.`,
      "",
      `Name: ${form.name}`,
      `Contact number: ${form.phone}`,
      `Item type: ${form.category}`,
      `Approximate quantity: ${form.quantity || "Not specified"}`,
      `Drop-off / collection: ${form.collection}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "I understand that this drive accepts goods only and does not accept money donations.",
      "Please confirm whether these items are currently needed and share the verified handover details.",
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="smart-form smart-form--drive" onSubmit={handleSubmit}>
      <div className="smart-form__intro">
        <span><FaGift aria-hidden="true" /> Item contribution</span>
        <h2>Offer useful goods, not money.</h2>
        <p>
          Describe the items you would like to give. The organisers will confirm
          whether they are needed and provide the verified handover details.
        </p>
      </div>

      <div className="drive-no-money" role="note">
        <strong>No monetary donations</strong>
        <p>{siteConfig.christmasDrive.moneyPolicy}</p>
      </div>

      <div className="smart-form__grid">
        <label>
          Your name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Contact number
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>

        <label>
          Item type
          <select name="category" value={form.category} onChange={handleChange}>
            <option>Clothing</option>
            <option>Food hamper items</option>
            <option>Hygiene products</option>
            <option>Blankets</option>
            <option>Toys or children’s books</option>
            <option>Business / bulk goods</option>
            <option>Other useful goods</option>
          </select>
        </label>

        <label>
          Approximate quantity
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Example: 2 bags or 10 food parcels"
          />
        </label>

        <label className="smart-form__full">
          Drop-off or collection
          <select name="collection" value={form.collection} onChange={handleChange}>
            <option>I can drop it off</option>
            <option>I would like to ask about collection</option>
            <option>I need more information first</option>
          </select>
        </label>

        <label className="smart-form__full">
          Anything else we should know?
          <textarea name="notes" rows="5" value={form.notes} onChange={handleChange} />
        </label>
      </div>

      <button className="smart-form__submit" type="submit">
        <FaWhatsapp aria-hidden="true" />
        Discuss my item contribution
      </button>
    </form>
  );
}

export default DonationForm;

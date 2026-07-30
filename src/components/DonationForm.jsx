import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
      `Hi ${siteConfig.companyName}, I would like to support the ${siteConfig.christmasDrive.year} Christmas Giving Drive.`,
      "",
      `Name: ${form.name}`,
      `Contact number: ${form.phone}`,
      `Donation type: ${form.category}`,
      `Approximate quantity: ${form.quantity || "Not specified"}`,
      `Drop-off / collection: ${form.collection}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "Please let me know the next step and confirm the collection point.",
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="smart-form smart-form--drive" onSubmit={handleSubmit}>
      <div className="smart-form__intro">
        <span>Donation enquiry</span>
        <h2>Offer what you can.</h2>
        <p>
          Complete the short form and WhatsApp will open with the information
          already organised for you.
        </p>
      </div>

      <div className="smart-form__grid">
        <label>
          Your name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact number
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Donation type
          <select name="category" value={form.category} onChange={handleChange}>
            <option>Clothing</option>
            <option>Food hamper items</option>
            <option>Hygiene products</option>
            <option>Blankets</option>
            <option>Toys or children’s books</option>
            <option>Business / bulk contribution</option>
            <option>Other</option>
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
          <textarea
            name="notes"
            rows="5"
            value={form.notes}
            onChange={handleChange}
          />
        </label>
      </div>

      <button className="smart-form__submit" type="submit">
        <FaWhatsapp aria-hidden="true" />
        Discuss my donation on WhatsApp
      </button>
    </form>
  );
}

export default DonationForm;

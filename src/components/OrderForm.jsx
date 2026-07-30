import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { FaWhatsapp } from "react-icons/fa";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import { menuItems } from "../data/menuItems";
import "./Forms.css";

function OrderForm() {
  const [searchParams] = useSearchParams();
  const requestedItem = searchParams.get("item");
  const defaultItem = useMemo(
    () => menuItems.find((item) => item.id === requestedItem)?.id ?? "",
    [requestedItem],
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    item: defaultItem,
    quantity: "1 dozen",
    date: "",
    fulfilment: "Collection",
    notes: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const selected = menuItems.find((item) => item.id === form.item);
    const itemName = selected?.name ?? "Custom / mixed order";
    const message = [
      `Hi ${siteConfig.companyName}, I would like to place an order.`,
      "",
      `Name: ${form.name}`,
      `Contact number: ${form.phone}`,
      `Item: ${itemName}`,
      `Quantity: ${form.quantity}`,
      `Preferred date: ${form.date || "To be discussed"}`,
      `Collection / delivery: ${form.fulfilment}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "Please confirm availability, final price and collection/delivery details.",
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="smart-form" onSubmit={handleSubmit}>
      <div className="smart-form__intro">
        <span>WhatsApp order builder</span>
        <h2>Tell us what you need.</h2>
        <p>
          This form does not take payment or save personal information. It simply
          prepares a clear WhatsApp message for the business.
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
            autoComplete="name"
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
            autoComplete="tel"
            required
          />
        </label>

        <label>
          What would you like?
          <select name="item" value={form.item} onChange={handleChange}>
            <option value="">Custom / mixed order</option>
            {menuItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — {item.price} {item.unit}
              </option>
            ))}
          </select>
        </label>

        <label>
          Quantity
          <select name="quantity" value={form.quantity} onChange={handleChange}>
            <option>1 dozen</option>
            <option>2 dozen</option>
            <option>3 dozen</option>
            <option>4 dozen</option>
            <option>5+ dozen / bulk order</option>
            <option>Custom platter</option>
          </select>
        </label>

        <label>
          Preferred date
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>

        <label>
          Collection or delivery?
          <select name="fulfilment" value={form.fulfilment} onChange={handleChange}>
            <option>Collection</option>
            <option>Ask about delivery</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label className="smart-form__full">
          Extra details
          <textarea
            name="notes"
            rows="5"
            value={form.notes}
            onChange={handleChange}
            placeholder="Flavour mix, dietary questions, event details or anything else…"
          />
        </label>
      </div>

      <button className="smart-form__submit" type="submit">
        <FaWhatsapp aria-hidden="true" />
        Send order request on WhatsApp
      </button>

      <p className="smart-form__disclaimer">
        Submitting opens WhatsApp. Your order is only confirmed after the business
        replies with availability and pricing.
      </p>
    </form>
  );
}

export default OrderForm;

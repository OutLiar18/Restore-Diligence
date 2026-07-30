import { useMemo, useState } from "react";
import { FaCheckCircle, FaCopy, FaMinus, FaPlus, FaShoppingBasket, FaTrash, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

import { createWhatsAppUrl, siteConfig } from "../config/site";
import { useCart } from "../context/CartContext";
import "./Forms.css";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

function OrderForm() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    fulfilment: "Collection",
    notes: "",
  });

  const orderReference = useMemo(
    () => `${siteConfig.payments.referencePrefix}-${Date.now().toString().slice(-7)}`,
    [],
  );

  const containsVariablePrice = items.some((item) => item.variablePrice);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setCheckoutReady(false);
  }

  function buildMessage() {
    const orderLines = items.map(
      (item) =>
        `• ${item.quantity} × ${item.name} (${item.price} ${item.unit}) — ${formatCurrency(
          item.priceValue * item.quantity,
        )}${item.variablePrice ? " estimated" : ""}`,
    );

    return [
      `Hi ${siteConfig.companyName}, I would like to finalise this order.`,
      "",
      `Order reference: ${orderReference}`,
      `Name: ${form.name}`,
      `Contact number: ${form.phone}`,
      `Email: ${form.email || "Not supplied"}`,
      `Preferred date: ${form.date || "To be discussed"}`,
      `Collection / delivery: ${form.fulfilment}`,
      "",
      "ORDER:",
      ...orderLines,
      "",
      `Estimated subtotal: ${formatCurrency(subtotal)}`,
      containsVariablePrice
        ? "Some items use starting prices. Please confirm the final total before payment."
        : "Please confirm availability and the final total before payment.",
      `Notes: ${form.notes || "None"}`,
      "",
      `Payment method: ${siteConfig.payments.method}`,
      `Payment reference: ${orderReference}`,
      "I understand production starts after payment has cleared.",
    ].join("\n");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCheckoutReady(true);
    window.setTimeout(() => {
      document.getElementById("payment-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 20);
  }

  async function copyBankDetails() {
    const details = [
      `Bank: ${siteConfig.payments.bankName}`,
      `Account holder: ${siteConfig.payments.accountHolder}`,
      `Account number: ${siteConfig.payments.accountNumber}`,
      `Account type: ${siteConfig.payments.accountType}`,
      `Branch code: ${siteConfig.payments.branchCode}`,
      `Reference: ${orderReference}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  if (!items.length) {
    return (
      <section className="empty-cart" aria-live="polite">
        <span className="empty-cart__icon"><FaShoppingBasket aria-hidden="true" /></span>
        <p className="eyebrow">Your cart is empty</p>
        <h2>Choose your favourites first.</h2>
        <p>
          Add flavours from the menu, then return here to review quantities,
          enter your details and receive the EFT instructions.
        </p>
        <Link className="primary-button" to="/menu">
          Browse the menu
          <span className="primary-button__arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <section className="checkout-card checkout-cart" aria-labelledby="cart-heading">
        <div className="checkout-card__heading">
          <div>
            <span>Step 1</span>
            <h2 id="cart-heading">Review your cart</h2>
          </div>
          <button type="button" className="text-button" onClick={clearCart}>
            Clear cart
          </button>
        </div>

        <div className="cart-list">
          {items.map((item) => (
            <article className="cart-line" key={item.id}>
              <img src={item.image} alt="" width="150" height="120" />
              <div className="cart-line__content">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price} {item.unit}</p>
                </div>

                <div className="cart-line__controls">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    <FaMinus aria-hidden="true" />
                  </button>
                  <span aria-label={`${item.quantity} selected`}>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    <FaPlus aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="cart-line__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <FaTrash aria-hidden="true" />
                  </button>
                </div>
              </div>
              <strong>{formatCurrency(item.priceValue * item.quantity)}</strong>
            </article>
          ))}
        </div>

        <div className="cart-total">
          <span>{containsVariablePrice ? "Estimated subtotal" : "Subtotal"}</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        {containsVariablePrice && (
          <p className="checkout-note">
            Platters and custom boxes use starting prices. The business will confirm
            the final amount before you transfer payment.
          </p>
        )}
        <Link className="checkout-add-more" to="/menu">+ Add more items</Link>
      </section>

      <section className="checkout-card" aria-labelledby="details-heading">
        <div className="checkout-card__heading">
          <div>
            <span>Step 2</span>
            <h2 id="details-heading">Your order details</h2>
          </div>
        </div>

        <div className="smart-form__grid">
          <label>
            Your name
            <input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" required />
          </label>
          <label>
            Contact number
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" required />
          </label>
          <label>
            Email address <span className="optional-label">optional</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
          </label>
          <label>
            Preferred date
            <input type="date" name="date" value={form.date} onChange={handleChange} />
          </label>
          <label className="smart-form__full">
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
              placeholder="Flavour mix, event details, dietary questions or anything else…"
            />
          </label>
        </div>

        <button className="checkout-finalise" type="submit">
          Finalise order and view payment details
          <span aria-hidden="true">→</span>
        </button>
      </section>

      {checkoutReady && (
        <section className="checkout-card payment-card" id="payment-details" aria-labelledby="payment-heading">
          <div className="checkout-card__heading">
            <div>
              <span>Step 3</span>
              <h2 id="payment-heading">Confirm, transfer and send proof</h2>
            </div>
            <FaCheckCircle aria-hidden="true" />
          </div>

          <div className="payment-warning">
            <strong>Confirm before paying</strong>
            <p>{siteConfig.payments.instructions}</p>
          </div>

          <dl className="bank-details">
            <div><dt>Bank</dt><dd>{siteConfig.payments.bankName}</dd></div>
            <div><dt>Account holder</dt><dd>{siteConfig.payments.accountHolder}</dd></div>
            <div><dt>Account number</dt><dd>{siteConfig.payments.accountNumber}</dd></div>
            <div><dt>Account type</dt><dd>{siteConfig.payments.accountType}</dd></div>
            <div><dt>Branch code</dt><dd>{siteConfig.payments.branchCode}</dd></div>
            <div className="bank-details__reference"><dt>Payment reference</dt><dd>{orderReference}</dd></div>
          </dl>

          <button className="copy-button" type="button" onClick={copyBankDetails}>
            <FaCopy aria-hidden="true" /> {copied ? "Bank details copied" : "Copy bank details"}
          </button>

          <p className="processing-notice">{siteConfig.payments.processingNotice}</p>

          <a
            className="checkout-whatsapp"
            href={createWhatsAppUrl(buildMessage())}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Send final order on WhatsApp
          </a>
          <p className="checkout-note">
            This website does not collect card or banking credentials. Complete the
            transfer securely through your own bank and send proof of payment directly
            to the business.
          </p>
        </section>
      )}
    </form>
  );
}

export default OrderForm;

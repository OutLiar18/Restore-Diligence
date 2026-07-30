import "./FAQSection.css";

function FAQSection({ eyebrow = "Helpful answers", title, intro, items }) {
  return (
    <section className="faq-section">
      <div className="container faq-section__layout">
        <div className="section-heading faq-section__heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>

        <div className="faq-section__items">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

import { Link } from "react-router";
import "./ProductCard.css";

function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={item.image}
          alt={`${item.name} samoosas`}
          width="900"
          height="700"
          loading="lazy"
          decoding="async"
        />
        {item.popular && <span className="product-card__popular">Popular</span>}
        <span className="product-card__heat">{item.heat}</span>
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="product-card__bottom">
          <div>
            <strong>{item.price}</strong>
            <span>{item.unit}</span>
          </div>

          <Link to={`/order?item=${item.id}`} aria-label={`Order ${item.name}`}>
            Order <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

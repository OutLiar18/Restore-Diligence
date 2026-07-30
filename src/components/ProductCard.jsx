import { FaCheck, FaPlus, FaShoppingBasket } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ item }) {
  const { addItem, items } = useCart();
  const quantityInCart = items.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0;

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

          <button
            type="button"
            className={quantityInCart ? "product-card__add product-card__add--active" : "product-card__add"}
            onClick={() => addItem(item.id)}
            aria-label={`Add ${item.name} to cart`}
          >
            {quantityInCart ? <FaCheck aria-hidden="true" /> : <FaShoppingBasket aria-hidden="true" />}
            <span>{quantityInCart ? `${quantityInCart} in cart` : "Add"}</span>
            <FaPlus aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

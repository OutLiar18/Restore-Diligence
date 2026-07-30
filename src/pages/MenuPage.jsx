import { useMemo, useState } from "react";

import OrderButton from "../components/OrderButton";
import PageMeta from "../components/PageMeta";
import ProductCard from "../components/ProductCard";
import { menuCategories, menuItems } from "../data/menuItems";
import "./Pages.css";

function MenuPage() {
  const [category, setCategory] = useState("All");
  const visibleItems = useMemo(
    () =>
      category === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === category),
    [category],
  );

  return (
    <>
      <PageMeta
        title="Samoosa Menu | Restore Diligence"
        description="Browse the sample Restore Diligence menu of homemade samoosas, mixed boxes and celebration platters."
        canonicalPath="/menu"
      />

      <header className="page-intro page-intro--menu">
        <div className="container page-intro__inner">
          <p className="eyebrow">Sample menu</p>
          <h1>Pick a favourite. Mix it your way.</h1>
          <p>
            Add as many items as you like, adjust quantities in your cart and
            finalise the order with EFT payment after availability is confirmed.
          </p>
        </div>
      </header>

      <section className="menu-page">
        <div className="container">
          <div className="menu-filters" aria-label="Filter menu by category">
            {menuCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "menu-filters__active" : ""}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

          <aside className="menu-note">
            <div>
              <span>Important before launch</span>
              <h2>Confirm prices, minimum quantities and ingredients.</h2>
              <p>
                Add allergy information and clarify whether products are supplied
                fresh, frozen or ready to eat.
              </p>
            </div>
            <OrderButton label="Review cart & checkout" />
          </aside>
        </div>
      </section>
    </>
  );
}

export default MenuPage;

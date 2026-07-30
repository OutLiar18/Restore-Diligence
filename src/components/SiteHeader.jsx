import { useCallback, useEffect, useRef, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink, useLocation } from "react-router";

import { siteConfig } from "../config/site";
import { useCart } from "../context/CartContext";
import BrandMark from "./BrandMark";
import OrderButton from "./OrderButton";
import "./SiteHeader.css";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Giving Drive", to: "/christmas-drive", accent: true },
  { label: "Contact", to: "/contact" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);
  const { contacts } = siteConfig;
  const { totalItems } = useCart();
  const location = useLocation();
  const isGivingDrive = location.pathname.startsWith("/christmas-drive");

  const closeMenu = useCallback(({ restoreFocus = false } = {}) => {
    setMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      window.requestAnimationFrame(() => {
        navigationRef.current?.querySelector("a[href]")?.focus();
      });
    }

    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        closeMenu({ restoreFocus: true });
        return;
      }

      if (event.key !== "Tab" || !menuOpen) return;

      const navigation = navigationRef.current;
      const menuButton = menuButtonRef.current;
      if (!navigation || !menuButton) return;

      const focusable = [
        menuButton,
        ...navigation.querySelectorAll('a[href], button:not([disabled])'),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1120) closeMenu();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="main-header">
      <div className="main-header__inner">
        <NavLink
          className="main-header__brand"
          to="/"
          aria-label={`${siteConfig.companyName} home`}
          onClick={() => closeMenu()}
        >
          <BrandMark variant="full" compact />
        </NavLink>

        <button
          ref={menuButtonRef}
          className={`main-header__menu-button ${
            menuOpen ? "main-header__menu-button--open" : ""
          }`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <button
          className={`main-header__backdrop ${
            menuOpen ? "main-header__backdrop--visible" : ""
          }`}
          type="button"
          aria-hidden="true"
          tabIndex="-1"
          onClick={() => closeMenu({ restoreFocus: true })}
        />

        <nav
          ref={navigationRef}
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "main-navigation--open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="main-navigation__links">
            {navigationLinks.map((link) => (
              <NavLink
                to={link.to}
                end={link.to === "/"}
                key={link.to}
                className={link.accent ? "main-navigation__drive-link" : ""}
                onClick={() => closeMenu()}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="main-navigation__mobile-contact">
            <p>Questions or a custom order?</p>
            <a href={`tel:${contacts.primary.phoneNumber}`}>
              Call {contacts.primary.name}: {contacts.primary.phoneDisplay}
            </a>
          </div>

          <OrderButton
            compact
            label={
              isGivingDrive
                ? "Shop Samoosas"
                : totalItems
                  ? `Cart (${totalItems})`
                  : "View Cart"
            }
            to={isGivingDrive ? "/menu" : "/order"}
            icon={<FaShoppingBasket aria-hidden="true" />}
            className="main-navigation__order"
            onClick={() => closeMenu()}
          />
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

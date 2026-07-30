import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { menuItems } from "../data/menuItems";

const CartContext = createContext(null);
const STORAGE_KEY = "restore-diligence-cart";

function readStoredCart() {
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (entry) =>
          typeof entry?.id === "string" &&
          Number.isFinite(Number(entry?.quantity)) &&
          Number(entry.quantity) > 0,
      )
      .map((entry) => ({
        id: entry.id,
        quantity: Math.min(Math.floor(Number(entry.quantity)), 99),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [entries, setEntries] = useState(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const items = useMemo(
    () =>
      entries
        .map((entry) => {
          const product = menuItems.find((item) => item.id === entry.id);
          return product ? { ...product, quantity: entry.quantity } : null;
        })
        .filter(Boolean),
    [entries],
  );

  const totalItems = useMemo(
    () => entries.reduce((total, entry) => total + entry.quantity, 0),
    [entries],
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.priceValue * item.quantity, 0),
    [items],
  );

  function addItem(id, quantity = 1) {
    setEntries((current) => {
      const existing = current.find((entry) => entry.id === id);
      if (existing) {
        return current.map((entry) =>
          entry.id === id
            ? { ...entry, quantity: Math.min(entry.quantity + quantity, 99) }
            : entry,
        );
      }

      return [...current, { id, quantity: Math.max(1, quantity) }];
    });
  }

  function updateQuantity(id, quantity) {
    const safeQuantity = Number(quantity);
    if (!Number.isFinite(safeQuantity) || safeQuantity <= 0) {
      removeItem(id);
      return;
    }

    setEntries((current) =>
      current.map((entry) =>
        entry.id === id
          ? { ...entry, quantity: Math.min(Math.floor(safeQuantity), 99) }
          : entry,
      ),
    );
  }

  function removeItem(id) {
    setEntries((current) => current.filter((entry) => entry.id !== id));
  }

  function clearCart() {
    setEntries([]);
  }

  const value = {
    items,
    totalItems,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

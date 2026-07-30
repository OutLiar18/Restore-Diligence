const heroPhoto =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=82";
const spicePhoto =
  "https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=72&w=1400";
const platterPhoto =
  "https://images.unsplash.com/photo-1772729996007-40bad08b3c40?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=72&w=1400";

/* Prices and products below are placeholders. Replace them before launch. */
export const menuItems = [
  {
    id: "chicken-cheese",
    name: "Chicken & Cheese",
    category: "Chicken",
    description: "Seasoned chicken mince with creamy melted cheese.",
    price: "R95",
    unit: "per dozen",
    image: heroPhoto,
    popular: true,
    heat: "Mild",
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    category: "Chicken",
    description: "A warmer chicken filling with fresh herbs and balanced spice.",
    price: "R90",
    unit: "per dozen",
    image: spicePhoto,
    popular: false,
    heat: "Medium",
  },
  {
    id: "traditional-beef",
    name: "Traditional Beef",
    category: "Beef",
    description: "Savoury beef mince folded with onion and aromatic spices.",
    price: "R90",
    unit: "per dozen",
    image: platterPhoto,
    popular: true,
    heat: "Mild",
  },
  {
    id: "beef-cheese",
    name: "Beef & Cheese",
    category: "Beef",
    description: "A rich beef filling finished with smooth melted cheese.",
    price: "R100",
    unit: "per dozen",
    image: heroPhoto,
    popular: false,
    heat: "Mild",
  },
  {
    id: "potato-pea",
    name: "Potato & Pea",
    category: "Vegetarian",
    description: "Comforting potato, peas and spices in a crisp golden pastry.",
    price: "R75",
    unit: "per dozen",
    image: spicePhoto,
    popular: true,
    heat: "Mild",
  },
  {
    id: "cheese-corn",
    name: "Cheese & Corn",
    category: "Vegetarian",
    description: "Sweet corn and cheese with a gentle savoury seasoning.",
    price: "R85",
    unit: "per dozen",
    image: platterPhoto,
    popular: false,
    heat: "No chilli",
  },
  {
    id: "party-platter",
    name: "Celebration Platter",
    category: "Platters",
    description: "A mixed selection prepared for family gatherings and events.",
    price: "From R350",
    unit: "custom platter",
    image: platterPhoto,
    popular: true,
    heat: "Mixed",
  },
  {
    id: "office-box",
    name: "Office Snack Box",
    category: "Platters",
    description: "An easy-to-share box for meetings, teams and workplace treats.",
    price: "From R280",
    unit: "custom box",
    image: heroPhoto,
    popular: false,
    heat: "Mixed",
  },
];

export const menuCategories = ["All", "Chicken", "Beef", "Vegetarian", "Platters"];

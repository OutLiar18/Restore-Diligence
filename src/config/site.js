/*
  DUMMY CONTENT NOTICE
  --------------------
  Replace the contact details, service area, business hours, social links and
  Netlify URL before the public launch. Keeping these values in one file makes
  the rest of the website easy to update.
*/

export const siteConfig = {
  siteUrl: "https://restore-diligence.netlify.app",
  language: "en-ZA",
  locale: "en_ZA",

  companyName: "Restore Diligence",
  descriptor: "Homemade Samoosas & Savouries",
  tagline: "Care in every fold. Flavour in every bite.",

  seo: {
    defaultTitle: "Restore Diligence | Homemade Samoosas & Savouries",
    defaultDescription:
      "Fresh homemade samoosas and savouries made to order for families, offices and special occasions.",
    defaultShareImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },

  contacts: {
    primary: {
      name: "Auntie Rani",
      role: "Owner & Cook",
      phoneDisplay: "082 000 0000",
      phoneNumber: "+27820000000",
      email: "orders@restorediligence.example",
      whatsappUrl: "https://wa.me/27820000000",
    },
  },

  business: {
    serviceArea: "Benoni and surrounding areas",
    orderLeadTime: "Please order at least 24–48 hours ahead",
    collectionNote: "Collection details are confirmed on WhatsApp",
    hours: [
      { days: "Monday–Friday", time: "08:00–17:30" },
      { days: "Saturday", time: "08:00–14:00" },
      { days: "Sunday", time: "Pre-orders only" },
    ],
  },

  social: {
    instagram: null,
    facebook: null,
  },

  christmasDrive: {
    year: 2026,
    title: "Christmas Giving Drive",
    status: "Planning now",
    collectionDeadline: "Date to be confirmed",
    distributionDate: "Date to be confirmed",
    dropOffLocation: "Location to be confirmed on WhatsApp",
  },
};

export function createWhatsAppUrl(message = "") {
  const base = siteConfig.contacts.primary.whatsappUrl;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

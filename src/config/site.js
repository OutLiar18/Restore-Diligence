/*
  DUMMY CONTENT NOTICE
  --------------------
  Replace every value marked TO BE CONFIRMED before the public launch.
  Keeping these values in one file makes the website easy to update.
*/

export const siteConfig = {
  siteUrl: "https://restore-diligence.netlify.app",
  language: "en-ZA",
  locale: "en_ZA",

  companyName: "Restore Diligence",
  descriptor: "Homemade Samoosas & Savouries",
  tagline: "Prepared with gratitude. Served with care.",
  faithLine: "Faith • Family • Service",

  seo: {
    defaultTitle: "Restore Diligence | Homemade Samoosas & Savouries",
    defaultDescription:
      "Fresh homemade samoosas and savouries made to order for families, offices and special occasions.",
    defaultShareImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },

  contacts: {
    primary: {
      name: "Rani",
      role: "Owner & Cook",
      phoneDisplay: "082 000 0000",
      phoneNumber: "+27820000000",
      email: "orders@restorediligence.example",
      whatsappUrl: "https://wa.me/27820000000",
    },
  },

  business: {
    serviceArea: "Benoni and surrounding areas",
    orderLeadTime:
      "Orders are processed within 24–48 hours after payment has cleared, depending on order size",
    collectionNote: "Collection or delivery details are confirmed before payment",
    hours: [
      { days: "Monday–Friday", time: "08:00–17:30" },
      { days: "Saturday", time: "08:00–14:00" },
      { days: "Sunday", time: "Pre-orders only" },
    ],
  },

  payments: {
    method: "EFT / direct bank transfer",
    bankName: "TO BE CONFIRMED",
    accountHolder: "Restore Diligence",
    accountNumber: "TO BE CONFIRMED",
    accountType: "TO BE CONFIRMED",
    branchCode: "TO BE CONFIRMED",
    referencePrefix: "RD",
    instructions:
      "Please wait for final availability and pricing confirmation before making payment. Use your order reference as the payment reference and send proof of payment on WhatsApp.",
    processingNotice:
      "Production starts after payment has cleared. Orders are processed within 24–48 hours, depending on order size.",
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
    moneyPolicy:
      "This drive accepts useful goods only. No cash, EFT or other monetary donations are accepted.",
  },
};

export function createWhatsAppUrl(message = "") {
  const base = siteConfig.contacts.primary.whatsappUrl;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

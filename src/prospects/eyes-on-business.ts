import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Eyes On Business",
  tagline: "Bookkeeping and business support for Bundall and Brisbane inner north",
  suburb: "Bundall",
  region: "Gold Coast & New Farm / Teneriffe, QLD",
  phone: "0408 451 878",
  phoneHref: "tel:+61408451878",
  email: "streamline@eyesonbusiness.com.au",
  colours: {
    primary: "#1E3A5F",
    secondary: "#2E5E8A",
    accent: "#4A9B8C",
    muted: "#F2F6FA",
  },
  hero: {
    headline: "Streamlined bookkeeping for Gold Coast and Brisbane businesses that want clarity.",
    subheadline: "Eyes On Business helps owners in Bundall and New Farm / Teneriffe with bookkeeping, BAS support and practical systems — so reporting stays clean and decisions stay informed.",
    primaryCta: "Call 0408 451 878",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Want cleaner books without the clutter?",
    body: "Call or email streamline@eyesonbusiness.com.au. We’ll talk through your systems and the simplest way to keep them tidy.",
    buttonLabel: "Call today",
  },
  about: {
    intro: "Eyes On Business supports Gold Coast and Brisbane inner-north clients with bookkeeping-led services and practical business administration.",
    paragraphs: [
      "Many owners do not need a full corporate finance team — they need reliable reconciliations, BAS that matches reality, and someone who keeps the file moving. That is the focus: streamline the numbers so you can run the business.",
      "We work with cloud tools and established routines, and we keep contact simple. Mobile-first communication suits busy operators across Bundall and New Farm / Teneriffe.",
      "Email streamline@eyesonbusiness.com.au or call 0408 451 878. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Bundall + New Farm / Teneriffe coverage",
      "Bookkeeping and BAS focus",
      "Mobile-friendly contact",
      "Practical systems, clear reporting",
    ],
  },
  services: [
    {
      slug: "bookkeeping",
      title: "Bookkeeping & cloud setup",
      summary: "Clean books in Xero or MYOB — chart of accounts, bank feeds, and month-end routines that make reporting usable.",
      details: [
        "New file setup or cleanup of messy historical data",
        "Bank reconciliation and supplier bill workflows",
        "Job costing for trades and project businesses",
        "Training so your team can keep the file tidy",
      ],
    },
    {
      slug: "bas-payroll",
      title: "BAS, GST & payroll support",
      summary: "Quarterly BAS, STP payroll and super reconciliations so cash flow and compliance stay aligned through the year.",
      details: [
        "GST coding reviews and BAS preparation",
        "Single Touch Payroll support",
        "Superannuation guarantee checks",
        "IAS / PAYG instalment support",
      ],
    },
    {
      slug: "reporting",
      title: "Management reporting",
      summary: "Simple packs that show cash position, margins and what needs attention — without drowning you in unused reports.",
      details: [
        "Monthly or quarterly summary packs",
        "Cash flow snapshots for seasonal businesses",
        "Profitability views by job or location",
        "ATO correspondence support coordination",
      ],
    },
    {
      slug: "systems",
      title: "Systems & process tidy-ups",
      summary: "Practical workflows for invoices, bills and receipts so bookkeeping stays current instead of becoming a year-end crisis.",
      details: [
        "Invoice and bill approval routines",
        "Receipt capture habits that stick",
        "Chart of accounts simplification",
        "Handover notes for your accountant at year-end",
      ],
    },
  ],
  seo: {
    defaultTitle: "Eyes On Business | Bookkeeping Bundall & New Farm QLD",
    titleTemplate: "%s | Eyes On Business",
    defaultDescription: "Bookkeeping and BAS support for Bundall (Gold Coast) and New Farm / Teneriffe businesses. Practical systems, clear reporting.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Gold Coast + Brisbane inner north",
    "Bookkeeping-led, practical support",
    "Call 0408 451 878",
  ],
};

export default config;

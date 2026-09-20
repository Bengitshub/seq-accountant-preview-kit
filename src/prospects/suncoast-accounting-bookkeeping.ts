import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Suncoast Accounting & Bookkeeping",
  tagline: "Accounting and bookkeeping for Coolum Beach and the Sunshine Coast",
  suburb: "Coolum Beach",
  region: "Sunshine Coast, QLD",
  phone: "(07) 5211 1628",
  phoneHref: "tel:+61752111628",
  email: "accountant@suncoastaccountingbookkeeping.com.au",
  colours: {
    primary: "#0A4D68",
    secondary: "#088395",
    accent: "#E8AA42",
    muted: "#F0F7FA",
  },
  hero: {
    headline: "Coast-ready accounting and bookkeeping for Coolum Beach businesses.",
    subheadline: "Suncoast Accounting & Bookkeeping helps Sunshine Coast owners with tax, BAS, payroll and day-to-day bookkeeping — so your numbers stay tidy and lodgement stays on time.",
    primaryCta: "Call (07) 5211 1628",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Ready for cleaner books and calmer BAS weeks?",
    body: "Call or email the team. We’ll confirm fit, what we need from you, and a practical next step — no pressure.",
    buttonLabel: "Call us today",
  },
  about: {
    intro: "Suncoast Accounting & Bookkeeping is a Coolum Beach practice supporting local businesses and individuals with compliance and hands-on bookkeeping.",
    paragraphs: [
      "Sunshine Coast operators juggle seasonal cash flow, contractors and ever-moving ATO deadlines. We keep the compliance load organised — returns, BAS, STP and super — so you can focus on customers and the season ahead.",
      "Our bookkeeping work sits alongside tax advice: bank feeds, reconciliations and month-end routines that make reports usable. If your file has drifted, we can clean it up and put a simple process in place your team can maintain.",
      "Prefer email? Reach accountant@ or bookkeeper@ at the practice domain. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Coolum Beach base, Sunshine Coast focus",
      "Accounting and bookkeeping together",
      "Xero and MYOB friendly workflows",
      "Direct contact — accountant or bookkeeper",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Coolum Beach, with plain-English summaries of what you owe and why.",
      details: [
        "Personal returns for employees, contractors and investors",
        "Company and trust returns with distribution statements",
        "Rental property and capital gains schedules",
        "Amendment support where prior-year issues surface",
      ],
    },
    {
      slug: "bas-payroll",
      title: "BAS, GST & payroll",
      summary: "Quarterly BAS, STP payroll and super reconciliations so cash flow and compliance stay aligned through the year.",
      details: [
        "GST coding reviews and BAS lodgement",
        "Single Touch Payroll setup and ongoing runs",
        "Superannuation guarantee checks",
        "IAS / PAYG instalment support",
      ],
    },
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
      slug: "advisory",
      title: "Business advisory",
      summary: "Cash flow, pricing and structure conversations before the decision — so tax is a factor, not a surprise.",
      details: [
        "Quarterly management reporting packs",
        "Break-even and pricing reviews",
        "Entity structure discussions for growing businesses",
        "ATO payment plans and correspondence support",
      ],
    },
  ],
  seo: {
    defaultTitle: "Suncoast Accounting & Bookkeeping | Coolum Beach QLD",
    titleTemplate: "%s | Suncoast Accounting & Bookkeeping",
    defaultDescription: "Coolum Beach accountants and bookkeepers for tax, BAS, payroll and cloud bookkeeping. Serving the Sunshine Coast.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Local Sunshine Coast practice",
    "Accounting + bookkeeping support",
    "Phone and email — easy to reach",
  ],
};

export default config;

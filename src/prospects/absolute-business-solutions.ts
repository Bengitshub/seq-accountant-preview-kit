import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Absolute Business Solutions",
  tagline: "Business accounting for Morningside and inner Brisbane",
  suburb: "Morningside",
  region: "Brisbane, QLD",
  phone: "(07) 3211 5522",
  phoneHref: "tel:+61732115522",
  email: "reception@absolutebusiness.com.au",
  colours: {
    primary: "#1B3A4B",
    secondary: "#2E5A6B",
    accent: "#C17B3A",
    muted: "#F5F6F8",
  },
  hero: {
    headline: "Straightforward accounting for Morningside businesses that need answers, not jargon.",
    subheadline: "Absolute Business Solutions helps local owners with tax returns, BAS, bookkeeping, payroll and practical advice — so compliance stays organised and decisions stay grounded.",
    primaryCta: "Call (07) 3211 5522",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Let’s make tax and BAS more predictable.",
    body: "Call reception or send a short message. We’ll confirm what you need and the best next step for your business.",
    buttonLabel: "Call reception",
  },
  about: {
    intro: "Absolute Business Solutions is a Morningside practice working with Brisbane businesses and individuals who want clear compliance support and reachable advice.",
    paragraphs: [
      "From sole traders to growing companies, we help keep lodgement calendars realistic and books in a state you can actually use. That means BAS that matches the bank, payroll that meets STP requirements, and year-end that does not feel like a scramble.",
      "We are comfortable with cloud accounting tools and with bringing order to files that have drifted. When advisory matters — cash flow, hiring, or structure — we talk through options in plain English before you commit.",
      "Contact reception@absolutebusiness.com.au or call the office. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Morningside practice serving Brisbane",
      "Tax, BAS, payroll and bookkeeping",
      "Reception-ready phone and email contact",
      "Practical advice without corporate runaround",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Morningside, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "Absolute Business Solutions | Accountants in Morningside QLD",
    titleTemplate: "%s | Absolute Business Solutions",
    defaultDescription: "Morningside accountants for tax returns, BAS, bookkeeping and business advice. Serving Brisbane and South East Queensland.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Inner-Brisbane practice",
    "Compliance and bookkeeping support",
    "Call (07) 3211 5522",
  ],
};

export default config;

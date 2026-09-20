import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Optio Accountants",
  tagline: "Practical accounting for Tarragindi and Brisbane south",
  suburb: "Tarragindi",
  region: "Brisbane South, QLD",
  phone: "07 3221 2000",
  phoneHref: "tel:+61732212000",
  email: "",
  colours: {
    primary: "#0F3D4C",
    secondary: "#1E6B7A",
    accent: "#D4A017",
    muted: "#F3F7F8",
  },
  hero: {
    headline: "Clear, local accounting for Tarragindi businesses and households.",
    subheadline: "Optio Accountants supports owners and individuals across Brisbane’s southside with tax returns, BAS, bookkeeping and straightforward advice — so lodgement stays on track and decisions feel informed.",
    primaryCta: "Call 07 3221 2000",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Want a clearer path through tax season?",
    body: "Call the practice and we’ll talk through your lodging calendar, software and priorities. No long questionnaires — a short conversation is usually enough to start.",
    buttonLabel: "Call Optio today",
  },
  about: {
    intro: "Optio Accountants is a Tarragindi-based practice helping southside businesses and individuals keep compliance predictable and advice practical.",
    paragraphs: [
      "Whether you run a trade business, a small retail or hospitality venture, or manage investments alongside employment income, we focus on clear communication and on-time lodgement. You deal with people who know your file — not a remote call centre.",
      "We work with the tools you already use, from Xero and MYOB through to simpler spreadsheets, then tighten coding and routines so BAS, STP and year-end are less stressful. When a bigger decision is coming — hiring, buying an asset, or changing structure — we help you see the tax impact before you commit.",
      "This preview site is a speculative brochure redesign for discussion only. Service scope and fees are confirmed directly with the practice.",
    ],
    highlights: [
      "Based in Tarragindi, serving Brisbane south",
      "Tax, BAS, bookkeeping and practical advisory",
      "Phone-first contact for a fast start",
      "Plain-English explanations — not jargon",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Tarragindi, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "Optio Accountants | Accountants in Tarragindi QLD",
    titleTemplate: "%s | Optio Accountants",
    defaultDescription: "Tarragindi accountants for tax returns, BAS, bookkeeping and practical advice. Serving Brisbane south and South East Queensland.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Southside practice — local and reachable",
    "Compliance and bookkeeping under one roof",
    "Call 07 3221 2000 to get started",
  ],
};

export default config;

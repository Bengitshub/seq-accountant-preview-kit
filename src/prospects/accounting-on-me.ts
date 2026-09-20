import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "acCounting On Me",
  tagline: "Personal accounting for Redcliffe and the peninsula",
  suburb: "Redcliffe",
  region: "Moreton Bay, QLD",
  phone: "(07) 3885 9755",
  phoneHref: "tel:+61738859755",
  email: "carla@accountingonme.com",
  colours: {
    primary: "#1A3A4A",
    secondary: "#2F6B7A",
    accent: "#E07A3D",
    muted: "#F4F8F9",
  },
  hero: {
    headline: "Personal accounting for Redcliffe businesses and families.",
    subheadline: "acCounting On Me helps Redcliffe and Moreton Bay clients with tax, BAS, bookkeeping and practical advice — personal service without the outdated slider greetings.",
    primaryCta: "Call (07) 3885 9755",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Need help with this year’s lodgement?",
    body: "Call the practice or email Carla / admin. We’ll confirm what you need and the simplest next step.",
    buttonLabel: "Call Redcliffe",
  },
  about: {
    intro: "acCounting On Me is a Redcliffe practice supporting peninsula businesses and individuals with approachable, practical accounting.",
    paragraphs: [
      "Moreton Bay clients want an accountant who knows the local mix — trades, small retail, professionals and investors — and who answers when it matters. We keep compliance organised and explanations clear.",
      "From individual returns to company and trust work, BAS cycles and bookkeeping support, we focus on usable process and clear explanations so you always know what is due.",
      "Email carla@accountingonme.com or admin@accountingonme.com, or call (07) 3885 9755. This preview is speculative for discussion only.",
    ],
    highlights: [
      "Redcliffe / Moreton Bay focus",
      "Personal, reachable service",
      "Tax, BAS and bookkeeping",
      "Phone and email — Carla or admin",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Redcliffe, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "acCounting On Me | Accountants in Redcliffe QLD",
    titleTemplate: "%s | acCounting On Me",
    defaultDescription: "Redcliffe accountants for tax returns, BAS, bookkeeping and practical advice. Serving Moreton Bay and SEQ.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Redcliffe practice",
    "Personal service on the peninsula",
    "Call (07) 3885 9755",
  ],
};

export default config;

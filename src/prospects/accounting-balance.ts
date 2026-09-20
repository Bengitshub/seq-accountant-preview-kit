import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "The Accounting Balance Pty Ltd",
  tagline: "Personal accounting for Burleigh Heads and the Gold Coast",
  suburb: "Burleigh Heads",
  region: "Gold Coast, QLD",
  phone: "07 5576 4648",
  phoneHref: "tel:+61755764648",
  email: "info@accbal.com.au",
  colours: {
    primary: "#0C3B5E",
    secondary: "#1A5F8A",
    accent: "#D4A574",
    muted: "#F3F7FB",
  },
  hero: {
    headline: "Personal accounting for Burleigh Heads businesses and families.",
    subheadline: "The Accounting Balance helps Burleigh Heads clients with tax returns, BAS, bookkeeping and practical advice — approachable service with clear communication.",
    primaryCta: "Call 07 5576 4648",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Ready for a clearer picture of your numbers?",
    body: "Call or email info@accbal.com.au. We will confirm fit, timeline, and what we need from you — no jargon, no pressure.",
    buttonLabel: "Call us today",
  },
  about: {
    intro: "The Accounting Balance Pty Ltd is a Burleigh Heads practice serving Gold Coast businesses and individuals who want reliable compliance and approachable advice.",
    paragraphs: [
      "Gold Coast clients need accountants who understand seasonal hospitality, trades, investors and busy professional households. We focus on on-time lodgement, usable books and conversations you can follow without a finance degree.",
      "Whether you need a personal return, company compliance, BAS support or bookkeeping cleanup, we keep the process organised and the contact personal. Appointments and phone conversations are preferred for anything beyond a quick question.",
      "Email info@accbal.com.au or call 07 5576 4648. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Burleigh Heads / Gold Coast focus",
      "Personal, approachable service",
      "Tax, BAS and bookkeeping",
      "Easy phone and email contact",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Burleigh Heads, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "The Accounting Balance | Accountants in Burleigh Heads QLD",
    titleTemplate: "%s | The Accounting Balance",
    defaultDescription: "Burleigh Heads accountants for tax returns, BAS, bookkeeping and practical advice. Serving the Gold Coast.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Gold Coast practice",
    "Personal service, clear communication",
    "Call 07 5576 4648",
  ],
};

export default config;

import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Crane & Crain",
  tagline: "Accounting for Toowoomba businesses and families",
  suburb: "Toowoomba",
  region: "Darling Downs / SEQ fringe, QLD",
  phone: "07 4632 5381",
  phoneHref: "tel:+61746325381",
  email: "office@ccf.com.au",
  colours: {
    primary: "#2C3E50",
    secondary: "#3D5A6C",
    accent: "#C49A3C",
    muted: "#F5F5F3",
  },
  hero: {
    headline: "Trusted Toowoomba accounting for businesses and families.",
    subheadline: "Crane & Crain supports local businesses and individuals with tax, BAS, bookkeeping and practical advice — a small-firm approach with on-time lodgement and direct contact.",
    primaryCta: "Call 07 4632 5381",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Ready to talk through your next return or BAS?",
    body: "Call the office or email office@ccf.com.au. We’ll confirm fit and what we need from you — no runaround.",
    buttonLabel: "Call the office",
  },
  about: {
    intro: "Crane & Crain is a Toowoomba practice helping Darling Downs and SEQ-fringe clients with straightforward accounting and compliance.",
    paragraphs: [
      "As a smaller two-principal style firm, we keep relationships personal. Clients value reaching the office directly, getting clear answers, and knowing lodgement is handled without drama.",
      "Our work covers personal and business tax, GST and BAS, payroll support and bookkeeping where needed. We meet you where your systems are — then tighten routines so reporting stays usable through the year.",
      "Email office@ccf.com.au or call 07 4632 5381. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Toowoomba-based practice",
      "Direct office contact",
      "Tax, BAS and bookkeeping support",
      "Small-firm attention, professional process",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Toowoomba, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "Crane & Crain | Accountants in Toowoomba QLD",
    titleTemplate: "%s | Crane & Crain",
    defaultDescription: "Toowoomba accountants for tax returns, BAS, bookkeeping and practical advice. Serving the Darling Downs and SEQ fringe.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Local Toowoomba practice",
    "Direct office contact",
    "Call 07 4632 5381",
  ],
};

export default config;

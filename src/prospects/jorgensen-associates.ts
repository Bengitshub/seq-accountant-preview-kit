import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Jorgensen & Associates",
  tagline: "Accounting advice for Tingalpa and east Brisbane",
  suburb: "Tingalpa",
  region: "Brisbane East, QLD",
  phone: "(07) 3890 4577",
  phoneHref: "tel:+61738904577",
  email: "kenj@jorgensen.net.au",
  colours: {
    primary: "#163A4A",
    secondary: "#2A6274",
    accent: "#B8956A",
    muted: "#F4F6F7",
  },
  hero: {
    headline: "Reliable accounting for Tingalpa businesses and families.",
    subheadline: "Jorgensen & Associates provides tax, BAS, bookkeeping and clear advice for east Brisbane clients who want accurate lodgement and a direct line to their accountant.",
    primaryCta: "Call (07) 3890 4577",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Need a clearer picture before year-end?",
    body: "Call or email Ken. We’ll confirm fit, timeline and what we need from you — straightforward and local.",
    buttonLabel: "Call the practice",
  },
  about: {
    intro: "Jorgensen & Associates is a Tingalpa practice supporting east Brisbane businesses and individuals with compliance and practical accounting advice.",
    paragraphs: [
      "Clients come to us for accurate returns, organised BAS cycles and someone who will finish the explanation — not leave service blurbs hanging mid-sentence. We keep communication clear so you know what is due, when, and why it matters.",
      "We work across personal and business tax, GST, payroll and bookkeeping cleanup. If your systems are imperfect, we start there and improve the process rather than forcing a one-size template.",
      "Email kenj@jorgensen.net.au or call the office. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Tingalpa base, east Brisbane focus",
      "Direct accountant contact",
      "Tax, BAS and bookkeeping support",
      "Clear, complete service explanations",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Tingalpa, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "Jorgensen & Associates | Accountants in Tingalpa QLD",
    titleTemplate: "%s | Jorgensen & Associates",
    defaultDescription: "Tingalpa accountants for tax returns, BAS, bookkeeping and practical advice. Serving east Brisbane and SEQ.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "East Brisbane practice",
    "Direct line to your accountant",
    "Call (07) 3890 4577",
  ],
};

export default config;

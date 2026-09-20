import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Harbour Tax & Advisory",
  tagline: "Clear advice for Cleveland businesses and families",
  suburb: "Cleveland",
  region: "Redland City, QLD",
  phone: "07 3488 2140",
  phoneHref: "tel:+61734882140",
  email: "hello@harbourtax.com.au",
  abn: "48 612 903 774",
  addressLine: "Suite 3, 14 Middle Street, Cleveland QLD 4163",
  colours: {
    primary: "#0B3B5A",
    secondary: "#1A5F7A",
    accent: "#C4A35A",
    muted: "#F4F7FA",
  },
  hero: {
    headline: "Accounting that keeps Cleveland businesses ahead of the ATO — not scrambling after it.",
    subheadline: "Harbour Tax & Advisory helps local owners, investors and growing teams with tax, BAS, and practical advice you can act on. Based in Cleveland, serving Redland City and greater SEQ.",
    primaryCta: "Call 07 3488 2140",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Ready for a clearer picture of your numbers?",
    body: "Book a short discovery call. We’ll confirm fit, timeline, and what we need from you — no jargon, no pressure.",
    buttonLabel: "Call us today",
  },
  about: {
    intro: "Harbour Tax & Advisory is a Cleveland-based practice built for owners who want straightforward tax and reporting without the corporate runaround.",
    paragraphs: [
      "We work with retail and hospitality operators along the Redlands foreshore, trade and construction businesses across SEQ, and professionals managing investment properties or side ventures. Most of our clients want one thing: someone who answers the phone, explains the options, and files on time.",
      "Our approach is practical. We start with your systems as they are — Xero, MYOB, Excel, or shoebox — then tighten the process so BAS, STP and year-end are predictable. When planning matters (asset purchases, hiring, restructuring), we map the tax impact before you commit.",
      "We are not a national franchise. Decisions stay local. If we are not the right fit for complex international or litigation work, we will say so and point you toward specialists.",
    ],
    highlights: [
      "Cleveland office with face-to-face meetings by appointment",
      "Xero and MYOB experienced",
      "Clear fixed-fee packages for standard compliance work",
      "Direct access to your accountant — not a call centre",
    ],
  },
  services: [
    {
      slug: "tax-returns",
      title: "Individual & company tax returns",
      summary: "Accurate lodgement for sole traders, companies, trusts and individuals around Cleveland, with plain-English summaries of what you owe and why.",
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
    defaultTitle: "Harbour Tax & Advisory | Accountants in Cleveland QLD",
    titleTemplate: "%s | Harbour Tax & Advisory",
    defaultDescription: "Cleveland accountants for tax returns, BAS, bookkeeping and practical business advice. Serving Redland City and South East Queensland.",
  },
  formspreeId: "xxxxxxxx",
  socialProof: [
    "Local Cleveland practice — not a remote call centre",
    "Fixed-fee options for standard compliance",
    "Xero & MYOB preferred",
  ],
};

export default config;

import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Suncoast Accounting & Bookkeeping",
  tagline: "Elevate your finances — Coolum Beach, Sunshine Coast",
  suburb: "Coolum Beach",
  region: "Sunshine Coast, QLD",
  phone: "(07) 5211 1628",
  phoneHref: "tel:+61752111628",
  email: "accountant@suncoastaccountingbookkeeping.com.au",
  emailSecondary: "bookkeeper@suncoastaccountingbookkeeping.com.au",
  addressLine: "Unit 1/42 Lysaght St, Coolum Beach QLD 4573",
  credentialsLine: "CA SMSF Specialist · Registered Tax Agent",
  hoursNote: "By appointment only · 9AM–5PM",
  colours: {
    primary: "#F47221",
    secondary: "#1B75BD",
    accent: "#3D9FD4",
    muted: "#FFF5EC",
  },
  fonts: {
    display: "Poppins",
    sans: "Source Sans 3",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Source+Sans+3:wght@400;600&display=swap",
  },
  layout: "coastal",
  logoSrc: "/assets/suncoast-accounting-bookkeeping/suncoast-logo.png",
  logoWordmark: true,
  heroImage: "/assets/suncoast-accounting-bookkeeping/hero-beach.jpg",
  heroImageAlt: "Sunrise on wet sand — Sunshine Coast coastal light",
  aboutImage: "/assets/suncoast-accounting-bookkeeping/supporting-morning.jpg",
  aboutImageAlt: "Palm shoreline on a tropical Australian coast",
  aboutImageCaption: "Sunshine Coast — Coolum Beach practice",
  hero: {
    eyebrow: "Coolum Beach · Sunshine Coast",
    headline:
      "Accounting and bookkeeping with Sunshine Coast clarity — Coolum Beach, by appointment.",
    subheadline:
      "Financial success is more than just numbers — it's about your dreams, aspirations and peace of mind. Local expertise from Unit 1/42 Lysaght St, Coolum Beach.",
    primaryCta: "Call (07) 5211 1628",
    secondaryCta: "View services & SMSF",
  },
  cta: {
    headline: "Ready to elevate your finances?",
    body: "Call the Coolum Beach practice or email accountant@ / bookkeeper@. We’ll confirm fit, what we need from you, and a practical next step — by appointment.",
    buttonLabel: "Call (07) 5211 1628",
  },
  about: {
    intro:
      "Based in the heart of the Sunshine Coast, Suncoast Accounting & Bookkeeping is deeply rooted in the local community — offering tailored accounting and bookkeeping from Unit 1/42 Lysaght St, Coolum Beach.",
    paragraphs: [
      "We understand that financial success is more than just numbers; it's about your dreams, your aspirations, and your peace of mind. That's why we're here to guide you through your financial journey with expertise, dedication, and a commitment to your goals.",
      "CA SMSF Specialist · Registered Tax Agent. Our in-depth knowledge of the region's businesses and industries allows us to offer solutions that resonate with Coolum and Sunshine Coast clients.",
      "Office (07) 5211 1628 · accountant@suncoastaccountingbookkeeping.com.au · bookkeeper@suncoastaccountingbookkeeping.com.au. By appointment only, 9AM–5PM. This preview is a speculative brochure redesign for discussion only.",
    ],
    highlights: [
      "Unit 1/42 Lysaght St, Coolum Beach QLD 4573",
      "CA SMSF Specialist · Registered Tax Agent",
      "By appointment only · 9AM–5PM",
      "Accountant and bookkeeper emails on the practice domain",
    ],
  },
  services: [
    {
      slug: "accounting",
      title: "Accounting",
      icon: "ledger",
      summary:
        "Tailored accounting that streamlines processes and keeps compliance tidy — precision and reliability for Coolum and Sunshine Coast clients.",
      details: [
        "Day-to-day and year-end accounting routines",
        "Compliance-ready reporting",
        "Local knowledge of Sunshine Coast businesses",
        "Clear next steps after every engagement",
      ],
    },
    {
      slug: "tax-return-preparation",
      title: "Tax Return Preparation",
      icon: "calculator",
      summary:
        "Seasoned preparation that maximises legitimate deductions and lodges on time so tax season stays calm.",
      details: [
        "Individual and business returns",
        "Legitimate deduction reviews",
        "On-time lodgement",
        "Plain-English summaries of what you owe",
      ],
    },
    {
      slug: "smsf-administration",
      title: "SMSF Administration",
      icon: "shield",
      summary:
        "Setup, management and compliance guidance so the fund stays compliant and working toward retirement goals.",
      details: [
        "SMSF setup and ongoing administration",
        "Compliance and regulatory guidance",
        "Support toward retirement goals",
        "CA SMSF Specialist available",
      ],
    },
    {
      slug: "bas-preparation-lodgement",
      title: "BAS Preparation & Lodgement",
      icon: "document",
      summary:
        "Precise BAS preparation and lodgement for clarity and on-time submissions.",
      details: [
        "GST coding and BAS preparation",
        "On-time lodgement",
        "Cash-flow clarity through the quarter",
        "Penalty-avoidance through timely filings",
      ],
    },
    {
      slug: "corporate-secretarial-advisory",
      title: "Corporate Secretarial Services & Business Advisory",
      icon: "building",
      summary:
        "Company registrations through ASIC compliance, plus practical business advisory.",
      details: [
        "Company registrations",
        "ASIC compliance support",
        "Practical business advisory",
        "Administrative compliance streamlined",
      ],
    },
    {
      slug: "bookkeeping",
      title: "Bookkeeping",
      icon: "book",
      summary:
        "Accurate day-to-day books so owners can focus on growing the business.",
      details: [
        "Bank feeds and reconciliations",
        "Accurate day-to-day records",
        "Month-end routines you can maintain",
        "Reach bookkeeper@ on the practice domain",
      ],
    },
  ],
  seo: {
    defaultTitle: "Suncoast Accounting & Bookkeeping | Coolum Beach QLD",
    titleTemplate: "%s | Suncoast Accounting & Bookkeeping",
    defaultDescription:
      "Coolum Beach accountants and bookkeepers — accounting, tax, SMSF, BAS, corporate secretarial and bookkeeping. Unit 1/42 Lysaght St. Call (07) 5211 1628.",
  },
  formspreeId: "xxxxxxxx",
  smsf: {
    headline: "Self-managed super funds",
    body: "Self-managed super funds offer greater control over retirement savings — and more administration, responsibility and rules. If you need qualified help to keep your SMSF compliant and working toward your retirement goals, talk to us. Call (07) 5211 1628, or Lyn on 0498 371 558 / Liisa on 0475 416 819.",
    phones: [
      { label: "Office", phone: "(07) 5211 1628", phoneHref: "tel:+61752111628" },
      { label: "Lyn", phone: "0498 371 558", phoneHref: "tel:+61498371558" },
      { label: "Liisa", phone: "0475 416 819", phoneHref: "tel:+61475416819" },
    ],
  },
};

export default config;

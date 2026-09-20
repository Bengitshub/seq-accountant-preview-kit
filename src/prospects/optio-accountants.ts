import type { SiteConfig } from '../config/types';

const config: SiteConfig = {
  firmName: "Optio Accountants",
  tagline: "Your suburban tax and accounting service for Brisbane and South East Queensland",
  suburb: "Tarragindi",
  region: "Brisbane South, QLD",
  phone: "07 3221 2000",
  phoneHref: "tel:+61732212000",
  email: "",
  addressLine: "Shop 8, 53 Monash Road, Tarragindi QLD 4121",
  colours: {
    primary: "#812201",
    secondary: "#CD5B33",
    accent: "#E3AA38",
    muted: "#F7F1EA",
  },
  fonts: {
    display: "Nunito",
    sans: "Lato",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Lato:wght@400;700&display=swap",
  },
  layout: "shopfront",
  logoSrc: "/assets/optio-accountants/optio-logo.png",
  heroImage: "/assets/optio-accountants/hero-suburb.jpg",
  heroImageAlt: "Queenslander home with pool — Brisbane southside light",
  aboutImage: "/assets/optio-accountants/team-photo.jpg",
  aboutImageAlt: "Barry Heit, Senior Accountant",
  aboutImageCaption: "Barry Heit — Senior Accountant",
  hero: {
    eyebrow: "Tarragindi · Brisbane south",
    headline: "Suburban tax and accounting — the adviser you choose on Monash Road.",
    subheadline:
      "Optio means trusted adviser — the second-in-command you choose. Practical tax and accounting from Shop 8, 53 Monash Road, Tarragindi, covering Brisbane and South East Queensland.",
    primaryCta: "Call 07 3221 2000",
    secondaryCta: "View our services",
  },
  cta: {
    headline: "Ready for a clearer conversation about tax?",
    body: "Call the practice on Monash Road. We’ll talk through your lodging calendar, software and priorities — practical advice at a realistic cost, billed on completion.",
    buttonLabel: "Call Optio today",
  },
  about: {
    intro:
      "Optio means “chosen one” — a trusted adviser or second in command. We are a suburban tax and accounting practice on Monash Road, Tarragindi, ten minutes south of Brisbane CBD, with off-street parking.",
    paragraphs: [
      "Whether you need an individual return, company and trust lodgement, or day-to-day cloud accounting, you deal with people who know your file — not a remote call centre.",
      "We prefer Xero for online accounting and also work with MYOB and other cloud tools. Advice stays practical; fees stay realistic; work is billed on completion, with payment before ATO lodgement.",
      "This preview site is a speculative brochure redesign for discussion only. Service scope and fees are confirmed directly with the practice.",
    ],
    highlights: [
      "Shop 8, 53 Monash Road, Tarragindi QLD 4121",
      "Suburban practice covering Brisbane and SEQ",
      "Business, specialist, tax and online accounting",
      "Phone 07 3221 2000 — off-street parking",
    ],
  },
  services: [
    {
      slug: "business-services",
      title: "Business Services",
      icon: "handshake",
      summary:
        "Day-to-day support for southside owners — from bookkeeping routines to BAS and payroll — so compliance stays predictable through the year.",
      details: [
        "Bookkeeping and month-end routines",
        "BAS, GST and PAYG support",
        "Payroll and STP",
        "Practical advice for growing businesses",
      ],
    },
    {
      slug: "specialist-services",
      title: "Specialist Services",
      icon: "document",
      summary:
        "Focused help when the file is more complex — structures, SMSF, and specialist lodgement needs beyond a standard return.",
      details: [
        "Companies, partnerships and trusts",
        "SMSF support",
        "Structure and entity discussions",
        "ATO correspondence assistance",
      ],
    },
    {
      slug: "tax-income-tax-returns",
      title: "Tax / Income Tax Returns",
      icon: "calculator",
      summary:
        "Accurate lodgement for individuals, companies, partnerships, trusts and SMSF — with plain-English summaries of what you owe and why.",
      details: [
        "Individuals and sole traders",
        "Companies, partnerships and trusts",
        "SMSF returns",
        "Rental and capital gains schedules",
      ],
    },
    {
      slug: "online-accounting",
      title: "Online Accounting",
      icon: "cloud",
      summary:
        "Cloud accounting set up to stay tidy. Xero preferred; MYOB and other cloud platforms welcome.",
      details: [
        "Xero setup and ongoing support",
        "MYOB and other cloud options",
        "Bank feeds and reconciliation",
        "Training so your team can keep the file current",
      ],
    },
  ],
  seo: {
    defaultTitle: "Optio Accountants | Accountants in Tarragindi QLD",
    titleTemplate: "%s | Optio Accountants",
    defaultDescription:
      "Suburban tax and accounting on Monash Road, Tarragindi. Business services, specialist services, tax returns and online accounting for Brisbane and SEQ. Call 07 3221 2000.",
  },
  formspreeId: "xxxxxxxx",
  // No kit-generic socialProof / fake quotes — location chip used in shopfront hero instead
};

export default config;

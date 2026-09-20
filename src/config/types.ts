/**
 * Shared types for prospect preview configs.
 * Do not invent compliance claims, licences, or guarantees not supplied by the client.
 */

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  /** Optional line-icon name (document | calculator | cloud | handshake | shield | book | building | ledger) */
  icon?: string;
};

export type SiteConfig = {
  firmName: string;
  tagline: string;
  suburb: string;
  region: string;
  phone: string;
  phoneHref: string;
  email: string;
  /** Second public email (e.g. bookkeeper@) when listed on live site / pack */
  emailSecondary?: string;
  abn?: string;
  addressLine?: string;
  /** Plain-text credential chips already stated on their site — do not invent */
  credentialsLine?: string;
  /** Hours / appointment note from pack / live */
  hoursNote?: string;
  colours: {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    /** Place-first eyebrow; defaults to "Accountants in {suburb}" */
    eyebrow?: string;
  };
  cta: {
    headline: string;
    body: string;
    buttonLabel: string;
  };
  about: {
    intro: string;
    paragraphs: string[];
    highlights: string[];
  };
  services: ServiceItem[];
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
  };
  formspreeId: string;
  socialProof?: string[];
  /** Real logo image path under public/ (resolved with withBase) */
  logoSrc?: string;
  /** When true, logo includes wordmark — hide duplicate firm-name text in header */
  logoWordmark?: boolean;
  /** Hero photo for shopfront / coastal layouts */
  heroImage?: string;
  heroImageAlt?: string;
  /** About / practice photo */
  aboutImage?: string;
  aboutImageAlt?: string;
  aboutImageCaption?: string;
  /** Prospect-scoped Google fonts */
  fonts?: {
    display: string;
    sans: string;
    googleHref: string;
  };
  /**
   * Layout variant.
   * `shopfront` = Optio Monash Road (terracotta).
   * `coastal` = Suncoast Lysaght Street sunburst (orange/cobalt/sand).
   */
  layout?: 'default' | 'shopfront' | 'coastal';
  /** SMSF callout band (coastal) — spelling must be corrected vs live typos */
  smsf?: {
    headline: string;
    body: string;
    phones?: { label: string; phone: string; phoneHref: string }[];
  };
};

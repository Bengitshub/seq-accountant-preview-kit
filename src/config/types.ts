/**
 * Shared types for prospect preview configs.
 * Do not invent compliance claims, licences, or guarantees not supplied by the client.
 */

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  /** Optional line-icon name for shopfront layout (document | calculator | cloud | handshake) */
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
  abn?: string;
  addressLine?: string;
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
  /** Hero photo for shopfront layout */
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
   * Layout variant. `shopfront` = Optio Monash Road treatment
   * (photo hero, editorial services, no blur orbs / At-a-glance).
   */
  layout?: 'default' | 'shopfront';
};

/**
 * Shared types for prospect preview configs.
 * Do not invent compliance claims, licences, or guarantees not supplied by the client.
 */

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
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
};

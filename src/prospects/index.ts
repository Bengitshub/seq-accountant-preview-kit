/** Prospect slug registry for batch builds */
export const PROSPECT_SLUGS = [
  "harbour",
  "optio-accountants",
  "suncoast-accounting-bookkeeping",
  "absolute-business-solutions",
  "jorgensen-associates",
  "accounting-balance",
  "crane-crain",
  "accounting-on-me",
  "eyes-on-business"
] as const;

export type ProspectSlug = (typeof PROSPECT_SLUGS)[number];

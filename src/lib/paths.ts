/** Prefix a site-root path with Astro's configured base (for GitHub Pages nested previews). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

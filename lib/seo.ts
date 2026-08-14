// Central site config — update SITE_URL here if the domain ever changes.
export const SITE_URL = "https://tech-school.scaleindia.in";
export const SITE_NAME = "SCALE Tech School";
export const DEFAULT_TITLE =
  "SCALE Tech School | Sona Centre for Advanced Learning & Entrepreneurship";
export const DEFAULT_DESCRIPTION =
  "SCALE Tech School (Sona Centre for Advanced Learning & Entrepreneurship) offers industry-aligned diploma and certification programmes in AI, Data Science, Software Engineering, Cybersecurity, Business and more — built for career-ready graduates.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

/** Turns a possibly-relative path into an absolute, safely-encoded URL for og/twitter tags. */
export function absoluteUrl(path: string): string {
  if (!path) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Encode each path segment individually so slashes are preserved
  // but special characters like & , ( ) spaces become link-preview-safe.
  const encoded = clean
    .split("/")
    .map((seg) => (seg ? encodeURIComponent(seg) : ""))
    .join("/");
  return `${SITE_URL}${encoded}`;
}

/** Given a course slug, returns the absolute URL of its clean JPG share image. */
export function courseOgImage(slug: string): string {
  return `${SITE_URL}/images/og/${slug}.jpg`;
}

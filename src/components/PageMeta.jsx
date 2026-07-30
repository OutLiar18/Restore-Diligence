import { useEffect } from "react";
import { useLocation } from "react-router";
import { siteConfig } from "../config/site";

function upsertMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function PageMeta({
  title,
  description,
  canonicalPath,
  imagePath = siteConfig.seo.defaultShareImage,
  noIndex = false,
}) {
  const { pathname } = useLocation();
  const resolvedPath = canonicalPath ?? pathname;
  const canonicalUrl = new URL(resolvedPath, siteConfig.siteUrl).toString();
  const imageUrl = new URL(imagePath, siteConfig.siteUrl).toString();

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteConfig.companyName);
    upsertMeta("property", "og:locale", siteConfig.locale);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [canonicalUrl, description, imageUrl, noIndex, title]);

  return null;
}

export default PageMeta;

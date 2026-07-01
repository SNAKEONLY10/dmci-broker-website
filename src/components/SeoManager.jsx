import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolveSeo } from "../data/seo";

const META_SELECTORS = {
  description: { attr: "name", key: "description" },
  robots: { attr: "name", key: "robots" },
  ogTitle: { attr: "property", key: "og:title" },
  ogDescription: { attr: "property", key: "og:description" },
  ogImage: { attr: "property", key: "og:image" },
  ogUrl: { attr: "property", key: "og:url" },
  ogType: { attr: "property", key: "og:type" },
  twitterCard: { attr: "name", key: "twitter:card" },
  twitterTitle: { attr: "name", key: "twitter:title" },
  twitterDescription: { attr: "name", key: "twitter:description" },
  twitterImage: { attr: "name", key: "twitter:image" }
};

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = resolveSeo(location.pathname, location.search);
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("robots", seo.robots);
    setMeta("ogTitle", seo.title);
    setMeta("ogDescription", seo.description);
    setMeta("ogImage", seo.ogImage);
    setMeta("ogUrl", seo.canonical);
    setMeta("ogType", "website");
    setMeta("twitterCard", "summary_large_image");
    setMeta("twitterTitle", seo.title);
    setMeta("twitterDescription", seo.description);
    setMeta("twitterImage", seo.ogImage);
    setCanonical(seo.canonical);
  }, [location.pathname, location.search]);

  return null;
}

function setMeta(id, content) {
  const config = META_SELECTORS[id];
  if (!config || !content) return;
  let element = document.head.querySelector(`meta[${config.attr}="${config.key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(config.attr, config.key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

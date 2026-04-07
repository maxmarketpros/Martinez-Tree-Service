import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig } from "@/types";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    openingHoursSpecification: businessConfig.hours.structured.map((h) => {
      const dayMap: Record<string, string> = {
        Mo: "Monday",
        Tu: "Tuesday",
        We: "Wednesday",
        Th: "Thursday",
        Fr: "Friday",
        Sa: "Saturday",
        Su: "Sunday",
      };
      const allDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
      const parts = h.days.split("-");
      let days: string[];
      if (parts.length === 2) {
        const startIdx = allDays.indexOf(parts[0]);
        const endIdx = allDays.indexOf(parts[1]);
        if (startIdx !== -1 && endIdx !== -1) {
          days = allDays.slice(startIdx, endIdx + 1).map((d) => dayMap[d]);
        } else {
          days = parts.map((d) => dayMap[d] || d);
        }
      } else {
        days = parts.map((d) => dayMap[d] || d);
      }
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens: h.opens,
        closes: h.closes,
      };
    }),
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

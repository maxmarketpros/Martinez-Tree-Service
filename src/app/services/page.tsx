import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Professional tree removal, tree trimming, stump grinding, and land clearing services in Aurora, IL and the Fox Valley. Free estimates from Martinez Tree Services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Our Services"
        subtitle="Professional tree care solutions for residential and commercial properties across Aurora and the Fox Valley."
        imageKey="service-1-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not Sure Which Tree Service You Need?"
        text="Contact us for a free on site assessment. We will evaluate your trees and recommend the best approach for your property."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}

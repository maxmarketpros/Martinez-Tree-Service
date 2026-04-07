import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { contactFaqKeys } from "@/config/faqs";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: `Get in touch with our team for a free consultation. Call ${businessConfig.phone} or fill out our contact form.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Contact Us"
        subtitle="Ready to get started? Contact Martinez Tree Services for a free estimate on tree removal, trimming, stump grinding, or land clearing."
        imageKey="contact-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCta={{ label: "Get a Quote", href: "#quote" }}
        secondaryCta={{ label: "Call (503) 278-6068", href: "tel:+15032786068" }}
      />

      <QuoteSection id="quote" />

      <FAQSection
        eyebrow="Questions"
        heading="Before You Reach Out"
        subtitle="Answers to common questions about getting started."
        faqKeys={contactFaqKeys}
        bgColor="surface"
      />

      <CTASection
        heading="Prefer to Talk?"
        text={`Give us a call at ${businessConfig.phone}. We're available ${businessConfig.hours.display}.`}
        primaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />
    </>
  );
}

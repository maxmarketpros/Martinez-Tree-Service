import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "Contact us by phone or through our online form. We will schedule a convenient time to visit your property, assess the situation, and discuss your goals.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Assessment and Estimate",
    description:
      "Our team evaluates the trees, access points, and any potential hazards on site. You receive a detailed written estimate with transparent pricing before any work begins.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Professional Tree Work",
    description:
      "Our experienced crew arrives on schedule with professional grade equipment. Every job follows strict safety protocols to protect your property and everyone on site.",
    icon: "TreePine",
  },
  {
    step: 4,
    title: "Complete Site Cleanup",
    description:
      "We remove all debris, chips, and wood from your property. We do not consider the job done until your yard looks as good or better than when we arrived.",
    icon: "CheckCircle",
  },
];

import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tree Removal", href: "/services/tree-removal" },
      { label: "Tree Trimming and Pruning", href: "/services/tree-trimming-and-pruning" },
      { label: "Stump Removal", href: "/services/stump-removal" },
      { label: "Lot and Land Clearing", href: "/services/lot-and-land-clearing" },
    ],
  },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Tree Removal", href: "/services/tree-removal" },
      { label: "Tree Trimming and Pruning", href: "/services/tree-trimming-and-pruning" },
      { label: "Stump Removal", href: "/services/stump-removal" },
      { label: "Lot and Land Clearing", href: "/services/lot-and-land-clearing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

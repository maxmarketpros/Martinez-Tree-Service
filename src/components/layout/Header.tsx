"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-header">
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={180}
              height={54}
              priority
              className="h-13 w-auto sm:h-[62px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground-light transition-colors hover:text-primary-500"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 min-w-[200px] rounded-xl bg-white py-2 shadow-card-hover transition-all duration-200",
                        openDropdown === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground-light transition-colors hover:bg-surface hover:text-primary-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground-light transition-colors hover:text-primary-500"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground-light transition-colors hover:text-primary-500"
            >
              <Phone className="h-4 w-4" />
              {businessConfig.phone}
            </a>
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-[60] p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-[55] overflow-y-auto border-t border-border bg-white sm:top-20 lg:hidden">
          <div className="flex flex-col gap-1 p-6">
            {mainNav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-base text-muted transition-colors hover:text-primary-500"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-foreground transition-colors hover:text-primary-500"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <hr className="my-4 border-border" />

            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-2 py-3 text-lg font-medium text-foreground"
            >
              <Phone className="h-5 w-5 text-primary-500" />
              {businessConfig.phone}
            </a>

            <Button href="/contact" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

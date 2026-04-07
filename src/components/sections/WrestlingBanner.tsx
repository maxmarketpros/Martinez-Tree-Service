import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function WrestlingBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-12 md:py-16">
      {/* Subtle diagonal accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rotate-45 rounded-3xl bg-secondary-500" />
        <div className="absolute -left-10 -bottom-10 h-60 w-60 rotate-12 rounded-3xl bg-secondary-500" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12 lg:gap-16">
          {/* Wrestling Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/martinez-wrestling.webp"
              alt="Martinez Fox Valley Wrestling Youth Organization logo"
              width={280}
              height={248}
              className="h-auto w-48 drop-shadow-lg md:w-56 lg:w-64"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-400">
              Proudly Supporting Our Community
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Martinez Fox Valley Wrestling<br />
              Youth Organization
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
              Building strong athletes and stronger character in the Fox Valley.
              A portion of every project supports local youth wrestling programs
              in our community.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

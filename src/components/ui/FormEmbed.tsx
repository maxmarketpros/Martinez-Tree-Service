"use client";

import { useEffect } from "react";
import { FileText } from "lucide-react";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

interface FormEmbedProps {
  className?: string;
  height?: string;
}

export function FormEmbed({ className, height }: FormEmbedProps) {
  const embedUrl = businessConfig.formEmbedUrl;
  const embedHeight = height || businessConfig.formEmbedHeight;

  useEffect(() => {
    if (!embedUrl) return;
    const id = "ghl-form-embed-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [embedUrl]);

  if (embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title="Request a quote"
        className={cn("w-full border-0 rounded-xl", className)}
        style={{ height: embedHeight }}
        loading="lazy"
        id="inline-3adWwbTm0kEVWbgn2itC"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="WebSite Form Template"
        data-height="695"
        data-layout-iframe-id="inline-3adWwbTm0kEVWbgn2itC"
        data-form-id="3adWwbTm0kEVWbgn2itC"
      />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-surface",
        className
      )}
      style={{ height: embedHeight }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        <FileText className="h-8 w-8 text-primary-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">
          Form Embed Placeholder
        </p>
        <p className="mt-1 max-w-xs text-xs text-muted">
          Set <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">formEmbedUrl</code> in{" "}
          <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">business.ts</code> to
          display your booking or quote form here.
        </p>
      </div>
    </div>
  );
}

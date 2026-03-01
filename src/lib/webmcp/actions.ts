import { baseURL, mailchimp, person, socialSharing } from "@/resources";

export type SharePlatform = "x" | "linkedin" | "email" | "copy";

export type WebMcpActionPayload = {
  kind: "open_url" | "copyable_link" | "submit_form";
  label: string;
  url?: string;
  method?: "POST";
  fields?: Record<string, string>;
  message?: string;
};

function normalizeUrl(url: string) {
  if (/^https?:\/\//.test(url)) {
    return url;
  }

  return new URL(url, baseURL).toString();
}

export function buildBookCallAction(): WebMcpActionPayload {
  return {
    kind: "open_url",
    label: "Book a Call",
    url: "https://cal.com/ryan-lisse/30min",
    message: "Open Ryan's public booking page.",
  };
}

export function buildInquiryAction(input?: {
  subject?: string;
  contextUrl?: string;
  message?: string;
}): WebMcpActionPayload {
  const subject = input?.subject?.trim() || "Inquiry from agent-assisted visitor";
  const contextUrl = input?.contextUrl?.trim();
  const lines = [
    "Hi Ryan,",
    "",
    input?.message?.trim() || "I'd like to discuss a potential engagement.",
  ];

  if (contextUrl) {
    lines.push("", `Context: ${normalizeUrl(contextUrl)}`);
  }

  return {
    kind: "open_url",
    label: "Start Inquiry",
    url: `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`,
    message: "Open a prefilled inquiry email.",
  };
}

export function getEnabledSharePlatforms(): SharePlatform[] {
  const enabled: SharePlatform[] = [];

  if (socialSharing.platforms.x) enabled.push("x");
  if (socialSharing.platforms.linkedin) enabled.push("linkedin");
  if (socialSharing.platforms.email) enabled.push("email");
  if (socialSharing.platforms.copyLink) enabled.push("copy");

  return enabled;
}

export function buildShareAction(input: {
  url: string;
  title?: string;
  platform: SharePlatform;
}): WebMcpActionPayload {
  const url = normalizeUrl(input.url);
  const title = input.title?.trim() || "Ryan Lisse";

  switch (input.platform) {
    case "x":
      return {
        kind: "open_url",
        label: "Share on X",
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      };
    case "linkedin":
      return {
        kind: "open_url",
        label: "Share on LinkedIn",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      };
    case "email":
      return {
        kind: "open_url",
        label: "Share by Email",
        url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check this out: ${url}`)}`,
      };
    case "copy":
      return {
        kind: "copyable_link",
        label: "Copy Link",
        url,
        message: "Copy or reuse this canonical link.",
      };
  }
}

export function buildNewsletterAction(email: string): WebMcpActionPayload {
  return {
    kind: "submit_form",
    label: "Subscribe to Newsletter",
    url: mailchimp.action,
    method: "POST",
    fields: {
      EMAIL: email,
      "group[3492][1]": "",
      "b_c1a5a210340eb6c7bff33b2ba_0462d244aa": "",
    },
    message: "Submit the public newsletter signup form.",
  };
}

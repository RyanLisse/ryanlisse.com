import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/resources", () => ({
  baseURL: "https://ryanlisse.com",
  mailchimp: {
    action: "https://newsletter.example.com/subscribe",
  },
  person: {
    email: "ryan@ryanlisse.com",
  },
  socialSharing: {
    platforms: {
      x: true,
      linkedin: true,
      facebook: false,
      pinterest: false,
      whatsapp: false,
      reddit: false,
      telegram: false,
      email: true,
      copyLink: true,
    },
  },
}));

import {
  buildBookCallAction,
  buildInquiryAction,
  buildShareAction,
  getEnabledSharePlatforms,
} from "./actions";

describe("webmcp actions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("builds the booking action", () => {
    expect(buildBookCallAction()).toMatchObject({
      kind: "open_url",
      url: "https://cal.com/ryan-lisse/30min",
    });
  });

  it("builds a prefilled inquiry mailto URL", () => {
    const action = buildInquiryAction({
      subject: "Need help shipping agents",
      contextUrl: "/services",
    });

    expect(action.kind).toBe("open_url");
    expect(action.url).toContain("mailto:");
    expect(action.url).toContain(encodeURIComponent("Need help shipping agents"));
    expect(action.url).toContain(encodeURIComponent("https://ryanlisse.com/services"));
  });

  it("returns configured share platforms", () => {
    expect(getEnabledSharePlatforms()).toEqual(["x", "linkedin", "email", "copy"]);
  });

  it("creates copyable share actions", () => {
    expect(
      buildShareAction({
        platform: "copy",
        url: "/blog/new-software-stack",
      }),
    ).toMatchObject({
      kind: "copyable_link",
      url: "https://ryanlisse.com/blog/new-software-stack",
    });
  });
});

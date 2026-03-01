import { describe, expect, it, vi } from "vitest";

vi.mock("@/resources", () => ({
  mailchimp: {
    action: "",
  },
  newsletter: {
    display: false,
  },
}));

import { isWebMcpEnabled, isNewsletterActionAvailable } from "./guards";

describe("webmcp guards", () => {
  it("enables webmcp by default", () => {
    delete process.env.NEXT_PUBLIC_ENABLE_WEBMCP;
    expect(isWebMcpEnabled()).toBe(true);
  });

  it("disables webmcp when explicitly turned off", () => {
    process.env.NEXT_PUBLIC_ENABLE_WEBMCP = "false";
    expect(isWebMcpEnabled()).toBe(false);
    delete process.env.NEXT_PUBLIC_ENABLE_WEBMCP;
  });

  it("omits newsletter actions when newsletter is disabled", () => {
    expect(isNewsletterActionAvailable()).toBe(false);
  });
});

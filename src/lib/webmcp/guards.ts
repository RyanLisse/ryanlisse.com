import { mailchimp } from "@/resources";
import { newsletter } from "@/resources";

export function isWebMcpEnabled() {
  return process.env.NEXT_PUBLIC_ENABLE_WEBMCP !== "false";
}

export function isNewsletterActionAvailable() {
  return newsletter.display && mailchimp.action.trim().length > 0;
}

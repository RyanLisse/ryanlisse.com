import { getPosts } from "@/utils/utils";
import {
  about,
  baseURL,
  blog,
  home,
  person,
  routes,
  services,
  social,
  work,
} from "@/resources";
import { serviceTiers } from "@/resources/servicesData";
import { getEnabledSharePlatforms } from "@/lib/webmcp/actions";
import { isNewsletterActionAvailable, isWebMcpEnabled } from "@/lib/webmcp/guards";

export type WebMcpCatalog = {
  enabled: boolean;
  generatedAt: string;
  routes: Array<{
    path: string;
    label: string;
    title: string;
    description: string;
  }>;
  profile: {
    name: string;
    role: string;
    email: string;
    location: string;
    languages: string[];
    intro: string;
    aboutPath: string;
    bookingUrl?: string;
    social: Array<{
      name: string;
      url: string;
      essential: boolean;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    price: string;
    description: string;
    deliverables: string[];
    url: string;
  }>;
  projects: Array<{
    slug: string;
    title: string;
    summary: string;
    publishedAt: string;
    tag: string | string[];
    url: string;
    link?: string;
  }>;
  posts: Array<{
    slug: string;
    title: string;
    subtitle?: string;
    summary: string;
    publishedAt: string;
    tag: string | string[];
    url: string;
  }>;
  contactMethods: Array<{
    id: string;
    label: string;
    type: "booking" | "email" | "social";
    url: string;
    description: string;
  }>;
  enabledActions: string[];
  enabledSharePlatforms: string[];
};

function buildRoutes() {
  const pages = [
    home,
    about,
    services,
    work,
    blog,
  ];

  return pages
    .filter((page) => routes[page.path as `/${string}`] !== false)
    .map((page) => ({
      path: page.path,
      label: page.label,
      title: page.title,
      description: page.description,
    }));
}

function buildContactMethods() {
  const contactMethods = [
    {
      id: "book-call",
      label: "Book a Call",
      type: "booking" as const,
      url: about.calendar.link,
      description: "Public Cal.com booking link for scheduling a call.",
    },
    {
      id: "email",
      label: "Email Ryan",
      type: "email" as const,
      url: `mailto:${person.email}`,
      description: "Direct email contact.",
    },
  ];

  const socialMethods = social.map((item) => ({
    id: item.name.toLowerCase(),
    label: item.name,
    type: "social" as const,
    url: item.link,
    description: `Public ${item.name} profile or contact link.`,
  }));

  return [...contactMethods, ...socialMethods];
}

function buildProjects() {
  return getPosts(["src", "app", "work", "projects"]).map((project) => ({
    slug: project.slug,
    title: project.metadata.title,
    summary: project.metadata.summary,
    publishedAt: project.metadata.publishedAt,
    tag: project.metadata.tag || [],
    url: `${baseURL}${work.path}/${project.slug}`,
    link: project.metadata.link,
  }));
}

function buildPosts() {
  return getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    subtitle: post.metadata.subtitle,
    summary: post.metadata.summary,
    publishedAt: post.metadata.publishedAt,
    tag: post.metadata.tag || [],
    url: `${baseURL}${blog.path}/${post.slug}`,
  }));
}

export function getWebMcpCatalog(): WebMcpCatalog {
  const enabledActions = ["book_call", "start_inquiry", "share_content"];

  if (isNewsletterActionAvailable()) {
    enabledActions.push("subscribe_newsletter");
  }

  return {
    enabled: isWebMcpEnabled(),
    generatedAt: new Date().toISOString(),
    routes: buildRoutes(),
    profile: {
      name: person.name,
      role: person.role,
      email: person.email,
      location: person.location,
      languages: person.languages ?? [],
      intro: about.description,
      aboutPath: `${baseURL}${about.path}`,
      bookingUrl: about.calendar.display ? about.calendar.link : undefined,
      social: social.map((item) => ({
        name: item.name,
        url: item.link,
        essential: Boolean(item.essential),
      })),
    },
    services: serviceTiers.map((tier) => ({
      id: tier.id,
      title: tier.title,
      price: tier.price,
      description: tier.description,
      deliverables: tier.deliverables,
      url: `${baseURL}${services.path}`,
    })),
    projects: buildProjects(),
    posts: buildPosts(),
    contactMethods: buildContactMethods(),
    enabledActions,
    enabledSharePlatforms: getEnabledSharePlatforms(),
  };
}

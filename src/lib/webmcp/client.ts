import type {} from "@mcp-b/webmcp-types";
import type { WebMcpCatalog } from "@/lib/webmcp/catalog";
import {
  buildBookCallAction,
  buildInquiryAction,
  buildNewsletterAction,
  buildShareAction,
  type SharePlatform,
} from "@/lib/webmcp/actions";
import { isNewsletterActionAvailable } from "@/lib/webmcp/guards";

const emptyObjectSchema = {
  type: "object",
  properties: {},
  additionalProperties: false,
} as const;

const slugSchema = {
  type: "object",
  properties: {
    slug: { type: "string", minLength: 1 },
  },
  required: ["slug"],
  additionalProperties: false,
} as const;

const shareSchema = {
  type: "object",
  properties: {
    url: { type: "string", minLength: 1 },
    title: { type: "string" },
    platform: {
      type: "string",
      enum: ["x", "linkedin", "email", "copy"],
    },
  },
  required: ["url", "platform"],
  additionalProperties: false,
} as const;

const inquirySchema = {
  type: "object",
  properties: {
    subject: { type: "string" },
    contextUrl: { type: "string" },
    message: { type: "string" },
  },
  additionalProperties: false,
} as const;

const newsletterSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
  },
  required: ["email"],
  additionalProperties: false,
} as const;

function textBlock(text: string) {
  return [{ type: "text" as const, text }];
}

function notFound(kind: string, slug: string) {
  return {
    content: textBlock(`${kind} "${slug}" was not found.`),
    structuredContent: { found: false, slug },
  };
}

export function createWebMcpTools(catalog: WebMcpCatalog) {
  const projectMap = new Map(catalog.projects.map((project) => [project.slug, project]));
  const postMap = new Map(catalog.posts.map((post) => [post.slug, post]));

  const tools: Array<{
    name: string;
    description: string;
    inputSchema: object;
    execute: (args?: any) => Promise<{
      content: Array<{ type: "text"; text: string }>;
      structuredContent: unknown;
    }>;
  }> = [
    {
      name: "list_routes",
      description: "List the public routes and page metadata for ryanlisse.com.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`Found ${catalog.routes.length} public routes.`),
          structuredContent: { routes: catalog.routes },
        };
      },
    },
    {
      name: "get_profile",
      description: "Get Ryan Lisse's profile, about summary, and contact context.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`${catalog.profile.name} is available for fractional AI engineering work.`),
          structuredContent: catalog.profile,
        };
      },
    },
    {
      name: "list_services",
      description: "List public service offerings, pricing ranges, and deliverables.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`Found ${catalog.services.length} service offers.`),
          structuredContent: { services: catalog.services },
        };
      },
    },
    {
      name: "list_projects",
      description: "List public portfolio projects with summaries and canonical URLs.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`Found ${catalog.projects.length} public projects.`),
          structuredContent: { projects: catalog.projects },
        };
      },
    },
    {
      name: "get_project",
      description: "Get a specific project by slug.",
      inputSchema: slugSchema,
      async execute(args: { slug: string }) {
        const project = projectMap.get(args.slug);

        if (!project) {
          return notFound("Project", args.slug);
        }

        return {
          content: textBlock(`Loaded project ${project.title}.`),
          structuredContent: project,
        };
      },
    },
    {
      name: "list_posts",
      description: "List public blog posts with summaries and canonical URLs.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`Found ${catalog.posts.length} public posts.`),
          structuredContent: { posts: catalog.posts },
        };
      },
    },
    {
      name: "get_post",
      description: "Get a specific blog post by slug.",
      inputSchema: slugSchema,
      async execute(args: { slug: string }) {
        const post = postMap.get(args.slug);

        if (!post) {
          return notFound("Post", args.slug);
        }

        return {
          content: textBlock(`Loaded post ${post.title}.`),
          structuredContent: post,
        };
      },
    },
    {
      name: "list_contact_methods",
      description: "List public contact, booking, and social links for the site.",
      inputSchema: emptyObjectSchema,
      async execute() {
        return {
          content: textBlock(`Found ${catalog.contactMethods.length} public contact methods.`),
          structuredContent: { contactMethods: catalog.contactMethods },
        };
      },
    },
    {
      name: "book_call",
      description: "Open Ryan's public booking page.",
      inputSchema: emptyObjectSchema,
      async execute() {
        const action = buildBookCallAction();
        return {
          content: textBlock(action.message || "Open the booking page."),
          structuredContent: action,
        };
      },
    },
    {
      name: "start_inquiry",
      description: "Open a prefilled inquiry email for discussing a potential engagement.",
      inputSchema: inquirySchema,
      async execute(args: { subject?: string; contextUrl?: string; message?: string }) {
        const action = buildInquiryAction(args);
        return {
          content: textBlock(action.message || "Open a prefilled inquiry email."),
          structuredContent: action,
        };
      },
    },
    {
      name: "share_content",
      description: "Create a public share or copy action for a site URL.",
      inputSchema: shareSchema,
      async execute(args: { url: string; title?: string; platform: SharePlatform }) {
        const action = buildShareAction(args);
        return {
          content: textBlock(action.message || `${action.label} is ready.`),
          structuredContent: action,
        };
      },
    },
  ];

  if (isNewsletterActionAvailable()) {
    tools.push({
      name: "subscribe_newsletter",
      description: "Submit the public newsletter signup form.",
      inputSchema: newsletterSchema,
      async execute(args: { email: string }) {
        const action = buildNewsletterAction(args.email);
        return {
          content: textBlock(action.message || "Submit the newsletter signup form."),
          structuredContent: action,
        };
      },
    });
  }

  return tools;
}

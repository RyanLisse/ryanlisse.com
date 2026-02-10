import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ryan",
  lastName: "Lisse",
  name: "Ryan Lisse",
  role: "Software Engineer & AI Builder",
  avatar: "/images/avatar.jpg", // TODO: Replace with actual avatar
  email: "ryan@ryanlisse.com",
  location: "Europe/Amsterdam", // Almere, Netherlands
  languages: ["English", "Dutch"],
};

// Newsletter disabled for now
const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI, software engineering, and building intelligent systems</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RyanLisse",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ryanlisse",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Software Engineer & AI Builder`,
  description: `Portfolio of ${person.name} – Building intelligent systems at the intersection of AI and software engineering`,
  headline: <>Building intelligent systems at the intersection of AI and software engineering</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Quorum</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/quorum",
  },
  subline: (
    <>
      I'm Ryan, a software engineer based in the <Text as="span" size="xl" weight="strong">Netherlands</Text>. I build AI agents, 
      developer tools in <Text as="span" size="xl" weight="strong">Swift</Text> and <Text as="span" size="xl" weight="strong">TypeScript</Text>, 
      and think in systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Almere, Netherlands`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ryanlisse", // TODO: Replace with actual calendar link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ryan is a builder and systems thinker based in the Netherlands. Passionate about AI agents, 
        developer tools, and elegant software architecture. He specializes in creating CLI tools 
        and MCP servers that bridge the gap between AI capabilities and practical applications.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent", // TODO: Replace with actual company
        timeframe: "2023 - Present",
        role: "Software Engineer & AI Builder",
        achievements: [
          <>
            Building AI-powered developer tools and CLI applications using Swift, TypeScript, and the Model Context Protocol (MCP).
          </>,
          <>
            Created multiple open-source projects including Quorum (LLM council system), Briefly (AI briefings), and various MCP servers.
          </>,
        ],
        images: [],
      },
      {
        company: "TODO: Previous Company", // TODO: Replace with actual work history
        timeframe: "TODO: Dates",
        role: "TODO: Role",
        achievements: [
          <>
            TODO: Ryan to fill in actual work experience and achievements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // TODO: Enable and fill in if desired
    title: "Education",
    institutions: [
      {
        name: "TODO: Institution",
        description: <>TODO: Degree/certification details.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Swift & Apple Ecosystem",
        description: (
          <>Building native macOS/iOS applications and CLI tools with Swift, SwiftUI, EventKit, and Contacts frameworks.</>
        ),
        tags: [
          {
            name: "Swift",
            icon: "swift",
          },
          {
            name: "SwiftUI",
            icon: "swiftui",
          },
        ],
        images: [],
      },
      {
        title: "TypeScript & Web Development",
        description: (
          <>Full-stack development with TypeScript, Next.js, React, and Node.js. Building modern web applications and APIs.</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>Working with LLMs, building AI agents, MCP servers, and integrating AI capabilities into developer tools.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AI/ML",
            icon: "ai",
          },
        ],
        images: [],
      },
      {
        title: "Model Context Protocol (MCP)",
        description: (
          <>Creating MCP servers that expose native capabilities to AI assistants, enabling seamless human-AI collaboration.</>
        ),
        tags: [
          {
            name: "MCP",
            icon: "mcp",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, Swift, and software engineering...",
  description: `Read ${person.name}'s thoughts on building intelligent systems`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI tools, CLI applications, and MCP servers by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
};

// Gallery disabled for now
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };

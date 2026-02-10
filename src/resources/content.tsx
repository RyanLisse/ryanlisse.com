import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ryan",
  lastName: "Lisse",
  name: "Ryan Lisse",
  role: "AI Agentic Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ryan@ryanlisse.com",
  location: "Europe/Amsterdam",
  languages: ["English", "Dutch"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI agents, agentic systems, and building intelligent software</>,
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
  title: `${person.name} – AI Agentic Software Engineer`,
  description: `Portfolio of ${person.name} – Specializing in agentic systems, LLM workflows, and generative AI applications`,
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
      I'm Ryan, an AI engineer based in the{" "}
      <Text as="span" size="xl" weight="strong">Netherlands</Text>. I build agentic systems,
      LLM workflows, and developer tools in{" "}
      <Text as="span" size="xl" weight="strong">Swift</Text>,{" "}
      <Text as="span" size="xl" weight="strong">TypeScript</Text>, and{" "}
      <Text as="span" size="xl" weight="strong">Python</Text>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name} – AI Agentic Software Engineer & Technical Community Leader based in Almere, Netherlands`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ryan-lisse/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ryan specializes in agentic systems, LLM workflows, and generative AI applications.
        He builds production AI features, creates developer tools with Swift and TypeScript,
        and leads technical communities in developer ecosystems. His work focuses on bridging
        AI capabilities with practical applications through MCP servers, CLI tools, and
        multi-model orchestration systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "HGG Profiling Specialists",
        timeframe: "June 2024 - Present",
        role: "AI Software Engineer",
        achievements: [
          <>
            Architected and deployed AI features across production applications, integrating LLM capabilities that reduced manual processing time by 60%.
          </>,
          <>
            Built experimentation framework accelerating AI iteration cycles from weeks to days. Established AI specialist network connecting teams with research patterns.
          </>,
        ],
        images: [],
      },
      {
        company: "Polygon Labs",
        timeframe: "November 2022 - Present",
        role: "Guild Lead",
        achievements: [
          <>
            Built Amsterdam developer community to 500+ active members. Organized 12+ technical workshops and hackathons.
          </>,
          <>
            Created technical content strategy reaching 50K+ developers. Achieved 40% increase in developer onboarding and 3x YoY engagement growth.
          </>,
        ],
        images: [],
      },
      {
        company: "W3B Lab Amsterdam",
        timeframe: "October 2022 - Present",
        role: "Developer Community Lead (Core Team)",
        achievements: [
          <>
            Led onboarding for 200+ developers transitioning to web3, reducing time-to-first-deployment by 50%.
          </>,
          <>
            Facilitated 8+ hackathons producing 30+ production-ready applications. Built developer resource hub with tools and documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "SALT",
        timeframe: "May 2023 - June 2024",
        role: "Full-stack Developer (Intensive Program)",
        achievements: [
          <>
            Selected from 1000+ applicants (3% acceptance rate). Shipped 5+ full-stack applications using React, Node.js, Express, and PostgreSQL.
          </>,
          <>
            Practiced TDD and Agile methodologies with 95%+ test coverage across Java, JavaScript, React, Node.js, GraphQL, and Redux.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Anthropic — Claude Code in Action",
        description: <>Advanced AI coding agent certification. July 2025.</>,
      },
      {
        name: "Hugging Face — AI Agents Fundamentals",
        description: <>AI agent architecture and implementation. February 2025.</>,
      },
      {
        name: "SALT — Intensive Full-stack Java Developer Program",
        description: <>Full-stack development with Java, React, Node.js. 2023–2024.</>,
      },
      {
        name: "Maven — Systematically Improving RAG Applications",
        description: <>Advanced retrieval-augmented generation techniques. August 2024.</>,
      },
      {
        name: "Maven — Mastering LLMs Conference",
        description: <>Large language model development and deployment. June 2024.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI & Agentic Systems",
        description: (
          <>Building production AI features with LangChain, OpenAI, Anthropic Claude, and Hugging Face. Specializing in multi-agent orchestration, prompt engineering, and LLM fine-tuning.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "AI/ML", icon: "ai" },
        ],
        images: [],
      },
      {
        title: "TypeScript & Full-stack Development",
        description: (
          <>Full-stack development with TypeScript, Next.js, React, Node.js, Prisma, and GraphQL. Building modern web applications, REST APIs, and real-time systems.</>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
        ],
        images: [],
      },
      {
        title: "Swift & Apple Ecosystem",
        description: (
          <>Building native macOS/iOS CLI tools and applications with Swift, SwiftUI, EventKit, and Contacts frameworks. Creating MCP servers and TUI interfaces.</>
        ),
        tags: [
          { name: "Swift", icon: "swift" },
          { name: "SwiftUI", icon: "swiftui" },
        ],
        images: [],
      },
      {
        title: "Model Context Protocol (MCP)",
        description: (
          <>Creating MCP servers that expose native capabilities to AI assistants, enabling seamless human-AI collaboration across multiple platforms.</>
        ),
        tags: [
          { name: "MCP", icon: "mcp" },
        ],
        images: [],
      },
      {
        title: "Developer Community & Leadership",
        description: (
          <>Built communities of 500+ developers. Organized 20+ workshops and hackathons. Created content reaching 50K+ developers. Technical strategy and cross-functional collaboration.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI agents, Swift, and software engineering...",
  description: `Read ${person.name}'s thoughts on building intelligent systems`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI agents, CLI tools, MCP servers, and agentic systems by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };

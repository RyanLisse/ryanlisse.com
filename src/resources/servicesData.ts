export type ServiceTier = {
  id: string;
  icon: string;
  title: string;
  price: string;
  description: string;
  deliverables: string[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export const serviceTiers: ServiceTier[] = [
  {
    id: "ai-kickstart",
    icon: "🚀",
    title: "AI Kickstart",
    price: "$7-10K / week",
    description:
      "An intensive build sprint for teams that need to validate an AI product direction fast.",
    deliverables: [
      "Stack audit and implementation plan",
      "Working prototype or internal tool shipped in five days",
      "Handoff notes, architecture guidance, and next-step roadmap",
    ],
  },
  {
    id: "fractional-ai-engineer",
    icon: "🤝",
    title: "Fractional AI Engineer",
    price: "$5-10K / month",
    description:
      "Hands-on weekly engineering support for shipping agents, copilots, and automation into real products.",
    deliverables: [
      "8-15 hours per week of implementation and architecture",
      "Code review, pairing, and unblock support for your team",
      "Production delivery across TypeScript, Swift, and Python systems",
    ],
  },
  {
    id: "agent-architecture-review",
    icon: "🔍",
    title: "Agent Architecture Review",
    price: "$2-5K / one-off",
    description:
      "A focused technical audit for companies that already have AI work in motion but need sharper architecture.",
    deliverables: [
      "Deep review of agent loops, prompts, tools, and evaluation paths",
      "Prioritized written report with risks and recommendations",
      "Implementation roadmap your team can execute immediately",
    ],
  },
];

export const serviceFaqItems: ServiceFaqItem[] = [
  {
    question: "Who is this for?",
    answer:
      "Series A teams, technical founders, and small product orgs that need senior AI implementation without hiring a full-time AI lead yet.",
  },
  {
    question: "What do you actually build?",
    answer:
      "Internal copilots, workflow automation, multi-agent systems, retrieval pipelines, and production AI features that integrate with your current stack.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a call, walk me through the product and constraints, and I will recommend the best engagement model before any work begins.",
  },
];

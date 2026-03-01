import {
  Button,
  Column,
  Heading,
  Line,
  Meta,
  Row,
  Schema,
  Text,
  RevealFx,
} from "@once-ui-system/core";
import { about, baseURL, person, services } from "@/resources";

const serviceTiers = [
  {
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

const faqItems = [
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

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL,
    path: services.path,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
  });
}

export default function ServicesPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={services.path}
        title={services.title}
        description={services.description}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx translateY="4">
        <Column gap="24">
          <Text variant="label-strong-m" onBackground="brand-weak">
            Fractional AI services
          </Text>
          <Heading variant="display-strong-l">
            Built for teams that need working AI systems, not a six-month advisory cycle.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            style={{ maxWidth: "44rem", lineHeight: 1.7 }}
          >
            I work directly with founders and engineering teams to design, build, and ship
            production AI features. Pick the engagement that matches your urgency, internal
            capacity, and level of technical ambiguity.
          </Text>
          <Row gap="12" wrap>
            <Button href="https://cal.com/ryan-lisse/30min" variant="primary" size="m" arrowIcon>
              Book a Call
            </Button>
            <Button href="/work" variant="secondary" size="m" arrowIcon>
              See Relevant Work
            </Button>
          </Row>
        </Column>
      </RevealFx>

      <Column gap="20">
        {serviceTiers.map((tier, index) => (
          <RevealFx key={tier.title} translateY={6} delay={0.1 + index * 0.1}>
            <Column
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              radius="xl"
              padding="xl"
              gap="20"
            >
              <Row horizontal="between" vertical="start" s={{ direction: "column", gap: "16" }}>
                <Column gap="8">
                  <Text variant="heading-strong-l">
                    {tier.icon} {tier.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="brand-weak">
                    {tier.price}
                  </Text>
                </Column>
                <Button href="https://cal.com/ryan-lisse/30min" variant="tertiary" size="s">
                  Inquire
                </Button>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {tier.description}
              </Text>
              <Column as="ul" gap="12" paddingLeft="20">
                {tier.deliverables.map((deliverable) => (
                  <Text as="li" variant="body-default-m" key={deliverable}>
                    {deliverable}
                  </Text>
                ))}
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>

      <RevealFx translateY={6} delay={0.5}>
        <Column gap="24" paddingBottom="l">
          <Line />
          <Heading as="h2" variant="heading-strong-xl">
            FAQ
          </Heading>
          <Column gap="16">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>
                  <Text as="span" variant="heading-strong-m">
                    {item.question}
                  </Text>
                </summary>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  style={{ marginTop: "0.75rem", lineHeight: 1.7 }}
                >
                  {item.answer}
                </Text>
              </details>
            ))}
          </Column>
        </Column>
      </RevealFx>
    </Column>
  );
}

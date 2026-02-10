import {
  Avatar,
  Button,
  Column,
  Heading,
  Meta,
  Row,
  Schema,
  Text,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header with avatars */}
      <RevealFx translateY="4">
        <Column horizontal="center" gap="l" paddingBottom="l">
          <Row gap="20" horizontal="center" vertical="center">
            <Avatar src="/images/avatar.jpg" size="l" />
            <Avatar src="/images/avatar-anime.png" size="l" />
          </Row>
          <Heading variant="display-strong-l" align="center">
            {work.title}
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "32rem" }}
          >
            AI agents, CLI tools, MCP servers, and agentic systems.
          </Text>
          <Row gap="12" horizontal="center">
            <Button
              href="/Ryan-Lisse-Resume.pdf"
              variant="secondary"
              size="s"
              prefixIcon="download"
            >
              Download Resume
            </Button>
            <Button
              href={about.calendar?.link || "#"}
              variant="tertiary"
              size="s"
              prefixIcon="calendar"
            >
              Book a Call
            </Button>
          </Row>
        </Column>
      </RevealFx>

      <Projects />
    </Column>
  );
}

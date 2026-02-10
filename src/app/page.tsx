import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Flex,
  Icon,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Decorative Layers */}
      <div className="noise-overlay" />
      <div className="dots-pattern" />
      <div className="structural-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>

      <Column fillWidth style={{ position: "relative", zIndex: 10 }}>
        {/* Hero Section */}
        <Flex
          fillWidth
          style={{
            minHeight: "calc(100vh - 80px)",
            maxWidth: "1600px",
            margin: "0 auto",
          }}
          s={{ direction: "column" }}
        >
          {/* Left Column */}
          <Column
            style={{
              flex: 7,
              borderRight: "1px solid var(--neutral-alpha-weak)",
              position: "relative",
              overflow: "hidden",
            }}
            padding="l"
            vertical="center"
          >
            <div className="hero-glow" />

            {/* Status Indicator */}
            <RevealFx translateY="4">
              <Row gap="12" vertical="center" style={{ marginBottom: "3rem" }}>
                <div className="status-pulse" />
                <span
                  className="label-caps"
                  style={{ color: "var(--status-green)" }}
                >
                  Available for work
                </span>
              </Row>
            </RevealFx>

            {/* Massive Heading */}
            <RevealFx translateY="8" delay={0.1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  lineHeight: 0.85,
                  userSelect: "none",
                }}
              >
                <span
                  className="stroke-text"
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(60px, 10vw, 140px)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  BUILDING
                </span>
                <span
                  className="serif-italic"
                  style={{
                    fontSize: "clamp(60px, 10vw, 140px)",
                    color: "var(--neutral-on-background-strong)",
                    marginTop: "-0.1em",
                  }}
                >
                  intelligent
                </span>
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(60px, 10vw, 140px)",
                    letterSpacing: "-0.04em",
                    color: "var(--neutral-on-background-strong)",
                    marginTop: "-0.1em",
                  }}
                >
                  SYSTEMS
                </span>
              </div>
            </RevealFx>

            {/* Technical Readouts */}
            <RevealFx translateY="8" delay={0.3}>
              <Row
                gap="xl"
                style={{ marginTop: "4rem" }}
                s={{ direction: "column", gap: "var(--static-space-16)" }}
              >
                <Column gap="8">
                  <span
                    className="label-caps"
                    style={{ color: "var(--neutral-on-background-weak)" }}
                  >
                    Focus
                  </span>
                  <Text
                    variant="body-default-xs"
                    style={{
                      fontFamily: "var(--font-code)",
                      textTransform: "uppercase",
                    }}
                    onBackground="neutral-medium"
                  >
                    Agentic Systems / LLM Workflows
                  </Text>
                </Column>
                <Column gap="8">
                  <span
                    className="label-caps"
                    style={{ color: "var(--neutral-on-background-weak)" }}
                  >
                    Location
                  </span>
                  <Text
                    variant="body-default-xs"
                    style={{
                      fontFamily: "var(--font-code)",
                      textTransform: "uppercase",
                    }}
                    onBackground="neutral-medium"
                  >
                    Almere, Netherlands
                  </Text>
                </Column>
                <Column gap="8">
                  <span
                    className="label-caps"
                    style={{ color: "var(--neutral-on-background-weak)" }}
                  >
                    Stack
                  </span>
                  <Text
                    variant="body-default-xs"
                    style={{
                      fontFamily: "var(--font-code)",
                      textTransform: "uppercase",
                    }}
                    onBackground="neutral-medium"
                  >
                    Swift / TypeScript / Python / Next.js
                  </Text>
                </Column>
              </Row>
            </RevealFx>

            {/* CTA Button */}
            <RevealFx translateY="8" delay={0.5}>
              <Row style={{ marginTop: "5rem" }}>
                <Button
                  id="hero-cta"
                  href="/work"
                  variant="primary"
                  size="l"
                  arrowIcon
                >
                  Explore Work
                </Button>
              </Row>
            </RevealFx>
          </Column>

          {/* Right Column — Hero Image Area */}
          <Column
            style={{
              flex: 5,
              position: "relative",
              background: "var(--neutral-alpha-weak)",
              overflow: "hidden",
              minHeight: "500px",
            }}
            s={{ style: { minHeight: "300px" } }}
          >
            <div
              style={{
                position: "absolute",
                inset: "20px",
                border: "1px solid var(--neutral-alpha-weak)",
                zIndex: 1,
              }}
            />
            {about.avatar.display && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4rem",
                }}
              >
                <Avatar src={person.avatar} size="xl" />
              </div>
            )}

            {/* Glass Card Overlay */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "3rem",
                left: "-1rem",
                width: "16rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                zIndex: 20,
              }}
            >
              <Row horizontal="between" vertical="center">
                <span
                  className="label-caps"
                  style={{
                    fontSize: "8px",
                    color: "var(--neutral-on-background-weak)",
                  }}
                >
                  System Status
                </span>
                <span
                  style={{
                    fontSize: "8px",
                    fontFamily: "var(--font-code)",
                    color: "var(--cyan-accent, #06B6D4)",
                  }}
                >
                  v2.0.4
                </span>
              </Row>
              <Column gap="4">
                <div
                  style={{
                    height: "2px",
                    background: "var(--neutral-alpha-weak)",
                    width: "100%",
                  }}
                />
                <div
                  style={{
                    height: "2px",
                    background: "var(--neutral-alpha-weak)",
                    width: "75%",
                  }}
                />
                <div
                  style={{
                    height: "2px",
                    background: "var(--electric-blue, #0066FF)",
                    width: "50%",
                  }}
                />
              </Column>
              <Text
                variant="body-default-xs"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "9px",
                  lineHeight: 1.8,
                }}
                onBackground="neutral-medium"
              >
                {"> INITIATING SEQUENCE"}
                <br />
                {"> CORE_MODULE: ACTIVE"}
                <br />
                {"> DATA_VIZ: RENDERED"}
              </Text>
            </div>
          </Column>
        </Flex>

        {/* Marquee Ticker */}
        <div
          className="marquee-container"
          style={{
            height: "120px",
            background: "var(--neutral-alpha-weak)",
            borderTop: "1px solid var(--neutral-alpha-weak)",
            borderBottom: "1px solid var(--neutral-alpha-weak)",
            position: "relative",
            zIndex: 20,
          }}
        >
          <div
            className="marquee-content"
            style={{ display: "flex", alignItems: "center" }}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 1rem",
                  gap: "3rem",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="stroke-text"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 6rem)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  AI Builder
                </span>
                <span style={{ fontSize: "2rem", color: "#06B6D4" }}>✦</span>
                <span
                  className="serif-italic"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 6rem)",
                    color: "var(--neutral-on-background-strong)",
                  }}
                >
                  Software Engineer
                </span>
                <span style={{ fontSize: "2rem", color: "#06B6D4" }}>✦</span>
                <span
                  className="stroke-text"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 6rem)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Systems Thinker
                </span>
                <span style={{ fontSize: "2rem", color: "#06B6D4" }}>✦</span>
                <span
                  className="serif-italic"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 6rem)",
                    color: "var(--neutral-on-background-strong)",
                  }}
                >
                  MCP Developer
                </span>
                <span style={{ fontSize: "2rem", color: "#06B6D4" }}>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <Column
          fillWidth
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            borderLeft: "1px solid var(--neutral-alpha-weak)",
            borderRight: "1px solid var(--neutral-alpha-weak)",
          }}
        >
          <Projects range={[1, 4]} />
        </Column>

        {/* Philosophy Section */}
        <Flex
          fillWidth
          horizontal="center"
          vertical="center"
          style={{
            padding: "10rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="philosophy-glow" />
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: 0,
              width: "1px",
              height: "100%",
              background: "#0066FF",
              opacity: 0.1,
            }}
          />
          <Column horizontal="center" gap="24" style={{ zIndex: 10 }}>
            <RevealFx translateY="8">
              <Text
                className="serif-italic"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  textAlign: "center",
                  lineHeight: 1.2,
                  maxWidth: "56rem",
                }}
                onBackground="neutral-strong"
              >
                &ldquo; I think in systems, then build them. &rdquo;
              </Text>
            </RevealFx>
            <RevealFx translateY="4" delay={0.2}>
              <Row gap="16" horizontal="center">
                <span
                  className="label-caps"
                  style={{ color: "var(--neutral-on-background-weak)" }}
                >
                  NETHERLANDS
                </span>
                <span style={{ color: "#0066FF" }}>—</span>
                <span
                  className="label-caps"
                  style={{ color: "var(--neutral-on-background-weak)" }}
                >
                  SOFTWARE ENGINEERING
                </span>
                <span style={{ color: "#0066FF" }}>—</span>
                <span
                  className="label-caps"
                  style={{ color: "var(--neutral-on-background-weak)" }}
                >
                  AI
                </span>
              </Row>
            </RevealFx>
          </Column>
        </Flex>

        {/* Blog Section */}
        {routes["/blog"] && (
          <Column
            fillWidth
            gap="l"
            style={{
              maxWidth: "1600px",
              margin: "0 auto",
              padding: "4rem 2rem",
              borderTop: "1px solid var(--neutral-alpha-weak)",
            }}
          >
            <Row horizontal="between" vertical="center" fillWidth>
              <Heading as="h2" variant="display-strong-xs">
                Latest from the blog
              </Heading>
              <SmartLink href="/blog" suffixIcon="arrowRight">
                <span className="label-caps">View all</span>
              </SmartLink>
            </Row>
            <Posts range={[1, 3]} columns="3" />
          </Column>
        )}
      </Column>
    </>
  );
}

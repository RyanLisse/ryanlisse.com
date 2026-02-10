import { Row, Column, Flex, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      direction="column"
      style={{
        background: "var(--neutral-strong)",
        color: "var(--page-background)",
        minHeight: "500px",
        position: "relative",
        overflow: "hidden",
        paddingTop: "8rem",
      }}
    >
      <Column
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "1600px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
        }}
        gap="xl"
      >
        <Column gap="16">
          <span
            className="label-caps"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Contact
          </span>
          <a
            href={`mailto:${person.email}`}
            className="transition-editorial"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "var(--page-background)",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              paddingBottom: "0.25rem",
              width: "fit-content",
            }}
          >
            {person.email}
          </a>
        </Column>

        <Row gap="xl" style={{ marginTop: "4rem" }} wrap>
          {social.map(
            (item) =>
              item.link && (
                <SmartLink
                  key={item.name}
                  href={item.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="label-caps"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {item.name}
                  </span>
                  <Text style={{ color: "#06B6D4", fontSize: "1.25rem" }}>
                    ↗
                  </Text>
                </SmartLink>
              ),
          )}
        </Row>
      </Column>

      {/* Background Marquee */}
      <div
        className="footer-marquee"
        style={{
          position: "absolute",
          bottom: "3rem",
          width: "100%",
        }}
      >
        RYAN LISSE RYAN LISSE RYAN LISSE
      </div>

      {/* Bottom Bar */}
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        padding="l"
        style={{
          marginTop: "auto",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          zIndex: 20,
          background: "rgba(9,9,11,0.8)",
          backdropFilter: "blur(10px)",
        }}
        s={{
          direction: "column",
          gap: "var(--static-space-16)",
          horizontal: "center",
        }}
      >
        <Row gap="12" vertical="center">
          <div className="status-pulse" />
          <span
            className="label-caps"
            style={{ color: "var(--status-green)" }}
          >
            System Operational
          </span>
        </Row>
        <span
          className="label-caps"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          © {currentYear} — {person.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </span>
      </Row>
    </Flex>
  );
};

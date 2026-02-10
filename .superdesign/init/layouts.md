# Layout Components

## Root Layout (`src/app/layout.tsx`)
```tsx
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import classNames from "classnames";
import { Background, Column, Flex, Meta, RevealFx, SpacingToken, opacity } from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex suppressHydrationWarning as="html" lang="en" fillWidth
      className={classNames(fonts.heading.variable, fonts.body.variable, fonts.label.variable, fonts.code.variable)}>
      <head>{/* theme init script */}</head>
      <Providers>
        <Column as="body" background="page" fillWidth style={{ minHeight: "100vh" }} margin="0" padding="0" horizontal="center">
          <RevealFx fill position="absolute">
            <Background mask={...} gradient={...} dots={...} grid={...} lines={...} />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
```

## Header (`src/components/Header.tsx`)
```tsx
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";
import { routes, display, person, about, blog, work, gallery } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade hide s={{ hide: false }} fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Row fitHeight className={styles.position} position="sticky" as="header" zIndex={9} fillWidth padding="8" horizontal="center" data-border="rounded" s={{ position: "fixed" }}>
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row background="page" border="neutral-alpha-weak" radius="m-4" shadow="l" padding="4" horizontal="center" zIndex={1}>
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {/* Home, About, Work, Blog, Gallery toggle buttons with responsive show/hide */}
              {display.themeSwitcher && (<><Line background="neutral-alpha-medium" vert maxHeight="24" /><ThemeToggle /></>)}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
            <Flex s={{ hide: true }}>{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
```

## Footer (`src/components/Footer.tsx`)
```tsx
import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row className={styles.mobile} maxWidth="m" paddingY="8" paddingX="16" gap="16" horizontal="between" vertical="center"
        s={{ direction: "column", horizontal: "center", align: "center" }}>
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">/ Build your portfolio with <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink></Text>
        </Text>
        <Row gap="16">
          {social.map((item) => item.link && (
            <IconButton key={item.name} href={item.link} icon={item.icon} tooltip={item.name} size="s" variant="ghost" />
          ))}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
```

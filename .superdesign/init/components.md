# Shared UI Components

## ProjectCard (`src/components/ProjectCard.tsx`)
```tsx
"use client";
import { AvatarGroup, Carousel, Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

interface ProjectCardProps {
  href: string; priority?: boolean; images: string[]; title: string;
  content: string; description: string; avatars: { src: string }[]; link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ href, images = [], title, content, description, avatars, link }) => {
  return (
    <Column fillWidth gap="m">
      <Carousel sizes="(max-width: 960px) 100vw, 960px" items={images.map((image) => ({ slide: image, alt: title }))} />
      <Flex s={{ direction: "column" }} fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l">
        {title && (<Flex flex={5}><Heading as="h2" wrap="balance" variant="heading-strong-xl">{title}</Heading></Flex>)}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">{description}</Text>}
            <Flex gap="24" wrap>
              {content?.trim() && <SmartLink suffixIcon="arrowRight" style={{ margin: "0", width: "fit-content" }} href={href}><Text variant="body-default-s">Read case study</Text></SmartLink>}
              {link && <SmartLink suffixIcon="arrowUpRightFromSquare" style={{ margin: "0", width: "fit-content" }} href={link}><Text variant="body-default-s">View project</Text></SmartLink>}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
```

## Mailchimp (`src/components/Mailchimp.tsx`)
```tsx
"use client";
import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row, opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  if (newsletter.display === false) return null;
  return (
    <Column overflow="hidden" fillWidth padding="xl" radius="l" marginBottom="m" horizontal="center" align="center" background="surface" border="neutral-alpha-weak" {...flex}>
      <Background top="0" position="absolute" mask={...} gradient={...} dots={...} grid={...} lines={...} />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">{newsletter.title}</Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">{newsletter.description}</Text>
      </Column>
      <form style={{ width: "100%", display: "flex", justifyContent: "center" }} action={mailchimp.action} method="post">
        <Row id="mc_embed_signup_scroll" fillWidth maxWidth={24} s={{ direction: "column" }} gap="8">
          <Input formNoValidate id="mce-EMAIL" name="EMAIL" type="email" placeholder="Email" required onChange={...} onBlur={...} errorMessage={error} />
          <Button id="mc-embedded-subscribe" value="Subscribe" size="m" fillWidth>Subscribe</Button>
        </Row>
      </form>
    </Column>
  );
};
```

## ThemeToggle (`src/components/ThemeToggle.tsx`)
```tsx
"use client";
import React, { useEffect, useState } from "react";
import { Row, ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  useEffect(() => { setMounted(true); setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light"); }, []);
  useEffect(() => { setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light"); }, [theme]);
  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  return <ToggleButton prefixIcon={icon} onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`} />;
};
```

## Post (`src/components/blog/Post.tsx`)
```tsx
"use client";
import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card fillWidth key={post.slug} href={`/blog/${post.slug}`} transition="micro-medium" direction={direction}
      border="transparent" background="transparent" padding="4" radius="l-4" gap={direction === "column" ? undefined : "24"} s={{ direction: "column" }}>
      {post.metadata.image && thumbnail && (
        <Media priority sizes="(max-width: 768px) 100vw, 640px" border="neutral-alpha-weak" cursor="interactive" radius="l" src={post.metadata.image} alt={"Thumbnail of " + post.metadata.title} aspectRatio="16 / 9" />
      )}
      <Row fillWidth>
        <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16"><Avatar src={person.avatar} size="s" /><Text variant="label-default-s">{person.name}</Text></Row>
            <Text variant="body-default-xs" onBackground="neutral-weak">{formatDate(post.metadata.publishedAt, false)}</Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">{post.metadata.title}</Text>
          {post.metadata.tag && <Text variant="label-strong-s" onBackground="neutral-weak">{post.metadata.tag}</Text>}
        </Column>
      </Row>
    </Card>
  );
}
```

## Posts (`src/components/blog/Posts.tsx`)
```tsx
import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

export function Posts({ range, columns = "1", thumbnail = false, exclude = [], direction }: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);
  if (exclude.length) allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  const sortedBlogs = allBlogs.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());
  const displayedBlogs = range ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length) : sortedBlogs;
  return (
    <>{displayedBlogs.length > 0 && (
      <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
        {displayedBlogs.map((post) => <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />)}
      </Grid>
    )}</>
  );
}
```

## Projects (`src/components/work/Projects.tsx`)
```tsx
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);
  if (exclude && exclude.length > 0) allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  const sortedProjects = allProjects.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());
  const displayedProjects = range ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length) : sortedProjects;
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard priority={index < 2} key={post.slug} href={`/work/${post.slug}`} images={post.metadata.images}
          title={post.metadata.title} description={post.metadata.summary} content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []} link={post.metadata.link || ""} />
      ))}
    </Column>
  );
}
```

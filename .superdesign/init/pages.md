# Page Dependency Trees

## Home (`/`) — `src/app/page.tsx`
```
src/app/page.tsx
├── @once-ui-system/core (Heading, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Meta, Line)
├── src/resources/content.tsx (home, about, person)
├── src/resources/once-ui.config.ts (baseURL, routes)
├── src/components/Mailchimp.tsx
│   ├── @once-ui-system/core (Button, Heading, Input, Text, Background, Column, Row)
│   └── src/resources/ (mailchimp, newsletter)
├── src/components/work/Projects.tsx
│   ├── @once-ui-system/core (Column)
│   ├── src/components/ProjectCard.tsx
│   │   └── @once-ui-system/core (AvatarGroup, Carousel, Column, Flex, Heading, SmartLink, Text)
│   └── src/utils/utils.ts (getPosts)
└── src/components/blog/Posts.tsx
    ├── @once-ui-system/core (Grid)
    ├── src/components/blog/Post.tsx
    │   ├── @once-ui-system/core (Card, Column, Media, Row, Avatar, Text)
    │   ├── src/utils/formatDate.ts
    │   └── src/resources/content.tsx (person)
    └── src/utils/utils.ts (getPosts)
```

## About (`/about`) — `src/app/about/page.tsx`
```
src/app/about/page.tsx
├── @once-ui-system/core (Avatar, Button, Column, Heading, Icon, IconButton, Media, Tag, Text, Row, Schema, Meta)
├── src/resources/content.tsx (person, about, social)
├── src/resources/once-ui.config.ts (baseURL)
├── src/components/about/TableOfContents.tsx
│   └── @once-ui-system/core (Column, Flex, Text, SmartLink)
└── src/components/about/about.module.scss
```

## Work (`/work`) — `src/app/work/page.tsx`
```
src/app/work/page.tsx
├── @once-ui-system/core (Column, Heading, Schema, Meta)
├── src/resources/content.tsx (person, work)
├── src/resources/once-ui.config.ts (baseURL)
└── src/components/work/Projects.tsx (see Home tree)
```

## Blog (`/blog`) — `src/app/blog/page.tsx`
```
src/app/blog/page.tsx
├── @once-ui-system/core (Column, Heading, Schema, Meta)
├── src/resources/content.tsx (person, blog, newsletter)
├── src/resources/once-ui.config.ts (baseURL)
├── src/components/blog/Posts.tsx (see Home tree)
└── src/components/Mailchimp.tsx (see Home tree)
```

## Blog Post (`/blog/[slug]`) — `src/app/blog/[slug]/page.tsx`
```
src/app/blog/[slug]/page.tsx
├── @once-ui-system/core (Column, Flex, Heading, Avatar, Text, Row, Schema, Meta, HeadingNav, Media)
├── src/resources/content.tsx (person, blog)
├── src/resources/once-ui.config.ts (baseURL, socialSharing)
├── src/components/mdx.tsx (CustomMDX)
├── src/components/ScrollToHash.tsx
├── src/components/blog/Posts.tsx (see Home tree)
├── src/components/blog/ShareSection.tsx
│   └── @once-ui-system/core (Row, IconButton, Text)
└── src/utils/utils.ts (getPosts)
```

## Work Project (`/work/[slug]`) — `src/app/work/[slug]/page.tsx`
```
src/app/work/[slug]/page.tsx
├── @once-ui-system/core (Column, Flex, Heading, Text, Row, AvatarGroup, Schema, Meta)
├── src/resources/content.tsx (person, work)
├── src/resources/once-ui.config.ts (baseURL)
├── src/components/mdx.tsx (CustomMDX)
├── src/components/ScrollToHash.tsx
├── src/components/work/Projects.tsx (see Home tree)
└── src/utils/utils.ts (getPosts)
```

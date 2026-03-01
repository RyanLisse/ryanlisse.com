Show a summary of all content in ryanlisse.com (blog posts, projects, services).

Read and report:

**Blog posts** — `src/app/blog/posts/*.mdx`
For each: title, slug, publish date, summary (first 100 chars of content)

**Projects** — `src/app/work/projects/*.mdx`
For each: title, slug, description, tech stack tags

**Services** — `src/resources/servicesData.ts`
For each: name, price, description

**Site config** — `src/resources/once-ui.config.ts`
Report: enabled/disabled routes

Format as a clean markdown summary. Flag any content that looks incomplete (missing descriptions, empty fields, placeholder text).

Verify the WebMCP agent surface is working correctly on ryanlisse.com.

## What to check

The site exposes a WebMCP catalog at `navigator.modelContextTesting` in development mode. Verify all registered tools are present and callable.

### 1. Start dev server (if not running)
```bash
npm run dev
```

### 2. Expected tools
The WebMCP catalog (`src/lib/webmcp/catalog.ts`) should expose:

**Read tools:**
- `list_routes` — site navigation structure
- `get_profile` — Ryan's profile/about data
- `list_services` — service tiers (AI Kickstart, Fractional AI Engineer, Architecture Review)
- `list_projects` — portfolio projects
- `get_project` — single project detail
- `list_posts` — blog posts
- `get_post` — single post detail
- `list_contact_methods` — contact info

**Action tools:**
- `book_call` — returns Cal.com booking URL
- `start_inquiry` — returns contact/email URL
- `share_content` — returns shareable URL for any route

### 3. Verify in browser console
```js
navigator.modelContextTesting?.listTools()
// Should return array of 11 tool names
```

### 4. Run unit tests
```bash
npm test
```

Tests in `src/lib/webmcp/actions.test.ts` and `src/lib/webmcp/guards.test.ts` cover the catalog logic.

Report any missing tools or failing tests.

Run a security audit of ryanlisse.com dependencies.

```bash
npm audit --audit-level=moderate
```

Report:
- Total vulnerabilities by severity (critical, high, moderate, low)
- Package names and CVE IDs for any high/critical issues
- Recommended fix commands

If critical or high vulnerabilities exist, fix them immediately:
```bash
npm audit fix
```

Or for major version bumps:
```bash
npm install <package>@latest
```

After fixing, re-run `npm run build` to confirm nothing broke.
Note: Vercel blocks deployments on known CVEs — keep dependencies clean.

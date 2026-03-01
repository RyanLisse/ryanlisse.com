Deploy ryanlisse.com to Vercel production.

Before deploying:
1. Run `/check` to ensure build + tests pass
2. Confirm you are on `main` branch: `git branch --show-current`
3. Confirm working tree is clean: `git status`

Then push to trigger Vercel deployment:
```bash
git push origin main
```

After pushing:
- Check Vercel deployment status: `gh pr checks` or visit Vercel dashboard
- Confirm the deployment succeeded and no CVE or build errors appear
- Report the deployment URL when complete

Deployment method: Vercel (auto-deploys on push to `main`).
Do NOT use `vercel --prod` manually — always deploy via git push to maintain clean history.

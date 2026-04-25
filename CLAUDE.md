# MegaLaunch (ML) - Master Monetization Roadmap

## About
MegaLaunch is the central roadmap and tracking project for all monetizable projects.
It coordinates development priorities, tracks progress, and manages launch campaigns.

## Project Structure
```
D:\Projects\ML\
├── knowledge/          # Roadmap files (MegaLaunch-YYYY-MM-DD.md)
├── reports/            # Audit reports, session summaries
├── campaigns/          # Campaign content, outreach materials
├── credentials/        # API keys for campaign tools
└── DEVELOPMENT_STATUS.md
```

## Session Protocol
1. Read latest `knowledge/MegaLaunch-*.md` (find by date)
2. Check current priority status and next action
3. Use AI Pipeline (mesh) in Master for development
4. Update roadmap file with progress after each session
5. Update DEVELOPMENT_STATUS.md

## Priority Order
- **P0**: MarketingAutomation (`D:\Projects\MarketingAutomation`) — internal promotion tool
- **P1**: BlocX (`D:\Projects\blochub`) — SaaS for HOAs, domain: blocx.ro
- **P2**: PRO (`C:\Projects\PRO`) — fitness coaches
- **P3**: eCabinet (`C:\Projects\eCabinet`) — scheduling
- **P4**: TradeInvest (`D:\Projects\TradeInvest`) — trading platform
- **P5**: Tester (`D:\Projects\Tester`) — AI testing engine

## Commands
- `ML` or `ML status update` → Read latest roadmap, show status, continue work
- `backup status` → Save DEVELOPMENT_STATUS.md

## Stripe (shared across projects)
- Account: Class RDA Impex SRL
- Sandbox keys in Master credentials
- Each project has own Stripe config in its Admin/Settings UI

## Hosting
- **Hostinger**: 50-domain plan for all project domains
- **VPS1**: 187.77.179.159 (PRO, eCabinet)
- **VPS2**: 72.62.155.74 (BlocX, MA, UtilajHub, KnowBest, etc.)


## Governance Reference
See: `Master/knowledge/MASTER_SYSTEM.md` §1-§5. This project follows Master governance; do not duplicate rules.

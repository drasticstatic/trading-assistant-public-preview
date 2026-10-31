# Monitoring outputs — where this lane's buttoned-up data lives

The observers' dated reports and heartbeats live in a repository pair on the lab desk pattern, shared by the ARB and
Perps lanes so Bushido can read them and Kenney can witness them:

- private: `drasticstatic/monitoring-outputs-thef` — `perps/YYYY-MM-DD/README.md` reports (rendered to PDF by the
  proposals pipeline), `perps/heartbeat.json` from `scripts/listener.py`
- public: `drasticstatic/monitoring-outputs-thef-public` — allowlisted copies, GitHub Pages front end

Created by the FortunaTradesARB session on 2026-10-31 (round-three plan, Part D). Until the pair exists on this machine,
`scripts/listener.py` writes its heartbeat to `data/progression/terminal/data/listener.json`; set
`MONITORING_DIR=~/code/the-holy-earth-foundation/monitoring-outputs-thef` to add the repository copy.

The listener is read-only: it wakes a check-in by appending to `logs/fortuna/WAKE`; it never places or changes an order
and never resumes a paused loop. Stop it with `touch logs/fortuna/listener.STOP`.

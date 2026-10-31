# Monitoring outputs — where this lane's buttoned-up data lives

The observers' dated reports and heartbeats live in a repository pair on the lab desk pattern, shared by the ARB and
Perps lanes so Bushido can read them and Kenney can witness them:

- private: [`drasticstatic/monitoring-outputs-thef`](https://github.com/drasticstatic/monitoring-outputs-thef), local
  clone `~/code/the-holy-earth-foundation/monitoring-outputs-thef`. This lane writes `perps/YYYY-MM-DD/README.md` reports
  and `perps/heartbeat.json` from `scripts/listener.py`; the repository's workflow renders every `perps/*/README.md` to
  `pdf/perps/YYYY-MM-DD.pdf` (brass on slate). The ARB lane writes `arb/` beside it nightly.
- public: [`drasticstatic/monitoring-outputs-thef-public`](https://github.com/drasticstatic/monitoring-outputs-thef-public),
  local clone `~/code/the-holy-earth-foundation/monitoring-outputs-thef-public`. Only copies marked public, with no account
  names, balances or order details; its `perps/README.md` holds the folder until then. Front end (GitHub Pages):
  <https://drasticstatic.github.io/monitoring-outputs-thef-public/>.

Created by the FortunaTradesARB session on 2026-10-31 (round-three plan, Part D). Both clones exist locally with a first
commit; the GitHub repositories are created and first pushed by Christopher (the session's create call was refused by
the permission layer). Commit only `perps/` from this lane: the ARB lane's nightly commit touches only `arb/` and
`index.html`, so the two never collide. Set
`MONITORING_DIR=~/code/the-holy-earth-foundation/monitoring-outputs-thef` to add the repository copy of the heartbeat;
until then `scripts/listener.py` writes it to `data/progression/terminal/data/listener.json`.

The listener is read-only: it wakes a check-in by appending to `logs/fortuna/WAKE`; it never places or changes an order
and never resumes a paused loop. Stop it with `touch logs/fortuna/listener.STOP`.

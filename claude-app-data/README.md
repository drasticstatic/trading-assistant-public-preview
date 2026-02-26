# Claude App Data Backups
#### Private repo only — excluded from public preview

This directory contains backups of Claude Code CLI's local conversation
files. These are the raw source of truth for Fortuna's full session history.

## Source Location (this machine)

```
~/.claude/projects/-Users-christopherwilson-ClaudeCodeCLI-trading-assistant/
```

## Known Sessions

| File | Size | Turns | Date Range | Notes |
|------|------|-------|------------|-------|
| b0d580ff...jsonl | 76MB | 3,113 | Feb 20 – Feb 24 AM | Main build history |
| 8c8bb513...jsonl | 3MB | 531 | Feb 24 PM – Feb 25 | Current session |

## Why the large file is NOT copied here

GitHub hard limit: 100MB per file.
The b0d580ff file (76MB) is currently under the limit but will grow.
The file contains base64-encoded screenshot image data in tool call
results — this is what makes it large, not the conversation text itself.

Strategy: copy the CURRENT session JSONL here after each session commit.
The large historical file stays at its source path on local disk.
On machine migration: manually copy both JSONL files to the new machine's
equivalent path before launching Claude Code CLI.

## Migration Instructions (new machine)

1. Clone the private repo to the new machine
2. Copy both JSONL files from old machine:
   Source: ~/.claude/projects/-Users-christopherwilson-ClaudeCodeCLI-trading-assistant/
   Destination: Same path on new machine (adjust username if different)
3. Launch Claude Code CLI and open the trading-assistant project
4. Tell Fortuna: "Read FORTUNA_CONTEXT.md and logs/ to restore context"
5. Fortuna will have full operational awareness within one session

## If JSONL files are lost (hardware failure)

Recovery priority order:
1. FORTUNA_CONTEXT.md — master context, rules, corrections, behavioral data
2. logs/session_YYYYMMDD.md — per-session raw dumps
3. All .md files in smarttrader-ai/ — all analysis, reviews, exports
4. start-instructions.md — role definition and operating procedures
5. strategies/ — full strategy documentation

The repo contains everything Fortuna produced. FORTUNA_CONTEXT.md contains
everything Fortuna learned. Together they reconstruct ~95% of full context.

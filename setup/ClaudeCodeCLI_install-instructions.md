# INSTALLING CLAUDE CODE ON YOUR iMAC

## Before You Begin — Requirements
- macOS 10.15 (Catalina) or newer — your iMac almost certainly qualifies
- An active Claude.ai account (Pro or Max plan recommended — $20/mo gets you started)
- Internet connection
- About 10 minutes

---

## Step 1 — Open Terminal
Press **Command (⌘) + Space** to open Spotlight, type `Terminal`, and hit Enter.
A window will open with a text prompt. That's your command line — don't be intimidated, it's just text messaging your Mac.

---

## Step 2 — Install Claude Code (Native Installer — Recommended)
The native installer is the easiest method. No Node.js required. Automatic updates built in.

In Terminal, copy and paste this entire line, then hit Enter:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

You'll see text scrolling by as it installs — that's normal. Wait for it to finish.

**Alternative — Homebrew (if you already use Homebrew):**
```bash
brew install --cask claude-code
```
> ⚠️ Note: Homebrew does NOT auto-update. If you use this method, run `brew upgrade claude-code` periodically to stay current.


> ⚠️ Note: If you receive the following error: `⚠ Setup notes: • Native installation exists but ~/.local/bin is not in your PATH`
  run: `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc`

    - That warning means you've successfully installed Claude Code, but your computer doesn't know where to find it when you type the claude command.
    - The installation script put the tool in a hidden folder (~/.local/bin), but that folder isn't currently on your system's "shortcut list" (the PATH).

    How to Fix It
        To make the claude command work from any terminal window, you just need to run the specific command the installer suggested

    What this does:
        - Adds the correct path to your shell configuration file (~/.zshrc) so it stays fixed forever.
        - Refreshes your current session (source) so you don't have to restart the terminal.

    Why this happened:
        - New Native Installer: Anthropic recently moved to a "native" installer that doesn't require Node.js or npm.
        - Privacy/Security: It installs to a user-specific folder (~/.local/bin) instead of system-wide folders like /usr/local/bin, which requires you to manually update your PATH the first time.

    Once you've run that command, try typing `claude --help` to confirm everything is working

---

## Step 3 — Verify Installation
Once installation finishes, type this and hit Enter:

```bash
claude --version
```

If you see a version number, you're installed. ✅
If you see "command not found", see the Troubleshooting section below.

---

## Step 4 — Run a Health Check
```bash
claude doctor
```
This checks your setup and flags any issues automatically.

---

## Step 5 — Authenticate (Log In)
Type:
```bash
claude
```

Claude Code will try to open a browser window to log you in.
- If the browser opens automatically → log in with your Claude.ai account → done ✅
- If the browser doesn't open → hold **Command (⌘) and click** the long URL shown in Terminal, or copy/paste it into your browser manually

---

## Step 6 — Navigate to Your Trading Folder
Once logged in and back in Terminal, navigate to your trading assistant folder:

```bash
cd ~/ClaudeCodeCLI/trading-assistant
```

Then launch Claude Code from inside that folder:
```bash
claude
```

Claude will now be able to see and read all files in your trading-assistant folder, including this instruction file, your strategy docs, TradeZella exports, screenshots, and journals.

---

## Essential Terminal Commands Cheat Sheet

| Command | What It Does |
|--------|-------------|
| `claude` | Start Claude Code |
| `claude --version` | Check installed version |
| `claude doctor` | Health check / troubleshoot |
| `claude update` | Manually update Claude Code |
| `/help` | Claude Code command help (inside session) |
| `/exit` | Exit Claude Code, return to Terminal |
| `cd ~/ClaudeCodeCLI/trading-assistant` | Navigate to your trading folder |
| `pwd` | Show your current folder path |
| `clear` | Clear Terminal window |
| **⌘ + L** | Clear Terminal, keep scroll history |
| **⌘ + K** | Clear Terminal and scroll history |

---

## Troubleshooting

**"command not found" after install:**
```bash
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
claude --version
```

**Browser won't open for login:**
Hold ⌘ and click the URL shown in Terminal, or copy/paste it manually into Safari/Chrome.

**Something feels broken:**
```bash
claude doctor
```
This auto-detects most issues and suggests fixes.

**Nuclear option — reinstall fresh:**
```bash
sudo npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
claude --version
```

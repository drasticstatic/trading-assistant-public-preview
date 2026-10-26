# Lock-screen alerts from an autonomous trading agent

*How the Fortuna Terminal reaches a phone, and how to follow it yourself. Public, no secrets involved.*

## The problem

The terminal is a static page on GitHub Pages. Its "enable notifications" button uses the browser Notification API, which only fires while the page is open on a desktop browser. iOS shows web notifications only for a page installed to the Home Screen with a Web Push server behind it. A static page has no server, so the phone never hears from it.

## The fix: push from the machine that knows

The agent that trades already runs on a Mac at every check-in. That machine knows when something matters, so it does the pushing:

1. **The scanner** (`scripts/fortuna-terminal/scan.py`) runs at every check-in. It raises **warn** and **critical** alerts: a position within 3% or 1.5% of liquidation, a closed hourly candle through a level a position depends on, a target reached.
2. **The publisher** (`scripts/fortuna-terminal/append.py`) records every check-in; those marked as a **trade** are events too.
3. **The bridge** (`scripts/fortuna-terminal/notify.py`) posts each one to [ntfy](https://ntfy.sh), an open-source push relay. It is one HTTP request with a title, a priority and a body. No account, no key.
4. **The ntfy app** (iOS, Android, or the web app) subscribed to the topic shows the message on the lock screen.

```sh
# the whole mechanism, by hand
curl -H "Title: Fortuna" -H "Priority: high" -d "Gold short stopped at 4,011.05" https://ntfy.sh/<topic>
```

## Follow Fortuna's alerts

- Install ntfy from the App Store or Play Store, or open <https://ntfy.sh/app>.
- Subscribe to the topic **`fortuna-terminal-live`**.
- That is all. Warn and critical scanner alerts and every trade check-in arrive as they happen.

Christopher's own phone subscribes to a separate private topic; the public one is a mirror of the same alerts. Topics are the only "secret" in ntfy: anyone who knows a topic name can read it **and post to it**, so treat a public topic as a feed and never as instructions. The private topic name lives in a local file the agent never prints or logs.

## Setting up your own private channel

```sh
# 1. invent a long random topic name and subscribe to it in the ntfy app
# 2. store it where the bridge reads it (never committed, never logged)
mkdir -p ~/.config/fortuna && printf '%s' 'your-long-random-topic' > ~/.config/fortuna/ntfy_topic && chmod 600 ~/.config/fortuna/ntfy_topic
# 3. test
python3 -I scripts/fortuna-terminal/notify.py --title "Fortuna" --msg "lock screen test" --pri high
```

The bridge stays silent when no topic is configured, so every script can call it unconditionally. Self-hosting ntfy is also an option if the public relay is not wanted; set `FORTUNA_NTFY_SERVER` to your server.

## Why not Telegram, Pushover, or a PWA

They all work. ntfy was chosen because it needs no account, no bot token and no server, which keeps the public write-up honest: everything above can be reproduced from scratch in five minutes. A Telegram bot is on the roadmap for two-way control; a push relay is deliberately one-way.

# Changelog

## v1.1.1
* **Bug Fix:** Fixed a critical JSON syntax error in the German translation file (`de.json`). (Thanks for pointing it out @kleelue!)

## v1.1.0 - Diet Mode & Smart UI Update

### 🚀 New Features
* **Optimized Data (Global):**
  * Technical ballast (flags, stats, prototypes) is now **always** removed.
  * **Up to 50% smaller prompts** for ALL modes!
* **Diet Mode (Chat & Image):**
  * Uses **minified JSON** (no whitespace) and removes IDs.
  * **Additional 30% reduction** for maximum speed and lower token usage.
* **Smart UI Automation:**
  * The "Send Full Data" checkbox now thinks with you!
  * Defaults to **OFF** (Diet Mode) for Chat, Image, and Story modes.
  * Defaults to **ON** (Full Mode) for Update mode (to ensure IDs are preserved).
  * You can still manually toggle it at any time.
* **Improved Prompts (German):**
  * Refined "Persona" for Chat and Image modes.
  * Stricter safety rules for Updates (ID protection, Text preservation).
  * Better Image Generation prompts (Midjourney optimized).

### 🐛 Bug Fixes
* Fixed an issue where `_id` was unnecessarily sent in Chat mode.
* Improved JSON handling for empty text fields.

## v1.3.0 - ApplicationV2 & Theme Compatibility
*   **ApplicationV2 Migration:** This module has been successfully migrated to Foundry V13's `ApplicationV2` API, ensuring robust performance and future compatibility.
*   **Theme Standardization:**
    *   **Unified Look:** All AI providers (Gemini, ChatGPT, Claude, etc.) now use a consistent, transparent window design that perfectly integrates with global themes (like `phils-pf2e-realdark`).
    *   **Custom Branding:** Each AI provider now only modifies the accent colors (buttons, gradients) and font families, keeping the overall UI clean and consistent.
*   **Backward Compatibility:** Standardized input styling ensures readability across both Light and Dark themes.

# Changelog

## v1.2.1 - D&D 5e AppV2 & Universal Compatibility

### 🛠 Fixes & Improvements
* **D&D 5e Compatibility:** Fixed "Brain Button" missing on D&D 5e v4+ character sheets (ApplicationV2 support).
* **Universal Injector:** Rewrote the button injection logic to be robust across all systems and themes.
* **Styling:** Fixed button overlap in D&D 5e headers by matching native styling perfectly (via class cloning).
* **Inventory Items:** Fixed issue where items inside a character's inventory (Owned Items) were not recognized correctly.


## v1.2.0 - Safety First & Hybrid Input

### 🚀 New Features
* **ID Safety Check:**
  * Prevents accidental data overwrite by verifying that the AI-generated IDs match the target document.
  * Deep scan of all embedded items and pages.
* **Hybrid Result Dialog:**
  * New flexibility: Paste JSON text directly OR upload a JSON file.
  * Solves the issue where some AIs refuse to generate downloadable files.
* **UI Polish:**
  * **Compact Buttons:** Reduced size and padding for a sleeker look.
  * **Console Banner:** The colorful gradient banner is back!

### ✨ Improvements
* **Code Cleanliness:** Removed legacy code and optimized internal structure.
* **Optimized Prompts:** Updated requests to explicitly ask for JSON in Markdown blocks.


## v1.1.1
* **Bug Fix:** Fixed a critical JSON syntax error in the German translation file (`de.json`). (Thanks for pointing it out @Luette!)

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

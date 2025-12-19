<div align="center">

# 🧠 Phil's AI Assistant

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![License](https://img.shields.io/badge/License-GPLv3-blue)
![Version](https://img.shields.io/badge/Version-1.3.0-orange)

<a href="Updates.md"><img src="https://img.shields.io/badge/CHECK-Changelog-blue" style="height: 25px;"></a>
<a href="https://www.patreon.com/PhilsModules"><img src="https://img.shields.io/badge/SUPPORT-Patreon-ff424d?logo=patreon" style="height: 25px;"></a>

<br/>

**Connect your Foundry VTT world with the power of modern AI.** *(Google Gemini, ChatGPT, Claude, Copilot, Perplexity)*

</div>

---

## 🚀 Overview

**Phil's AI Assistant** acts as an intelligent "Prompt Engineer". It reads data from your actors, items, or journals, creates the perfect prompt for the AI, and you simply copy it into the chat window of your favorite AI service.

### ✨ The Core Feature: No API Costs!
You don't need expensive API keys. This module is designed to work seamlessly with the **free web versions** of Gemini, ChatGPT, & Co.

> [!NOTE]
> **Compatibility**
> This module is explicitly tested and optimized for **D&D 5e** and **Pathfinder 2e**.
>
> While the universal injection logic usually works with other systems, full verified support is currently focused on these two. If you encounter issues with other systems, please report them on [GitHub](https://github.com/PhilsModules/phils-ai-assistant/issues).

> [!IMPORTANT]
> **D&D 5e Specifics**
> For Items in a character's inventory, the **"Brain Button"** currently ONLY appears when you open the item via **Right Click -> View Item**. It does not appear in the inline expansion (expand button) at this time.

---

## 🛠️ Features & Modes

* **Context-Aware:** Automatically reads stats, descriptions, and rules from your items and actors.
* **Safety First:** Automatically creates a **Backup** (Copy) of your Journal before applying changes.
* **Smart Paste:** Paste the full AI response text directly. The module automatically filters out the JSON code block.
* **PF2e Optimized:** Special logic for spell lists, skills, and equipment.

### Available Modes

| Mode | Icon | Description |
| :--- | :---: | :--- |
| **Chat / Lore** | 💬 | Ask questions about rules, mechanics, or the backstory of an item. |
| **Image Prompts** | 🎨 | Generates detailed visual descriptions based on character stats (for Midjourney/DALL-E). |
| **Update / Edit** | ✏️ | Let the AI modify stats, rewrite descriptions, or fix typos directly in the item. |
| **Write Story** | 📖 | Have the AI write creative content, descriptions, or plot hooks for your Journal entries. |

---

## 📦 Installation

1.  Open **Foundry VTT**.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```bash
    https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json
    ```
5.  Click **Install**.

---

## 📖 How to Use

### 1. The "Brain Button" 🧠
Once activated, you will find a small brain icon on character sheets, items, and journal entries (usually in the window header).

### 2. Select Mode
Click the icon and choose your desired action (e.g., *"Make this dagger magical and add fire damage"*).

### 3. Copy & Paste Workflow
1.  The module generates an optimized prompt.
2.  Click **"Copy & Open AI"**.
3.  Paste the text into Gemini/ChatGPT (CTRL+V).
4.  **(For Updates/Stories):**
    * Copy the **entire response** from the AI.
    * Click the **"Paste"** button in the Foundry result window.
    * Click **Apply Changes**.

---

## 🌐 Translation Support

**Looking for the Translation Feature?**
The translation functionality has been moved to a standalone module to keep things clean and focused.

👉 **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)**

---

<div align="center">

## 🇩🇪 Deutsche Beschreibung

**Dein kostenloser KI-Begleiter für Foundry VTT.**

</div>

Phil's AI Assistant verbindet deine Foundry VTT Welt mit der Power moderner KI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity).

Das Besondere: **Du brauchst keine teuren API-Keys!**
Das Modul arbeitet als intelligenter "Prompt-Engineer". Es liest die Daten deiner Akteure oder Gegenstände, erstellt den perfekten Befehl (Prompt) für die KI, und du musst ihn nur noch in das Chat-Fenster deiner Lieblings-KI kopieren.

### 🚀 Highlights
* **Keine API-Kosten:** Nutze einfach die kostenlosen Web-Versionen.
* **Daten-Optimierung:** Technischer Ballast wird entfernt, um Tokens zu sparen.
* **Sicherheit:** Automatische Backups deiner Journale vor Änderungen.

### 📖 Bedienung
1.  **Der "Brain-Button":** Klicke auf das 🧠 Symbol in Charakterbögen oder Items.
2.  **Workflow:**
    * Wähle einen Modus (Chat, Bild, Update, Story).
    * Klicke **"Kopieren & KI öffnen"**.
    * Füge den Text bei Gemini/ChatGPT ein.
    * Kopiere die Antwort der KI und füge sie im Foundry-Fenster ein -> **Änderungen anwenden**.

### 📦 Installation
Füge die folgende URL im Foundry VTT "Install Module" Fenster ein:

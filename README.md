<div align="center">

# Phil's AI Assistant 🧠

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3_%2F_CC_BY--NC--ND-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-1.4.1-orange?style=flat-square)](https://github.com/PhilsModules/phils-ai-assistant/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Connect your Foundry VTT world with the power of modern AI – No API costs!**
<br>
_Verbinde deine Foundry VTT Welt mit der Power moderner KI – Keine API Kosten!_

<br>

<a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a> <a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="Updates.md"><img src="https://img.shields.io/badge/%20-Update_Logs-black?style=for-the-badge&logo=clock&logoColor=white" alt="Updates"></a>

</div>

<br>

> [!NOTE]
>
> ### ⚠️ Compatibility / Kompatibilität
>
> **English:** This module is explicitly tested and optimized for **D&D 5e** and **Pathfinder 2e**. While it works with many other systems, verified support focuses on these two.
>
> **Deutsch:** Dieses Modul ist speziell für **D&D 5e** und **Pathfinder 2e** optimiert. Es funktioniert meist auch mit anderen Systemen, der offizielle Support fokussiert sich jedoch auf diese beiden.

> [!IMPORTANT]
>
> ### 🧙‍♂️ D&D 5e Info
>
> **English:** For Items in a character's inventory, the **"Brain Button"** currently ONLY appears when you open the item via **Right Click -> View Item**.
>
> **Deutsch:** Bei Gegenständen im Inventar erscheint der **"Brain Button"** aktuell NUR, wenn du das Item per **Rechtsklick -> Item anzeigen** öffnest.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**Your free AI companion for Foundry VTT.**

Phil's AI Assistant connects your Foundry VTT world with the power of modern AI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity, Ollama).

The core feature: **You don't need expensive API keys!**
The module acts as an intelligent "Prompt Engineer". It reads data from your actors, items, or journals, creates the perfect prompt for the AI, and you simply copy it into the chat window of your favorite AI service.

## 🚀 Key Features

- **No API Costs:** Works with the free web versions of Gemini, ChatGPT, & Co. or **locally with Ollama**.
- 🏠 **Ollama Support:** Use local AI models without data upload! No copy & paste required thanks to direct API integration.
- **Context-Aware:** Automatically reads stats, descriptions, and rules from your items and actors.
- **Smart Paste:** You can paste the full AI response text. The module automatically finds and extracts the JSON code block.
- **Safety First:** Automatically creates a **Backup** (Copy) of your Journal before applying changes.
- **5 Powerful Modes:**
  - 💬 **Chat / Lore:** Ask questions about rules or the backstory of an item.
  - 🎨 **Image Prompts:** Generates detailed visual descriptions based on character stats.
  - ✏️ **Update / Edit:** Let the AI modify stats, rewrite descriptions, or fix typos.
  - 📖 **Write Story:** Have the AI write creative content for your Journal entries.

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```text
    https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 📖 How to Use

### 1. The "Brain Button" 🧠

Once activated, you will find a small brain icon on character sheets, items, and journal entries (in the header bar).

### 2. Workflow

1.  **Select Mode**: Click the icon and choose what you want to do (e.g., "Write a dramatic intro").
2.  **Generate Prompt**: The module creates an optimized prompt -> Click **"Copy & Open AI"**.
3.  **AI Processing**: Paste the text into Gemini/ChatGPT (CTRL+V).
4.  **Update**: Copy the full response from the AI, paste it into the Foundry result window, and click **"Apply Changes"**.

### 🌐 Translation Support

**Looking for the Translation Feature?**
The translation functionality has been moved to a standalone module to keep things clean and focused.
👉 **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)**

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Dein kostenloser KI-Begleiter für Foundry VTT.**

Phil's AI Assistant verbindet deine Foundry VTT Welt mit der Power moderner KI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity, Ollama).

Das Besondere: **Du brauchst keine teuren API-Keys!**
Das Modul arbeitet als intelligenter "Prompt-Engineer". Es liest die Daten deiner Akteure oder Gegenstände, erstellt den perfekten Befehl (Prompt) für die KI, und du musst ihn nur noch in das Chat-Fenster deiner Lieblings-KI kopieren.

## 🚀 Funktionen

- 💸 **Keine API-Kosten:** Funktioniert mit den kostenlosen Web-Versionen von Gemini, ChatGPT & Co. oder **lokal mit Ollama**.
- 🏠 **Ollama Support:** Nutze lokale KI-Modelle ohne Daten-Upload! Keine Copy & Paste nötig dank direkter API-Anbindung.
- 🧠 **Kontext-Bewusst:** Liest automatisch Werte, Beschreibungen und Regeln aus deinen Items und Akteuren.
- 🧹 **Smart Paste:** Du kannst die ganze Antwort der KI einfügen. Das Modul filtert den Code automatisch heraus.
- 💾 **Safety First:** Erstellt automatisch ein **Backup** (Kopie) deines Journals, bevor Änderungen angewendet werden.
- **5 Mächtige Modi:**
  - 💬 **Chat / Lore:** Stelle Fragen zu Regeln oder Hintergrundgeschichten.
  - 🎨 **Image Prompts:** Erstellt detaillierte Bildbeschreibungen für dein Character-Art.
  - ✏️ **Werte anpassen:** Lass die KI Werte ändern oder Rechtschreibung korrigieren.
  - 📖 **Geschichte schreiben:** Lass die KI ganze Journal-Seiten verfassen.

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```text
    https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Bedienung

### 1. Der "Brain-Button" 🧠

Nach der Aktivierung findest du in den Charakterbögen, Items und Journalen (oben in der Leiste) ein kleines Gehirn-Symbol.

### 2. Workflow

1.  **Modus wählen**: Klicke auf das Symbol und wähle, was du tun möchtest (z.B. "Mach diesen Dolch magisch").
2.  **Prompt generieren**: Das Modul generiert einen optimierten Text -> Klicke **"Kopieren & KI öffnen"**.
3.  **KI-Verarbeitung**: Füge den Text bei Gemini/ChatGPT ein.
4.  **Update**: Kopiere die Antwort der KI, füge sie im Foundry-Fenster ein und klicke **"Änderungen anwenden"**.

### 🌐 Translation Support

**Suchst du die Übersetzungs-Funktion?**
Die Übersetzungsfunktion wurde in ein eigenes Modul ausgelagert, um alles übersichtlicher zu halten.
👉 **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)**

<br>

---

## 📜 License

This module uses a dual license structure.

- **Code:** GNU GPLv3
- **Assets:** CC BY-NC-ND 4.0

See `LICENSE` file for details.

<br>

<div align="center">
    <h2>❤️ Support the Development</h2>
    <p>If you enjoy this module and want to support open source development for Foundry VTT check out my Patreon.</p>
    <p>Gefällt dir das Modul? Unterstütze die Weiterentwicklung auf Patreon.</p>
    <a href="https://www.patreon.com/PhilsModules">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" width="200" />
    </a>
    <br><br>
    <p><i>Made with ❤️ for the Foundry VTT Community</i></p>
</div>

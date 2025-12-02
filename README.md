# Phil's AI Assistant 🧠

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![License](https://img.shields.io/badge/License-GPLv3-blue)

**Phil's AI Assistant** connects your Foundry VTT world with the power of modern AI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity).

The core feature: **You don't need expensive API keys!**
The module acts as an intelligent "Prompt Engineer". It reads data from your actors, items, or journals, creates the perfect prompt for the AI, and you simply copy it into the chat window of your favorite AI service.

## 🚀 Features

* **No API Costs:** Works with the free web versions of Gemini, ChatGPT, & Co.
* **Context-Aware:** Automatically reads stats, descriptions, and rules from your items and actors.
* **5 Powerful Modes:**
    * 💬 **Chat / Lore:** Ask questions about rules or the backstory of an item.
    * 🎨 **Image Prompts:** Generates detailed visual descriptions based on character stats.
    * ✏️ **Update / Edit:** Let the AI modify stats, rewrite descriptions, or fix typos.
    * 📖 **Write Story:** Have the AI write creative content for your Journal entries.


* **Safety First:** Automatically creates a **Backup** (Copy) of your Journal before applying changes.
* **Smart Paste:** You can paste the full AI response text. The module automatically finds and extracts the JSON code block.
* **Pathfinder 2e Optimized:** Special logic for spell lists, skills, and equipment (but compatible with most systems).

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```
    https://github.com/weylen86/phils-ai-assistent/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 📖 How to Use

### 1. The "Brain Button"
Once activated, you will find a small 🧠 brain icon on character sheets, items, and journal entries (in the header bar).

### 2. Select Mode
Click the icon and choose what you want to do:
* **Chat / Lore:** "How does this spell work?"
* **Image:** Creates a prompt for Midjourney/DALL-E.
* **Update:** "Make this dagger magical and add fire damage."
* **Write Story:** "Write a dramatic intro for this location."


### 3. Copy & Paste Workflow
1.  The module generates an optimized prompt.
2.  Click **"Copy & Open AI"**.
3.  Paste the text into Gemini/ChatGPT (CTRL+V).
4.  **(Update/Story/Translate):**
    * Copy the **entire response** from the AI.
    * Click the **"Paste"** button in the Foundry result window.
    * Click **Apply Changes**.

---

---

## 🌐 Translation Support

**Looking for the Translation Feature?**
The translation functionality has been moved to a standalone module to keep things clean and focused.
You can find **Phil's Journal Translator** here:
[https://github.com/weylen86/phils-journal-translator/releases/latest/download/module.json](https://github.com/weylen86/phils-journal-translator/releases/latest/download/module.json)

---

# 🇩🇪 Deutsche Beschreibung

**Dein kostenloser KI-Begleiter für Foundry VTT.**

Phil's AI Assistant verbindet deine Foundry VTT Welt mit der Power moderner KI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity).

Das Besondere: **Du brauchst keine teuren API-Keys!**
Das Modul arbeitet als intelligenter "Prompt-Engineer". Es liest die Daten deiner Akteure oder Gegenstände, erstellt den perfekten Befehl (Prompt) für die KI, und du musst ihn nur noch in das Chat-Fenster deiner Lieblings-KI kopieren.

## 🚀 Funktionen

* **Keine API-Kosten:** Funktioniert mit den kostenlosen Web-Versionen von Gemini, ChatGPT & Co.
* **Kontext-Bewusst:** Liest automatisch Werte, Beschreibungen und Regeln.
* **5 Mächtige Modi:**
    * 💬 **Chat / Lore:** Stelle Fragen zu Regeln oder Hintergrundgeschichten.
    * 🎨 **Image Prompts:** Erstellt detaillierte Bildbeschreibungen für dein Character-Art.
    * ✏️ **Werte anpassen:** Lass die KI Werte ändern oder Rechtschreibung korrigieren.
    * 📖 **Geschichte schreiben:** Lass die KI ganze Journal-Seiten verfassen.

* **Smart Paste:** Du kannst die ganze Antwort der KI einfügen. Das Modul filtert den Code automatisch heraus.
* **Sicherheit:** Erstellt automatisch ein **Backup** (Kopie) deines Journals, bevor Änderungen angewendet werden.

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```
    https://github.com/weylen86/phils-ai-assistent/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Bedienung

### 1. Der "Brain-Button"
Nach der Aktivierung findest du in den Charakterbögen, Items und Journalen (oben in der Leiste) ein kleines 🧠 Gehirn-Symbol.

### 2. Workflow
1.  Klicke auf das Symbol und wähle den Modus.
2.  Das Modul generiert einen optimierten Prompt -> **"Kopieren & KI öffnen"**.
3.  Füge den Text bei Gemini/ChatGPT ein.
4.  Kopiere die Antwort der KI und füge sie im Foundry-Fenster ein -> **Änderungen anwenden**.

---

## ⚙️ Einstellungen & Tipps
* **Standard KI:** Lege fest, welcher Dienst sich standardmäßig öffnet.
* **Pathfinder 2e:** Optimierte Logik für Zauberlisten und Skills.

---

## 👨‍💻 Author
* **Phil** (GitHub: [weylen86](https://github.com/weylen86))

## 📄 License
This module is licensed under the [GPL-3.0 License](LICENSE).

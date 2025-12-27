const MODULE_ID = 'phils-ai-assistant';


const THEMES = {
    gemini: {
        label: "Google Gemini", url: "https://gemini.google.com/app",
        vars: {
            '--ai-bg': 'rgba(19, 19, 20, 0.98)',
            '--ai-text': '#e3e3e3',
            '--ai-text-muted': 'rgba(255,255,255,0.6)',
            '--ai-input-bg': 'rgba(30, 31, 32, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#1c87e5',
            '--ai-gradient': 'linear-gradient(90deg, #1c87e5, #8a3ab9)',
            '--ai-font': '"Helvetica Neue", Arial, sans-serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    chatgpt: {
        label: "ChatGPT", url: "https://chatgpt.com/",
        vars: {
            '--ai-bg': 'rgba(30, 30, 30, 0.98)',
            '--ai-text': '#e5e5e5',
            '--ai-text-muted': 'rgba(255,255,255,0.6)',
            '--ai-input-bg': 'rgba(44, 44, 44, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#10a37f',
            '--ai-gradient': 'linear-gradient(90deg, #ffffff, #c7c7c7)',
            '--ai-font': '"Söhne", "Segoe UI", Arial, sans-serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#000',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    claude: {
        label: "Anthropic Claude", url: "https://claude.ai/new",
        vars: {
            '--ai-bg': 'rgba(37, 34, 32, 0.98)',
            '--ai-text': '#f0e6d2',
            '--ai-text-muted': 'rgba(240, 230, 210, 0.6)',
            '--ai-input-bg': 'rgba(51, 48, 46, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#d97757',
            '--ai-gradient': 'linear-gradient(90deg, #d97757, #b56245)',
            '--ai-font': '"Tiempos", "Georgia", serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    copilot: {
        label: "Microsoft Copilot", url: "https://copilot.microsoft.com/",
        vars: {
            '--ai-bg': 'rgba(27, 31, 43, 0.98)',
            '--ai-text': '#ffffff',
            '--ai-text-muted': 'rgba(255,255,255,0.6)',
            '--ai-input-bg': 'rgba(43, 50, 69, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#29b6f6',
            '--ai-gradient': 'linear-gradient(90deg, #29b6f6, #d81b60)',
            '--ai-font': '"Segoe UI", Arial, sans-serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    perplexity: {
        label: "Perplexity AI", url: "https://www.perplexity.ai/",
        vars: {
            '--ai-bg': 'rgba(25, 26, 26, 0.98)',
            '--ai-text': '#e8e8e8',
            '--ai-text-muted': 'rgba(255,255,255,0.6)',
            '--ai-input-bg': 'rgba(45, 47, 49, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#22b8cf',
            '--ai-gradient': 'linear-gradient(90deg, #22b8cf, #1098ad)',
            '--ai-font': '"FK Grotesk", "Roboto", sans-serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    ollama: {
        label: "Ollama (Local)", url: "http://localhost:11434",
        vars: {
            '--ai-bg': 'rgba(20, 20, 20, 0.98)',
            '--ai-text': '#ffffff',
            '--ai-text-muted': 'rgba(255,255,255,0.6)',
            '--ai-input-bg': 'rgba(40, 40, 40, 0.8)',
            '--ai-input-border': 'rgba(255,255,255,0.15)',
            '--ai-border-color': '#444',
            '--ai-accent': '#caad8d', /* Sorrell Brown */
            '--ai-gradient': 'linear-gradient(90deg, #ffffff, #caad8d)', /* White to Brown */
            '--ai-font': '"Inter", sans-serif',
            '--ai-backdrop': 'blur(5px)',
            '--ai-btn-text': '#000',
            '--wiz-section-bg': 'rgba(255,255,255,0.05)',
            '--wiz-hint': 'rgba(255,255,255,0.6)',
            '--wiz-option-bg': '#333',
            '--wiz-option-color': '#fff'
        },
        isDark: true
    },
    foundry: {
        label: "Foundry VTT (Standard)", url: "",
        vars: {
            '--ai-bg': 'transparent',
            '--ai-text': 'inherit',
            '--ai-text-muted': 'inherit',
            '--ai-input-bg': 'rgba(128, 128, 128, 0.1)',
            '--ai-input-border': 'var(--color-border-light-2)',
            '--ai-border-color': 'var(--color-border-light-2)',
            '--ai-accent': '#ff6400',
            '--ai-gradient': 'linear-gradient(90deg, #ff6400, #ff0000)',
            '--ai-font': '"Signika", sans-serif',
            '--ai-backdrop': 'none',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(128,128,128,0.1)',
            '--wiz-hint': 'inherit',
            '--wiz-option-bg': '#fff',
            '--wiz-option-color': '#000'
        },
        isDark: false
    }
};


function applyGlobalTheme(overrideProvider, overrideTheme) {
    const savedProvider = game.settings.get(MODULE_ID, 'aiProvider') || 'gemini';
    const savedTheme = game.settings.get(MODULE_ID, 'aiTheme') || 'auto';

    const activeProvider = overrideProvider || savedProvider;
    let activeThemeKey = overrideTheme || savedTheme;

    if (activeThemeKey === 'auto') activeThemeKey = activeProvider;

    const theme = THEMES[activeThemeKey] || THEMES.gemini;
    const root = document.documentElement;

    for (const [key, value] of Object.entries(theme.vars)) {
        root.style.setProperty(key, value);
    }

    if (!theme.isDark) {
        document.body.classList.add('ai-theme-light');
        document.body.classList.add('ai-theme-foundry');
    } else {
        document.body.classList.remove('ai-theme-light');
        document.body.classList.remove('ai-theme-foundry');
    }
}


function formatString(str, data = {}) {
    if (!str) return "";
    if (Array.isArray(str)) str = str.join("\n");
    for (const [k, v] of Object.entries(data)) {
        str = str.replace(new RegExp(`{${k}}`, 'g'), v || "");
    }
    return str;
}

const loc = (key, data = {}) => {
    const i18nKey = `AIASSISTANT.UI.${key}`;
    if (game.i18n.has(i18nKey)) return game.i18n.format(i18nKey, data);
    return key;
};

function resolvePrompt(key, data) {
    const i18nKey = `AIASSISTANT.Prompts.${key}`;
    let rawText = foundry.utils.getProperty(game.i18n.translations, i18nKey);
    if (!rawText && game.i18n._fallback) {
        rawText = foundry.utils.getProperty(game.i18n._fallback, i18nKey);
    }
    if (!rawText) rawText = game.i18n.localize(i18nKey);
    if (!rawText || rawText === i18nKey) return "";
    return formatString(rawText, data);
}


Hooks.once('init', async () => {
    game.settings.register(MODULE_ID, 'firstRunConfigured', { scope: 'client', config: false, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'worldDefaultProvider', {
        name: "AIASSISTANT.Settings.WorldDefault.Name", hint: "AIASSISTANT.Settings.WorldDefault.Hint", scope: 'world', config: true, type: String, default: 'gemini',
        choices: { 'gemini': 'Google Gemini', 'chatgpt': 'ChatGPT', 'claude': 'Anthropic Claude', 'copilot': 'Microsoft Copilot', 'perplexity': 'Perplexity AI', 'ollama': 'Ollama (Local)' }
    });
    game.settings.register(MODULE_ID, 'languageOverride', {
        name: "AIASSISTANT.Settings.Language.Name", hint: "AIASSISTANT.Settings.Language.Hint", scope: 'client', config: true, type: String, default: 'auto',
        choices: { 'auto': 'Auto', 'en': 'English', 'de': 'Deutsch' }, onChange: () => location.reload()
    });
    game.settings.register(MODULE_ID, 'aiProvider', {
        name: "AIASSISTANT.Settings.Provider.Name", hint: "AIASSISTANT.Settings.Provider.Hint", scope: 'client', config: true, type: String, default: 'gemini',
        choices: { 'gemini': 'Google Gemini', 'chatgpt': 'ChatGPT', 'claude': 'Anthropic Claude', 'copilot': 'Microsoft Copilot', 'perplexity': 'Perplexity AI', 'ollama': 'Ollama (Local)' },
        onChange: () => applyGlobalTheme()
    });
    game.settings.register(MODULE_ID, 'aiTheme', {
        name: "AIASSISTANT.Settings.Theme.Name", hint: "AIASSISTANT.Settings.Theme.Hint", scope: 'client', config: true, type: String, default: 'auto',
        choices: { 'auto': 'Auto', 'gemini': 'Gemini Theme', 'chatgpt': 'ChatGPT Theme', 'claude': 'Claude Theme', 'copilot': 'Copilot Theme', 'perplexity': 'Perplexity Theme', 'ollama': 'Ollama Theme', 'foundry': 'Foundry VTT' },
        onChange: () => applyGlobalTheme()
    });
    game.settings.register(MODULE_ID, 'ollamaUrl', {
        name: "Ollama URL", hint: "The URL of your local Ollama instance (default: http://localhost:11434)", scope: 'client', config: true, type: String, default: 'http://localhost:11434'
    });
    game.settings.register(MODULE_ID, 'ollamaModel', {
        name: "Ollama Model", hint: "The model to use (e.g. llama3, mistral, gemma:2b)", scope: 'client', config: true, type: String, default: 'llama3'
    });
    game.settings.register(MODULE_ID, 'gameSystem', { name: "AIASSISTANT.Settings.GameSystem.Name", hint: "AIASSISTANT.Settings.GameSystem.Hint", scope: 'world', config: true, type: String, default: 'Pathfinder 2e' });
    game.settings.register(MODULE_ID, 'minimumRole', { name: "AIASSISTANT.Settings.MinRole.Name", hint: "AIASSISTANT.Settings.MinRole.Hint", scope: 'world', config: true, type: Number, default: 4, choices: { 1: "Player", 2: "Trusted", 3: "Assistant", 4: "GM" }, onChange: () => location.reload() });
    game.settings.register(MODULE_ID, 'sendFullData', { name: "AIASSISTANT.Settings.SendFullData.Name", hint: "AIASSISTANT.Settings.SendFullData.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateActor', { name: "AIASSISTANT.Settings.PlayerUpdateActor.Name", hint: "AIASSISTANT.Settings.PlayerUpdateActor.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateItem', { name: "AIASSISTANT.Settings.PlayerUpdateItem.Name", hint: "AIASSISTANT.Settings.PlayerUpdateItem.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateJournal', { name: "AIASSISTANT.Settings.PlayerUpdateJournal.Name", hint: "AIASSISTANT.Settings.PlayerUpdateJournal.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'promptWarningLimit', {
        name: "AIASSISTANT.Settings.PromptWarning.Name", hint: "AIASSISTANT.Settings.PromptWarning.Hint", scope: 'client', config: true, type: Number, default: 25000,
        choices: { 0: "AIASSISTANT.Settings.PromptWarning.Choices.0", 10000: "AIASSISTANT.Settings.PromptWarning.Choices.10000", 25000: "AIASSISTANT.Settings.PromptWarning.Choices.25000", 50000: "AIASSISTANT.Settings.PromptWarning.Choices.50000", 100000: "AIASSISTANT.Settings.PromptWarning.Choices.100000" }
    });
});

Hooks.once('ready', async () => {
    applyGlobalTheme();
    const providerKey = game.settings.get(MODULE_ID, 'aiProvider') || 'gemini';
    const themeKey = game.settings.get(MODULE_ID, 'aiTheme') || 'auto';
    const effectiveThemeKey = (themeKey === 'auto') ? providerKey : themeKey;
    const theme = THEMES[effectiveThemeKey] || THEMES.gemini;
    const providerData = THEMES[providerKey] || THEMES.gemini;

    const gradient = theme.vars['--ai-gradient'] || '#444';
    const bgStyle = "background: #353535; color: #fff; padding: 6px 12px; border-radius: 6px 0 0 6px; font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 13px;";
    const badgeStyle = `background: ${gradient}; color: #fff; padding: 6px 12px; border-radius: 0 6px 6px 0; font-weight: bold; font-family: 'Helvetica Neue', sans-serif; font-size: 13px;`;
    console.log(`%c PHILS AI ASSISTANT %c ${providerData.label} `, bgStyle, badgeStyle);

    if (!game.settings.get(MODULE_ID, 'firstRunConfigured')) showWelcomeWizard();



    // --- Universal Injection System ---
    const injector = new UniversalButtonInjector();
    injector.start();
});


class UniversalButtonInjector {
    constructor() {
        this.observer = null;
        this.injectedApps = new WeakSet();
    }

    start() {
        console.log("AI Assistant | Injector System V2 Started");

        const hookHandler = (app, html) => this.attemptInjection(app, html);

        // Standard Hook Injection
        Hooks.on('renderApplication', hookHandler);
        Hooks.on('renderActorSheet', hookHandler);
        Hooks.on('renderItemSheet', hookHandler);
        Hooks.on('renderJournalSheet', hookHandler);

        // Observer for ShadowDOM / Delayed Rendering / AppV2
        this.observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;

                    if (node.classList.contains('window-app') || node.tagName === 'FVTT-APPLICATION' || node.classList.contains('application')) {
                        this.inspectNode(node);
                    } else {
                        const windows = node.querySelectorAll?.('.window-app, fvtt-application, .application');
                        if (windows?.length) windows.forEach(w => this.inspectNode(w));
                    }
                }
            }
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
    }

    inspectNode(node) {
        // Direct Lookup (Standard Apps)
        const numericId = parseInt(node.id.split('-').pop());
        if (!isNaN(numericId) && ui.windows[numericId]) {
            this.attemptInjection(ui.windows[numericId], $(node));
            return;
        }

        const windows = Object.values(ui.windows);

        // Search by Element Reference
        let app = windows.find(w => w.element && w.element[0] === node);

        // Search by ID Match
        if (!app) app = windows.find(w => w.id === node.id);

        if (app) {
            this.attemptInjection(app, $(node));
            return;
        }

        // Fallback: Synthetic App for AppV2 / Unique Sheets
        let doc = null;

        // Pattern A: Owned Item (Actor-ID-Item-ID)
        const ownedItemMatch = node.id.match(/Actor-([a-zA-Z0-9]{16})-Item-([a-zA-Z0-9]{16})/);
        if (ownedItemMatch) {
            const actor = game.actors.get(ownedItemMatch[1]);
            if (actor) doc = actor.items.get(ownedItemMatch[2]);
        }

        // Pattern B: Generic ID (End of String)
        if (!doc) {
            const parts = node.id.split('-');
            const potentialId = parts.pop();
            doc = game.actors.get(potentialId) || game.items.get(potentialId) || game.journal.get(potentialId);

            // Retry with second-to-last part if implicit suffix exists
            if (!doc && parts.length > 0) {
                const altId = parts.pop();
                doc = game.actors.get(altId) || game.items.get(altId) || game.journal.get(altId);
            }
        }

        if (doc) {
            this.attemptInjection({
                id: node.id,
                document: doc,
                element: $(node),
                constructor: { name: "Syntheticv2App: " + node.classList[0] }
            }, $(node));
            return;
        }
    }

    attemptInjection(app, html) {
        if (!app) return;
        if (!app.document && !app.object) return;

        const doc = app.document || app.object;
        if (this.injectedApps.has(app)) return;

        const docName = doc.documentName || doc.type;
        if (!["Actor", "Item", "JournalEntry"].includes(docName)) return;

        const minRole = game.settings.get(MODULE_ID, 'minimumRole');
        if (game.user.role < minRole) return;

        // Find insertion point - Logic Update for D&D 5e v4
        const $window = html.closest ? html.closest('.window-app') : $(html).parents('.window-app');
        const $target = $window.length ? $window : $(html);

        // Strategy A: Standard matches
        let header = $target.find('.window-header').first();
        let controls = $target.find('.window-controls').first();

        // Strategy C: Inner Header for D&D 5e / Custom Sheets
        if (!header.length && !controls.length) {
            header = $target.find('.window-content .window-header').first();
        }

        let container = null;
        if (header.length) container = header;
        else if (controls.length) container = controls;

        if (container && container.length > 0) {
            if (container.find('.ai-assistant-btn').length === 0) {
                this.injectButton(app, container);
            }
        } else {
            // Fallback D: Title Bar / Fallback Prepend
            const titleBar = $target.find('.window-title').parent();
            if (titleBar.length > 0 && titleBar.find('.ai-assistant-btn').length === 0) {
                this.injectButton(app, titleBar);
            } else {
                // Last Resort: Log failure to help debug D&D 5e
                console.warn(`AI Assistant | FAIL: Could not find header/controls for ${app.constructor.name} (AppId: ${app.id}, Classes: ${$target.attr('class')})`);
            }
        }
    }

    injectButton(app, container) {
        // PREPARE: Find a sibling to clone classes from for perfect alignment
        const closeBtn = container.find('.close, .header-button.close').first();
        let btnClasses = "header-button control ai-assistant-btn"; // Default fallback

        if (closeBtn.length) {
            // Clone classes but remove 'close' specific ones and ensure our identifier is there
            const siblingClasses = closeBtn.attr('class') || "";
            btnClasses = siblingClasses.replace('close', '').trim() + " ai-assistant-btn";
        }

        // Build Button (Icon Only, Cloned Classes)
        // We still keep the margin-right to prevent overlap
        const btn = $(`<a class="${btnClasses}" title="AI Assistant" style="margin-right: 6px;">
            <i class="fas fa-brain"></i>
        </a>`);

        // Attach Click
        btn.click((ev) => {
            ev.preventDefault();
            ev.stopPropagation(); // Vital for some drag/drop sheets
            startGeminiDialog(app.document);
        });

        if (closeBtn.length > 0) {
            closeBtn.before(btn);
        } else {
            // Or just prepend to controls if no close button found there
            container.prepend(btn);
        }

        this.injectedApps.add(app);
    }
}


Hooks.on('renderActorSheet', (app, html, data) => {

    const isGM = game.user.isGM;
    const canEditItems = isGM || game.settings.get(MODULE_ID, 'playerCanUpdateItem');
    if (!canEditItems) return;

    const attachButton = (target, clickHandler) => {
        if (target.length === 0) return;
        if (target.find('.ai-inline-btn').length > 0) return;

        const btn = $(`<a class="ai-inline-btn" title="${loc('BtnCopy')}"><i class="fas fa-brain"></i></a>`);
        btn.click(async (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            clickHandler();
        });
        target.append(btn);
    };

    html.find('[data-item-id]').each((i, el) => {
        const itemRow = $(el);
        const itemId = itemRow.data('item-id');
        if (!itemId) return;

        const item = app.document.items.get(itemId);
        if (!item) return;

        if (item.type === "spellcastingEntry") return;

        let target = itemRow.find('.item-name h4').first();
        if (target.length === 0) target = itemRow.find('.item-name').first();
        if (target.length === 0) target = itemRow.find('.action-name').first();
        if (target.length === 0) target = itemRow.find('h4, h3').first();

        if (target.length === 0) return;

        attachButton(target, () => {
            startGeminiDialog(item);
        });
    });
});

Hooks.on('getItemSheetHeaderButtons', (sheet, buttons) => addButtonToArray(sheet, buttons));
Hooks.on('getActorSheetHeaderButtons', (sheet, buttons) => addButtonToArray(sheet, buttons));
Hooks.on('getJournalSheetHeaderButtons', (sheet, buttons) => addButtonToArray(sheet, buttons));

function addButtonToArray(sheet, buttons) {
    const minRole = game.settings.get(MODULE_ID, 'minimumRole');
    if (game.user.role < minRole) return;
    if (buttons.some(b => b.class === "ai-assistant-btn")) return;
    buttons.unshift({ label: "AI Assistant", class: "ai-assistant-btn", icon: "fas fa-brain", onclick: () => startGeminiDialog(sheet.document) });
}


function showWelcomeWizard() {
    applyGlobalTheme();
    const isGM = game.user.isGM;
    const defaultProvider = game.settings.get(MODULE_ID, 'worldDefaultProvider') || 'gemini';
    const isSel = (key) => key === defaultProvider ? 'selected' : '';

    const providerSection = `
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-robot"></i> ${loc('WizProviderLabel')}</label>
            <div class="wizard-hint">${loc('WizProviderHint')}</div>
            <select id="wiz-provider" class="wizard-select">
                <option value="gemini" ${isSel('gemini')}>Google Gemini (Standard)</option>
                <option value="chatgpt" ${isSel('chatgpt')}>ChatGPT</option>
                <option value="claude" ${isSel('claude')}>Anthropic Claude</option>
                <option value="copilot" ${isSel('copilot')}>Microsoft Copilot</option>
                <option value="perplexity" ${isSel('perplexity')}>Perplexity AI</option>
                <option value="ollama" ${isSel('ollama')}>Ollama (Local)</option>
            </select>
        </div>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-paint-brush"></i> ${loc('WizThemeLabel')}</label>
            <div class="wizard-hint">${loc('WizThemeHint')}</div>
            <select id="wiz-theme" class="wizard-select">
                <option value="auto" selected>${loc('WizThemeAuto')}</option>
                <option value="gemini">Gemini Theme</option>
                <option value="chatgpt">ChatGPT Theme</option>
                <option value="claude">Claude Theme</option>
                <option value="copilot">Copilot Theme</option>
                <option value="perplexity">Perplexity Theme</option>
                <option value="ollama">Ollama Theme</option>
                <option value="foundry">Foundry VTT (Standard)</option>
            </select>
        </div>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-language"></i> ${loc('WizLangLabel')}</label>
            <div class="wizard-hint">${loc('WizLangHint')}</div>
            <select id="wiz-lang" class="wizard-select">
                <option value="auto" selected>Automatisch</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
            </select>
        </div>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-crown"></i> ${loc('WizSubLabel')}</label>
            <div class="wizard-hint">${loc('WizSubHint')}</div>
            <select id="wiz-sub-status" class="wizard-select">
                <option value="free" selected>${loc('WizSubFree')}</option>
                <option value="pro">${loc('WizSubPro')}</option>
            </select>
        </div>
    `;

    let gmSection = "";
    if (isGM) {
        gmSection = `
        <hr style="border: 0; border-top: 1px solid var(--ai-border-color); opacity: 0.3; margin: 10px 0 5px 0;">
        <h3 class="wizard-gm-title">${loc('WizGMTitle')}</h3>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-dice-d20"></i> ${loc('WizSystemLabel')}</label>
            <div class="wizard-hint">${loc('WizSystemHint')}</div>
            <input type="text" id="wiz-system" class="wizard-input" value="${game.system.title}">
        </div>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-users"></i> ${loc('WizRoleLabel')}</label>
            <div class="wizard-hint">${loc('WizRoleHint')}</div>
            <select id="wiz-role" class="wizard-select">
                <option value="1">Alle Spieler</option>
                <option value="2">Vertrauenswürdige Spieler</option>
                <option value="3">Hilfs-GM</option>
                <option value="4" selected>Nur Gamemaster</option>
            </select>
        </div>
        <div class="wizard-section">
            <label class="wizard-label"><i class="fas fa-star"></i> ${loc('WizDefaultLabel')}</label>
            <div class="wizard-hint">${loc('WizDefaultHint')}</div>
            <select id="wiz-default-provider" class="wizard-select">
                <option value="gemini" ${isSel('gemini')}>Google Gemini</option>
                <option value="chatgpt" ${isSel('chatgpt')}>ChatGPT</option>
                <option value="claude" ${isSel('claude')}>Anthropic Claude</option>
                <option value="copilot" ${isSel('copilot')}>Microsoft Copilot</option>
                <option value="perplexity" ${isSel('perplexity')}>Perplexity AI</option>
                <option value="ollama" ${isSel('ollama')}>Ollama (Local)</option>
            </select>
        </div>
        `;
    }

    const content = `
    <div class="ai-assistant-content">
        <div style="text-align:center; margin-bottom: 10px;">
            <h2 style="border:none; margin-bottom:2px; font-size:1.3em;">${loc('WizTitle', { name: game.user.name })}</h2>
            <p style="font-size:0.9em; opacity:0.8; margin-bottom: 5px;">${loc('WizSubtitle')}</p>
        </div>
        <form>${providerSection}${gmSection}<div class="wizard-btn-wrapper" style="margin-top:5px; margin-bottom:5px;"></div></form>
    </div>`;

    new Dialog({
        title: "Setup Wizard", content: content,
        buttons: {
            save: {
                label: "Einrichtung abschließen",
                callback: async (html) => {
                    await game.settings.set(MODULE_ID, 'firstRunConfigured', true);

                    try {
                        const provider = html.find('#wiz-provider').val();
                        const theme = html.find('#wiz-theme').val();
                        const lang = html.find('#wiz-lang').val();
                        const subStatus = html.find('#wiz-sub-status').val();

                        await game.settings.set(MODULE_ID, 'aiProvider', provider);
                        await game.settings.set(MODULE_ID, 'aiTheme', theme);
                        await game.settings.set(MODULE_ID, 'languageOverride', lang);

                        if (subStatus === 'pro') {
                            await game.settings.set(MODULE_ID, 'promptWarningLimit', 100000);
                        } else {
                            await game.settings.set(MODULE_ID, 'promptWarningLimit', 25000);
                        }

                        if (isGM) {
                            const system = html.find('#wiz-system').val();
                            const role = parseInt(html.find('#wiz-role').val());
                            const defProvider = html.find('#wiz-default-provider').val();
                            await game.settings.set(MODULE_ID, 'gameSystem', system);
                            await game.settings.set(MODULE_ID, 'minimumRole', role);
                            await game.settings.set(MODULE_ID, 'worldDefaultProvider', defProvider);
                        }

                        applyGlobalTheme();
                        ui.notifications.info(loc('WizReady'));
                    } catch (err) {
                        console.error("AI Assistant | Wizard Error:", err);
                        ui.notifications.warn("Einige Einstellungen konnten nicht gespeichert werden (siehe Konsole), aber der Wizard ist nun deaktiviert.");
                    }
                }
            }
        },
        render: (html) => {
            const win = html.closest('.window-app');
            win.addClass('ai-assistant-window');
            const btn = html.find('.dialog-button.save');
            btn.addClass('gemini-main-button');
            btn.html(`<i class="fas fa-rocket"></i> ${loc('WizBtnSave')}`);
            html.find('#wiz-provider, #wiz-theme').change(function () {
                const liveProvider = html.find('#wiz-provider').val();
                const liveTheme = html.find('#wiz-theme').val();
                applyGlobalTheme(liveProvider, liveTheme);
            });
            setTimeout(() => { win.css("width", "500px"); win.css("height", "auto"); }, 50);
        },
        default: "save"
    }, { width: 500, height: "auto" }).render(true);
}


const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

class AiAssistantApp extends HandlebarsApplicationMixin(ApplicationV2) {
    constructor(doc, specialContext = null) {
        super();
        this.document = doc;
        this.specialContext = specialContext;

        // Initial State
        this.activeMode = 'chat'; // Default, will verify permissions in prepareContext
        this.expandPages = false;
        this.promptValue = "";
        this.sendFull = game.settings.get(MODULE_ID, 'sendFullData');

        // Determine Title
        let title = `AI Assistant: ${doc.name}`;
        if (specialContext && specialContext.type === 'skill') title = `AI Assistant: ${specialContext.name}`;
        this.windowTitle = title;
    }

    static DEFAULT_OPTIONS = {
        tag: "form",
        id: "ai-assistant-app",
        window: {
            icon: "fas fa-brain",
            resizable: true,
            contentClasses: ["ai-assistant-window"]
        },
        position: {
            width: 500,
            height: "auto"
        },
        actions: {
            selectMode: AiAssistantApp.onSelectMode,
            togglePageList: AiAssistantApp.onTogglePageList,
            selectAllPages: AiAssistantApp.onSelectAllPages,
            selectNonePages: AiAssistantApp.onSelectNonePages,
            copy: AiAssistantApp.onCopy,
            download: AiAssistantApp.onDownload
        }
    };

    static PARTS = {
        main: {
            template: "modules/phils-ai-assistant/templates/assistant-window.hbs"
        }
    };

    get title() {
        return this.windowTitle;
    }

    async _prepareContext(options) {
        const doc = this.document;
        const specialContext = this.specialContext;
        const systemName = game.settings.get(MODULE_ID, 'gameSystem');
        const isJournal = doc.documentName === "JournalEntry";
        const isGM = game.user.isGM;

        // Permission Check for Updates
        let allowUpdate = false;
        const type = doc.documentName;
        if (type === "Actor") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateActor');
        else if (type === "Item") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateItem');
        else if (type === "JournalEntry") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateJournal');

        // Skill context prevents updates usually
        if (specialContext && specialContext.type === 'skill') allowUpdate = false;

        const canUpdate = (isGM || (doc.isOwner && allowUpdate)) && (!specialContext || specialContext.type !== 'skill');

        const allFeatures = [
            { id: 'chat', icon: 'fas fa-comments', label: loc('ModeChat'), condition: true, infoText: loc('InfoTextChat') },
            { id: 'image', icon: 'fas fa-palette', label: loc('ModeImage'), condition: true, infoText: loc('InfoTextImage') },
            { id: 'story', icon: 'fas fa-book-open', label: loc('ModeStory'), condition: canUpdate && isJournal, infoText: loc('InfoTextStory') },
            { id: 'update', icon: 'fas fa-wand-magic-sparkles', label: loc('ModeUpdate'), condition: canUpdate && !isJournal, infoText: loc('InfoText') }
        ];

        // Filter valid modes
        const modes = allFeatures.filter(f => f.condition).map(f => ({
            ...f,
            isActive: (this.activeMode === f.id)
        }));

        // Ensure active mode is valid (fallback if permission changed or bad init)
        if (!modes.find(m => m.id === this.activeMode)) {
            this.activeMode = modes[0].id;
            modes[0].isActive = true;
        }

        const activeFeature = modes.find(m => m.id === this.activeMode);

        // Logic for default "Send Full" checkbox
        // If mode switched, we might want to toggle it, but we respect user choice if they clicked it.
        // For simplicity, we just use the stored state which we update on mode switch if needed.

        return {
            modes: modes,
            activeInfoText: activeFeature ? activeFeature.infoText : "",
            systemName: systemName,
            promptValue: this.promptValue,
            sendFull: this.sendFull,

            // Pages
            showPageSelection: isJournal && doc.pages.size > 0,
            expandPages: this.expandPages,
            pages: isJournal ? Array.from(doc.pages).map(p => ({ id: p.id, name: p.name })) : []
        };
    }

    /* --- ACTIONS --- */

    static onSelectMode(event, target) {
        const mode = target.dataset.mode;
        this.activeMode = mode;

        // Auto-configure checkbox based on mode
        if (mode === 'chat' || mode === 'image' || mode === 'story') {
            this.sendFull = false;
        } else if (mode === 'update') {
            this.sendFull = true;
        }

        // Save Prompt (it's bound, but safety first)
        const form = new FormData(this.element);
        this.promptValue = form.get("prompt");

        this.render(true);
    }

    static onTogglePageList(event, target) {
        this.expandPages = !this.expandPages;
        // Persist prompt
        const form = new FormData(this.element);
        this.promptValue = form.get("prompt");
        this.render(true);
    }

    static onSelectAllPages(event, target) {
        const checkboxes = this.element.querySelectorAll('.page-selector');
        checkboxes.forEach(c => c.checked = true);
    }

    static onSelectNonePages(event, target) {
        const checkboxes = this.element.querySelectorAll('.page-selector');
        checkboxes.forEach(c => c.checked = false);
    }

    static async onCopy(event, target) {
        await this.handleSubmission(false);
    }

    static async onDownload(event, target) {
        await this.handleSubmission(true);
    }

    /* --- LOGIC --- */

    async handleSubmission(isDownload) {
        const form = new FormData(this.element);
        const prompt = form.get("prompt");
        const sendFull = form.get("sendFull") === "on";
        const mode = this.activeMode; // Radio buttons are tricky in V2 actions, simpler to track state or read form
        // actually form.get('mode') works if they are inputs.

        // Get Pages
        let selectedPageIds = null;
        if (this.document.documentName === "JournalEntry") {
            // FormData doesn't return all checked values for same name easily in native API without getAll
            // But we can check the elements
            const checked = this.element.querySelectorAll('.page-selector:checked');
            if (checked.length > 0) {
                selectedPageIds = Array.from(checked).map(c => c.value);
            }
        }

        this.close(); // Close immediately as per original behavior? OR keep open? 
        // Original Dialog buttons closed it.

        handlePromptExecution(this.document, prompt, mode, sendFull, isDownload, selectedPageIds, this.specialContext);
    }
}

function startGeminiDialog(doc, specialContext = null) {
    new AiAssistantApp(doc, specialContext).render(true);
}



async function handlePromptExecution(doc, userPrompt, mode, sendFull, isDownload, selectedPageIds, specialContext) {
    const systemName = game.settings.get(MODULE_ID, 'gameSystem');
    const providerKey = game.settings.get(MODULE_ID, 'aiProvider') || 'gemini';
    const url = THEMES[providerKey].url;


    let fullPrompt = "";
    if (mode === 'chat') fullPrompt = await prepareQuestionPromptText(doc, userPrompt, systemName, sendFull, selectedPageIds, specialContext);
    else if (mode === 'image') fullPrompt = await prepareImagePromptText(doc, userPrompt, systemName, sendFull, selectedPageIds, specialContext);
    else if (mode === 'update') fullPrompt = await prepareFullDataPromptText(doc, userPrompt, systemName, sendFull, selectedPageIds);
    else if (mode === 'story') fullPrompt = await prepareStoryPromptText(doc, userPrompt, systemName, sendFull, selectedPageIds);

    if (!fullPrompt) return; // Error handled inside prepare steps if needed


    const limit = game.settings.get(MODULE_ID, 'promptWarningLimit');
    const isOverLimit = (limit > 0 && fullPrompt.length > limit);

    if (providerKey === 'ollama') {
        // --- Ollama Direct Integration ---
        if (isOverLimit) {
            const confirm = await Dialog.confirm({
                title: loc('LargePromptTitle'),
                content: `<p>${loc('LargePromptBody', { size: fullPrompt.length })}</p><p>Soll trotzdem direkt an Ollama gesendet werden?</p>`
            });
            if (!confirm) return;
        }

        ui.notifications.info("Sende Anfrage an Ollama...");
        const response = await callOllamaAPI(fullPrompt, systemName, url);

        if (response) {
            if (mode === 'update') {
                const result = await processUpdate(doc, response);
                if (typeof result === 'string') showResultDialog(doc, response, result);
            } else {
                showResultDialog(doc, response);
            }
        }
        return;
    }

    if (isDownload) {
        // Direct Download requested
        await executeDownloadFlow(doc, fullPrompt, userPrompt, systemName, url, mode, specialContext);
    } else if (isOverLimit) {
        // Warning Dialog
        showLargePromptDialog(doc, fullPrompt, userPrompt, systemName, url, mode, specialContext);
    } else {
        // Standard Copy
        copyAndOpen(fullPrompt, doc, (mode === 'update'), url);
    }
}

function showLargePromptDialog(doc, fullPrompt, userPrompt, systemName, url, mode, specialContext) {
    const size = new Intl.NumberFormat().format(fullPrompt.length);
    const content = `
    <div class="ai-assistant-content">
        <h3 style="border-bottom:1px solid var(--ai-border-color); margin-bottom:10px;"><i class="fas fa-exclamation-triangle" style="color:#FFA500;"></i> ${loc('LargePromptTitle')}</h3>
        <p>${loc('LargePromptBody', { size: size })}</p>
        <div style="margin-top:20px; display:flex; gap:10px; justify-content:center;">
             <button class="gemini-main-button" id="btn-dl-file"><i class="fas fa-file-download"></i> ${loc('BtnDownloadFile')}</button>
             <button class="gemini-secondary-button" id="btn-copy-any"><i class="fas fa-copy"></i> ${loc('BtnCopyAnyway')}</button>
        </div>
    </div>`;

    new Dialog({
        title: loc('LargePromptTitle'), content: content,
        buttons: {},
        render: (html) => {
            html.closest('.window-app').addClass('ai-assistant-window');
            html.find('#btn-dl-file').click(async () => {
                html.closest('.app').find('.close').click(); // Close dialog
                await executeDownloadFlow(doc, fullPrompt, userPrompt, systemName, url, mode, specialContext);
            });
            html.find('#btn-copy-any').click(async () => {
                html.closest('.app').find('.close').click();
                copyAndOpen(fullPrompt, doc, true, url);
            });
        }
    }, { width: 400 }).render(true);
}

async function executeDownloadFlow(doc, fullDataContent, userPrompt, systemName, url, mode, specialContext) {

    const name = doc.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `${name}_ai_data.json`;

    const blob = new Blob([fullDataContent], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();


    let promptKey = "ReadFileChat";
    if (mode === 'update') promptKey = "ReadFileUpdate";
    else if (mode === 'story') promptKey = "ReadFileStory";
    else if (mode === 'image') promptKey = "ReadFileImage";

    let docName = doc.name;
    if (specialContext) docName = `${docName} (${specialContext.name})`;

    const readPrompt = resolvePrompt(promptKey, { systemName, docName: docName, userPrompt });



    if (mode === 'update' || mode === 'story') {
        await navigator.clipboard.writeText(readPrompt);
        ui.notifications.info(loc('PromptCopied'));
        window.open(url, "_blank");

        showResultDialog(doc);
    } else {
        copyAndOpen(readPrompt, doc, false, url);
    }
}



async function prepareFullDataPromptText(doc, userPrompt, systemName, sendFull, selectedPages = null) {
    const cleanData = getCleanData(doc, sendFull, selectedPages);
    const jsonString = sendFull ? JSON.stringify(cleanData, null, 2) : JSON.stringify(cleanData);
    return resolvePrompt("UpdateItem", { systemName, jsonString, userPrompt });
}

async function prepareStoryPromptText(doc, userPrompt, systemName, sendFull, selectedPages = null) {
    const cleanData = getCleanData(doc, sendFull, selectedPages);
    const jsonString = sendFull ? JSON.stringify(cleanData, null, 2) : JSON.stringify(cleanData);
    return resolvePrompt("WriteStory", { systemName, jsonString, userPrompt });
}

async function prepareQuestionPromptText(doc, userPrompt, systemName, sendFull, selectedPages = null, specialContext = null) {
    const cleanDataForLogic = getCleanData(doc, sendFull, selectedPages);
    let descText = getContextDescription(doc, cleanDataForLogic);

    if (specialContext && specialContext.type === 'skill') {
        const headerInfo = `\n> **FOKUS AUF SKILL: ${specialContext.name}**\n> Aktueller Wert: ${specialContext.data?.totalModifier || "Unbekannt"}\n\n`;
        descText = headerInfo + descText;
    }

    const jsonString = sendFull ? JSON.stringify(cleanDataForLogic, null, 2) : JSON.stringify(cleanDataForLogic);
    const fullContext = `# ${cleanDataForLogic.name || "Character"}\n\n## DESCRIPTION\n${descText}\n\n## DATA (JSON)\n\`\`\`json\n${jsonString}\n\`\`\``;

    let docName = cleanDataForLogic.name;
    if (specialContext) docName = `${docName} (${specialContext.name})`;

    return resolvePrompt("ChatQuestion", { systemName, docName: docName, docDesc: fullContext, userPrompt });
}

async function prepareImagePromptText(doc, userPrompt, systemName, sendFull, selectedPages = null, specialContext = null) {
    const cleanDataForLogic = getCleanData(doc, sendFull, selectedPages);
    const descText = getContextDescription(doc, cleanDataForLogic);
    const jsonString = sendFull ? JSON.stringify(cleanDataForLogic, null, 2) : JSON.stringify(cleanDataForLogic); // JSON String for Prompt

    const fullContext = `# ${cleanDataForLogic.name || "Character"}\n\n## VISUAL DESCRIPTION / BIO\n${descText}\n\n## CHARACTER DATA (JSON)\n\`\`\`json\n${jsonString}\n\`\`\``;

    let docName = cleanDataForLogic.name;
    if (specialContext) docName = `${docName} (${specialContext.name})`;

    return resolvePrompt("GenerateImage", { systemName, docName: docName, docDesc: fullContext, userPrompt });
}

function showResultDialog(doc, initialContent = "", errorMsg = null) {
    let errorHTML = "";
    if (errorMsg) {
        errorHTML = `
        <div style="background:#7a1d1d; color:#fff; padding:8px; border-radius:4px; margin-bottom:8px; font-size:0.85em; border:1px solid #ff5555;">
            <div style="font-weight:bold; margin-bottom:4px;"><i class="fas fa-exclamation-triangle"></i> JSON Fehler erkannt:</div>
            <div style="font-family:monospace; opacity:0.9;">${errorMsg}</div>
            <div style="margin-top:5px; text-align:right;">
                <a id="btn-copy-error" style="color:#fff; text-decoration:underline; cursor:pointer;">Fehler kopieren (für KI)</a>
            </div>
        </div>`;
    }

    const content = `
    <div class="ai-assistant-content form-group" style="display: flex; flex-direction: column; gap: 8px; position: relative;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <label class="ai-result-label" style="margin:0;">${loc('ResultLabel')}</label>
            <div style="display:flex; gap:10px;">
                 <a class="ai-inline-btn" title="${loc('BtnClear') || 'Clear'}" style="font-size:0.9em; opacity:0.7;" id="btn-clear-json"><i class="fas fa-trash"></i> ${loc('BtnClear') || 'Leeren'}</a>
                 <a class="ai-inline-btn" title="Einfügen" style="font-size:0.9em; opacity:0.7;" id="btn-paste-json"><i class="fas fa-paste"></i> Einfügen</a>
            </div>
        </div>
        ${errorHTML}
        <!-- Hybrid Input: Text Area for Paste -->
        <textarea name="aiResponse" style="width:100%; height: 300px; font-size: 0.8em;" placeholder='{"name": "..."}'>${initialContent}</textarea>
        
        <!-- Alternative: Upload JSON File -->
        <div style="margin-top:5px; border-top:1px solid var(--ai-border-color); padding-top:5px;">
             <input type="file" id="ai-file-upload-alt" accept=".json" style="display:none;" />
             <a id="btn-trigger-upload-alt" style="font-size:0.85em; text-decoration:underline; cursor:pointer; opacity:0.7;">
                <i class="fas fa-file-upload"></i> Alternativ: JSON-Datei hochladen (Import)
             </a>
        </div>
    </div>`;

    new Dialog({
        title: `Update: ${doc.name}`, content: content,
        buttons: {
            update: {
                label: loc('BtnUpdate'), icon: '<i class="fas fa-file-import"></i>',
                callback: async (html) => {
                    const text = html.find('[name="aiResponse"]').val();
                    if (text) {
                        const result = await processUpdate(doc, text);
                        if (typeof result === 'string') {
                            showResultDialog(doc, text, result);
                        }
                    }
                }
            }
        }, default: "update",
        render: (html) => {
            html.closest('.window-app').addClass('ai-assistant-window');
            html.find('.dialog-button.default').addClass('gemini-main-button');
            html.find('#btn-clear-json').click(() => { html.find('[name="aiResponse"]').val('').focus(); });

            html.find('#btn-paste-json').click(async () => {
                try {
                    const text = await navigator.clipboard.readText();
                    html.find('[name="aiResponse"]').val(text).focus();
                } catch (err) {
                    ui.notifications.error("Zugriff auf Zwischenablage verweigert. Bitte STRG+V nutzen.");
                }
            });

            html.find('#btn-copy-error').click(() => {
                const errText = html.find('.ai-assistant-content div[style*="monospace"]').text();
                navigator.clipboard.writeText("Ich habe diesen Fehler erhalten: " + errText + ". Bitte korrigiere das JSON.");
                ui.notifications.info("Fehlermeldung kopiert!");
            });

            // File Upload Logic (Alternative)
            const fileInput = html.find('#ai-file-upload-alt');
            html.find('#btn-trigger-upload-alt').click(() => fileInput.click());
            fileInput.change(async (ev) => {
                const file = ev.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const text = e.target.result;
                    // Populate textarea so user can see/edit before applying, or apply immediately? 
                    // Better to populate textarea to be safe and consistent.
                    html.find('[name="aiResponse"]').val(text);
                    ui.notifications.info("Datei geladen! Klicke auf 'Änderungen anwenden'.");
                };
                reader.readAsText(file);
            });

            setTimeout(() => { html.closest('.window-app').css("width", "500px"); html.closest('.window-app').css("height", "auto"); }, 50);
        }
    }, { width: 500, height: "auto" }).render(true);
}


function getCleanData(doc, sendFull, allowedPageIds = null) {
    const rawData = doc.toObject();

    // Technical/Internal fields to strip
    const blocklist = [
        "_stats", "ownership", "flags", "sort", "folder", "_key",
        "prototypeToken", "img", "thumb", "effects"
    ];

    if (!sendFull) blocklist.push("_id");

    blocklist.forEach(key => delete rawData[key]);

    if (doc.documentName === "JournalEntry" && rawData.pages && allowedPageIds) {
        rawData.pages = rawData.pages.filter(p => allowedPageIds.includes(p._id));
    }

    // Spellcasting Entry Context (PF2e)
    if (doc.type === "spellcastingEntry" && doc.parent) {
        const associatedSpells = doc.parent.items.filter(i => i.type === "spell" && i.system.location?.value === doc.id);
        rawData.containedSpells = associatedSpells.map(s => ({ name: s.name, level: s.system.level?.value }));
    }

    // System Data Cleanup
    if (rawData.system) {
        delete rawData.system._migration;
        delete rawData.system.publication;
        // We remove rules by default as they are very verbose. 
        // If advanced users need rules, we might need a separate setting, but for now we optimize for size.
        delete rawData.system.rules;
    }

    // Item Cleanup (Iterate through all items)
    if ((doc.documentName === "Actor" || doc.documentName === "Item") && rawData.items && Array.isArray(rawData.items)) {
        rawData.items = rawData.items.map(i => {
            const cleanItem = {
                name: i.name,
                type: i.type,
                system: i.system
            };

            // Keep ID only if sendFull is true (for updates)
            if (sendFull) {
                cleanItem._id = i._id;
            }

            if (cleanItem.system) {
                delete cleanItem.system._migration;
                delete cleanItem.system.publication;
                delete cleanItem.system.rules;
                delete cleanItem.system.slug;
                // delete cleanItem.system.traits; // Keep traits, they provide context (e.g. "magical", "fire")

                // Clean description: Strip HTML but keep the text content
                if (cleanItem.system.description && cleanItem.system.description.value) {
                    cleanItem.system.description.value = cleanItem.system.description.value
                        .replace(/<[^>]*>?/gm, ' ') // Replace tags with space
                        .replace(/\s+/g, ' ')       // Collapse multiple spaces
                        .trim();
                }
            }
            return cleanItem;
        });
    }

    return rawData;
}

function getContextDescription(doc, rawData) {
    let desc = "";
    if (rawData.system?.description?.value) desc = rawData.system.description.value;
    else if (rawData.system?.details?.biography?.value) desc = rawData.system.details.biography.value;
    else if (rawData.system?.details?.publicNotes) desc = rawData.system.details.publicNotes;
    else if (doc.documentName === "JournalEntry" && rawData.pages) desc = rawData.pages.map(p => p.text?.content || "").join("\n\n");

    if (rawData.containedSpells && rawData.containedSpells.length > 0) {
        desc += "\n\n### ENTHALTENE ZAUBER\n" + rawData.containedSpells.map(s => `- ${s.name} (Level ${s.level || 1})`).join("\n");
    }

    // Strip HTML from the main description as well
    let clean = desc.replace(/<[^>]*>?/gm, '\n').replace(/\n\s*\n/g, '\n\n').trim();
    return clean ? clean.substring(0, 8000) : "(No description found)";
}



async function copyAndOpen(text, doc, isUpdateMode, targetUrl) {
    if (!text) { ui.notifications.error("Error: Empty Prompt"); return; }
    try {
        await navigator.clipboard.writeText(text);
        ui.notifications.info(loc('PromptCopied'));
        window.open(targetUrl, "_blank");
        if (isUpdateMode) showResultDialog(doc);
    } catch (err) { ui.notifications.error(loc('CopyError')); }
}

async function processUpdate(doc, rawText) {
    const jsonMatch = rawText.match(/```json\s*([\s\S]*?)\s*```/i);
    let cleanJson = "";
    if (jsonMatch && jsonMatch[1]) cleanJson = jsonMatch[1];
    else {
        const firstBrace = rawText.indexOf('{');
        const lastBrace = rawText.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) cleanJson = rawText.substring(firstBrace, lastBrace + 1);
    }

    if (!cleanJson) {
        return loc('ErrorJsonInvalid') || "No valid JSON found in response. (Missing ```json blocks?)";
    }

    cleanJson = cleanJson.replace(/[\u201C\u201D]/g, '"').replace(/[\u0091\u0092]/g, "'");

    try {
        const jsonData = JSON.parse(cleanJson);


        if (jsonData._id && jsonData._id !== doc.id) {
            const msg = `ID Check Failed: Root ID '${jsonData._id}' does not match Document '${doc.id}'`;
            console.warn(msg);
            return msg;
        }

        const validIds = collectAllIds(doc.toObject());
        validIds.add(doc.id);

        const validationErrors = validateDeepIds(jsonData, validIds);
        if (validationErrors.length > 0) {
            const errorMsg = "ID Verification Failed:\n" + validationErrors.join("\n");
            console.warn(errorMsg);
            ui.notifications.error("Update rejected due to ID errors. See console.");
            return errorMsg;
        }


        delete jsonData._id;

        if (doc.documentName === "JournalEntry" && jsonData.pages) {
            try {
                await doc.clone({ name: `${doc.name} (Backup)` }, { save: true });
                ui.notifications.info(loc('BackupCreated', { name: doc.name }) || `Backup created: "${doc.name} (Backup)"`);
            } catch (err) {
                console.warn("Backup creation failed:", err);
            }
        }

        if ((doc.documentName === "Actor" || doc.documentName === "Item") && jsonData.items && Array.isArray(jsonData.items)) {
            jsonData.items = jsonData.items.map(newItem => {
                // Double check (redundant but safe)
                if (newItem._id && !validIds.has(newItem._id)) {
                    console.warn(`AI Assistant | Safety: Skipped item with unknown ID: ${newItem._id}`);
                    return null;
                }

                if (doc.items) {
                    const original = doc.items.get(newItem._id);
                    if (original && (newItem.system?.description?.value === "" || newItem.system?.description?.value === null)) {
                        if (newItem.system && newItem.system.description) delete newItem.system.description;
                    }
                }
                return newItem;
            }).filter(i => i !== null);
        }

        await doc.update(jsonData);
        ui.notifications.info(loc('Success', { docName: doc.name }));
        return null;
    } catch (err) {
        console.error("AI Assistant | Update Error:", err);
        return err.message;
    }
}


function collectAllIds(obj, ids = new Set()) {
    if (!obj || typeof obj !== 'object') return ids;

    if (Array.isArray(obj)) {
        obj.forEach(item => collectAllIds(item, ids));
    } else {
        if (obj._id) ids.add(obj._id);
        if (obj.id) ids.add(obj.id);

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                collectAllIds(obj[key], ids);
            }
        }
    }
    return ids;
}

function validateDeepIds(json, validIds, errors = [], path = "") {
    if (!json || typeof json !== 'object') return errors;

    if (Array.isArray(json)) {
        json.forEach((item, index) => validateDeepIds(item, validIds, errors, `${path}[${index}]`));
    } else {
        // Check _id
        if (json._id && !validIds.has(json._id)) {
            errors.push(`Unknown ID found at ${path}._id: '${json._id}'`);
        }
        // Check id
        if (json.id && typeof json.id === 'string' && !validIds.has(json.id)) {
            if (json.id.length === 16) errors.push(`Unknown ID found at ${path}.id: '${json.id}'`);
        }

        for (const key in json) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
                validateDeepIds(json[key], validIds, errors, path ? `${path}.${key}` : key);
            }
        }
    }
    return errors;
}

// --- Ollama Client ---

async function callOllamaAPI(fullPrompt, systemName, baseUrl) {
    const model = game.settings.get(MODULE_ID, 'ollamaModel') || 'llama3';

    // Ensure URL has no trailing slash and api/chat
    const cleanUrl = baseUrl.replace(/\/$/, "");
    const endpoint = `${cleanUrl}/api/chat`;

    const payload = {
        model: model,
        messages: [
            { role: "system", content: `You are a helpful assistant for the tabletop RPG system ${systemName}.` },
            { role: "user", content: fullPrompt }
        ],
        stream: false
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Ollama API Error (${response.status}): ${errText}`);
        }

        const data = await response.json();
        return data.message?.content || "";

    } catch (err) {
        console.error("AI Assistant | Ollama Error:", err);
        ui.notifications.error(`Ollama Error: ${err.message}`);
        return null;
    }
}

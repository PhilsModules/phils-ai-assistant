const MODULE_ID = 'phils-ai-assistant';

// --- THEME DEFINITIONEN ---
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
    foundry: {
        label: "Foundry VTT (Standard)", url: "",
        vars: {
            '--ai-bg': '#f7f3e8',
            '--ai-text': '#191813',
            '--ai-text-muted': 'rgba(0,0,0,0.6)',
            '--ai-input-bg': 'rgba(255, 255, 255, 0.5)',
            '--ai-input-border': 'rgba(0,0,0,0.2)',
            '--ai-border-color': '#5e5c56',
            '--ai-accent': '#782e22',
            '--ai-gradient': 'linear-gradient(90deg, #782e22, #4a1c17)',
            '--ai-font': '"Signika", sans-serif',
            '--ai-backdrop': 'none',
            '--ai-btn-text': '#fff',
            '--wiz-section-bg': 'rgba(0,0,0,0.03)',
            '--wiz-hint': 'rgba(0,0,0,0.6)',
            '--wiz-option-bg': '#fff',
            '--wiz-option-color': '#000'
        },
        isDark: false
    }
};

// --- STYLE MANAGER ---
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

// --- HELPER FUNCTIONS ---
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

// --- INIT & SETTINGS ---
Hooks.once('init', async () => {
    game.settings.register(MODULE_ID, 'firstRunConfigured', { scope: 'client', config: false, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'worldDefaultProvider', {
        name: "AIASSISTANT.Settings.WorldDefault.Name", hint: "AIASSISTANT.Settings.WorldDefault.Hint", scope: 'world', config: true, type: String, default: 'gemini',
        choices: { 'gemini': 'Google Gemini', 'chatgpt': 'ChatGPT', 'claude': 'Anthropic Claude', 'copilot': 'Microsoft Copilot', 'perplexity': 'Perplexity AI' }
    });
    game.settings.register(MODULE_ID, 'languageOverride', {
        name: "AIASSISTANT.Settings.Language.Name", hint: "AIASSISTANT.Settings.Language.Hint", scope: 'client', config: true, type: String, default: 'auto',
        choices: { 'auto': 'Auto', 'en': 'English', 'de': 'Deutsch' }, onChange: () => location.reload()
    });
    game.settings.register(MODULE_ID, 'aiProvider', {
        name: "AIASSISTANT.Settings.Provider.Name", hint: "AIASSISTANT.Settings.Provider.Hint", scope: 'client', config: true, type: String, default: 'gemini',
        choices: { 'gemini': 'Google Gemini', 'chatgpt': 'ChatGPT', 'claude': 'Anthropic Claude', 'copilot': 'Microsoft Copilot', 'perplexity': 'Perplexity AI' },
        onChange: () => applyGlobalTheme()
    });
    game.settings.register(MODULE_ID, 'aiTheme', {
        name: "AIASSISTANT.Settings.Theme.Name", hint: "AIASSISTANT.Settings.Theme.Hint", scope: 'client', config: true, type: String, default: 'auto',
        choices: { 'auto': 'Auto', 'gemini': 'Gemini Theme', 'chatgpt': 'ChatGPT Theme', 'claude': 'Claude Theme', 'copilot': 'Copilot Theme', 'perplexity': 'Perplexity Theme', 'foundry': 'Foundry VTT' },
        onChange: () => applyGlobalTheme()
    });
    game.settings.register(MODULE_ID, 'gameSystem', { name: "AIASSISTANT.Settings.GameSystem.Name", hint: "AIASSISTANT.Settings.GameSystem.Hint", scope: 'world', config: true, type: String, default: 'Pathfinder 2e' });
    game.settings.register(MODULE_ID, 'minimumRole', { name: "AIASSISTANT.Settings.MinRole.Name", hint: "AIASSISTANT.Settings.MinRole.Hint", scope: 'world', config: true, type: Number, default: 4, choices: { 1: "Player", 2: "Trusted", 3: "Assistant", 4: "GM" }, onChange: () => location.reload() });
    game.settings.register(MODULE_ID, 'sendFullData', { name: "AIASSISTANT.Settings.SendFullData.Name", hint: "AIASSISTANT.Settings.SendFullData.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateActor', { name: "AIASSISTANT.Settings.PlayerUpdateActor.Name", hint: "AIASSISTANT.Settings.PlayerUpdateActor.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateItem', { name: "AIASSISTANT.Settings.PlayerUpdateItem.Name", hint: "AIASSISTANT.Settings.PlayerUpdateItem.Hint", scope: 'world', config: true, type: Boolean, default: false });
    game.settings.register(MODULE_ID, 'playerCanUpdateJournal', { name: "AIASSISTANT.Settings.PlayerUpdateJournal.Name", hint: "AIASSISTANT.Settings.PlayerUpdateJournal.Hint", scope: 'world', config: true, type: Boolean, default: false });
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
});

// --- HOOKS ---
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

// --- WIZARD ---
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
                        await game.settings.set(MODULE_ID, 'aiProvider', provider);
                        await game.settings.set(MODULE_ID, 'aiTheme', theme);
                        await game.settings.set(MODULE_ID, 'languageOverride', lang);

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

// --- GLOSSARY & PAGE UTILS ---


// --- DIALOG & LOGIC ---
function startGeminiDialog(doc, specialContext = null) {
    const systemName = game.settings.get(MODULE_ID, 'gameSystem');
    const isGM = game.user.isGM;
    const isOwner = doc.isOwner;
    const defaultFull = game.settings.get(MODULE_ID, 'sendFullData');
    const providerKey = game.settings.get(MODULE_ID, 'aiProvider') || 'gemini';
    const url = THEMES[providerKey].url;
    const isJournal = doc.documentName === "JournalEntry";

    let allowUpdate = false;
    const type = doc.documentName;
    if (type === "Actor") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateActor');
    else if (type === "Item") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateItem');
    else if (type === "JournalEntry") allowUpdate = game.settings.get(MODULE_ID, 'playerCanUpdateJournal');
    if (specialContext && specialContext.type === 'skill') allowUpdate = false;
    const canUpdate = (isGM || (isOwner && allowUpdate)) && (!specialContext || specialContext.type !== 'skill');

    const allFeatures = [
        { id: 'chat', icon: 'fas fa-comments', label: loc('ModeChat'), condition: true, infoText: loc('InfoTextChat') },
        { id: 'image', icon: 'fas fa-palette', label: loc('ModeImage'), condition: true, infoText: loc('InfoTextImage') },

        { id: 'story', icon: 'fas fa-book-open', label: loc('ModeStory'), condition: canUpdate && isJournal, infoText: loc('InfoTextStory') },
        { id: 'update', icon: 'fas fa-wand-magic-sparkles', label: loc('ModeUpdate'), condition: canUpdate && !isJournal, infoText: loc('InfoText') }
    ];

    let pillsHTML = "";
    let activeFound = false;
    allFeatures.filter(f => f.condition).forEach((feat) => {
        let isActive = "";
        let isChecked = "";
        if (!activeFound) { isActive = "active"; isChecked = "checked"; activeFound = true; }
        pillsHTML += `<label class="gemini-pill ${isActive}" data-info="${feat.infoText}" data-mode="${feat.id}"><input type="radio" name="mode" value="${feat.id}" ${isChecked}><i class="${feat.icon}"></i> <span>${feat.label}</span></label>`;
    });

    let pageSelectionHTML = "";
    if (isJournal && doc.pages.size > 0) {
        let itemsHTML = "";


        const pageList = Array.from(doc.pages);
        pageList.forEach(p => {
            const checkedAttr = "";

            itemsHTML += `
            <div style="display:flex; align-items:center; margin-bottom:4px; font-size:0.9em;">
                <input type="checkbox" class="page-selector" value="${p.id}" ${checkedAttr} style="margin-right:8px;">
                <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${p.name}">${p.name}</span>
            </div>`;
        });

        pageSelectionHTML = `
        <div id="page-selection-wrapper" style="display:none; margin-bottom:10px; background:var(--ai-input-bg); border:1px solid var(--ai-input-border); border-radius:6px; padding:5px;">
            <div id="page-list-header" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:4px;">
                <label style="font-weight:bold; font-size:0.9em; cursor:pointer;">${loc('SelectPages') || 'Seiten auswählen'} <i class="fas fa-chevron-down" style="font-size:0.8em; margin-left:5px;"></i></label>
                <div style="font-size:0.8em;">
                    <a id="pages-all" style="margin-right:5px; cursor:pointer;">Alle</a> / <a id="pages-none" style="margin-left:5px; cursor:pointer;">Keine</a>
                </div>
            </div>
            <div id="page-list-content" style="display:none; margin-top:5px; padding-top:5px; border-top:1px solid var(--ai-input-border); max-height:150px; overflow-y:auto;">
                ${itemsHTML}
            </div>

        </div>`;
    }

    let title = `AI Assistant: ${doc.name}`;
    if (specialContext && specialContext.type === 'skill') title = `AI Assistant: ${specialContext.name}`;

    const content = `
    <div class="ai-assistant-content">
        <div class="form-group">
            <label style="font-weight:bold; display:block; margin-bottom:8px; text-align:center;">${loc('ModeLabel')}</label>
            <div class="gemini-nav-container">${pillsHTML}</div>
        </div>
        ${pageSelectionHTML}
        <div class="form-group" id="prompt-section" style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-weight: bold; font-size: 1.0em; text-align: center;">${loc('PromptLabel', { systemName })}</label>
            <textarea name="prompt" style="width:100%; height: 85px; padding: 8px; border-radius: 6px;" placeholder="${loc('PromptPlaceholder')}"></textarea>
            <div class="gemini-checkbox-container">
                <input type="checkbox" id="send-full" name="sendFull" ${defaultFull ? "checked" : ""}>
                <label for="send-full" style="cursor:pointer; margin:0; opacity:0.8;">${loc('CheckboxFullData')}</label>
            </div>
        </div>
        <p style="font-size: 0.85em; opacity:0.6; margin-top: 10px; margin-bottom: 15px; font-style: italic; text-align: center; line-height: 1.3;">
            <i class="fas fa-info-circle gemini-info-icon"></i><span id="info-text">${allFeatures[0].infoText}</span>
        </p>
    </div>`;

    const dialog = new Dialog({
        title: title, content: content,
        buttons: {
            go: {
                label: loc('BtnCopy'), icon: '<i class="fas fa-copy"></i>',
                callback: (html) => {
                    const prompt = html.find('[name="prompt"]').val();
                    const mode = html.find('input[name="mode"]:checked').val();
                    const sendFull = html.find('input[name="sendFull"]').is(':checked');

                    let selectedPageIds = null;


                    if (isJournal) {
                        const checkboxes = html.find('.page-selector:checked');
                        if (checkboxes.length > 0) {
                            selectedPageIds = [];
                            checkboxes.each((i, el) => selectedPageIds.push($(el).val()));
                        }

                    }

                    let finalUserPrompt = prompt;


                    if (mode === 'chat') prepareQuestionPrompt(doc, finalUserPrompt, systemName, sendFull, url, selectedPageIds, specialContext);
                    else if (mode === 'image') prepareImagePrompt(doc, finalUserPrompt, systemName, sendFull, url, selectedPageIds, specialContext);
                    else if (mode === 'update') prepareFullDataPrompt(doc, finalUserPrompt, systemName, sendFull, url, selectedPageIds);
                    else if (mode === 'story') prepareStoryPrompt(doc, finalUserPrompt, systemName, sendFull, url, selectedPageIds);

                }
            }
        }, default: "go",
        render: (html) => {
            html.closest('.app').css('height', 'auto');
            html.closest('.window-app').addClass('ai-assistant-window');
            html.find('.dialog-button.default').addClass('gemini-main-button');

            html.find('#page-list-header').click(() => {
                html.find('#page-list-content').slideToggle(200);
            });

            // "Alle / Keine" Buttons Logik
            html.find('#pages-all').click((e) => {
                e.stopPropagation();
                html.find('.page-selector').prop('checked', true);
            });
            html.find('#pages-none').click((e) => {
                e.stopPropagation();
                html.find('.page-selector').prop('checked', false);
            });

            const updateVisibility = () => {
                const mode = html.find('input[name="mode"]:checked').val();
                const pageWrapper = html.find('#page-selection-wrapper');
                const promptSection = html.find('#prompt-section');

                // Wir zeigen die Seitenauswahl nun IMMER bei Journalen, damit man auch für Fragen/Bilder filtern kann.
                if (isJournal) {
                    pageWrapper.slideDown(200);
                } else {
                    pageWrapper.slideUp(200);
                }

                promptSection.slideDown(200);

                const info = html.find(`.gemini-pill input[value="${mode}"]`).parent().data('info');
                html.find('#info-text').text(info);
                html.closest('.app').css('height', 'auto');
            };

            html.find('.gemini-pill').click(function () {
                $(this).addClass('active').siblings().removeClass('active').find('input').prop('checked', false);
                $(this).find('input').prop('checked', true);
                updateVisibility();
            });
            updateVisibility();
        }
    });
    dialog.render(true);
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
        <textarea name="aiResponse" style="width:100%; height: 300px; font-size: 0.8em;" placeholder='{"name": "..."}'>${initialContent}</textarea>
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
            setTimeout(() => { html.closest('.window-app').css("width", "500px"); html.closest('.window-app').css("height", "auto"); }, 50);
        }
    }, { width: 500, height: "auto" }).render(true);
}

// --- DATA PROCESSING & PROMPTS ---
function getCleanData(doc, sendFull, allowedPageIds = null) {
    const rawData = doc.toObject();
    delete rawData._stats; delete rawData.ownership; delete rawData.flags; delete rawData.sort; delete rawData.folder;

    if (doc.documentName === "JournalEntry" && rawData.pages && allowedPageIds) {
        rawData.pages = rawData.pages.filter(p => allowedPageIds.includes(p._id));
    }

    if (doc.type === "spellcastingEntry" && doc.parent) {
        const associatedSpells = doc.parent.items.filter(i => i.type === "spell" && i.system.location?.value === doc.id);
        rawData.containedSpells = associatedSpells.map(s => { return { name: s.name, level: s.system.level?.value }; });
    }
    if (!sendFull) {
        delete rawData.prototypeToken; delete rawData.img; delete rawData.thumb;
        if (doc.documentName === "Actor" || doc.documentName === "Item") {
            if (rawData.items && Array.isArray(rawData.items)) {
                rawData.items = rawData.items.map(i => {
                    const clean = { ...i };
                    if (clean.system?.description?.value) clean.system.description.value = "";
                    return clean;
                });
            }
        }
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
        desc += "\n\n--- ENTHALTENE ZAUBER (Liste) ---\n" + rawData.containedSpells.map(s => `- ${s.name} (Level ${s.level || 1})`).join("\n");
    }
    let clean = desc.replace(/<[^>]*>?/gm, '').trim();
    return clean ? clean.substring(0, 8000) : "(No description found)";
}

async function prepareFullDataPrompt(doc, userPrompt, systemName, sendFull, targetUrl, selectedPages = null) {
    const jsonString = JSON.stringify(getCleanData(doc, sendFull, selectedPages), null, 2);
    const finalPrompt = resolvePrompt("UpdateItem", { systemName, jsonString, userPrompt });
    copyAndOpen(finalPrompt, doc, true, targetUrl);
}

async function prepareStoryPrompt(doc, userPrompt, systemName, sendFull, targetUrl, selectedPages = null) {
    const jsonString = JSON.stringify(getCleanData(doc, sendFull, selectedPages), null, 2);
    const finalPrompt = resolvePrompt("WriteStory", { systemName, jsonString, userPrompt });
    copyAndOpen(finalPrompt, doc, true, targetUrl);
}



async function prepareQuestionPrompt(doc, userPrompt, systemName, sendFull, targetUrl, selectedPages = null, specialContext = null) {
    const cleanDataForLogic = getCleanData(doc, sendFull, selectedPages);
    let descText = getContextDescription(doc, cleanDataForLogic);
    let headerInfo = "";
    if (specialContext && specialContext.type === 'skill') {
        const skillName = specialContext.name;
        const skillData = specialContext.data;
        const skillVal = skillData?.totalModifier || skillData?.value || "Unbekannt";
        const skillRank = skillData?.rank ? `(Rank: ${skillData.rank})` : "";
        headerInfo = `\n!!! FOKUS AUF SKILL: ${skillName} !!!\nAktueller Wert: ${skillVal} ${skillRank}\nBitte beantworte die Frage spezifisch zu diesem Skill.\n\n`;
        descText = headerInfo + descText;
    }
    const jsonString = JSON.stringify(cleanDataForLogic, null, 2);
    const fullContext = `TEXT / CONTENT:\n${descText}\n\nSTATS / DATA (JSON):\n\`\`\`json\n${jsonString}\n\`\`\``;
    let docName = cleanDataForLogic.name;
    if (specialContext) docName = `${docName} (${specialContext.name})`;
    const finalPrompt = resolvePrompt("ChatQuestion", { systemName, docName: docName, docDesc: fullContext, userPrompt });
    copyAndOpen(finalPrompt, doc, false, targetUrl);
}

async function prepareImagePrompt(doc, userPrompt, systemName, sendFull, targetUrl, selectedPages = null, specialContext = null) {
    const cleanDataForLogic = getCleanData(doc, sendFull, selectedPages);
    const descText = getContextDescription(doc, cleanDataForLogic);
    const jsonString = JSON.stringify(cleanDataForLogic, null, 2);
    const fullContext = `VISUAL DESCRIPTION / BIO:\n${descText}\n\nCHARACTER DATA (JSON):\n\`\`\`json\n${jsonString}\n\`\`\``;
    let docName = cleanDataForLogic.name;
    if (specialContext) docName = `${docName} (${specialContext.name})`;
    const finalPrompt = resolvePrompt("GenerateImage", { systemName, docName: docName, docDesc: fullContext, userPrompt });
    copyAndOpen(finalPrompt, doc, false, targetUrl);
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
                if (!newItem._id && doc.items) { console.warn(`AI Assistant | Safety: Item without ID skipped.`); return null; }
                if (doc.items) {
                    const original = doc.items.get(newItem._id);
                    if (original && (newItem.system?.description?.value === "" || newItem.system?.description?.value === null)) {
                        if (newItem.system && newItem.system.description) delete newItem.system.description;
                    }
                }
                return newItem;
            }).filter(i => i !== null);
        }



        if (jsonData.type && jsonData.type !== doc.type) ui.notifications.warn(`Achtung: Type-Change!`);
        await doc.update(jsonData);
        ui.notifications.success(loc('Success', { docName: doc.name }));
        return true;

    } catch (e) {
        console.error(e);
        return e.message;
    }
}

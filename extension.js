const app       = document.getElementById('app');
const header    = document.getElementById('extension--header');
const toggler   = document.getElementById('darkmode--toggler');

let isDarkMode  = false;

const toggle = async () => {
    isDarkMode = !isDarkMode;
    chrome.storage.sync.set({ "isDarkMode": isDarkMode });

    const currentTab = await getCurrentTab();
    chrome.tabs.sendMessage(currentTab.id, isDarkMode);
    changeExtensionStyles();
}

toggler.addEventListener('click', toggle);

/** On Popup */
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('isDarkMode', async (darkMode) => {
        isDarkMode = darkMode.isDarkMode;

        const onPinnacle = await isPinnacleTab();
        if(!onPinnacle) {
            handleURLMismatch();
            changeExtensionStyles();
            return;
        }

        const currentTab = await getCurrentTab();
        chrome.tabs.sendMessage(currentTab.id, isDarkMode);
        changeExtensionStyles();
    })
})

/*-------------------------------------------------------------------------------------*/

/* Extension Helpers */
const handleURLMismatch = () => {
    toggler.style.display = "none";

    const message = document.getElementById('error');
    message.style.display = "block";
}

const changeExtensionStyles = () => {
    app.style.setProperty('background-color', isDarkMode ? "#272D36" : "#FFFFFF");
    toggler.style.setProperty('background-color', isDarkMode ? "#DADADA" : "#484F55");
    header.style.setProperty('background-color', isDarkMode ? "#484F55" : "#F3FCF7");

    const logo = document.getElementById('header--logo');
    logo.src = isDarkMode ? "images/extension-logo-light-v2.png" : "images/extension-logo-dark.png";

    const knob = document.getElementsByClassName('knob')[0];
    isDarkMode ?  knob.classList.add('knob--on') : knob.classList.remove('knob--on');

    const p = document.getElementById('error');
    p.style.color = isDarkMode ? "#DADADA" : "#484F55";
}


const isPinnacleTab = async () => {
    const tab = await getCurrentTab();

    const pinnacle = /^(https:|http:)\/\/pinnacle\.pnc\.edu\.ph/g;
    const verifyURL = pinnacle.test(tab.url);

    return verifyURL;
}

const getCurrentTab = async () => {
    const queryOptions = { 
        active: true, 
        lastFocusedWindow: true, 
    };

    const [ tab ] = await chrome.tabs.query(queryOptions);

    return tab;
}
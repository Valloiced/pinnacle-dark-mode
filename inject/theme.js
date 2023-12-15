const _init = (isDarkMode) => {
    /* Default */
    _startup(isDarkMode);
    _global(isDarkMode);

    // Filter Domain and Get API
    const currentRoute = (window.location.href).replace('https://pinnacle.pnc.edu.ph', '');

    /* Dashboard */
    if(currentRoute =="/student") {
        changeDashboard(isDarkMode);
    }

    /* Classes */
    if(currentRoute.match(/student\/(class|post)\//g)) {
        changeClasses(isDarkMode);
    }

    /* Library */
    if(currentRoute.match(/student\/library/g)) {
        changeLibrary(isDarkMode);
    }

    /* Tables */
    if(currentRoute.match(/student\/(tracker|grade|account|notifications)/g)) {
        changeTables(isDarkMode);
    }
    
    /* Calendar */
    if(currentRoute.match(/student\/calendar/g)) {
        changeCalendar(isDarkMode);
    }
}

/* Listening for updates */
chrome.runtime.onMessage.addListener((isDarkMode) => {
    if(isDarkMode == null) {
        console.info("Error: Unable to change theme");
    }

    _init(isDarkMode);
})

/** Inject theme on startup */
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('isDarkMode', (darkMode) => {
        if(darkMode.isDarkMode == null) {
            console.info("Error: Unable to change theme");
        }
        
        _init(darkMode.isDarkMode);
    })
})

/*-------------------------------------------------------------------------------------*/
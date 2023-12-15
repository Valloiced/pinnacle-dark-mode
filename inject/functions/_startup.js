/** Logic: Prevent Flashing CSS Transitions on Startup */
const _startup = (isDarkMode) => {
    const body = document.body;
    const wrapper = body.getElementsByClassName('wrapper')[0];
    
    setStyle(wrapper, isDarkMode, {
        "display": "block"
    });
}
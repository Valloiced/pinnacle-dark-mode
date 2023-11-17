/** Helpers */
const setStyle = (element, isDarkMode, styles) => {
    if(!element || element.length > 1) return;

    for(const style in styles) {
        element.style.setProperty(style, isDarkMode ? styles[style] : DEFAULT, "important");
    }
}

const setStyleAll = (elements, isDarkMode, styles) => {
    if(elements.length == 0 ) return;

    for(const elem of elements) {
        for(const style in styles) {
            elem.style.setProperty(style, isDarkMode ? styles[style] : DEFAULT, "important");
        }
    }
}

/*-------------------------------------------------------------------------------------*/
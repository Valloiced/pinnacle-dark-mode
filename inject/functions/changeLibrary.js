const changeLibrary = (darkMode) => {
    const library = document.getElementById('library-content');

    const update = () => {
        const widgets = document.getElementsByClassName('widget-body');
        
        // Check if user is in Choose Libraries view and return 
        if(widgets.length > 1) {
            setStyleAll(widgets, darkMode, {
                "border": `1px solid ${BG_DEPTH_4}`
            });
            return;
        }

        /* Nav tabs */
        const navlink = document.getElementsByClassName('nav-link');

        setStyleAll(navlink, darkMode, {
            "color": TEXT_PRIMARY,
            "background-color": BG_DEPTH_3v1
        });

        /* Workbooks */
        const workbook = document.getElementById('nav-workbooks');
        const workbookCards = workbook.getElementsByClassName('card');
        const cardHeaders = workbook.getElementsByClassName('card-header');

        setStyleAll(workbookCards, darkMode, {
            "background-color": BG_DEPTH_3v1,
            "box-shadow": "0px 1px 5px rgba(0, 0, 0, 0.500)"
        });

        setStyleAll(cardHeaders, darkMode, {
            "color": TEXT_SECONDARY,
            "background-color": BG_DEPTH_3v2
        });

        /* Documents */
        const docs = document.getElementById('nav-docs');
        const docsAnchor = docs.getElementsByTagName('a');

        setStyleAll(docsAnchor, darkMode, {
            "color": TEXT_GREEN
        });
    }
 
    update(); // To ensure styles are updated on startup

    const libraryObserver = new MutationObserver(() => update());
    libraryObserver.observe(library, { subtree: true, childList: true });
}
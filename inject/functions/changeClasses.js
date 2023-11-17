const changeClasses = (darkMode) => {
    const navlink = document.getElementsByClassName('nav-link');

    setStyleAll(navlink, darkMode, {
        "color": TEXT_PRIMARY,
        "background-color": BG_DEPTH_3v1
    });

    const alerts = document.getElementsByClassName('alert-secondary');

    setStyleAll(alerts, darkMode, {
        "color": TEXT_PRIMARY,
        "background-color": BG_DEPTH_3v2
    });

    /*-------------------------------------------------------------------------------------------*/
    
    /* Post */
    const activityCard = document.getElementsByClassName('table-responsive');
    const postDetails  = activityCard[0].getElementsByTagName('table');

    setStyle(postDetails[0], darkMode, {
        "color": TEXT_SECONDARY
    });

    const activityWidget = document.getElementsByClassName('feeds-widget')[1];
    const widgetItems    = activityWidget.getElementsByClassName('feed-item');
    
    for(const item of widgetItems) {
        const a = item.getElementsByTagName('a');

        setStyle(a[0], darkMode, {
            "color": TEXT_SECONDARY
        });
    }
}
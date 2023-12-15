const changeClasses = (darkMode) => {
    /* Post */
    const activityCard = document.getElementsByClassName('table-responsive');
    const postDetails  = activityCard.length && activityCard[0].getElementsByTagName('table');
    
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
    
    /*-------------------------------------------------------------------------------------------*/
       
    // Will only work if is in work tab
    const worktab = document.getElementById("nav-work");

    const update = () => {
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

        const card = worktab && worktab.getElementsByClassName('card')[0];
        setStyle(card, darkMode, {
            "background-color": BG_DEPTH_3v1
        })

    }

    update(); // To ensure styles are updated on startup

    const workObserver = new MutationObserver(() => update());
    workObserver.observe(worktab, { subtree: true, childList: true });

}
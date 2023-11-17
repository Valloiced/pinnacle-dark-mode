const changeDashboard = (darkMode) => {
    const alerts      = document.getElementsByClassName('alert');
    const linkWidgets = document.getElementsByClassName('widget');

    for(const alert of alerts) {
        const socialAlert = alert.getElementsByClassName('fb-post');

        // Skip it since I can't figure out how to style embedded documents 
        if(socialAlert.length != 0) {
            continue;
        }

        const h6 = alert.getElementsByTagName('h6');

        setStyle(h6[0], darkMode, {
            "color": TEXT_SECONDARY
        });

        setStyle(alert, darkMode, {
            "background-color": BG_ALERT,
            "color": TEXT_PRIMARY
        });
    }

    setStyleAll(linkWidgets, darkMode, {
        "border": `1px solid ${BG_DEPTH_4}`
    });
}
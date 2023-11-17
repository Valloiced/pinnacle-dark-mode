const changeCalendar = (darkMode) => {
    const calendar      = document.getElementById('calendar').parentElement;
    const fcHead        = document.getElementsByClassName('fc-widget-header');
    const fcOtherMonth  = document.getElementsByClassName('fc-other-month');
    
    const update = () => {
        const fcToday = document.getElementsByClassName('fc-today')[0] ;
     
        setStyle(calendar, darkMode, {
            "background-color": BG_DEPTH_3v2
        });

        setStyle(fcToday, darkMode, {
            "background-color": BG_DEPTH_4
        });

        setStyleAll(fcHead, darkMode, {
            "color": TEXT_PRIMARY,
            "background-color": BG_DEPTH_2
        });
    
        setStyleAll(fcOtherMonth, darkMode, {
            "background-color": BG_ALERT
        });
    }

    update(); // To ensure styles are updated on startup

    const calendarObserver = new MutationObserver(() => update());
    calendarObserver.observe(calendar, { subtree: true, childList: true });
}
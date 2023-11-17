const changeTables = (darkMode) => {
    const cards  = document.getElementsByClassName('card');
    const theads = document.getElementsByTagName('thead');
    const ths    = document.getElementsByTagName('th');
    const tds    = document.getElementsByTagName('td');

    setStyleAll(cards, darkMode, {
        "color": TEXT_SECONDARY,
        "background-color": BG_DEPTH_3v2
    });

    setStyleAll(theads, darkMode, {
        "background-color": BG_DEPTH_3v1
    });

    setStyleAll(ths, darkMode, {
        "color": TEXT_PRIMARY
    });

    for(const td of tds) {
        const b = td.getElementsByTagName('b')[0]; // bold
        const a = td.getElementsByTagName('a')[0]; // anchor

        if(b) {
            setStyle(b, darkMode, {
                "color": TEXT_GREEN
            });
        }
        
        if(a) {
            setStyle(a, darkMode, {
                "color": TEXT_SECONDARY
            });
        }

        setStyle(td, darkMode, {
            "color": TEXT_SECONDARY
        });
    }
}
const _global = (darkTheme) => {
    const main      = document.getElementsByClassName('main-content');
    const header    = document.getElementsByClassName('header-top');
    const modal     = document.getElementsByClassName('modal-content');
    const sidebar   = document.getElementsByClassName('app-sidebar');
    const cards     = document.getElementsByClassName('card');
    const footer    = document.getElementsByTagName('footer');
    const images    = document.getElementsByTagName('img');
    
    const changeMainBody = () => {
        setStyle(main[0], darkTheme, { 
            "color" : TEXT_PRIMARY , 
            "background-color": BG_DEPTH_2 
        });
    }

    const changeFooter = () => {
        setStyle(footer[0], darkTheme, {
            "color": TEXT_PRIMARY,
            "background-color": BG_DEPTH_1
        });
    }

    const changeHeader = () => {
        setStyle(header[0], darkTheme, { 
            "color": TEXT_PRIMARY , 
            "background-color": BG_DEPTH_1 
        });
        
        // Toggle for sidebar
        const toggleSidebar = header[0].getElementsByTagName('button');
        setStyle(toggleSidebar[0], darkTheme, {  
            "background-color": BG_DEPTH_1 
        });
    }

    const changeModal = () => {
        setStyle(modal[0], darkTheme, {
            "background-color": BG_DEPTH_1
        })

        const modalSpans = modal[0].getElementsByTagName('span');
        const modalIcons = modal[0].getElementsByTagName('i');

        setStyleAll([ ...modalSpans, ...modalIcons ], darkTheme, {
            "color": TEXT_PRIMARY
        });
    }

    const changeSidebar = () => {
        setStyle(sidebar[0], darkTheme, { 
            "color": TEXT_PRIMARY , 
            "background-color": BG_DEPTH_1 
        });

        /* Sidebar Navs */
        const navItems = sidebar[0].getElementsByClassName('nav-item');
        for(const elem of navItems) {
            const a = elem.getElementsByTagName('a');
            setStyle(a[0], darkTheme, { 
                "color": TEXT_SECONDARY
            });
        }

        /* Submenus */
        const submenu = sidebar[0].getElementsByClassName('submenu-content');
        const menus = submenu[0].getElementsByClassName('menu-item');

        setStyle(submenu[0], darkTheme, {
            "background-color": BG_DEPTH_2
        });

        setStyleAll(menus, darkTheme, {
            "color": TEXT_SECONDARY
        });

        /* Toggle button */
        const toggle1 = document.getElementById('sidebarClose');
        const toggle2 = document.getElementsByClassName('nav-toggle')[0];
        setStyleAll([ toggle1, toggle2 ], darkTheme, {
            "color": TEXT_PRIMARY
        });

        /** Logo and Student Info */
        const lavels = sidebar[0].getElementsByClassName('nav-lavel');
        const logo = lavels[0];
        const studentInfo = lavels[2];

        setStyleAll([ logo, studentInfo ], darkTheme, {
            "color": TEXT_SECONDARY,
            "background-color": BG_DEPTH_1
        });
    }

    const changeCards = () => {
        // Retrieve widgets
        const widgets = Array.from(cards).filter(card => {
            const cardContent = card.innerHTML;

            return cardContent.match(/(timeline|Weather|News|iframe|analytic|Search)/g);
        });

        // Apply styles for all cards
        for(let card of cards) {
            // Skip if widget or calendar 
            if(widgets.indexOf(card) != -1 || card.innerHTML.match(/calendar/g)) continue;
            
            setStyle(card, darkTheme, { 
                "color": TEXT_SECONDARY , 
                "background-color": BG_DEPTH_3v1,
                "border": "none",
                "box-shadow": "0px 1px 5px rgba(0, 0, 0, 0.500)"
            });

            /* Font Awesome and Spans*/
            const spans = card.getElementsByTagName('span');
            const i = Object.values(card.getElementsByClassName('fas'))
                .filter(c => !(/text-danger/g).test(c.className)); // Filter Checked Icons

            setStyleAll([ ...i, ...spans ], darkTheme, {
                "color": TEXT_GREEN
            });
        }

        // Apply Dedicated Styles for widgets
        changeWidgets(widgets);
    }

    const changeWidgets = (widgets) => {
        for(let widget of widgets) {
            const widgetContent = widget.innerHTML;

            /* Specifics */
            if(widgetContent.match(/Weather/g)) {
                const weatherTable = widget.getElementsByClassName('table');

                setStyleAll(weatherTable, darkTheme, {
                    "color": TEXT_SECONDARY
                });
            }

            if(widgetContent.match(/News/g)) {
                const newsHeader = document.getElementsByClassName('card-header');

                // Annoying title (bruteforced)
                setStyle(newsHeader[0].children[0], darkTheme, { 
                    "color": TEXT_PRIMARY , 
                });

                const newsFeeds = widget.getElementsByClassName('feed-item');
                
                for(const feeds of newsFeeds) {
                    const a = feeds.getElementsByTagName('a');

                    setStyle(a[0], darkTheme, {
                        "color": TEXT_SECONDARY
                    });
                }
            }

            if(widgetContent.match(/analytic/g)) {
                /* H-lines */
                const breakLines = widget.getElementsByClassName('my-1');
                
                setStyleAll(breakLines, darkTheme, {
                    "background-color": TEXT_PRIMARY
                });
            }

            // Apply for every widget
            const spans = widget.getElementsByTagName('span');

            setStyleAll(spans, darkTheme, {
                "color": TEXT_GREEN
            });

            setStyle(widget, darkTheme, {
                "color": TEXT_PRIMARY,
                "background-color": BG_DEPTH_3v2,
                "border": "none"
            });
        }
    }

    const changeImages = () => {
        for(const img of images) {
            const src = img.src;
            
            // Header img
            if(src == IMG_PINNACLE_HEADER || src == IMG_PINNACLE_HEADER_DEFAULT) {
                img.src = darkTheme ? IMG_PINNACLE_HEADER : IMG_PINNACLE_HEADER_DEFAULT;
            }

            // Pinnacle img
            if(src == "https://pinnacle.pnc.edu.ph/img/pinnacle.png") {
                img.src = darkTheme ? IMG_PINNACLE : IMG_PINNACLE_DEFAULT;
            }
        }
    }

    try {
        if(main) {
            changeMainBody();
        }
    
        if(header) {
            changeHeader();
        }

        if(footer) {
            changeFooter();
        }

        if(modal) {
            changeModal();
        }
    
        if(sidebar) {
            changeSidebar();
        }
        
        if(images) {
            changeImages();
        }
        
        if(cards) {
            changeCards();
        }
    } catch(e) {
        throw new Error(e.message + ": Unable to change styles");
    }
}
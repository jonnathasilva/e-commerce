import React, { useState } from "react";

function Menu() {

    const [navBar, setNavBar] = useState();

    function hideNavBar(e) {
        let target = e.target;
        console.log(target)
        if (target.id === "menu") {
            setNavBar(true)
        } else if (target.id === 'exit') {
            setNavBar(false)
        }
    }

    return (
        <div onClick={hideNavBar} className="menu">
            <div className="navbar">
                <img id="menu" src="./images/icon-menu.svg" alt="menu" />
                <div className={navBar ? "modalNavBar" : "modalNavBar Hide"}>
                    <nav>
                        <div className="exit">
                            <img id="exit" src="./images/icon-Closee.svg" alt="close" />
                        </div>
                        <ul>
                            <li>Coleções</li>
                            <li>Mas</li>
                            <li>Mulheres</li>
                            <li>Sobre</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="logo"><img src="./images/logo.svg" alt="logo" /></div>
            <nav>
                <ul>
                    <li>Coleções</li>
                    <li>Mas</li>
                    <li>Mulheres</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
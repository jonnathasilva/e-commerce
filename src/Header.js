import React, { useState } from 'react'

function Header(props) {

    const [SHOW, setSHOW] = useState(false);
    const [c, setC] = useState()

    function hideTopModal(e) {
        let target = e.target

        if (target.id === "delete") {
            setC(false)
            props.Contents(c)
        }
    }

    function HideTopModal() { SHOW ? setSHOW(false) : setSHOW(true) }


    return (
        <header>

            <div className="menu">
                <div className="navbar">
                    <img src="./images/icon-menu.svg" alt="menu" />
                    <div className="modalNavBar"></div>
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
            <div onClick={hideTopModal} className="buyUser">
                <div>
                    <div onClick={HideTopModal} className={props.trash ? "counter" : "counter hide"}>{props.totalValue}</div>
                    <img onClick={HideTopModal} src="./images/icon-cart.svg" alt="cart" />
                </div>
                <div className="avatar">
                    <img src="./images/image-avatar.png" alt="avatar" />
                </div>
                <div className={SHOW ? "Modal-buyUser" : "Modal-buyUser hide"}>
                    <div className="card">
                        <div className="header">
                            <h2>Cartão</h2>
                        </div>

                        <div className={props.trash ? "message hide" : "message"}>
                            <h3>Seu carrinho está vazio.</h3>
                        </div>

                        <div className={props.trash ? "contentsTotal" : " contentsTotal hide"}>

                            <div className="contents">
                                <div className="cardImgs">
                                    <img src="./images/image-product-1-thumbnail.jpg" alt="sapato" />
                                </div>
                                <div className="cardDescription">
                                    <p>Outono Tênis De Edição Limitada</p>
                                    <p>
                                        <small>${props.value}</small>
                                        <small>x</small>
                                        <small>{props.totalValue}</small>
                                        <small>${props.summ}</small>
                                    </p>
                                </div>
                                <div className="delete">
                                    <img id='delete' src="./images/icon-delete.svg" alt="delete" />
                                </div>
                            </div>
                            <div className="Modal-buyUser-button">
                                <button>confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
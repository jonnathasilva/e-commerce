import React from 'react'

function Header(props) {

    return (
        <header>
            <div className="menu">
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
            <div className="buyUser">
                <div>
                    <div className="counter">{props.totalValue}</div>
                    <img src="./images/icon-cart.svg" alt="cart" />
                </div>
                <div className="avatar">
                    <img src="./images/image-avatar.png" alt="avatar" />
                </div>
                <div className="Modal-buyUser">
                    <div className="card">
                        <div className="header">
                            <h2>Cartão</h2>
                        </div>
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
                                <img src="./images/icon-delete.svg" alt="delete" />
                            </div>
                        </div>
                        <div className="Modal-buyUser-button">
                            <button>confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
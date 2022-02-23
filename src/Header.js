import React from 'react'

function Header(props) {

    return (
        <header>
            <div className="menu">
                <div className="logo"><img src="./images/logo.svg" alt="logo" /></div>
                <nav>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="buyUser">
                <div>
                    <img src="./images/icon-cart.svg" alt="cart" />
                </div>
                <div className="avatar">
                    <img src="./images/image-avatar.png" alt="avatar" />
                </div>
                <div className="Modal-buyUser">
                    <div className="card">
                        <div className="header">
                            <h2>Card</h2>
                        </div>
                        <div className="contents">
                            <div className="cardImgs">
                                <img src="./images/image-product-1-thumbnail.jpg" alt="" />
                            </div>
                            <div className="cardDescription">
                                <p>fall Limited edition sneakers</p>
                                <p>
                                    <small>${props.value}</small>
                                    x <small>{props.totalValue}</small>
                                    <small>${props.Sun}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
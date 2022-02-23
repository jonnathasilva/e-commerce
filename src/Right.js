import React from "react";
import TheAmount from './TheAmount.js'

function Right(props) {

    function valuePrice(e) {
        let Price = e;

        props.totalValue(Price)
    }

    return (
        <section className='right'>
            <h1>sneaker company</h1>
            <h2>fall limited edition sneakers</h2>
            <p className="description">These low-profile sneakers are your perfect casual wear companion,
                Featuring a durable rubber outer sole,
                they'll withstand everything the weather can ofter.
            </p>
            <div className="price">
                <p>
                    ${props.value}
                    <small>50%</small>
                </p>
                <p>$250.00</p>
            </div>
            <div className="buttons">
                <TheAmount valuePrice={valuePrice}></TheAmount>
                <button>
                    Add to card
                </button>
            </div>
        </section>
    )
}

export default Right;
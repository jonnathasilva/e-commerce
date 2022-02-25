import React, { useState } from "react";
import TheAmount from './TheAmount.js'

function Right(props) {

    const [a, setA] = useState()
    const [b, setB] = useState()
    const [d, setD] = useState(true)

    function valuePrice(e) {
        setA(e)
        setB(props.value * a);
        props.trash ? setD(false) : setD(true);
    }

    function sum() {
        props.SumFinal(b)
        props.totalValue(a)
        props.OnContents(d)
    }

    return (
        <section className='right'>
            <h1>sneaker company</h1>
            <h2>Tênis De Edição Limitada De Outono</h2>
            <p className="description">
                Estes tênis de perfil baixo são o seu companheiro perfeito para uso casual.
                Com uma sola externa de borracha durável,
                eles resistirão a tudo o que o clima pode oferecer.
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
                <button onClick={sum}> Adicionar ao cartão </button>
            </div>
        </section>
    )
}

export default Right;
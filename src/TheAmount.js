import React, { useEffect, useState } from "react";

function TheAmount(props) {

    const [number, setNumber] = useState(0)

    const add = () => { setNumber(number + 1) }

    const remover = () => { (number > 0) ? setNumber(number - 1) : setNumber(number) }

    useEffect(() => {
        props.valuePrice(number)
    })

    return (
        <div className="theAmount">
            <button onClick={remover}>
                <img src="./images/icon-minus.svg" alt="menos" />
            </button>
            <p>{number}</p>
            <button onClick={add}>
                <img src="./images/icon-plus.svg" alt="mais" />
            </button>
        </div>
    )
}

export default TheAmount;
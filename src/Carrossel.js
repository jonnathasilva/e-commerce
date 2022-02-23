import React, { useEffect, useRef, useState } from "react";

function Carrossel() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('./images/Imgs.json').then((response) => response.json()).then(setData)
    }, []);

    const handleftClink = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handrightClink = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if (!data || !data.length) return null;

    return (

        <div className="carrossel" ref={carousel}>

            {data.map((item) => {
                const { id, image } = item;
                return (
                    <div className="item" key={id}>
                        <div className="imgs">
                            <img src={image} alt="product" />
                        </div>
                    </div>
                );
            })}
            <div className="carrosselButtons">
                <button onClick={handleftClink} className="previous"></button>
                <button onClick={handrightClink} className="next"></button>
            </div>
        </div>
    )
}

export default Carrossel;
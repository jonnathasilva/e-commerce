import React from "react";
import Carrossel from "./Carrossel.js";

function Modal(props) {

    function hideModal(e) {
        let target = e.target;

        if (target.id === "close" || target.id === "Close") {
            props.offHideModal()
        }
    }

    return (
        <div onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
            <div id="Close" className="box">

                <div className="close">
                    <img id="close" src="./images/icon-close.svg" alt="close" />
                </div>

                <Carrossel></Carrossel>

                <div className="Photos Modal">
                    <div className="imgs">
                        <img src="./images/image-product-1-thumbnail.jpg" alt="sapato" />
                    </div>
                    <div className="imgs">
                        <img src="./images/image-product-2-thumbnail.jpg" alt="sapato" />
                    </div>
                    <div className="imgs">
                        <img src="./images/image-product-3-thumbnail.jpg" alt="" />
                    </div>
                    <div className="imgs">
                        <img src="./images/image-product-4-thumbnail.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
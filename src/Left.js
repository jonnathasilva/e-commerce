import React, { useState } from 'react'
import Modal from './Modal.js'

function Left() {

    const [show, setShow] = useState(false)

    function offHideModal() {
        setShow(false)
    }

    function onHideModal() {
        setShow(true)
    }

    return (
        <section className='left'>
            <div className="PhotographMain">
                <img src="./images/image-product-1.jpg" alt="" />
            </div>
            <div className="Photos">
                <div onClick={onHideModal} className="imgs">
                    <img src="./images/image-product-1-thumbnail.jpg" alt="sapato" />
                </div>
                <div onClick={onHideModal} className="imgs">
                    <img src="./images/image-product-2-thumbnail.jpg" alt="sapato" />
                </div>
                <div onClick={onHideModal} className="imgs">
                    <img src="./images/image-product-3-thumbnail.jpg" alt="" />
                </div>
                <div onClick={onHideModal} className="imgs">
                    <img src="./images/image-product-4-thumbnail.jpg" alt="" />
                </div>

            </div>
            <Modal show={show} offHideModal={offHideModal}></Modal>
        </section>
    )
}

export default Left;
import React from 'react';
import ImgIphone from "./Assets/iphone15.webp"
import ImgCart from "./Assets/cart.png"

const CardImg = () => {
    return (
        <div className="card-img">
            <img src={ImgIphone} alt="" className="img-iphone"/>
            <button className="btn-cart">
                <img src={ImgCart} alt="" className="img-cart"/>
            </button>
        </div>
    )
}

export default CardImg
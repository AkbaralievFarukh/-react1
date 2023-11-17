import React from "react";
import Rates from "./Rates";
import Price from "./Price";

const CardInfo = () => {
    return (
        <div className="card-info">
            <h4 className="card-info__title">
                Always in style!
            </h4>
            <p className="card-info__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos nobis numquam perspiciatis totam vitae.
            </p>
            <Price />
            <Rates />
        </div>
    )
}

export default CardInfo
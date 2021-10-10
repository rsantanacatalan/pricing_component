import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'
import React from "react";


function Slider({currentPrice, updateMainPrice, resetYearly}){

    const updatePrice = updatePrice => {
        updateMainPrice(updatePrice)
        resetYearly(false)
    }
    return(
        <InputRange
            minValue={20}
            maxValue={60}
            value={currentPrice}
            onChange={value => updatePrice(value)}
            />
    )
}
export default Slider;
import React, { useState } from 'react'
import "./style.scss"

const ItemCount = ({ initial, stock }) => {

    const [value, setValue] = useState(initial)
    // console.log({ initial });

    return (
        <div className="counter">
            <button disabled={value >= stock} className="btn" onClick={() => setValue(value + 1)}>+</button>
            <input type="text" value={value} />
            <button disabled={value === 0} className="btn" onClick={() => setValue(value - 1)}>-</button>
            <button disabled={value === 0} className="btn add-to-cart"> Add to cart</button>
        </div >
    )
}

export default ItemCount

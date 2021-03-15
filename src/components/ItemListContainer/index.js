import React from 'react'
import ItemCount from '../ItemCount'

import "./ItemListContainer.scss"


const ItemListContainer = (props) => {
    return (
        <div className="container">
            <ItemCount initial={1} stock={3}></ItemCount>
            <ItemCount initial={2} stock={10}></ItemCount>
        </div>
    )

}

export default ItemListContainer

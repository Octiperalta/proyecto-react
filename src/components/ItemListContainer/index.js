import React from 'react'
import "./ItemListContainer.scss"
const ItemListContainer = (props) => {
    return (
        <div className="container">
            <h3>{props.greeting}</h3>
        </div>
    )

}

export default ItemListContainer

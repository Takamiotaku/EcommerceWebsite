import React from 'react';
import "./styles.css";
import allFurniture from "./instantobjects"; 

export default function ShowCase({ addToBasket }) {
    return (
        <div className="show-case">
            <h1>Popular Products</h1>
            <div className="box-buttons1">
                {Object.keys(allFurniture).map((key) => {
                    const furniture = allFurniture[key];
                    return (
                        <div key={furniture.name}>
                            <img src={`https://www.example.com/${furniture.name}.jpg`} alt={`Image of ${furniture.name}`} className="img-box1" />
                            <p>Description: {furniture.description}</p>
                            <p>Price: ${furniture.price}</p>
                            <input type="button" value="Add to basket" onClick={() => addToBasket(furniture.name, furniture.price)} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

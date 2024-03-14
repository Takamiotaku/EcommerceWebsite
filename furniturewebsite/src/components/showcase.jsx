import React, { useState } from 'react';
import "./styles.css";

// Functional component - must be Capitalized
import Furnitures from "./Furniture";

export default function ShowCase() {
  
    return (
        <div className="show-case">
            <h1>Popular Products</h1>
            <div className="box-buttons1">
                <div>
                    <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box1" />
                    <p>Description</p>
                    {/* Add onClick event handler to trigger adding item to the basket */}
                    <input type="button" value="Add to basket" />
                </div>
                <div>
                    <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box2" />
                    <p>Description</p>
                    <input type="button" value="Add to basket"  />
                </div>
            </div>
            <div className="box-buttons2">
                <div>
                    <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box1" />
                    <p>Description</p>
                    <input type="button" value="Add to basket" />
                </div>
                <div>
                    <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box2" />
                    <p>Description</p>
                    <input type="button" value="Add to basket" />
                </div>
            </div>
        </div>
    );
}

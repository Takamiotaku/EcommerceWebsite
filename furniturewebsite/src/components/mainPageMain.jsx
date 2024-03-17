import React, { useState } from "react";
import Logo from './logo';
import SearchBar from "./searchBar";
import Circles from "./circles";
import ButtonsCarousel from "./carousell";
import ShowCase from "./showcase";
import allFurniture from "./instantobjects";
import Promotion from "./promotions";
import Bottom from "./bottomlogo";
import "./styles.css";

export default function MainPage() {
    const [activeCircle, setActiveCircle] = useState(null);
    const [basketItems, setBasketItems] = useState([]);

    const handleCircleClick = (circleName) => {
        setActiveCircle(circleName);
    };

    const addToBasket = (itemName, price) => {
        const existingItem = basketItems.find(item => item.name === itemName);
        if (existingItem) {
            setBasketItems(basketItems.map(item =>
                item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setBasketItems([...basketItems, { name: itemName, price, quantity: 1 }]);
        }
    };

    const calculateTotalAmount = () => {
        return basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const imageList = [
        'https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960',
        'https://cooee.eu/wp-content/uploads/sites/2/2022/09/Mo%CC%88bler.jpg',
        'https://cdn20.pamono.com/p/g/9/6/969887_qsaeut44bf/thomson-single-sofa-from-bdv-paris-design-furnitures-image-1.jpg',
        // Add more images as needed
    ];

    const goToMainPage = () => {
        setActiveCircle(null); 
    };

    return (
        <div>
            {activeCircle ? (
                <div>
                    {activeCircle === "Basket" && (
                        <div >
                           <Logo/>
                            <div className="Basket-Container">
                            <h1>Basket Page</h1>
                            {basketItems.map((item, index) => (
                                <div key={index}>
                                    <p>{item.name} {item.quantity > 1 ? `x${item.quantity}` : ''} - ${item.price * item.quantity}</p>
                                </div>
                            ))}
                            <p>Total Amount: ${calculateTotalAmount()}</p>
                            <input type="button" value="Check out"></input>
                            <button onClick={goToMainPage}>Back to Main Page</button> 
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Logo />
                    <div className="search-row">
                        <SearchBar />
                        <Circles name="Account" onClick={() => handleCircleClick("Account")} />
                        <Circles name="Basket" onClick={() => handleCircleClick("Basket")} />
                        <Circles name="delivery" onClick={() => handleCircleClick("Delivery")} />
                    </div>
                    <ButtonsCarousel buttonsPerPage={10}>
                        <button className="button" onClick={() => console.log('Button 1 clicked')}>{allFurniture.Item1.category}</button>
                        <button className="button" onClick={() => console.log('Button 1 clicked')}>{allFurniture.Item1.category}</button>
                        <button className="button" onClick={() => console.log('Button 1 clicked')}>{allFurniture.Item1.category}</button>
                        <button className="button" onClick={() => console.log('Button 1 clicked')}>{allFurniture.Item1.category}</button>

                    </ButtonsCarousel>
                    <ShowCase addToBasket={addToBasket} /> 
                    <div className="promotions-message">
                        <h1>Promotions</h1>
                    </div>
                    <Promotion images={imageList} />
                    <Bottom />
                </>
            )}
        </div>
    );
}

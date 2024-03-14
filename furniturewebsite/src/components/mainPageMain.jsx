import React, { useState } from "react";
import Logo from './logo';
import SearchBar from "./searchBar";
import Circles from "./circles";
import ButtonsCarousel from "./carousell";
import ShowCase from "./showcase";
import allFurniture from "./instantobjects";
import Promotion from "./promotions";
import Bottom from "./bottomlogo";
import Account from "./Account";

export default function MainPage() {
    const [activeCircle, setActiveCircle] = useState(null);

    const handleCircleClick = (circleName) => {
        setActiveCircle(circleName);
    };

    const imageList = [
        'https://media.glamourmagazine.co.uk/photos/64c91954d026779dc4c97f9c/16:9/w_1920,h_1080,c_limit/ONLINE%20FURNITURE%20010823%20default.jpg',
        'https://cooee.eu/wp-content/uploads/sites/2/2022/09/Mo%CC%88bler.jpg',
        'https://cdn20.pamono.com/p/g/9/6/969887_qsaeut44bf/thomson-single-sofa-from-bdv-paris-design-furnitures-image-1.jpg',
        // Add more images as needed
    ];

    return (
        <div>
            {activeCircle ? (
                // Render different content based on the clicked circle
                <div>
                    {activeCircle === "Basket" && (
                        <div>
                            <h1>Basket Page</h1>
                        </div>
                    )}
                    {activeCircle === "Account" && (
                        <div>
                            <h1>Account Page</h1>
                            {/* Add content for Account here */}
                        </div>
                    )}
                    {activeCircle === "Delivery" && (
                        <div>
                            <h1>Delivery Page</h1>
                            {/* Add content for Delivery here */}
                        </div>
                    )}
                </div>
            ) : (
                // Render the main page content
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
                        <button className="button" onClick={() => console.log('Button 2 clicked')}>Button 2</button>
                        <button className="button" onClick={() => console.log('Button 3 clicked')}>Button 3</button>
                        <button className="button" onClick={() => console.log('Button 4 clicked')}>Button 4</button>
                        <button className="button" onClick={() => console.log('Button 5 clicked')}>Button 5</button>
                        <button className="button" onClick={() => console.log('Button 6 clicked')}>Button 6</button>
                        <button className="button" onClick={() => console.log('Button 7 clicked')}>Button 7</button>
                        <button className="button" onClick={() => console.log('Button 8 clicked')}>Button 8</button>
                        <button className="button" onClick={() => console.log('Button 9 clicked')}>Button 9</button>
                        <button className="button" onClick={() => console.log('Button 10 clicked')}>Button 10</button>
                        <button className="button" onClick={() => console.log('Button 11 clicked')}>Button 11</button>
                        <button className="button" onClick={() => console.log('Button 12 clicked')}>Button 12</button>
                        <button className="button" onClick={() => console.log('Button 13 clicked')}>Button 13</button>
                        <button className="button" onClick={() => console.log('Button 14 clicked')}>Button 14</button>
                        <button className="button" onClick={() => console.log('Button 15 clicked')}>Button 15</button>
                        <button className="button" onClick={() => console.log('Button 16 clicked')}>Button 16</button>
                        {/* Add more buttons as desired */}
                    </ButtonsCarousel>
                    <ShowCase /> 
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

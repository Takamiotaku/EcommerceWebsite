import React from "react";
import Logo from './logo';
import SearchBar from "./searchBar";
import Circles from "./circles";
import ButtonsCarousel from "./carousell";
import Furnitures from "./Furniture";
import ShowCase from "./showcase";
import allFurniture from "./instantobjects";
import Promotion from "./promotions";

export default function MainPage(){

    const imageList = [
        '/path/to/first/image.jpg',
        '/path/to/second/image.jpg',
        '/path/to/third/image.jpg',
        // Add more images as needed
      ];
    return(
        <div>
            <Logo/>
            <div className="search-row">
            <SearchBar/>
            <Circles name="Account"/>
            <Circles name="Basket"/>
            <Circles name="delivery"/>
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
    <ShowCase/> 
    <Promotion images={imageList}/>

    </div>
    )
}
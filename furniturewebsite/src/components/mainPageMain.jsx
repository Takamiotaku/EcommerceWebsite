import React from "react";
import Logo from './logo';
import SearchBar from "./searchBar";
import Circles from "./circles";
import Categories from "./categories";
import ButtonsCarousel from "./carousell";

export default function MainPage(){
    const buttons = Array.from({ length: 30 }, (_, i) => `Button ${i + 1}`);


    return(
        <div>
            <Logo/>
            <div className="search-row">
            <SearchBar/>
            <Circles/>
            <Circles/>
            <Circles/>
            </div>
            <ButtonsCarousel buttonsPerPage={10}> {/* Adjust buttonsPerPage as needed */}
      <button className="button" onClick={() => console.log('Button 1 clicked')}>Button 1</button>
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
        </div>
    )
}
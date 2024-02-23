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
            <ButtonsCarousel buttons={buttons} buttonsPerPage={10}/>
        </div>
    )
}
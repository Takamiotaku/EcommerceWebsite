import React from "react";
import Logo from './logo';
import SearchBar from "./searchBar";
import Circles from "./circles";
import Categories from "./categories";

export default function MainPage(){

    return(
        <div>
            <Logo/>
            <div className="search-row">
            <SearchBar/>
            <Circles/>
            <Circles/>
            <Circles/>
            </div>
            <Categories/>
        </div>
    )
}
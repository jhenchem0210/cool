import React, { useState } from "react";
import ReactDOM from "react-dom/client"; 

function FavoriteUlam () {
    const [ulam, setUlam] = useState ("adobo");

    return (
        <> 
        <h1> My Favorite ulam is {ulam}!</h1>
        <button type="button" onClick={() => setUlam("Sinigang")}> Sinigang </button>
        <button type="button" onClick={() => setUlam("Bulalo")}> Bulalo </button>
        <button type="button" onClick={() => setUlam("Ampalaya")}> Ampalaya </button>
        </>

    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<FavoriteUlam />)
import React from "react";
import "../App.css";



import { Link } from "react-router-dom";

function BtnHome () {
    return (
        <div>
        <button class="btn btn-outline-info"><Link to="/" className="home">Inicio</Link></button>
        </div>
    )
}

export default BtnHome;

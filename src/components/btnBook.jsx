import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default function btnBook() {
  return (
    <div>
<button class="btn btn-info"><Link to="/appointment" className="appointment">Agenda tu hora</Link> </button>      
    </div>
  )
}

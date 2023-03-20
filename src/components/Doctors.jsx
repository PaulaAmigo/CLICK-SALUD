import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnHome from "./BtnHome";


function Doctors() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <img className="logo" src="../img/logoCS.png"></img>
        <div className={`items ${isOpen && "open"}`}>
          <a>
            <Link to="/" className="Inicio">
              Inicio
            </Link>
          </a>
          <a href="#about">Quienes somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
          <button class="btn btn-outline-info">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
      </header>

      <h1 className="result">Resultados de la busqueda</h1>
      <div class="media">
       {/*} <span className="square border border-secondary"> */}
       <fieldset>
       <button className="schedule"><img src="../img/calendar.png" /></button>
        <img src="../img/Dr.png"></img>
        <div>
          <legend>Manuel Cano</legend>
            <h5>Medicina General</h5> 
            <li>Especialidades en ..</li> 
          </div>
          
          </fieldset>
       {/*} </span> */}
       <fieldset>
       <button className="schedule"><img src="../img/calendar.png" /></button>
        <img src="../img/Dra.png"></img>
        <div>
          <legend>Amelie Díaz</legend>
            <h5>Kinesiologa</h5> 
            <li>Especialidades en ..</li> 
          </div>
          
          </fieldset>
        <fieldset>
        <button className="schedule"><img src="../img/calendar.png" /></button>
        <img src="../img/Psicologa.png"></img>
        <div>
          <legend>Camila Parra</legend>
            <h5>Psicopedagoga</h5> 
            <li>Especialidades en ..</li> 
          </div>
          
        </fieldset>
        <fieldset>
        <button className="schedule"><img src="../img/calendar.png" /></button>
        <img src="../img/Kine.png"></img>
        <div>
          <legend>Carlos Ramirez</legend>
            <h5>Psicologo</h5> 
            <li>Especialidades en ..</li> 
          </div>
          
          </fieldset>
      </div>
      <div className="btnHome">
        <BtnHome />
      </div>
    </>
  );
}
export default Doctors;

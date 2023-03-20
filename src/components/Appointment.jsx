import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnHome from "./BtnHome";


function Appointment() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="appointment">
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
      <h1 className="searchArea">Selecciona</h1>
      <div>
        
        <form className="search" action="">
          <label>Region</label>
          <select name="regiones" id="regiones">
            <option value="">Selecciona una Región</option>
            <option value="">Región de Arica y Parinacota</option>
            <option value="">Región de Tarapacá</option>
            <option value="">Región de Antofagasta</option>
            <option value="">Región de Atacama</option>
            <option value="">Región de Coquimbo</option>
            <option value="">Región de Valparaiso</option>
            <option value="">
              Región del Libertador General Bernando O'Higgins
            </option>
            <option value="">Región del Maule</option>
            <option value="">Región de Ñuble</option>
            <option value="">Región del Biobío</option>
            <option value="">Región de la Araucania</option>
            <option value="">Región de los Rios</option>
            <option value="">Región de los Lagos</option>
            <option value="">
              Región de Aysén del G. Carlos Ibañez del Campo
            </option>
            <option value="">
              Región de Magallanes y de la antártica Chilena
            </option>
            <option value="">Región Metropolitana de Santiago</option>
          </select>
          <label>Comuna</label>
          <select name="ciudades" id="ciudades">
            <option value="">Selecciona una comuna</option>
            <option value="">Alhué</option>
            <option value="">Buin</option>
            <option value="">Calera de Tango</option>
            <option value="">Cerrillos</option>
            <option value="">Cerro Navia</option>
            <option value="">Colina</option>
            <option value="">Conchalí</option>
            <option value="">Curacaví</option>
            <option value="">El Bosque</option>
            <option value="">El Monte</option>
            <option value="">Estación Central</option>
            <option value="">Huechuraba</option>
            <option value="">Independencia</option>
            <option value="">Isla de Maipo</option>
            <option value="">La Cisterna</option>
            <option value="">La Florida</option>
            <option value="">La Granja</option>
            <option value="">Lampa</option>
            <option value="">La Pintana</option>
            <option value="">La Reina</option>
            <option value="">Las Condes</option>
            <option value="">Lo Barnechea</option>
            <option value="">Lo Espejo</option>
            <option value="">Lo Prado</option>
            <option value="">Macul</option>
            <option value="">Maipu</option>
            <option value="">Melipilla</option>
            <option value="">Ñuñoa</option>
            <option value="">Padre Hurtado</option>
            <option value="">Paine</option>
            <option value="">Pedro Aguirre Cerda</option>
            <option value="">Peñaflor</option>
            <option value="">Peñalolén</option>
            <option value="">Pirque</option>
            <option value="">Providencia</option>
            <option value="">Pudahuel</option>
            <option value="">Puente Alto</option>
            <option value="">Quilicura</option>
            <option value="">Quinta Normal</option>
            <option value="">Recoleta</option>
            <option value="">Renca</option>
            <option value="">San Bernardo</option>
            <option value="">San Joaquín</option>
            <option value="">San José de Maipo</option>
            <option value="">San Miguel</option>
            <option value="">San Pedro</option>
            <option value="">San Ramón</option>
            <option value="">Santiago</option>
            <option value="">Talagante</option>
            <option value="">Tiltil</option>
            <option value="">Vitacura</option>
          </select>
          <label>Especialidad</label>
          <select name="especialidad" id="especialidad">
          <option value="">Selecciona una especialidad</option>
            <option value="">Medicina General</option>
            <option value="">Psicologo</option>
            <option value="">Psicopedagogia</option>
            <option value="">Kinesiologia</option>
          </select>
        </form>
      </div>
      <div className="btnAppo">
        <button class="btn btn-outline-info">
          <Link to="/Doctors" className="doc">
            Buscar
          </Link>
        </button>
        <BtnHome />
      </div>
    </div>
  );
}
export default Appointment;

import "../App.css";
import React, {useState} from "react";



export default function CorpWeb() {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='CorpWeb'>
      <div className="logo"> <img src="logo.JPG"></img>Click Salud</div>
      <div className={`items ${isOpen && "open"}`}>
          <a href="#">Inicio</a>
          <a href="#">Quienes Somos</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
          <a href="#">Agenda tu hora</a>
          
      </div>
      <div className={`toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
      <span></span>
      <span></span>
      <span></span>
      </div>
      <div className="inicio">
          <h1>Bienvenidos a Click Salud </h1>
          <p>Donde tienes salud a un click</p>
      </div>
      <div className="about">
          <h1>Quienes somos</h1>
          <p>Somos una empresa...</p>
          <h2>Misión</h2>
          <p>....</p>
          <h2>Vissión</h2>
          <p>...</p>
      </div>
      <div className="servicios">
          <h1>Servicios</h1>
          <h2>Telemedicina</h2>
          <p>...</p>
          <h2>Atención domiciliaria</h2>
      </div>
      <div className="contacto">
          <h1>Contacto</h1>
          <p>Nuestros canales de contacto son......</p>
      </div>
      
    </div>
  )
}

import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import BtnBook from "./btnBook";

function CorpWeb() {
  const [isOpen, setIsOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
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

      <div
        className={`toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Inicio */}
      <div className="inicio" id="inicio">
        <h1 className="welcome">Bienvenidos a Click Salud </h1>
        <p>Donde tienes salud a un click</p>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="img-fluid" src="../img/appontment.jpeg" alt="" />
          <Carousel.Caption>
            <h1 className="infoImg">Reserva tu hora con nosotros</h1>
            <button className="btnAppoint">
              <Link to="/Appointment" className="Appoint">
                Agenda tu hora
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid" src="../img/onlineDoc.jpeg" alt="" />
          <Carousel.Caption>
            <h1 className="infoImg">Medicina General</h1>
            <button className="btnAppoint">
              <Link to="/Appointment" className="Appoint">
                Agenda tu hora
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid" src="../img/Psicopedagogia.jpeg" alt="" />
          <Carousel.Caption>
            <h1 className="infoImg">Psicopedagogia</h1>
            <button className="btnAppoint">
              <Link to="/Appointment" className="Appoint">
                Agenda tu hora
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid" src="../img/Psico.jpeg" alt="" />

          <Carousel.Caption>
            <h1 className="infoImg">Psicologo online</h1>
            <button className="btnAppoint">
              <Link to="/Appointment" className="Appoint">
                Agenda tu hora
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid" src="../img/Kine.jpeg" alt="" />

          <Carousel.Caption>
            <h1 className="infoImg">Kinesiologo</h1>
            <button className="btnAppoint">
              <Link to="/Appointment" className="Appoint">
                Agenda tu hora
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Imagenes slide 
      <div className="imagenes">
        <div>
          <h2>Reserva tu hora con nosotros</h2>
          <img src="../img/appontment.jpeg" alt="" />
          <button className="btnAppoint">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
        <div>
          <h2>Medicina General</h2>
          <img src="../img/onlineDoc.jpeg" alt="" />
          <button className="btnAppoint">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
        <div>
          <h2>Psicopedagogia</h2>
          <img src="../img/Psicopedagogia.jpeg" alt="" />
          <button className="btnAppoint">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
        <div>
          <h2>Psicologo online</h2>
          <img src="../img/Psico.jpeg" alt="" />
          <button className="btnAppoint">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
        <div>
          <h2>Kinesiologo</h2>
          <img src="../img/Kine.jpeg" alt="" />
          <button className="btnAppoint">
            <Link to="/Appointment" className="Appoint">
              Agenda tu hora
            </Link>
          </button>
        </div>
      </div>
      */}

      {/* Inicio del menu */}
      <div className="about" id="about">
        <h1>Nosotros</h1>
        <p>Somos una empresa...</p>
        <h3>Misión</h3>
        <p>...</p>
        <h3>Vissión</h3>
        <p>...</p>
      </div>
      <div className="servicios" id="servicios">
        <h1>Servicios</h1>
        <h4>Telemedicina</h4>
        <p>
          La Telemedicina es la prestación de servicios clínicos a distancia por
          parte de profesionales de la salud; a través del uso de la tecnología
          y la comunicación para el intercambio de información válida para el
          diagnóstico, tratamiento, la prevención de enfermedades, investigación
          y evaluación.
        </p>
        <h4>Medicina General</h4>
        <p>
          La medicina general constituye el primer nivel de atención médica y es
          imprescindible para la prevención, detección, tratamiento y
          seguimiento de las enfermedades crónicas estabilizadas,
          responsabilizándose del paciente en su conjunto, para decidir su
          derivación a los especialistas cuando alguna patología se descompense
        </p>
        <h4>Kinesiologia</h4>
        <p>
          Esta especialidad se encarga del estudio, evaluación y tratamiento de
          patologías del Sistema Músculo Esquelético, tales como: Lesiones
          musculares (desgarros, contracturas, contusiones, etc.) Tendineas
          (Tendinosis, Tendinitis, roturas, etc.) Ligamentosas (Esguinces en
          todos su grados) Alteración en la visión. Es decir, visión doble o
          pérdida parcial. Óseas (Fracturas, edemas)
        </p>
        <h4>Psicopedagogía</h4>
        <p>
          Son los encargados de atender, dentro de un contexto
          interdisciplinario, las demandas de diagnóstico, tratamiento y
          orientación socioeducativa de los alumnos con trastornos del
          neurodesarrollo que manifiestan dificultades en el ámbito educativo,
          con el objetivo de prevenir el fracaso escolar o intervenir en él.
        </p>
        <h4>Psicologo</h4>
        <p>
          Los psicólogos ayudan a una gran variedad de pacientes y pueden darles
          tratamiento a numerosos tipos de problemas. Algunas personas consultan
          a un psicólogo porque se han sentido deprimidas , enojadas o ansiosas
          por largo tiempo. Otras, porque quieren ayuda con un trastorno crónico
          que interfiere con sus vidas o su salud física. Por su parte, otras
          recurren al psicólogo porque experimentan problemas a corto plazo que
          desean resolver como sentirse abrumados por un nuevo empleo , o están
          afectadas por la muerte de un familiar. Los psicólogos también nos
          ayudan a enfrentar situaciones estresantes, a curarnos de adicciones ,
          a controlar enfermedades crónicas y eliminar los obstáculos que nos
          impiden alcanzar nuestros objetivos.
        </p>
        <h4>Atención domiciliaria</h4>
        <p>
          La atención médica a domicilio es el cuidado que permite a una persona
          con necesidades especiales permanecer en su casa. Puede ser para
          quienes están envejeciendo (o envejecen en el hogar). También puede
          servir para enfermos crónicos, pacientes que se recuperan de cirugías
          o personas que tienen discapacidades.
        </p>
      </div>
      <div className="contacto" id="contacto">
        <h1>Contacto</h1>
        <p>Nuestros canales de contacto son</p>
        <img className="socialMedia" src="../img/email.png" />
        <p>contacto@clicksalud.cl</p>
        <img className="socialMedia" src="../img/facebook.png" />
        <p>facebook.com/clicksalud</p>
        <img className="socialMedia" src="../img/instagram.png" />
        <p>@click-salud</p>
        <img className="socialMedia" src="../img/whatsapp.png" />
        <p>+56 9 1234 6789</p>
      </div>
    </div>
  );
}
export default CorpWeb;

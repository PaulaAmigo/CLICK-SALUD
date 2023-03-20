import React from "react";
import "./App.css";
import CorpWeb from "./Components/CorpWeb";
import {Routes, Route} from "react-router-dom";
import Appointment from "./Components/Appointment";
import Doctors from "./Components/Doctors";

function App() {
  return (
   
    <>
    <Routes>
      <Route path="/" element={<CorpWeb />}></Route>
      <Route path="/Appointment" element={<Appointment />}></Route>
      <Route path="/Doctors" element={<Doctors />}></Route>
      </Routes>
      </>
  );
}

export default App;

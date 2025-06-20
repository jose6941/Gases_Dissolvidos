import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "../../fonts/fonts.css";
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Features from "../Features/Features";
import Navigation from "../Navigation/Navigation";
import CTA from "../CTA/CTA";
import FormularioDiagnostico from "../Formulario/FormularioDiagnostico";
import Manutençao from "../Manutençao/Manutençao";
import Resultados from '../Formulario/Resultados';

const App = () => {
  return (
    <Router>
      <Page>
        <Header>
          <Navigation />
        </Header>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Logos />
              <Features />
              <CTA />
              
            </>
          } />
          <Route path="/formulario" element={
            <FormularioDiagnostico />
          } />
          <Route path="/resultados" element={
            <Resultados />
          } />
          <Route path="/manutençao" element={
            <Manutençao />
          } />
        </Routes>
      </Page>
    </Router>
  );
};

export default App;

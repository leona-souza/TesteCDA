import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Container>
  );
}

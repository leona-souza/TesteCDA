import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import api from '../../services/api';

function Home() {
  if (sessionStorage.userName) {
    window.location.href="/crimes";
  }
  
  const [usuario, setUsuario] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async () => {
    const response = await api.get("users");
    const temp = response.data.filter(u => u.userName === usuario.userName && u.password === usuario.password);
    if (temp.length === 1) {
      sessionStorage.setItem("userId", temp[0].id);
      sessionStorage.setItem("userName", temp[0].userName);
      window.location.href = "/crimes";
    } else {
      window.alert("Dados incorretos. Tente novamente");
    }
  }
  
  return (
    <div className="card__container tela__login">
      <div>Bem vindo(a) ao sistema penal da Cidade Alta. Por favor faça seu login:</div>
      <div>
        <Form className="formulario__login">
          <Form.Label>Usuário</Form.Label>
            <Form.Control 
              type="input"
              id="userName"
              onChange={handleChange}
              value={usuario.userName}></Form.Control>
          <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password"
              id="password"
              onChange={handleChange}
              value={usuario.password}></Form.Control>
          <Button className="formulario__botao" onClick={handleSubmit}>Login</Button>
        </Form>
      </div>
    </div>
  )
}

export default Home

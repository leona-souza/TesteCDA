import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import api from "../../../services/api";
import "../../style.css"

function Index(props) {
  const { id } = props.match.params;
  const botaoEnviar = (id === "new") ? "Cadastrar" : "Alterar";
  const [usuario, setUsuario] = useState({
    userName: "",
    password: ""
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (userId) => {
    if (id === "new") {
      console.log(usuario);
      await api.post("users", usuario);
    } else {
      setUsuario({
        id: userId,
        userName: usuario.userName,
        password: usuario.password
      });
      await api.put(`users/${id}`, usuario);
    }
    return props.history.push("/users");
  }

  useEffect(() => {
    if (id>0) {
      const loadApi = async () => {
        const response = await api.get(`users/${id}`);
        setUsuario(response.data);
      }
      loadApi();
    } else if(id === "new") {
      return;
    } else {
      window.location.href = "/";
    }
  }, [id]);

  return (
    <div className="formulario__container">
      <Form className="formulario__conteudo">
        <Form.Label>Usuário</Form.Label>
          <Form.Control
            id="userName"
            type="input"
            onChange={handleChange}
            value={usuario.userName}></Form.Control>
        <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            type="password"
            onChange={handleChange}
            value={usuario.password}></Form.Control>
        <div className="separador__botoes">
          <Button className="formulario__botao btn-secondary" onClick={() => props.history.push("/users")}>Cancelar</Button>
          <Button className="formulario__botao" onClick={() => handleSubmit(id)}>{botaoEnviar}</Button>
        </div>
      </Form>
    </div>
  )
}

export default Index

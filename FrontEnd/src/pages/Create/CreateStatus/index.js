import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from "../../../services/api";
import "../../style.css"

function Index(props) {
  const { id } = props.match.params;
  const botaoEnviar = (id === "new") ? "Cadastrar" : "Alterar";
  const [status, setStatus] = useState({
    id: 0,
    name: ""
  });

  const handleChange = (e) => {
    setStatus({
      ...status,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (statusId) => {
    if (id === "new") {
      await api.post("status", status);
    } else {
      setStatus({
        id: statusId,
        name: status.name
      });
      await api.put(`status/${id}`, status);
    }
    return props.history.push("/status");
  }

  useEffect(() => {
    if (id>0) {
      const loadApi = async () => {
        const response = await api.get(`status/${id}`);
        setStatus(response.data);
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
        <Form.Label>Status</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="name"
            type="input"
            value={status.name}></Form.Control>
        <div className="separador__botoes">
          <Button 
            className="formulario__botao btn-secondary" onClick={() => props.history.push("/status")}>Cancelar</Button>
          <Button className="formulario__botao" onClick={() => handleSubmit(id)}>{botaoEnviar}</Button>
        </div>
      </Form>
    </div>
  )
}

export default Index

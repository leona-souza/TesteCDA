import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import api from "../../../services/api";
import "../../style.css"

function Index(props) {
  const { id } = props.match.params;
  const botaoEnviar = (id === "new") ? "Cadastrar" : "Alterar";
  const agora = new Date();
  const [statuses, setStatuses] = useState([]);
  const [crime, setCrime] = useState({
    name: "",
    description: "",
    penalty: "",
    prisonTime: "",
    statusId: "",
    createDate: agora,
    updateDate: null,
    createUserId: sessionStorage.userId,
    updateUserId: null
  });

  const loadStatuses = async () => {
    const temp = await api.get("/status");
    setStatuses(temp.data);
  }

  const handleChange = (e) => {
    setCrime({
      ...crime,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (crimeId) => {
    if (crimeId === "new") {
      await api.post("crimes", crime);
    } else {
      setCrime({
        id: crimeId,
        ...crime
      });
      await api.put(`crimes/${crimeId}`, crime);
    }
    props.history.push("/crimes");
  }

  useEffect(() => {
    loadStatuses();
  },[]);

  useEffect(() => {
    if (id>0) {
      const loadApi = async () => {
        const response = await api.get(`crimes/${id}`);
        setCrime({
          ...response.data,
          updateUserId: sessionStorage.userId,
          updateDate: agora
        });
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
        <Form.Label>Nome do crime</Form.Label>
          <Form.Control 
            type="input"
            id="name"
            onChange={handleChange}
            value={crime.name}></Form.Control>
        <Form.Label>Descrição do crime</Form.Label>
          <Form.Control
            type="input"
            id="description"
            onChange={handleChange}
            value={crime.description}></Form.Control>
        <Form.Label>Multa</Form.Label>
          <Form.Control
            type="input"
            id="penalty"
            onChange={handleChange}
            value={crime.penalty}></Form.Control>
        <Form.Label>Tempo de prisão</Form.Label>
          <Form.Control
            type="input"
            id="prisonTime"
            onChange={handleChange}
            value={crime.prisonTime}></Form.Control>
        <Form.Label>Status</Form.Label>
          <Form.Control
            id="statusId"
            value={crime.statusId}
            onChange={handleChange}
            as="select">
              <option value="0">Selecione um status</option>
              {statuses.map(status => (
                <option key={status.id} value={status.id}>{status.name}</option>  
              ))}
          </Form.Control>
        <div className="separador__botoes">
          <Button className="formulario__botao btn-secondary" onClick={() => props.history.push("/crimes")}>Cancelar</Button>
          <Button className="formulario__botao" onClick={() => handleSubmit(id)}>{botaoEnviar}</Button>
        </div>
      </Form>
    </div>
  )
}

export default Index

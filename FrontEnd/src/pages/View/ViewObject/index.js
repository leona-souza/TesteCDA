import React, { useState, useEffect } from 'react'
import { Button, Card, ListGroup } from "react-bootstrap";
import api from "../../../services/api";

function Index(props) {
  if (!sessionStorage.userName) {
    window.location.href="/";
  }
  
  const { id } = props.match.params;
  const { type } = props;
  const [objeto, setObjeto] = useState({});
  const construtor = (data) => {
    switch (type) {
      case "users":
        setObjeto({
          colunas: {
            id: {nome: "Id", css: "cursor"},
            name: {nome: "Nome", css: "cursor"},
          },
          baseUrl: "/users",
          botao: "Alterar usuário",
          dados: {
            id: id,
            name: data.userName
          }
        });
        break;
      case "status":
        setObjeto({
          colunas: {
            id: {nome: "Id", css: "cursor"},
            name: {nome: "Nome", css: "cursor"},
          },
          baseUrl: "/status",
          botao: "Alterar status",
          dados: {
            id: id,
            name: data.name
          }
        });
        break;
      case "crimes":
        const dataCriada = new Date(data.createDate);
        const dataAtualizada = data.updateDate ? new Date(data.updateDate) : "";
        const stringCriada = data.createUser.userName +" - "+ dataCriada.toLocaleString();
        const stringAtualizada = dataAtualizada ? data.updateUser.userName +" - "+ dataAtualizada.toLocaleString() : "";
        setObjeto({
          colunas: {
            id: {nome: "Id"},
            description: {nome: "Descrição"},
            penalty: {nome: "Multa"},
            prisonTime: {nome: "Tempo de prisão"},
            status: {nome: "Status"},
            createUser: {nome: "Criado por"},
            updateDate: {nome: "Atualizado em"}
          },
          baseUrl: "/crimes",
          botao: "Alterar crime",
          dados: {
            id: id,
            name: data.name,
            description: data.description,
            penalty: data.penalty,
            prisonTime: data.prisonTime,
            status: data.status.name,
            createUser: stringCriada,
            updateDate: stringAtualizada
          }
        });
        break;
          default:
    }
  };
        
  useEffect(() => {
    const loadApi = async () => {
      const response = await api.get(`${type}/${id}`);
      construtor(response.data);
    };
    loadApi();
  }, [id]);

  return (
    <div className="card__container">
        <Card className="card__conteudo">
          <Card.Body>
            <Card.Title><h2>{objeto.dados?.name}</h2></Card.Title>
            <ListGroup>
              {
                objeto.colunas &&
                Object.keys(objeto.colunas).map(obj =>
                  <ListGroup.Item key={obj}><strong>{objeto.colunas[obj].nome}:</strong> {objeto.dados[obj]}</ListGroup.Item>
                )
              }
            </ListGroup>
            <div className="separador__botoes">  
              <Button 
                className="formulario__botao"
                variant="secondary"
                onClick={() => props.history.push(`${objeto.baseUrl}`)}>Voltar</Button>
              <Button
                className="formulario__botao"
                variant="primary"
                onClick={() => props.history.push(`${objeto.baseUrl}/gerenciar/${objeto.dados?.id}`)}>{objeto.botao}</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Index

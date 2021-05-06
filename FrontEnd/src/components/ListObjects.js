import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import { BsInfoCircle, BsPencil, BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import api from '../services/api';

function ListObjects() {
  const dispatch = useDispatch();
  const { tipo, baseUrl, dados, botao, colunas } = useSelector(state => state.data);
  const [busca, setBusca] = useState("");

  const handleDelete = async (id, nome) => {
    if (window.confirm(`Deseja excluir permanentemente o registro "${nome}"?`)) {
      try {
        if (await api.delete(`${baseUrl}/${id}`)) {
          const temp = dados.filter(c => c.id !== id);
          dispatch({
            type: tipo,
            data: temp
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleBusca = (e) => {
    setBusca(e.target.value);
  }

  return (
    <div>
      <div className="buscar">
        <Form.Control type="input" placeholder="Buscar" onChange={handleBusca} />
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>  
            {colunas &&
              Object.keys(colunas)
                .map(obj => 
                  <th 
                    key={colunas[obj].nome}
                    className={colunas[obj].css}>{colunas[obj].nome}
                  </th>
                )               
            }
            <th className="largura__acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados && 
          dados
            .filter(o => busca === "" || o.name.toLowerCase().match(busca))
            .map(obj =>(
              <tr key={obj.id}>
                {
                  Object.keys(colunas).map(chave =>
                    <td key={chave}>{obj[chave]}</td>
                  )
                }
                <td className="centralizar">
                    <Link to={`${baseUrl}/detalhes/${obj.id}`}>
                      <BsInfoCircle className="botoes__margem" size={20} />
                    </Link>              
                    <Link to={`${baseUrl}/gerenciar/${obj.id}`}>
                      <BsPencil className="botoes__margem" size={20} />
                    </Link>
                    <Link to="#" onClick={() => {handleDelete(obj.id, obj.name)}}>
                      <BsTrash className="botoes__margem" size={20} />
                    </Link>
                </td>
              </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => {window.location.href = `${baseUrl}/gerenciar/new`}}>
        {botao}
      </Button>
    </div>

  )
}

export default ListObjects

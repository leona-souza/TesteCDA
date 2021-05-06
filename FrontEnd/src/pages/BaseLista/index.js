import React, { useEffect } from 'react';
import ListObjects from "../../components/ListObjects"
import api from "../../services/api";
import { useDispatch } from "react-redux";

function BaseLista(props) {
  if (!sessionStorage.userName) {
    window.location.href="/";
  }

  const dispatch = useDispatch();
  let tipo;
  switch (props.type) {
    case "users":
      tipo = "LIST_USUARIOS";
      break;
    case "crimes":
      tipo = "LIST_CRIMES";
      break;
    case "status": 
      tipo = "LIST_STATUS";
      break;
    default:
  }

  useEffect(() => {
    const loadApi = async () => {
      const response = await api.get(props.type);
      dispatch({
        type: tipo,
        data: response.data
      });
    }
    loadApi();
  }, []);

  return (
    <div>
      <ListObjects />
    </div>
  )
}

export default BaseLista

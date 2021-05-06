function login(state = [], action) {
  let temp = [];
  
/*************************************/
/********** Listar usuários **********/
/*************************************/
  switch(action.type) {
    case "LIST_USUARIOS":
      //Padronização de chaves
      for (let chave in action.data) {
        temp.push({
          id: action.data[chave].id,
          name: action.data[chave].name || action.data[chave].userName,
          password: action.data[chave].password
        });
      };
      //Configurações para componente único
      return {
        tipo: "LIST_USUARIOS",
        colunas: {
          id: {nome: "Id", css: "cursor largura__id"},
          name: {nome: "Nome", css: "cursor"},
        },
        baseUrl: "/users",
        botao: "Adicionar usuário",
        dados: temp
      };

/*************************************/
/********** Listar Crimes ************/
/*************************************/
    case "LIST_CRIMES":
      for (let chave in action.data) {
        temp.push({
          id: action.data[chave].id,
          name: action.data[chave].name,
          description: action.data[chave].description,
          penalty: action.data[chave].penalty,
          prisonTime: action.data[chave].prisonTime,
          statusId: action.data[chave].status.id,
          status: action.data[chave].status.name,
          createDate: action.data[chave].createDate,
          updateDate: action.data[chave].updateDate,
          createUserId: action.data[chave].createUserId,
          updateUserId: action.data[chave].updateUserId
        });
      };
      return {
        tipo: "LIST_CRIMES",
        colunas: {
          id: {nome: "Id", css: "cursor largura__id"},
          name: {nome: "Crime", css: "cursor"},
          penalty: {nome: "Multa", css: "cursor"},
          prisonTime: {nome: "Detenção", css: "cursor"},
          status: {nome: "Status", css: "cursor"},
        },
        baseUrl: "/crimes",
        botao: "Adicionar crime",
        dados: temp
      };

/*************************************/
/********** Listar status ************/
/*************************************/
    case "LIST_STATUS":
      for (let chave in action.data) {
        temp.push({
          id: action.data[chave].id,
          name: action.data[chave].name
        });
      };
      return {
        tipo: "LIST_STATUS",
        colunas: {
          id: {nome: "Id", css: "cursor largura__id"},
          name: {nome: "Status", css: "cursor"},
        },
        baseUrl: "/status",
        botao: "Adicionar status",
        dados: temp
      };

    default:
      return state;
  }
}

export default login;
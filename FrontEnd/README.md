Projeto criado com propósito de avaliação de habilidades para a vaga de dev no servidor Cidade Alta.

Ferramentas e tecnologias utilizadas:
  {
    React.JS,
    Redux,
    Bootstrap,
    react-bootstrap,
    react-router-dom,
    react-icons,
    .NET Core,
    Entity Framework,
    SQLServer (dados relacionados),
    Arquitetura MVC,
    Swagger
  }

A aplicação se inicia em uma tela de login. O processo de autenticação não utiliza JWT e é bastante simples, pois não tive muito sucesso na implementação no backend. Explico detalhadamente no parágrafo correspondente. Ao digitar as credenciais corretas o usuário é redirecionado para a tela de listagem de crimes cadastrados.
Há a opção de navegar entre crimes, status e usuários. Todas as telas possuem opções para acrescentar, visualizar detalhes, alterar e excluir registros.
Um destaque vai para a arquitetura de componente único de listagem e exibição de detalhes. Ao inves de ter um componente de listagem para cada entidade, um único componente é utilizado e suas respectivas configurações são passadas através de objetos. O mesmo acontece no componente de visualizar detalhes.
Há um input para buscar resultados em tempo real.
Não tive tempo útil para acrescentar a função de paginação. Também explico melhor no parágrafo sobre backend.

O backend funciona em uma API em C# com o Entity Framework. Eu nunca tive contato com a linguagem e nem com o framework. A API funciona, porém com limitações, especialmente na parte de autenticação. Tentei por mais de um dia fazer com que a autenticação funcionasse, mas o limite de tempo não me permitiu testar e concluir a ideia. Tentei utilizar JWT, mas a falta de familiaridade com C# foi um fator determinante. E, ao tentar encriptar o campo de senhas, tive dificuldade para fazer a conferência das senhas entre o front e o back.
A API retorna os objetos relacionados com um registro direto no JSON sem a necessidade do frontend realizar consultas adicionais.

Confesso que tenho muito mais facilidade com React e JavaScript do que com C#. Tentei trazer soluções que melhorassem a performace e deixassem a arquitetura simples. Gostei muito de desenvolver esse projeto e, se não fosse pelo limite de tempo, poderia melhorar muitas coisas.

@Souza
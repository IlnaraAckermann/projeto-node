# Node JS - OpenAPI 3.0

Este é um exemplo de um servidor Node.js utilizando o OpenAPI 3.0. Ele fornece endpoints para operações CRUD em usuários, perfis e posts, usando os padrões de Ports and Adapters e Factory.

## Informações do Projeto

- **Autor**: [Ilnara Ackermann](https://www.linkedin.com/in/ilnaraackermann/)
- **Versão**: 1.0.11

## Descrição

Este é um servidor Node.js que fornece endpoints para operações CRUD em usuários, perfis e posts. Ele segue o padrão de arquitetura Ports and Adapters, também conhecido como Hexagonal Architecture, e utiliza o padrão Factory para criação de instâncias de objetos.

## Estrutura do Projeto

O projeto possui as seguintes rotas e componentes:

### Rotas

- **/users**
  - **GET**: Retorna todos os usuários.
  - **POST**: Cria um novo usuário.

- **/users/{id}**
  - **GET**: Retorna um usuário existente pelo ID.
  - **PUT**: Atualiza um usuário existente pelo ID.
  - **DELETE**: Deleta um usuário existente pelo ID.

- **/profiles**
  - **GET**: Retorna todos os perfis.
  - **POST**: Cria um novo perfil.

- **/profiles/{id}**
  - **GET**: Retorna um perfil existente pelo ID.
  - **PUT**: Atualiza um perfil existente pelo ID.
  - **DELETE**: Deleta um perfil existente pelo ID.

- **/posts**
  - **GET**: Retorna todos os posts.
  - **POST**: Cria um novo post.

- **/post/{id}**
  - **GET**: Retorna um post existente pelo ID.
  - **PUT**: Atualiza um post existente pelo ID.
  - **DELETE**: Deleta um post existente pelo ID.

### Componentes

- **schemas**
  - **User**: Modelo de dados para um usuário.
  - **UserUpdate**: Modelo de dados para atualização de usuário.
  - **UserList**: Lista de objetos de usuário.
  - **Profile**: Modelo de dados para um perfil.
  - **ProfilePost**: Modelo de dados para criação de perfil.
  - **ProfilePut**: Modelo de dados para atualização de perfil.
  - **Post**: Modelo de dados para um post.
  - **PostPost**: Modelo de dados para criação de post.
  - **PostPut**: Modelo de dados para atualização de post.
  - **Id**: Tipo de dados para identificador (ID).

## Executando o Projeto

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor:

```
npm run dev
```

O servidor estará rodando em: [http://localhost:3000/api](http://localhost:3000/api)

## Requisitos

- Node.js
- TypeScript
- Prisma
- Express

## Contribuindo

Se você deseja contribuir com este projeto, por favor abra uma issue ou envie um pull request.


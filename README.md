# API de Vídeos com Node.js e PostgreSQL

Uma API RESTful simples para gerenciar vídeos, desenvolvida como parte de um estudo sobre backend com Node.js. O projeto implementa as operações básicas de um CRUD (Create, Read, Update, Delete).

## Funcionalidades

* **Criar** um novo vídeo.
* **Listar** todos os vídeos.
* **Buscar** vídeos por título.
* **Atualizar** um vídeo existente.
* **Deletar** um vídeo.

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Fastify**: Framework web rápido e de baixa sobrecarga para Node.js.
* **PostgreSQL**: Banco de dados relacional.
* **Neon**: Plataforma para hospedagem de bancos de dados PostgreSQL serverless.
* **node-postgres (`postgres`)**: Cliente PostgreSQL para Node.js.
* **Dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Um banco de dados PostgreSQL. Você pode criar uma conta gratuita no [Neon](https://neon.tech).

## 🏁 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GabrielVerissimoL/CRUD-node.js.git](https://github.com/GabrielVerissimoL/CRUD-node.js.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd CRUD-node.js
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Adicione a sua URL de conexão com o banco de dados PostgreSQL:
        ```env
        DATABASE_URL="sua_url_de_conexao_do_neon_aqui"
        ```

5.  **Inicie o servidor:**
    O servidor será iniciado em `http://localhost:3333`.
    ```bash
    npm run dev
    ```

## Endpoints da API

Aqui estão os endpoints disponíveis para interagir com a API:

#### `POST /videos`
Cria um novo vídeo.

* **Corpo da Requisição (JSON):**
    ```json
    {
        "title": "Primeiro Vídeo",
        "description": "Uma descrição para o vídeo.",
        "duration": 180
    }
    ```
* **Resposta:** `201 Created`

---
#### `GET /videos`
Lista todos os vídeos.

* **Query Params (opcional):** `?search=termo` para buscar vídeos por título.
* **Resposta:** `200 OK` com um array de vídeos.

---
#### `PUT /videos/:id`
Atualiza um vídeo específico pelo seu ID.

* **Corpo da Requisição (JSON):**
    ```json
    {
        "title": "Título Atualizado",
        "description": "Descrição atualizada.",
        "duration": 200
    }
    ```
* **Resposta:** `204 No Content`

---
#### `DELETE /videos/:id`
Deleta um vídeo específico pelo seu ID.

* **Resposta:** `204 No Content`

---

## Licença

Este projeto está sob a licença MIT.

# App Task Manager

Projeto de gerenciamento de tarefas desenvolvido para o desafio técnico do Bootcamp Web Front.

## Tecnologias utilizadas

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- SQL Server LocalDB

## Funcionalidades

- Listar tarefas
- Criar tarefas
- Editar tarefas
- Excluir tarefas
- Persistir dados em banco SQL Server

## Entidade principal

A entidade `Tarefa` possui os seguintes campos:

- `Id`: identificador da tarefa
- `Title`: título da tarefa
- `Description`: descrição da tarefa
- `Status`: status da tarefa
- `CreatedAt`: data de criação da tarefa

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- Node.js
- Angular CLI
- .NET 8 SDK
- SQL Server LocalDB ou SQL Server Express
- Git

## Executando o backend

Abra um terminal na pasta:

```bash
backend/AppTaskManager.Api
Restaure os pacotes:
Bash
Copiar
dotnet restore
Aplique as migrations no banco de dados:
Bash
Copiar
dotnet ef database update
Execute a API:
Bash
Copiar
dotnet run
A API ficará disponível em:
Copiar
http://localhost:5261
Swagger:
Copiar
http://localhost:5261/swagger
Endpoint principal:
Copiar
http://localhost:5261/api/Tasks
Executando o frontend
Abra outro terminal na pasta:
Bash
Copiar
frontend
Instale as dependências:
Bash
Copiar
npm install
Execute o Angular:
Bash
Copiar
ng serve -o
O frontend ficará disponível em:
Copiar
http://localhost:4200
Banco de dados
O projeto usa SQL Server LocalDB com a seguinte connection string:
JSON
Copiar
"DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=AppTaskManagerDb;Trusted_Connection=True;TrustServerCertificate=True"
Observações
O frontend se comunica com a API usando requisições HTTP em JSON.
A política de CORS está configurada para permitir requisições do Angular em:
Copiar
http://localhost:4200
Status do projeto
Projeto funcional com CRUD completo integrado entre Angular, ASP.NET Core Web API, Entity Framework Core e SQL Server.
Copiar
  
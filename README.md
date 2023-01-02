# Reciclarte FakeAPI

Esse é o repositório tem como base de JSON-Server + JSON-Server-Auth a FakeAPI fornecida pela Kenzie Academy Brasil.
Para aproveitar as funcionalidades de autenticação e rodar a API corretamente, utilizar "node server.js"

## Endpoints

### USERS

#### Cadastrar usuário - POST - /users <br>

Obrigatoriamente passar email e senha, pode fornecer outros campos (ainda precisamos definir o que vai constituir o usuário) <br>
Resposta padrão: <br>

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MjMxMCwiZXhwIjoxNjcyNjk1OTEwLCJzdWIiOiIxIn0.tMMI11uMefd-U5Ps-eUGGt3VZteLi8HKPFvaTlEcxSA",
	"user": {
		"email": "email@email.com",
		"name": "testerino",
		"id": 1
	}
}
```

#### Logar - POST - /login <br>

Obrigatoriamente passar email e senha <br>
Resposta padrão: <br>

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MzAxMSwiZXhwIjoxNjcyNjk2NjExLCJzdWIiOiIxIn0.F9LVrUGFAIaEZyTOFTrslXv-mrP8E1oQ_CeWxgAw67Q",
	"user": {
		"email": "email@email.com",
		"name": "testerino",
		"id": 1
	}
}
```

#### Editar perfil - PATCH - /users/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão com a informação editada: <br>

```
{
	"email": "email@email.com",
	"password": "$2a$10$lhbiWfQbG.vBIBLoh3URGuWa/ElxkH4OmxLUXjsirN3U6QRDIuGLa",
	"name": "Testerina",
	"id": 1,
	"userId": 1
}
```

#### Buscar perfil de usuário - GET - /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```
{
	"email": "email@email.com",
	"password": "$2a$10$lhbiWfQbG.vBIBLoh3URGuWa/ElxkH4OmxLUXjsirN3U6QRDIuGLa",
	"name": "Testerina",
	"id": 1,
	"userId": 1
}
```

#### Buscar todos os usuários - GET - /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```
[
	{
		"email": "email@email.com",
		"password": "$2a$10$lhbiWfQbG.vBIBLoh3URGuWa/ElxkH4OmxLUXjsirN3U6QRDIuGLa",
		"name": "Testerina",
		"id": 1,
		"userId": 1
	}
]
```

### IDEAS

#### Criar ideia - POST - /ideas <br>

Deve fornecer token de acesso e o id do usuário que cria o post (“userId”), resta definir quais outros campos necessários <br>
Resposta padrão: <br>

```
{
	"title": "Mais títulos",
	"content": "Mais teste",
	"userId": 1,
	"id": 5
}
```

#### Editar ideia - PATCH - /ideas/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão: <br>

```
{
	title": "Mudou",
	content": "Mais teste",
	userId": 1,
	id": 3
}
```

#### Listar ideias - POST - /ideas <br>

Não precisa de token de acesso <br>
Resposta padrão: <br>

```
[
	{
		"title": "Não tão novo titulo",
		"content": "Mais um texto, mais um teste",
		"userId": 3,
		"id": 1
	},
	{
		"title": "Não tão novo titulo",
		"content": "Mais um texto, mais um teste",
		"userId": 3,
		"id": 2
	},
	{
		"title": "Mudou",
		"content": "Mais teste",
		"userId": 1,
		"id": 3
	},
	{
		"title": "funciona",
		"content": "Mais teste",
		"userId": 1,
		"id": 4
	}
]
```

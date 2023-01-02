# Reciclarte FakeAPI

Esse é o repositório tem como base de JSON-Server + JSON-Server-Auth a FakeAPI fornecida pela Kenzie Academy Brasil.
Para aproveitar as funcionalidades de autenticação e rodar a API corretamente, utilizar "node server.js"

## Endpoints

### USERS

#### Cadastrar usuário - POST - /users <br>

O usuário deve conter: <br>

```json
{
  "email": "email@gmail.com",
  "password": "abcde",
  "name": "Jean Antunes",
  "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
  "profile_pic": "http://img.com/png",
  "social_media": {
    "instagram": "http://instagram.com/user/exemplo-link",
    "facebook": "http://facebook.com/user/exemplo-link",
    "linkedin": "http://linkedin.com/user/exemplo-link"
  }
}
```

<br>
Resposta padrão: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MjMxMCwiZXhwIjoxNjcyNjk1OTEwLCJzdWIiOiIxIn0.tMMI11uMefd-U5Ps-eUGGt3VZteLi8HKPFvaTlEcxSA",
  "user": {
    "email": "email@gmail.com",
    "name": "Jean Antunes",
    "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
    "profile_pic": "http://img.com/png",
    "social_media": {
      "instagram": "http://instagram.com/user/exemplo-link",
      "facebook": "http://facebook.com/user/exemplo-link",
      "linkedin": "http://linkedin.com/user/exemplo-link"
    },
    "id": 1
  }
}
```

#### Logar - POST - /login <br>

Obrigatoriamente passar email e senha <br>
Resposta padrão: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MzAxMSwiZXhwIjoxNjcyNjk2NjExLCJzdWIiOiIxIn0.F9LVrUGFAIaEZyTOFTrslXv-mrP8E1oQ_CeWxgAw67Q",
  "user": {
    "email": "email@gmail.com",
    "name": "Jean Antunes",
    "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
    "profile_pic": "http://img.com/png",
    "social_media": {
      "instagram": "http://instagram.com/user/exemplo-link",
      "facebook": "http://facebook.com/user/exemplo-link",
      "linkedin": "http://linkedin.com/user/exemplo-link"
    },
    "id": 1
  }
}
```

#### Editar perfil - PATCH - /users/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão com a informação editada: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MjMxMCwiZXhwIjoxNjcyNjk1OTEwLCJzdWIiOiIxIn0.tMMI11uMefd-U5Ps-eUGGt3VZteLi8HKPFvaTlEcxSA",
  "user": {
    "email": "email@gmail.com",
    "name": "Jean Valjean Antunes",
    "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
    "profile_pic": "http://img.com/png",
    "social_media": {
      "instagram": "http://instagram.com/user/exemplo-link",
      "facebook": "http://facebook.com/user/exemplo-link",
      "linkedin": "http://linkedin.com/user/exemplo-link"
    },
    "id": 1,
    "userId": 1
  }
}
```

#### Buscar perfil de usuário - GET - /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MjMxMCwiZXhwIjoxNjcyNjk1OTEwLCJzdWIiOiIxIn0.tMMI11uMefd-U5Ps-eUGGt3VZteLi8HKPFvaTlEcxSA",
  "user": {
    "email": "email@gmail.com",
    "name": "Jean Valjean Antunes",
    "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
    "profile_pic": "http://img.com/png",
    "social_media": {
      "instagram": "http://instagram.com/user/exemplo-link",
      "facebook": "http://facebook.com/user/exemplo-link",
      "linkedin": "http://linkedin.com/user/exemplo-link"
    },
    "id": 1,
    "userId": 1
  }
}
```

#### Buscar todos os usuários - GET - /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
[
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MjY5MjMxMCwiZXhwIjoxNjcyNjk1OTEwLCJzdWIiOiIxIn0.tMMI11uMefd-U5Ps-eUGGt3VZteLi8HKPFvaTlEcxSA",
    "user": {
      "email": "email@gmail.com",
      "name": "Jean Valjean Antunes",
      "bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
      "profile_pic": "http://img.com/png",
      "social_media": {
        "instagram": "http://instagram.com/user/exemplo-link",
        "facebook": "http://facebook.com/user/exemplo-link",
        "linkedin": "http://linkedin.com/user/exemplo-link"
      },
      "id": 1,
      "userId": 1
    }
  }
]
```

### IDEAS

#### Criar ideia - POST - /ideas <br>

Deve fornecer token de acesso e o id do usuário que cria o post (“userId”). <br>

O corpo da requisção deve conter: <br>

```json
{
  "title": "nome do artesanato",
  "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
  "steps": "passo a passo",
  "materials": ["Garrafa pet", "Tampa de garrafa"],
  "categories": ["Móveis"],
  "estimated_cost": 5.0,
  "difficulty_level": 1,
  "userId": 1
}
```

<br>

Resposta padrão: <br>

```json
{
  "title": "nome do artesanato",
  "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
  "steps": "passo a passo",
  "materials": ["Garrafa pet", "Tampa de garrafa"],
  "categories": ["Móveis"],
  "estimated_cost": 5.0,
  "difficulty_level": 1,
  "userId": 1,
  "id": 3
}
```

#### Editar ideia - PATCH - /ideas/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão: <br>

```json
{
  "title": "Garrafa fechada",
  "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
  "steps": "passo a passo",
  "materials": ["Garrafa pet", "Tampa de garrafa"],
  "categories": ["Móveis"],
  "estimated_cost": 5.0,
  "difficulty_level": 1,
  "userId": 1,
  "id": 3
}
```

#### Listar ideias - POST - /ideas <br>

Não precisa de token de acesso <br>
Resposta padrão: <br>

```json
[
  {
    "title": "Garrafa fechada",
    "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
    "steps": "passo a passo",
    "materials": ["Garrafa pet", "Tampa de garrafa"],
    "categories": ["Móveis"],
    "estimated_cost": 5.0,
    "difficulty_level": 1,
    "userId": 3,
    "id": 1
  },
  {
    "title": "Garrafa fechada",
    "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
    "steps": "passo a passo",
    "materials": ["Garrafa pet", "Tampa de garrafa"],
    "categories": ["Móveis"],
    "estimated_cost": 5.0,
    "difficulty_level": 1,
    "userId": 3,
    "id": 2
  },
  {
    "title": "Garrafa fechada",
    "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
    "steps": "passo a passo",
    "materials": ["Garrafa pet", "Tampa de garrafa"],
    "categories": ["Móveis"],
    "estimated_cost": 5.0,
    "difficulty_level": 1,
    "userId": 1,
    "id": 3
  },
  {
    "title": "Garrafa fechada",
    "imgs": ["http://img.com/img-1.png", "http://img.com/img-2.png"],
    "steps": "passo a passo",
    "materials": ["Garrafa pet", "Tampa de garrafa"],
    "categories": ["Móveis"],
    "estimated_cost": 5.0,
    "difficulty_level": 1,
    "userId": 1,
    "id": 4
  }
]
```

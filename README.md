# Reciclarte FakeAPI

## Descrição
A API do site Reciclarte foi criada durante o projeto de finalização do módulo front-end da Kenzie Academy Brasil, ela permite ao usuário buscar ideias de acordo com os materiais especificados. Além disso, é possível cadastrar novos usuários e criar ou editar ideias na plataforma. A API também oferece diversas opções de filtragem através de query params para ajudar o usuário a encontrar as ideias desejadas de forma rápida e precisa.

## Carregar endpoints no insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=reciclarte-api&uri=)

## Endpoints: Users

### Cadastrar usuário - POST  /users <br>

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
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY",  
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

### Logar - POST /login <br>

Obrigatoriamente passar email e senha <br>
Resposta padrão: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY",
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

### Editar perfil - PATCH /users/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão com a informação editada: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY",  
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

### Buscar perfil de usuário - GET /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY",  
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

### Buscar todos os usuários - GET /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
[
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY",    
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

## Endpoints: Ideas

### Criar ideia - POST /ideas <br>

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

### Editar ideia - PATCH /ideas/`${id}` <br>

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

### Listar todas as ideias - GET /ideas <br>

Não precisa de token de acesso. <br>
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
### Listar todas as ideias - GET /ideas <br>

Não precisa de token de acesso. <br>
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

#### Query params - GET /ideas <br>

`title`

Retorna todos as ideias que possuam a palavra especificada como parte do seu título.

```
/ideas?title=arranjo
```

<br>

`materials`

Retorna todas as ideias que tenham o material especificado como um de seus materiais.
  
```
/ideas?materials=garrafa
```

É possível especificar vários materiais. Nesse caso, apenas as ideias que possuírem todos os materiais especificados serão retornadas.

```
/ideas?materials=garrafa&materials=fio&materials=tampa
```

<br>

`categories`

Retorna todas as ideias que tenham a categoria especificada como uma de suas suas categorias.
  
```
/ideas?categories=colorido
```

É possível especificar várias categorias. Nesse caso, apenas as ideias que possuírem todas as categorias especificadas serão retornadas.

```
/ideas?categories=colorido&categories=fofo&categories=clean
```

<br>

`difficulty_level`

Retorna todas as ideias que tenham o nível de dificuldade especificado.
  
```
/ideas?difficulty_level=1
```

É possível especificar vários níveis de dificuldade. Nesse caso, todas as ideias que possuírem um dos níveis de dificuldade especificados serão retornadas.

```
/ideas?difficulty_level=1&difficulty_level=3&difficulty_level=5
```

<br>


`maximum_cost`

Retorna todas as ideias que tenham um custo estimado menor ou igual ao custo máximo especificado.
  
```
/ideas?maximum_cost=55
```

<br>

`ordered_field` e `ordered_direction`

Ordena as ideias em ordem crescente ou decrescente.
O query param `ordered_field` recebe como valor o nome do campo a partir do qual as ideias serão ordenadas. Os seguintes valores podem ser usados:
* `estimated_cost`
* `difficulty_level`

Caso o query param `ordered_direction` não seja especificado, a ordem assumida será ascedente (do menor para o maior).

```
/ideas?ordered_field=estimated_cost
```

Para ordenar as ideias em ordem decrescente, basta especificar o query param `ordered_direction`, passando como valor a palavra `desc`.

```
/ideas?ordered_field=difficulty_level&ordered_direction=desc
```

#### Especificando vários query params
É possível especificar vários query params para que várias filtragens consecutivas sejam realizadas com base neles.

```
/ideas?maximum_cost=10&difficulty_level=1&ordered_field=difficulty_level&ordered_direction=desc
```
  
### Listar todos os materiais já usados - GET /ideas/materials <br>

Não precisa de token de acesso. <br>
Resposta padrão: <br>

```json
[
  "Papel Crepom",
  "Garrafa PET",
  "Papel",
  "Linha",
  "Tecido",
  "Tampa de garrafa",
  "Caixa de leite"
]
```

### Listar todas as categorias já possuídas - GET /ideas/categories <br>

Não precisa de token de acesso. <br>
Resposta padrão: <br>

```json
[
  "Móveis",
  "Fofo",
  "Clean",
  "Darkwave",
  "Colorido"
]
```
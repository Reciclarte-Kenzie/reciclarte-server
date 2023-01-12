# Reciclarte FakeAPI

## Descrição
A API do site Reciclarte foi criada durante o projeto de finalização do módulo front-end da Kenzie Academy Brasil, ela permite ao usuário buscar ideias de acordo com os materiais especificados. Além disso, é possível cadastrar novos usuários e criar ou editar ideias na plataforma. A API também oferece diversas opções de filtragem através de query params para ajudar o usuário a encontrar as ideias desejadas de forma rápida e precisa.

## Carregar endpoints no insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=reciclarte-api&uri=https%3A%2F%2Fgithub.com%2FReciclarte-Kenzie%2Freciclarte-server%2Fblob%2Fdevelop%2Freciclarte-endpoints.json)

## Base Url da API
Essa é a URL usada antes dos endpoints: <br> 
https://reciclarte-api.onrender.com

## Endpoints: Users

### Cadastrar usuário - POST  /users <br>

O usuário deve conter: <br>

```json
{
   "email": "email@email.com",
   "password": "email",
   "name": "Usuário Teste",
   "bio": "Meu nome é Teste e sou apaixonado por artesanatos DIY",
   "profile_pic": "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000"
}
```

<br>
Resposta padrão: <br>

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MzAyODAyMCwiZXhwIjoxNjczMDMxNjIwLCJzdWIiOiIzIn0.qrNsW6zPo6Dpj4LxwMlgrlKkmwDPg7vRBKwsMFzwlHA",
	"user": {
		"email": "email@email.com",
		"name": "Usuário Teste",
		"bio": "Meu nome é Teste e sou apaixonado por artesanatos DIY",
		"profile_pic": "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000",
		"id": 3
	}
}
```

### Logar - POST /login <br>

Obrigatoriamente passar email e senha <br>
Resposta padrão: <br>

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MzAyODA0NiwiZXhwIjoxNjczMDMxNjQ2LCJzdWIiOiIzIn0.kz11HMkWesGzMZt0d-MgLfAjfWojq6uCEq3mZV6Za30",
	"user": {
		"email": "email@email.com",
		"name": "Usuário Teste",
		"bio": "Meu nome é Teste e sou apaixonado por artesanatos DIY",
		"profile_pic": "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000",
		"id": 3
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
      "linkedin": "http://linkedin.com/user/exemplo-link"
    },
    "id": 1,
    "userId": 1
  }
}
```

### Deletar usuário - DELETE  /users/`${id}` <br>
Deve fornecer token de acesso <br>

A resposta padrão não possui corpo e retorna o status `200` <br>

### Buscar perfil de usuário - GET /users/`${id}` <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
{
	"id": 1,
	"email": "antonio@mail.com",
	"password": "123456",
	"name": "Antônio Silva Dauro",
	"bio": "Eu sou um homem apaixonado por artesanato e sustentabilidade. Sempre me interessei por técnicas manuais e criativas e gosto de transformar materiais reciclados em peças únicas e bonitas.",
	"profile_pic": "https://s2.glbimg.com/OKvApQkLyts-Zku_PYt5dqHKm2Q=/620x466/e.glbimg.com/og/ed/f/original/2020/08/27/arnaldosaccomanitv_10852559_624443207678380_964291240_n.jpg",
	"social_media": {
		"instagram": "https://www.instagram.com/arnaldo",
		"linkedin": "https://www.linkedin.com/in/arnaldo/"
	}
}
```

### Buscar todos os usuários - GET /users <br>

Deve fornecer token de acesso <br>
Resposta padrão: <br>

```json
[
	{
		"id": 1,
		"email": "antonio@mail.com",
		"password": "123456",
		"name": "Antônio Silva Dauro",
		"bio": "Eu sou um homem apaixonado por artesanato e sustentabilidade. Sempre me interessei por técnicas manuais e criativas e gosto de transformar materiais reciclados em peças únicas e bonitas.",
		"profile_pic": "https://s2.glbimg.com/OKvApQkLyts-Zku_PYt5dqHKm2Q=/620x466/e.glbimg.com/og/ed/f/original/2020/08/27/arnaldosaccomanitv_10852559_624443207678380_964291240_n.jpg",
		"social_media": {
			"instagram": "https://www.instagram.com/arnaldo",
			"linkedin": "https://www.linkedin.com/in/arnaldo/"
		}
	},
	{
		"email": "jean@gmail.com",
		"password": "$2a$10$P4sIy4xsb/U1IshvQiQtHOhpVzaXll8igvq0zqHv8bLZQSmG72j..",
		"name": "Jean Antunes",
		"bio": "Meu nome é Jean e sou apaixonado por artesanatos DIY",
		"profile_pic": "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000",
		"social_media": {
			"instagram": "https://www.instagram.com/jean_antunes_artesanato",
			"facebook": "https://www.facebook.com/jean_antunes_artesanato/",
			"linkedin": "https://www.linkedin.com/jean_antunes_artesanato/"
		},
		"id": 2
	},
	{
		"email": "email@email.com",
		"password": "$2a$10$OrmYf0ZE9h/kCi50TWlLBOtA0rfQACpouaKVENqkcvn5HY/d3W3y.",
		"name": "Usuário Teste",
		"bio": "Meu nome é Teste e sou apaixonado por artesanatos DIY",
		"profile_pic": "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000",
		"id": 3
	}
]
```

## Endpoints: Ideas

### Criar ideia - POST /ideas <br>

Deve fornecer token de acesso e o id do usuário que cria o post (“userId”). <br>

O corpo da requisção deve conter: <br>

```json
{
	"userId": 1,
	"title": "Bolsa de calça jeans",
	"imgs": [
		"https://i.pinimg.com/564x/b4/40/7c/b4407c695cbc7655d56d0a67e78c5546.jpg",
		"https://i.pinimg.com/564x/f4/a2/f5/f4a2f5df0b93aaa506026ded31615df1.jpg",
		"https://i.pinimg.com/564x/e6/35/ec/e635ec2870bef8111935c6bb31ab2d08.jpg"
	],
	"description": "Essa bolsa é uma peça artesanal feita de calça jeans reciclada e é perfeita para quem busca um acessório prático e ecológico. Feita à mão, ela possui detalhes únicos e um estilo despojado e descontraído. As alças são confortáveis e resistentes, permitindo que a bolsa seja usada em diversas ocasiões. Ela tem um tamanho médio, o suficiente para carregar os itens essenciais, como celular, carteira e chaves. Além disso, como é feita de calça jeans, ela é resistente e durável, ideal para uso diário.",
	"steps": "1- Comece cortando a calça jeans ao meio, ao longo da costura lateral. Você vai usar as duas metades para criar a frente e o fundo da bolsa.\n2- Desvire as duas metades da calça e coloque-as com o lado avesso para cima. Corte o tecido extra das pernas, deixando cerca de 2 centímetros de margem em todos os lados.\n3- Use a fita métrica ou régua para medir a largura e altura da bolsa. Desenhe um retângulo no papel ou papelão com essas medidas e use-o como guia para cortar o tecido da bolsa.\n4- Posicione o tecido da bolsa com o lado direito para cima e coloque as duas metades da calça jeans por cima, também com o lado direito para cima. Alinhe as bordas e costure as duas metades da calça jeans ao tecido da bolsa, deixando uma abertura para virar a bolsa do avesso.\n5- Depois de costurar, vire a bolsa do avesso pela abertura e puxe o tecido para que fique bem esticado. Costure a abertura fechando a bolsa.\n6- Por fim, corte uma tira de tecido da calça jeans e costure-a ao longo da parte superior da bolsa para criar alças. Se quiser, você também pode acrescentar bolsos externos ou outros detalhes a gosto.",
	"materials": [
		"Jeans",
		"Régua",
		"Linha",
		"Caneta",
		"Papel"
	],
	"categories": [
		"Bolsa",
		"Reciclagem",
		"Roupa"
	],
	"estimated_cost": 10,
	"difficulty_level": 4
}
```

<br>

Resposta padrão: <br>

```json
{
	"id": 2,
	"userId": 1,
	"title": "Bolsa de calça jeans",
	"imgs": [
		"https://i.pinimg.com/564x/b4/40/7c/b4407c695cbc7655d56d0a67e78c5546.jpg",
		"https://i.pinimg.com/564x/f4/a2/f5/f4a2f5df0b93aaa506026ded31615df1.jpg",
		"https://i.pinimg.com/564x/e6/35/ec/e635ec2870bef8111935c6bb31ab2d08.jpg"
	],
	"description": "Essa bolsa é uma peça artesanal feita de calça jeans reciclada e é perfeita para quem busca um acessório prático e ecológico. Feita à mão, ela possui detalhes únicos e um estilo despojado e descontraído. As alças são confortáveis e resistentes, permitindo que a bolsa seja usada em diversas ocasiões. Ela tem um tamanho médio, o suficiente para carregar os itens essenciais, como celular, carteira e chaves. Além disso, como é feita de calça jeans, ela é resistente e durável, ideal para uso diário.",
	"steps": "1- Comece cortando a calça jeans ao meio, ao longo da costura lateral. Você vai usar as duas metades para criar a frente e o fundo da bolsa.\n2- Desvire as duas metades da calça e coloque-as com o lado avesso para cima. Corte o tecido extra das pernas, deixando cerca de 2 centímetros de margem em todos os lados.\n3- Use a fita métrica ou régua para medir a largura e altura da bolsa. Desenhe um retângulo no papel ou papelão com essas medidas e use-o como guia para cortar o tecido da bolsa.\n4- Posicione o tecido da bolsa com o lado direito para cima e coloque as duas metades da calça jeans por cima, também com o lado direito para cima. Alinhe as bordas e costure as duas metades da calça jeans ao tecido da bolsa, deixando uma abertura para virar a bolsa do avesso.\n5- Depois de costurar, vire a bolsa do avesso pela abertura e puxe o tecido para que fique bem esticado. Costure a abertura fechando a bolsa.\n6- Por fim, corte uma tira de tecido da calça jeans e costure-a ao longo da parte superior da bolsa para criar alças. Se quiser, você também pode acrescentar bolsos externos ou outros detalhes a gosto.",
	"materials": [
		"Jeans",
		"Régua",
		"Linha",
		"Caneta",
		"Papel"
	],
	"categories": [
		"Bolsa",
		"Reciclagem",
		"Roupa"
	],
	"estimated_cost": 10,
	"difficulty_level": 4
}
```

### Editar ideia - PATCH /ideas/`${id}` <br>

Deve fornecer token de acesso, pode editar somente o campo desejado <br>
Resposta padrão: <br>

```json
{
	"id": 2,
	"userId": 1,
	"title": "Bolsa de calça jeans",
	"imgs": [
		"https://i.pinimg.com/564x/b4/40/7c/b4407c695cbc7655d56d0a67e78c5546.jpg",
		"https://i.pinimg.com/564x/f4/a2/f5/f4a2f5df0b93aaa506026ded31615df1.jpg",
		"https://i.pinimg.com/564x/e6/35/ec/e635ec2870bef8111935c6bb31ab2d08.jpg"
	],
	"description": "Essa bolsa é uma peça artesanal feita de calça jeans reciclada e é perfeita para quem busca um acessório prático e ecológico. Feita à mão, ela possui detalhes únicos e um estilo despojado e descontraído. As alças são confortáveis e resistentes, permitindo que a bolsa seja usada em diversas ocasiões. Ela tem um tamanho médio, o suficiente para carregar os itens essenciais, como celular, carteira e chaves. Além disso, como é feita de calça jeans, ela é resistente e durável, ideal para uso diário.",
	"steps": "1- Comece cortando a calça jeans ao meio, ao longo da costura lateral. Você vai usar as duas metades para criar a frente e o fundo da bolsa.\n2- Desvire as duas metades da calça e coloque-as com o lado avesso para cima. Corte o tecido extra das pernas, deixando cerca de 2 centímetros de margem em todos os lados.\n3- Use a fita métrica ou régua para medir a largura e altura da bolsa. Desenhe um retângulo no papel ou papelão com essas medidas e use-o como guia para cortar o tecido da bolsa.\n4- Posicione o tecido da bolsa com o lado direito para cima e coloque as duas metades da calça jeans por cima, também com o lado direito para cima. Alinhe as bordas e costure as duas metades da calça jeans ao tecido da bolsa, deixando uma abertura para virar a bolsa do avesso.\n5- Depois de costurar, vire a bolsa do avesso pela abertura e puxe o tecido para que fique bem esticado. Costure a abertura fechando a bolsa.\n6- Por fim, corte uma tira de tecido da calça jeans e costure-a ao longo da parte superior da bolsa para criar alças. Se quiser, você também pode acrescentar bolsos externos ou outros detalhes a gosto.",
	"materials": [
		"Jeans",
		"Régua",
		"Linha",
		"Caneta",
		"Papel"
	],
	"categories": [
		"Bolsa",
		"Reciclagem",
		"Roupa"
	],
	"estimated_cost": 15,
	"difficulty_level": 4
}
```

### Deletar ideias - DELETE  /ideas/`${id}` <br>
Deve fornecer token de acesso <br>

A resposta padrão não possui corpo e retorna o status `200` <br>

### Acessar ideia - GET /ideas/`${id}` <br>

Não precisa de token de acesso. <br>
Resposta padrão: <br>

```json
 {
	"id": 2,
	"userId": 1,
	"title": "Bolsa de calça jeans",
	"imgs": [
		"https://i.pinimg.com/564x/b4/40/7c/b4407c695cbc7655d56d0a67e78c5546.jpg",
		"https://i.pinimg.com/564x/f4/a2/f5/f4a2f5df0b93aaa506026ded31615df1.jpg",
		"https://i.pinimg.com/564x/e6/35/ec/e635ec2870bef8111935c6bb31ab2d08.jpg"
	],
	"description": "Essa bolsa é uma peça artesanal feita de calça jeans reciclada e é perfeita para quem busca um acessório prático e ecológico. Feita à mão, ela possui detalhes únicos e um estilo despojado e descontraído. As alças são confortáveis e resistentes, permitindo que a bolsa seja usada em diversas ocasiões. Ela tem um tamanho médio, o suficiente para carregar os itens essenciais, como celular, carteira e chaves. Além disso, como é feita de calça jeans, ela é resistente e durável, ideal para uso diário.",
	"steps": "1- Comece cortando a calça jeans ao meio, ao longo da costura lateral. Você vai usar as duas metades para criar a frente e o fundo da bolsa.\n2- Desvire as duas metades da calça e coloque-as com o lado avesso para cima. Corte o tecido extra das pernas, deixando cerca de 2 centímetros de margem em todos os lados.\n3- Use a fita métrica ou régua para medir a largura e altura da bolsa. Desenhe um retângulo no papel ou papelão com essas medidas e use-o como guia para cortar o tecido da bolsa.\n4- Posicione o tecido da bolsa com o lado direito para cima e coloque as duas metades da calça jeans por cima, também com o lado direito para cima. Alinhe as bordas e costure as duas metades da calça jeans ao tecido da bolsa, deixando uma abertura para virar a bolsa do avesso.\n5- Depois de costurar, vire a bolsa do avesso pela abertura e puxe o tecido para que fique bem esticado. Costure a abertura fechando a bolsa.\n6- Por fim, corte uma tira de tecido da calça jeans e costure-a ao longo da parte superior da bolsa para criar alças. Se quiser, você também pode acrescentar bolsos externos ou outros detalhes a gosto.",
	"materials": [
		"Jeans",
		"Régua",
		"Linha",
		"Caneta",
		"Papel"
	],
	"categories": [
		"Bolsa",
		"Reciclagem",
		"Roupa"
	],
	"estimated_cost": 10,
	"difficulty_level": 4
}
```

### Listar todas as ideias - GET /ideas <br>

Não precisa de token de acesso. <br>
Resposta padrão: <br>

```json
[
	{
		"id": 1,
		"userId": 1,
		"title": "Mesa de canto de cabide",
		"imgs": [
			"https://i.pinimg.com/564x/0a/d1/14/0ad1149d75165b6fdb349fe157e90bd2.jpg",
			"https://i.pinimg.com/564x/be/b3/dc/beb3dc0edfc65daa5588032769bfa61b.jpg"
		],
		"description": "Uma mesa de canto feita com cabides é uma peça criativa e funcional que pode ser usada em qualquer cômodo da casa. Ela é feita de cabides, um material resistente e versátil, e é projetada para ocupar um canto da parede, economizando espaço e adicionando um toque de estilo ao ambiente.",
		"steps": "1- Comece escolhendo os cabides que você vai usar. É importante escolher cabides resistentes e de tamanho adequado para suportar o peso da mesa. Se quiser, pode misturar cabides de diferentes cores ou modelos para criar um visual mais interessante.\n2- Use a tesoura para cortar os cabides no tamanho desejado. Você vai precisar de um cabide para cada lado da mesa e um ou dois para o fundo, dependendo do tamanho da mesa.\n3- Se quiser, você pode colocar um pedaço de papelão ou madeira no topo da mesa para criar uma superfície plana. Isso vai dar mais estabilidade à mesa e torná-la mais fácil de usar.\n4- Posicione os cabides no canto da parede onde você quer colocar a mesa. Marque os pontos onde os cabides vão ser fixados na parede com um lápis.\n5- Use a furadeira para fazer os furos na parede nos pontos marcados. Encaixe os rebites ou parafusos nos furos e fixe os cabides na parede.\n6- Por fim, coloque o papelão ou a madeira no topo dos cabides e ajuste a mesa para que fique nivelada. Se quiser, você pode acrescentar outros detalhes, como prateleiras ou gavetas, a gosto.",
		"materials": [
			"Cabide",
			"Parafuso",
			"Furadeira",
			"Tesoura",
			"Madeira",
			"Papelão"
		],
		"categories": [
			"Móveis",
			"Rústico"
		],
		"estimated_cost": 20,
		"difficulty_level": 5
	},
	{
		"id": 2,
		"userId": 1,
		"title": "Bolsa de calça jeans",
		"imgs": [
			"https://i.pinimg.com/564x/b4/40/7c/b4407c695cbc7655d56d0a67e78c5546.jpg",
			"https://i.pinimg.com/564x/f4/a2/f5/f4a2f5df0b93aaa506026ded31615df1.jpg",
			"https://i.pinimg.com/564x/e6/35/ec/e635ec2870bef8111935c6bb31ab2d08.jpg"
		],
		"description": "Essa bolsa é uma peça artesanal feita de calça jeans reciclada e é perfeita para quem busca um acessório prático e ecológico. Feita à mão, ela possui detalhes únicos e um estilo despojado e descontraído. As alças são confortáveis e resistentes, permitindo que a bolsa seja usada em diversas ocasiões. Ela tem um tamanho médio, o suficiente para carregar os itens essenciais, como celular, carteira e chaves. Além disso, como é feita de calça jeans, ela é resistente e durável, ideal para uso diário.",
		"steps": "1- Comece cortando a calça jeans ao meio, ao longo da costura lateral. Você vai usar as duas metades para criar a frente e o fundo da bolsa.\n2- Desvire as duas metades da calça e coloque-as com o lado avesso para cima. Corte o tecido extra das pernas, deixando cerca de 2 centímetros de margem em todos os lados.\n3- Use a fita métrica ou régua para medir a largura e altura da bolsa. Desenhe um retângulo no papel ou papelão com essas medidas e use-o como guia para cortar o tecido da bolsa.\n4- Posicione o tecido da bolsa com o lado direito para cima e coloque as duas metades da calça jeans por cima, também com o lado direito para cima. Alinhe as bordas e costure as duas metades da calça jeans ao tecido da bolsa, deixando uma abertura para virar a bolsa do avesso.\n5- Depois de costurar, vire a bolsa do avesso pela abertura e puxe o tecido para que fique bem esticado. Costure a abertura fechando a bolsa.\n6- Por fim, corte uma tira de tecido da calça jeans e costure-a ao longo da parte superior da bolsa para criar alças. Se quiser, você também pode acrescentar bolsos externos ou outros detalhes a gosto.",
		"materials": [
			"Jeans",
			"Régua",
			"Linha",
			"Caneta",
			"Papel"
		],
		"categories": [
			"Bolsa",
			"Reciclagem",
			"Roupa"
		],
		"estimated_cost": 10,
		"difficulty_level": 4
	},
	{
		"id": 3,
		"userId": 1,
		"title": "Jarro com palitos de picolé",
		"imgs": [
			"http://2.bp.blogspot.com/-5ljgigoDBOo/UkA5bck-MAI/AAAAAAAAGJU/cWxIfPzQ4W8/s1600/mini+arranjo+para+casamento+(11).jpg",
			"http://img.com/img-2.png",
			"http://3.bp.blogspot.com/-eB9D1l8HiYk/UkA5bilUmhI/AAAAAAAAGJQ/QshDpt3smj4/s1600/mini+arranjo+para+casamento+(1).jpg",
			"http://1.bp.blogspot.com/-upzvRRWI5Io/UkA5gASzaCI/AAAAAAAAGKY/nuMJCN6iz2g/s1600/mini+arranjo+para+casamento+(3).jpg"
		],
		"description": "O jarro é feito de latinha, um material durável e reciclável, e é coberto por palitos de picolé, que são usados para dar um toque de cor e textura à peça.\nEsse jarro pode ser usado tanto em ambientes internos quanto externos e é perfeito para quem gosta de decorações criativas e ecológicas. Ele pode ser usado para exibir uma variedade de flores e plantas, criando um visual bonito e acolhedor. Além disso, como é feito de latinha e palitos de picolé, ele é muito fácil de fazer.",
		"steps": "1- Colocar os palitos um ao lado do outro sobre a mesa\n2- Cubrir a parte dos palitos virada pra cima com a fita dupla face\n3- Envolver a lata com a parte colante dos palitos, fixando-os nela\n4-Inserir a fita de renda em torno do jarro",
		"materials": [
			"Palito",
			"Lata",
			"Fita dupla face",
			"Renda"
		],
		"categories": [
			"Jarro",
			"Reciclagem",
			"Fofo"
		],
		"estimated_cost": 5,
		"difficulty_level": 1
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

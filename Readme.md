<h1 align="center">
    <img alt="logo-nlw" title="nlwreturn" src="assets-readme/nlw.svg" width="200px" />    
</h1>

<br>


## 💻 Projeto

Feedget: É um projeto que visa coletar o feedback dos usuários, relatando problemas, ideias ou outros!

## 🖼 Layout

Veja o layout no link abaixo:
  - [Feedget - Figma](https://www.figma.com/community/file/1102912516166573468)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Vitejs](https://vitejs.dev/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📝 Requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/package/npm) ou [yarn](https://classic.yarnpkg.com/lang/en/)

## 👨‍💻 Instrutor

- [Diego Fernandes](https://github.com/diego3g) by [Rocketseat](https://www.rocketseat.com.br/)

## 🧑🏾‍💻 Iniciando o projeto


**Clone o projeto e acesse a pasta**

```bash
git clone https://github.com/vinive/nlw-return-impulse-web.git && cd nlw-return-impulse-web
```

**Siga os passos**

### Server

```bash
# Acesse a pasta server
$ cd server

# Instale as dependências
$ npm install

# Faça uma cópia de '.env.example' para '.env'
# Adicione suas variaveis ambiente
$ cp .env.example .env

# Rode as migrations
$ npx prisma migrate dev

# Inicie o servidor
$ npm run dev
```

### Web

**Certifque-se de ter iniciado o servidor**

```bash
# Acesse a pasta web
$ cd web

# Instale as dependencias
$ npm install

# Faça uma cópia de '.env.example' para '.env'
$ cp .env.local.example .env.local

# Inicie a aplicação
$ npm run dev
```

Desenvolvido por [Vinicius](https://github.com/diego3g)

<p align="center">
  <img width="115" height="100%" src=".github/logo.png" alt="API RESTful"></a>
</p>

<h3 align="center">API RESTful - MySQL Sequelize :: Sucrase</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## Apresentação:

Projeto **CRUD**: API RESTful seguindo conceito **MVC** utilizando Stack **NodeJS**, padronizado o código com **Eslint** e **Prettier**.

Pacotes principais: **Express** responsável pela criação de rotas, Middleware **JWT** para persistência do token por 30minutos, mantendo a segurança e credêncial do usuário, ORM **Sequelize** para conexão com banco de dados relacional (**MySQL**) e por fim, **Jest** para realização de tests.

## Instalação:

- Instalar dependência: `yarn install` ou `npm install`
- Configurar variáveis ambiente: `cp .env.example .env`
- Permissão de execução o script database: `sudo chmod +x src/scripts/database.sh`
- Executar script database para configurar o banco: `yarn dev:db`
- Iniciar banco de dados: `yarn sequelize db:migrate` ou import `api.sql`
- Iniciar aplicação em desenvolvimento: `yarn dev`
- Iniciar aplicação em produção: `yarn start`

- Format eslint: `yarn dev:fix`
- Buildar sucrase: `yarn dev:build`

## Rotas

#### Import insomnia: `Insomnia.json`

- [x] Criar usuário

```java
router.post('/users', UserController.store)

{
  "name": "Caio",
  "email": "caio.agiani14@gmail.com",
  "password": "123123"
}
```

- [x] Logar sessão

```java
router.post('/users', UserController.store)

{
  "email": "caio.agiani14@gmail.com",
  "password": "123123"
}
```

- [x] Perfil usuário

```java
router.get('/profile/:idUser', auth, UserController.store)
```

- [x] Atualizar usuário

```java
router.put('/users', auth, UserController.update)

{
  "name": "Caio Henrique Agiani Pimenta",
  "email": "caio.agiani14@gmail.com",
  "oldPassword": "123",
  "password": "123"
}
```

- [x] Deslogar usuário

```java
router.get('/logout', auth, SessionController.destroy)
```

- [x] Deletar usuário

```java
router.delete('/users/:idUser', auth, UserController.delete);
```

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani/)
- caio.agiani14@gmail.com

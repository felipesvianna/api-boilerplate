# API NodeJS Boilerplate

Boilerplate para REST API para autenticação de usuários e banco de dados MongoDB.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)

Boilerplate para API em NodeJS e Express que contém pacotes para autenticação de usuário, banco de dados MongoDB, DotEnv para gerenciar variáveis de ambiente e
Linting para VS Code com Prettier utilizando Airbnb JavaScript Style e ESLint.

## Pré-requisitos

- Ter um [MongoDB](https://www.mongodb.com/) configurado e pronto para receber os dados.

## Instalação

```bash
git clone https://github.com/felipesvianna/api-boilerplate
npm install
npx npm-check-updates -u
```

## Utilização

1. Definir instância do MongoDB e prepará-la para receber dados.
2. Definir as security keys para o JWT e para a sessão.
3. Criar um arquivo _.env.development.local._ na raiz do projeto
4. Colocar a URI do MongoDB e definir as variáveis no arquivo .env.development.local.
5. Colocar o arquivo .env.development.local no _.gitignore_.
6. Desenvolver sua API.

Há dois ambientes: De desenvolvimento e produção.

- Rodar servidor no ambiente de desenvolvimento ("NODE_ENV=dev nodemon app.js" definido em package.json)

```bash
npm run dev
```

- Rodar servidor no ambiente de produção

```bash
npm start
```

## Deployment

Este projeto utiliza [DotEnv](https://www.npmjs.com/package/dotenv) para gerenciar as variáveis de ambiente.
As variáveis de ambiente são definidas nos arquivos _.env_, _.env.development.local_.
O arquivo _.env.model_ serve como modelo.

Ao colocar no ambiente de produção, replicar o arquivo _.env.development.local_ com o nome _.env_ e redefinir as variáveis necessárias.

- Rodar servidor no ambiente de produção

```bash
npm start
```

## Pacotes NodeJS utilizados

- bcryptjs
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- connect-mongodb-session
- helmet
- jsonwebtoken
- mongodb
- mongoose
- nodemon

## Padrões de Desenvolvimento

### RESTful

- [REST Resource Naming Guide](https://restfulapi.net/resource-naming/)
- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [OWASP - REST Security Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md)

### Padrões de Código

- [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- [ESLint](https://eslint.org/docs/rules/)

### Pacotes de Linting

- eslint
- prettier
- eslint-plugin-prettier
- eslint-config-prettier
- eslint-plugin-node
- eslint-config-node
- eslint-config-airbnb

### Comandos de instalação

_Não é necessário rodar estes comandos!_
_Já estão instalados e configurados nos arquivos .eslintrc.json e .prettierrc files._

- Prettier e ESLint

```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

- Airbnb Javascript Style

```
npx install-peerdeps --dev eslint-config-airbnb

```

## Versionamento

- [SemVer](https://semver.org/)
- [Karma - Git Commit Msg](http://karma-runner.github.io/5.0/dev/git-commit-msg.html)

## Autores

- **Felipe Vianna** - [Github](https://github.com/felipesvianna)

## Licença

Informações de licença e links.

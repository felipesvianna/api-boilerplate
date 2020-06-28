# Api Boilerplate

Boilerplate em NodeJS para REST API para autenticação de usuários e banco de dados MongoDB.

## Getting Started

- Tem que ter uma instância do MongoDB preparada para receber os dados.
- Definir as security keys para o JWT e para a sessão.
- Colocar a URI do MongoDB no arquivo .env.development.local.
- Colocar o arquivo .env.development.local no _.gitignore_.

### Prerequisites

- Ter um [MongoDB](https://www.mongodb.com/) configurado.

### Installing

```bash
npm install
```

- Rodar servidor no ambiente de desenvolvimento

```bash
npm run dev
```

- Rodar servidor no ambiente de produção

```bash
npm start
```

## Running the tests

### Coding Styles

- [REST Resource Naming Guide](https://restfulapi.net/resource-naming/)
- [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- [OWASP - REST Security Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md)

- Contem configurações para o Prettier usando ESLint e Airbnb Javascript Style

## Deployment

Este projeto utiliza [DotEnv](https://www.npmjs.com/package/dotenv) para gerenciar as variáveis de ambiente.
As variáveis de ambiente são definidas nos arquivos _.env_, _.env.development.local_.
O arquivo _.env.model_ serve como modelo.

## Built With

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

## Contributing

## Versioning

- [SemVer](https://semver.org/)
- [Karma - Git Commit Msg](http://karma-runner.github.io/5.0/dev/git-commit-msg.html)

## Authors

- **Felipe Vianna** - [Github](https://github.com/felipesvianna)

## License

## Acknowledgments

- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

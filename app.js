const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const conectarMongoDb = require('./config/database');

// Carregar as variaveis de ambiente
require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.env.development.local' : '.env',
});

const app = express();

app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    store: new MongoStore({
      uri: process.env.DATABASE_URL,
      collection: 'sessao',
      ttl: 1 * 60 * 60,
      autoRemove: 'native',
    }),
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 1800000,
    },
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

// Resources

conectarMongoDb(() => {
  app.listen(process.env.SERVER_PORT);
});

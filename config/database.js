const mongoose = require('mongoose');

mongoose.set('debug', !!process.env.NODE_ENV === 'dev');

function conectarMongoDb(callback) {
  console.log('Conectando MongoDB');
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((client) => {
      console.log('MongoDB conectado');
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = conectarMongoDb;

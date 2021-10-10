const mongoose = require('mongoose');

const URI = 'mongodb://localhost/prana';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('Base de dato conectada');
});
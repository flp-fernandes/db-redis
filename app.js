const express = require('express');
//const redis = require('redis');
//const { promisify } = require('util');

const app = express();
//const client = redis.createClient();
//const getAsync = promisify(client.get).bind(client);

app.use(express.json());

app.use('/', require('./routes'));

app.listen(3000, () => console.log('Is on'));
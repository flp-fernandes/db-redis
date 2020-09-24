const express = require('express');
const redis = require('redis');
const { promisify } = require('util');

const app = express();
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

app.use(express.json());

app.post('/teste', async (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(500).send({
            msg: 'no cpf'
        })
    }

    //client.on('connect', () => console.log('connected'));
    const isOnRedis = await getAsync(cpf);
    if (isOnRedis) {
        return res.status(500).send({
            msg: 'aguarde para realizar request'
        })    
    } else {
        client.setex(cpf, 10, 'ok');
    }
    
    return res.status(200).send({
        msg: 'deu tudo certo'
    });
})

app.listen(3000, () => console.log('Is on'));
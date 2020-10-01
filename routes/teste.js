const { clientRedis, getAsyncRedis } = require('../database/redisConnection');

const teste = async (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(500).send({
            msg: 'no cpf'
        })
    }

    try {
        const valueOnRedis = `${cpf}teste`; //identificador uníssimo para operação, baseado no cpf (que não é unico)
        const isOnRedis = await getAsyncRedis(valueOnRedis);
        if (isOnRedis) {
            return res.status(500).send({
                msg: 'aguarde para realizar request'
            })    
        } else {
            clientRedis.setex(valueOnRedis, 10, 'rota teste');
        }
        
        return res.status(200).send({
            msg: 'deu tudo certo'
        });
    } catch(error) {
        console.error(error);
    }
}

module.exports = teste;
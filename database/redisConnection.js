const redis = require('redis')
const { promisify } = require('util');

const clientRedis = redis.createClient({
    password: 'foobar'
});

clientRedis.on('error', (error) => console.error('Redis error: ', error));

clientRedis.on('connect', () => console.log('Redis connected!'))

const getAsyncRedis = promisify(clientRedis.get).bind(clientRedis);

module.exports = {
    clientRedis,
    getAsyncRedis
}

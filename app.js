const redis = require('redis');

const client = redis.createClient({
    auth_pass: 'foobared'
});

client.on('connect', () => console.log('connected'));

for(let i = 0; i < 100; i++) {
    client.set('framework', 'ReactJS',  (err, reply) => {
        if (err) console.error(err);

        console.log(reply);
    });
}
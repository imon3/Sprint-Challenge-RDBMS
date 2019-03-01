const express = require('express');
const helmet = require('helmet');

const server = express();
const dbRouter = require('./router/router');

server.use(express.json());
server.use(helmet());
server.use('/api', dbRouter);

server.get('/', (req, res) => {
    res.send('Server Running on Post 5000')
});

server.listen(5000, function () {
    console.log('Listening on http://localhost:5000')
})
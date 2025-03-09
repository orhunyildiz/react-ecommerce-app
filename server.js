const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

server.use(router);
server.listen(process.env.PORT || 3001, () => {
    console.log('JSON Server is running');
});

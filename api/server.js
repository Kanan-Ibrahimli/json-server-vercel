const jsonServer = require('json-server');
const cors = require('cors'); 
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const auth = require('json-server-auth');

server.use(cors()); 

server.use(middlewares);
server.db = router.db;

server.use(auth);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server with Auth is running');
});


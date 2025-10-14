const jsonServer = require('json-server');
const cors = require('cors'); 
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const auth = require('json-server-auth');

server.use(cors({
  origin: 'https://taskly-skill-up-project.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})); 

server.use(middlewares);
server.db = router.db;

server.use(auth);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server with Auth is running');
});


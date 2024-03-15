//01...import json server
const jsonserver = require('json-server');

//02...create server using jsonserver
const server = jsonserver.create()

//03...setup path for db.json file
const router = jsonserver.router('db.json')

//04...return a middleware used by the json server
const middleware =jsonserver.defaults()

//05...setup port number
const port = process.env.PORT || 3001     //default port number for backend

//06...use in server
server.use(middleware)
server.use(router)

//07...to run the port
server.listen(port,()=>{
    console.log('Jsonserver listening on port 3001');
})
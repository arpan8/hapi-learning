'use strict';
const hapi = require('@hapi/hapi');
require('dotenv').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = hapi.server({
    port: port,
    host: host
});

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

server.route(userRoutes);
server.route(categoryRoutes);

const init = async()=>{
      server.events.on('response', function (request) {
        //console.log(request);
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });
    //server.logger.info('another way for accessing it')
    //server.log(['subsystem'], 'third way for accessing it')
    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err)=>{
    console.log(err);
    process.exit(1);
})

init();
const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    const server = hapi.server ({
        port: 8080,
        host: 'localhost'
    })
server.route(routes)

    await server.start();
    console.log(`server berjalan ${server.info.uri}`)
}

init()
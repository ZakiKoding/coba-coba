// eslint-disable-next-line no-unused-vars
const hapi = require('@hapi/hapi');
const {login} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/login',
    handler: login,
  },
];
//  {
//     method: 'GET',
//     path: '/login',
//     handler: 
//  },
//  {
//     method: 'PUT',
//     path: '/login',
//     handler: 
//  },

module.exports = routes
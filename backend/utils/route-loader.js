const express = require('express');
const router = express.Router();
const routes = require('../config/routes');

module.exports = (app) => {
  Object.keys(routes)
    .forEach(k => {
      console.log('loading route', k);
      const controller = require(`../controllers/${routes[k]}`);
      router[controller.method](k, controller.fn);
    });
  // TODO this might be a flawed approach
  app.use(router);
  console.log('routes loaded...');
};


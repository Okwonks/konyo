const express = require('express');
const router = express.Router();


const routes = {
// endpoint: controller
  '/api/health': 'health',
};

Object.keys(routes)
  .forEach(k => {
    console.log('loading route', k);
    const controller = require(`../controllers/${routes[k]}`);
    router[controller.method](k, controller.fn);
  });

module.exports = router;

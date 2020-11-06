
module.exports = (app) => {
  app.use(require('../routes/index'));
  console.log('routes loaded...');
};


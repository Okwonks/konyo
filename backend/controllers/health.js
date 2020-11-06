const Package = require('../../package.json');

module.exports = {
  method: 'get',
  fn: (req, res) => {
    res.status(200)
      .send({ name:Package.name, version:Package.version, description:Package.description });
  },
};

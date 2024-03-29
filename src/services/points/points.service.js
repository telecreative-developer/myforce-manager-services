// Initializes the `points` service on path `/points`
const createService = require('feathers-sequelize');
const createModel = require('../../models/points.model');
const hooks = require('./points.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'points',
    id: 'id_point',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/points', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('points');

  service.hooks(hooks);
};

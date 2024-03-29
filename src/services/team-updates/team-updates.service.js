// Initializes the `team-updates` service on path `/team-updates`
const createService = require('feathers-sequelize');
const createModel = require('../../models/team-updates.model');
const hooks = require('./team-updates.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'team-updates',
    id: 'id_team_update',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/team-updates', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('team-updates');

  service.hooks(hooks);
};

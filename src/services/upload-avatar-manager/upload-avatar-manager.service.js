// Initializes the `upload-avatar-manager` service on path `/upload-avatar-manager`
const hooks = require('./upload-avatar-manager.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/managers/avatars');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/upload-avatar-manager', blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-avatar-manager');

  service.hooks(hooks);
};

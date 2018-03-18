// Initializes the `upload-cover-manager` service on path `/upload-cover-manager`
const hooks = require('./upload-cover-manager.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/managers/covers');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/upload-cover-manager', blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-cover-manager');

  service.hooks(hooks);
};

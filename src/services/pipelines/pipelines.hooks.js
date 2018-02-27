const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPipelines = require('../../hooks/relationship-pipelines');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipPipelines()],
    get: [relationshipPipelines()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

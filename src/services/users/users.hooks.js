const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipUsers = require('../../hooks/relationship-users');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipUsers()],
    get: [relationshipUsers()],
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

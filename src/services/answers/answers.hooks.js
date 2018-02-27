const { authenticate } = require('@feathersjs/authentication').hooks;

const relationhsipAnswers = require('../../hooks/relationhsip-answers');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationhsipAnswers()],
    get: [relationhsipAnswers()],
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

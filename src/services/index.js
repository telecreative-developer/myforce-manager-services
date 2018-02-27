const managers = require('./managers/managers.service.js');
const branches = require('./branches/branches.service.js');
const pipelines = require('./pipelines/pipelines.service.js');
const customers = require('./customers/customers.service.js');
const users = require('./users/users.service.js');
const pics = require('./pics/pics.service.js');
const questions = require('./questions/questions.service.js');
const answers = require('./answers/answers.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(managers);
  app.configure(branches);
  app.configure(pipelines);
  app.configure(customers);
  app.configure(users);
  app.configure(pics);
  app.configure(questions);
  app.configure(answers);
};

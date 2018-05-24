const managers = require('./managers/managers.service.js');
const branches = require('./branches/branches.service.js');
const pipelines = require('./pipelines/pipelines.service.js');
const customers = require('./customers/customers.service.js');
const users = require('./users/users.service.js');
const pics = require('./pics/pics.service.js');
const questions = require('./questions/questions.service.js');
const answers = require('./answers/answers.service.js');

const teamUpdates = require('./team-updates/team-updates.service.js');

const points = require('./points/points.service.js');

const uploadAvatarManager = require('./upload-avatar-manager/upload-avatar-manager.service.js');

const uploadCoverManager = require('./upload-cover-manager/upload-cover-manager.service.js');

const targets = require('./targets/targets.service.js');

const pipelineProducts = require('./pipeline-products/pipeline-products.service.js');

const products = require('./products/products.service.js');

const subproducts = require('./subproducts/subproducts.service.js');

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
  app.configure(teamUpdates);
  app.configure(points);
  app.configure(uploadAvatarManager);
  app.configure(uploadCoverManager);
  app.configure(targets);
  app.configure(pipelineProducts);
  app.configure(products);
  app.configure(subproducts);
};

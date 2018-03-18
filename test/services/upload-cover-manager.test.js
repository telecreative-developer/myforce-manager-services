const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-cover-manager\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-cover-manager');

    assert.ok(service, 'Registered the service');
  });
});

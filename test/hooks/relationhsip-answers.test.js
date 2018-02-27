const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const relationhsipAnswers = require('../../src/hooks/relationhsip-answers');

describe('\'relationhsip-answers\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: relationhsipAnswers()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});

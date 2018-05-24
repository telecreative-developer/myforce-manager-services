const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const relationshipPipelineProducts = require('../../src/hooks/relationship-pipeline-products');

describe('\'relationship-pipeline-products\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: relationshipPipelineProducts()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});

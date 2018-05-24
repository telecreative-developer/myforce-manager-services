const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const relationshipSubproducts = require('../../src/hooks/relationship-subproducts');

describe('\'relationship-subproducts\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: relationshipSubproducts()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});

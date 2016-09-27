import http from 'http';
import assert from 'assert';

import '../../bin/server.js';

// Are we connected
describe('Loading America API Express Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000/api/v1', res => {
      assert.equal( 200, res.statusCode );
      done();
    });
  });
});
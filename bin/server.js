'use strict';

const http = require('http');
const config = require('../config');
const app = require('../api/app');
const log = require('../api/log');

let server = http.createServer( app );

server.listen(config.port, () => {
  log(`Express server listening on port *:${config.port}`);
});

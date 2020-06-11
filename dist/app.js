"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _server = require('./server'); var _server2 = _interopRequireDefault(_server);

_server2.default.listen(3333, () => console.log({ port: 3333 }));

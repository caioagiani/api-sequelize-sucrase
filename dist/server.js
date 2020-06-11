"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

require('./database');

const server = _express2.default.call(void 0, );

server.use(_cors2.default.call(void 0, ));
server.use(_express2.default.json());
server.use(_routes2.default);

exports. default = server;

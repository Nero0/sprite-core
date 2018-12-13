"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _basenode = _interopRequireDefault(require("../../basenode"));

var _layer = _interopRequireDefault(require("../../layer"));

var _stylesheet = _interopRequireDefault(require("./stylesheet"));

_layer.default.prototype.fromDocumentCSS = function () {
  _stylesheet.default.fromDocumentCSS();
};

_basenode.default.prototype.restyle = function () {
  _stylesheet.default.computeStyle(this);
};

var _default = _stylesheet.default;
exports.default = _default;
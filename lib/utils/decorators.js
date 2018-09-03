'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

exports.attr = attr;
exports.inherit = inherit;
exports.relative = relative;
exports.flow = flow;
exports.absolute = absolute;
exports.setDeprecation = setDeprecation;
exports.deprecate = deprecate;
exports.parseValue = parseValue;

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _attrAbsolute = (0, _symbol2.default)('attrAbsolute');

function attr(target, prop, descriptor) {
  target.__attributeNames = target.__attributeNames || new _set2.default();
  target.__attributeNames.add(prop);
  var _getter = descriptor.get;
  if (!_getter) {
    _getter = function _getter() {
      return this.get(prop);
    };
  }
  if (!target.__relative && !target.__inherit) {
    descriptor.get = function () {
      var ret = _getter.call(this);
      if (ret == null) {
        ret = this.get(prop);
      }
      return ret;
    };
  } else if (target.__relative) {
    delete target.__relative;
    // enable set default to user defined getter
    descriptor.get = function () {
      var ret = _getter.call(this);
      var subject = this.subject;

      if (ret == null) {
        ret = this.get(prop);
      } else if (ret.relative) {
        var _relative = ret.relative.trim();
        if (_relative === 'pw' || _relative === 'ph') {
          var parent = subject.parent;
          var pv = null;
          if (parent) {
            if (_relative === 'pw') {
              pv = parent.contentSize != null ? parent.contentSize[0] : parent.resolution[0];
            } else if (_relative === 'ph') {
              pv = parent.contentSize != null ? parent.contentSize[1] : parent.resolution[1];
            }
          }
          if (pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
          }
          subject.clearCache();
          if (subject[_attrAbsolute]) {
            return pv * ret.v;
          }
          return ret.rv;
        }
        if (_relative === 'rw' || _relative === 'rh') {
          var layer = subject.layer;
          var _pv = null;
          if (layer) {
            if (_relative === 'rw') {
              _pv = layer.resolution[0];
            } else if (_relative === 'rh') {
              _pv = layer.resolution[1];
            }
          }
          if (_pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
          }
          subject.clearCache();
          if (subject[_attrAbsolute]) {
            return _pv * ret.v;
          }
          return ret.rv;
        }
      }
      return ret;
    };
  } else {
    delete target.__inherit;
    // enable set default to user defined getter
    descriptor.get = function () {
      var ret = _getter.call(this);
      var subject = this.subject;

      if (ret == null) {
        ret = this.get(prop);
      } else if (ret.inherit) {
        var parent = subject.parent;
        var pv = parent ? parent.attr(prop) : ret.pv;
        if (pv !== ret.pv) {
          this[prop] = 'inherit';
          return this[prop];
        }
        subject.clearCache();
        return ret.pv;
      }
      return ret;
    };
  }

  var _setter = descriptor.set;
  descriptor.set = function (val) {
    var subject = this.subject;
    this.__clearCacheTag = false;
    this.__updateTag = false;
    this.__reflowTag = false;
    _setter.call(this, val);
    if (subject && subject.hasLayout) {
      var offsetSize = subject.boxOffsetSize,
          layoutSize = subject.__lastLayout;

      if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        subject.parent.clearLayout();
      }
      subject.__lastLayout = offsetSize;
    }
    if (this.subject && this.__updateTag) {
      subject.forceUpdate(this.__clearCacheTag);
      if (this.__reflowTag) {
        subject.reflow();
      }
    }
    // delete this.__reflowTag;
    // delete this.__updateTag;
    // delete this.__clearCacheTag;
  };
  return descriptor;
}

function inherit() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (target, prop, descriptor) {
    if (descriptor.set) {
      var setter = descriptor.set;
      target.__inherit = true;

      descriptor.set = function (val) {
        if (typeof val === 'string') {
          val = val.trim();
          if (val === 'inherit') {
            var parent = this.subject.parent;
            var pv = parent ? parent.attr(prop) : defaultValue;
            if (pv === 'inherit') pv = defaultValue;
            val = {
              inherit: true,
              pv: pv
            };
          }
        }
        setter.call(this, val);
      };

      return descriptor;
    }
  };
}

// relative -> width | height
function relative() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'width';

  return function (target, prop, descriptor) {
    if (descriptor.set) {
      var setter = descriptor.set;
      target.__relative = true;

      descriptor.set = function (val) {
        if (typeof val === 'string') {
          val = val.trim();
          if (val.endsWith('%')) {
            var parent = this.subject.parent;
            var pv = null;
            if (parent) {
              if (type === 'width') {
                pv = parent.contentSize != null ? parent.contentSize[0] : parent.resolution[0];
              } else if (type === 'height') {
                pv = parent.contentSize != null ? parent.contentSize[1] : parent.resolution[1];
              }
            }
            val = {
              relative: type === 'width' ? 'pw' : 'ph',
              pv: pv,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else if (val.endsWith('rw')) {
            var layer = this.subject.layer;
            var _pv2 = null;
            if (layer) {
              _pv2 = layer.resolution[0];
            }
            val = {
              relative: 'rw',
              pv: _pv2,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else if (val.endsWith('rh')) {
            var _layer = this.subject.layer;
            var _pv3 = null;
            if (_layer) {
              _pv3 = _layer.resolution[1];
            }
            val = {
              relative: 'rh',
              pv: _pv3,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else {
            val = parseFloat(val);
          }
        }
        setter.call(this, val);
      };
      return descriptor;
    }
  };
}

function flow(target, prop, descriptor) {
  if (descriptor.get) {
    var _getter = descriptor.get;
    descriptor.get = function () {
      var ret = this.flow(prop);
      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(prop, ret);
      }
      return ret;
    };
  }
  return descriptor;
}

function absolute(target, prop, descriptor) {
  if (descriptor.get) {
    var _getter = descriptor.get;
    descriptor.get = function () {
      this[_attrAbsolute] = true;
      var ret = _getter.call(this);
      this[_attrAbsolute] = false;
      return ret;
    };
  }
  return descriptor;
}

function setDeprecation(apiName) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  msg = '[Deprecation] ' + apiName + ' has been deprecated.' + msg;
  (0, _utils.notice)(msg);
}

function deprecate() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msg = '',
      apiName = '';
  function decorator(target, prop, descriptor) {
    apiName = apiName || target.constructor.name + '#' + prop;
    if (typeof descriptor.value === 'function') {
      var func = descriptor.value;
      descriptor.value = function () {
        setDeprecation(apiName, msg);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return func.apply(this, args);
      };
    }
    if (descriptor.set) {
      var setter = descriptor.set;
      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }
    if (descriptor.get) {
      var getter = descriptor.get;
      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }
  }
  if (args.length === 1) {
    msg = args[0];
    return decorator;
  }
  if (args.length === 2) {
    apiName = args[0];
    msg = args[1];
    return decorator;
  }
  return decorator.apply(undefined, args);
}

function parseValue() {
  for (var _len3 = arguments.length, parsers = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    parsers[_key3] = arguments[_key3];
  }

  return function (target, prop, descriptor) {
    var setter = descriptor.set;

    descriptor.set = function (val) {
      val = parsers.reduce(function (v, parser) {
        return parser(v);
      }, val);
      setter.call(this, val);
    };

    return descriptor;
  };
}
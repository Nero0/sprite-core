'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperties = require('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _desc, _value, _class;

var _spriteMath = require('sprite-math');

var _svgPathToCanvas = require('svg-path-to-canvas');

var _svgPathToCanvas2 = _interopRequireDefault(_svgPathToCanvas);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var _attr = (0, _symbol2.default)('attr'),
    _temp = (0, _symbol2.default)('store'),
    _subject = (0, _symbol2.default)('subject'),
    _default = (0, _symbol2.default)('default'),
    _props = (0, _symbol2.default)('props');

var SpriteAttr = (_dec = (0, _utils.deprecate)('You can remove this call.'), _dec2 = (0, _utils.parseValue)(_utils.parseStringFloat, _utils.oneOrTwoValues), _dec3 = (0, _utils.relative)('width'), _dec4 = (0, _utils.relative)('height'), _dec5 = (0, _utils.relative)('width'), _dec6 = (0, _utils.relative)('height'), _dec7 = (0, _utils.parseValue)(_utils.parseStringInt), _dec8 = (0, _utils.parseValue)(_utils.parseColorString), _dec9 = (0, _utils.relative)('width'), _dec10 = (0, _utils.relative)('height'), _dec11 = (0, _utils.relative)('width'), _dec12 = (0, _utils.relative)('height'), _dec13 = (0, _utils.parseValue)(_utils.parseStringInt), _dec14 = (0, _utils.parseValue)(_utils.parseStringInt, _utils.fourValuesShortCut), _dec15 = (0, _utils.parseValue)(parseFloat), _dec16 = (0, _utils.parseValue)(parseFloat), _dec17 = (0, _utils.parseValue)(_utils.parseStringTransform), _dec18 = (0, _utils.parseValue)(parseFloat), _dec19 = (0, _utils.parseValue)(_utils.parseStringFloat, _utils.oneOrTwoValues), _dec20 = (0, _utils.parseValue)(parseFloat), _dec21 = (0, _utils.parseValue)(parseFloat), _dec22 = (0, _utils.parseValue)(_utils.parseStringInt, _utils.fourValuesShortCut), (_class = function () {
  function SpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, SpriteAttr);

    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_props] = {};

    this.setDefault({
      state: 'default',
      states: {},
      actions: {
        'beforeEnter:': {
          duration: 300,
          easing: 'ease-in'
        },
        'beforeExit:': {
          duration: 300,
          easing: 'ease-out'
        },
        'hide:': {
          duration: 300,
          easing: 'ease-in'
        },
        ':hide': {
          duration: 300,
          easing: 'ease-out'
        },
        'hide:beforeShow': 'none',
        'beforeShow:': {
          duration: 300,
          easing: 'ease-in'
        }
      },
      enterMode: 'normal',
      exitMode: 'normal',
      anchor: [0, 0],
      enableCache: true,
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      layoutX: 0,
      layoutY: 0,
      layoutWidth: '',
      layoutHeight: '',
      bgcolor: '',
      flex: '',
      order: 0,
      position: '',
      alignSelf: '',
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: 'matrix(1,0,0,1,0,0)',
      transformOrigin: '',
      transformMatrix: [1, 0, 0, 1, 0, 0],
      border: {
        width: 0,
        color: 'rgba(0,0,0,0)',
        style: 'solid'
      },
      // border: [0, 'rgba(0,0,0,0)'],
      borderRadius: 0,
      boxSizing: 'content-box',
      dashOffset: 0,
      display: '',
      padding: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      zIndex: 0,
      offsetRotate: 'auto',
      gradients: {},
      offsetDistance: 0,
      filter: '', // filter: {blur, ...}
      shadow: '', // shadow: {color = 'rgba(0,0,0,1)', blur = 1[, offset]}
      bgimage: ''
    });
    this[_temp] = new _map2.default(); // save non-serialized values
    this.__extendAttributes = new _set2.default();
  }

  (0, _createClass3.default)(SpriteAttr, [{
    key: 'setDefault',
    value: function setDefault(attrs) {
      var _this = this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      (0, _assign2.default)(this[_default], attrs);
      (0, _assign2.default)(this[_attr], attrs);
      var _p = {};
      (0, _entries2.default)(props).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            prop = _ref2[0],
            getter = _ref2[1];

        _p[prop] = {
          get: getter.bind(_this)
        };
      });
      (0, _defineProperties2.default)(this[_attr], _p);
      (0, _assign2.default)(this[_props], _p);
    }
  }, {
    key: 'saveObj',
    value: function saveObj(key, val) {
      this[_temp].set(key, val);
      this.__updateTag = true;
    }
  }, {
    key: 'loadObj',
    value: function loadObj(key) {
      return this[_temp].get(key);
    }
  }, {
    key: 'quietSet',
    value: function quietSet(key, val) {
      if (val == null) {
        val = this[_default][key];
      }
      this[_attr][key] = val;
    }
  }, {
    key: 'set',
    value: function set(key, val) {
      if (val == null) {
        val = this[_default][key];
      }
      if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
        var oldVal = this[_attr][key];
        if (oldVal !== val && (0, _stringify2.default)(val) === (0, _stringify2.default)(oldVal)) {
          return;
        }
      }
      this[_attr][key] = val;
      this.__updateTag = true;
      // auto reflow
      if (key === 'width' || key === 'height' || key === 'layoutWidth' || key === 'layoutHeight' || key === 'display' || key === 'anchor' || key === 'border' || key === 'padding' || key === 'boxSizing' || key === 'margin' || key === 'flex') {
        this.__reflowTag = true;
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this[_attr][key];
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      return this;
    }
  }, {
    key: 'clearFlow',
    value: function clearFlow() {
      this.__reflowTag = true;
      return this;
    }
  }, {
    key: 'merge',
    value: function merge(attrs) {
      var _this2 = this;

      if (typeof attrs === 'string') {
        attrs = JSON.parse(attrs);
      }
      (0, _entries2.default)(attrs).forEach(function (_ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        if (_this2[_default][key] !== value) {
          if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
            _this2[key] = value;
          } else if (key === 'offsetPath') {
            var offsetPath = new _svgPathToCanvas2.default(value);
            _this2.set('offsetPath', offsetPath.d);
            _this2.saveObj('offsetPath', offsetPath);
          } else {
            _this2.set(key, value);
          }
        }
      });

      return this;
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var attrs = this.attrs;
      delete attrs.id;
      var offsetAngle = this.get('offsetAngle');
      if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
      var offsetPoint = this.get('offsetPoint');
      if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
      return (0, _stringify2.default)(attrs);
    }
  }, {
    key: 'resetOffset',
    value: function resetOffset() {
      var offsetPath = this.get('offsetPath');
      var dis = this.offsetDistance;

      if (offsetPath) {
        var pathObj = this.loadObj('offsetPath');
        if (pathObj) {
          offsetPath = pathObj;
        } else {
          offsetPath = new _svgPathToCanvas2.default(offsetPath);
          this.saveObj('offsetPath', offsetPath);
        }
      }

      if (offsetPath != null) {
        var len = dis * offsetPath.getTotalLength();

        var _offsetPath$getPointA = offsetPath.getPointAtLength(len),
            _offsetPath$getPointA2 = (0, _slicedToArray3.default)(_offsetPath$getPointA, 2),
            x = _offsetPath$getPointA2[0],
            y = _offsetPath$getPointA2[1];

        var angle = this.offsetRotate;

        if (angle === 'auto' || angle === 'reverse') {
          if (angle === 'reverse' && len === 0) {
            len = 1;
          }

          var _offsetPath$getPointA3 = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1),
              _offsetPath$getPointA4 = (0, _slicedToArray3.default)(_offsetPath$getPointA3, 2),
              x1 = _offsetPath$getPointA4[0],
              y1 = _offsetPath$getPointA4[1];

          if (x1 === x && y1 === y) {
            // last point
            angle = this.get('offsetAngle');
          } else {
            angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
          }

          if (this.offsetRotate === 'reverse') {
            angle = -angle;
          }
        }

        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        this.set('offsetAngle', angle);
        this.rotate += angle;

        var offsetPoint = this.get('offsetPoint');
        if (offsetPoint) {
          this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
        }

        this.set('offsetPoint', [x, y]);
        this.pos = [this.x + x, this.y + y];
      }
    }
  }, {
    key: 'attrs',
    get: function get() {
      var _this3 = this;

      var ret = {};
      [].concat((0, _toConsumableArray3.default)(this.__attributeNames)).forEach(function (key) {
        if (key in _this3[_props]) {
          (0, _defineProperty2.default)(ret, key, _this3[_props][key]);
        } else {
          ret[key] = _this3[key];
        }
      });
      [].concat((0, _toConsumableArray3.default)(this.__extendAttributes)).forEach(function (key) {
        ret[key] = _this3[key];
      });
      return ret;
    }
  }, {
    key: 'subject',
    get: function get() {
      return this[_subject];
    }

    /* ------------------- define attributes ----------------------- */

  }, {
    key: 'id',
    set: function set(val) {
      return this.quietSet('id', String(val));
    }
  }, {
    key: 'name',
    set: function set(val) {
      return this.quietSet('name', String(val));
    }
  }, {
    key: 'enableCache',
    set: function set(val) {
      return this.set('enableCache', val);
    }
  }, {
    key: 'anchor',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('anchor', val);
    }
  }, {
    key: 'display',
    set: function set(val) {
      this.set('display', val);
    }
  }, {
    key: 'layoutX',
    set: function set(val) {
      this.set('layoutX', val);
    }
  }, {
    key: 'layoutY',
    set: function set(val) {
      this.set('layoutY', val);
    }
  }, {
    key: 'x',
    set: function set(val) {
      this.set('x', val);
    }
  }, {
    key: 'y',
    set: function set(val) {
      this.set('y', val);
    }
  }, {
    key: 'pos',
    set: function set(val) {
      if (val == null) {
        val = [0, 0];
      }

      var _val = val,
          _val2 = (0, _slicedToArray3.default)(_val, 2),
          x = _val2[0],
          y = _val2[1];

      this.x = x;
      this.y = y;
    },
    get: function get() {
      return [this.x, this.y];
    }
  }, {
    key: 'bgcolor',
    set: function set(val) {
      this.set('bgcolor', val);
    }
  }, {
    key: 'opacity',
    set: function set(val) {
      this.set('opacity', val);
    }
  }, {
    key: 'width',
    set: function set(val) {
      this.set('width', val);
    }
  }, {
    key: 'height',
    set: function set(val) {
      this.set('height', val);
    }
  }, {
    key: 'layoutWidth',
    set: function set(val) {
      this.set('layoutWidth', val);
    }
  }, {
    key: 'layoutHeight',
    set: function set(val) {
      this.set('layoutHeight', val);
    }
  }, {
    key: 'size',
    set: function set(val) {
      if (val == null) {
        val = ['', ''];
      }

      var _val3 = val,
          _val4 = (0, _slicedToArray3.default)(_val3, 2),
          width = _val4[0],
          height = _val4[1];

      this.width = width;
      this.height = height;
    },
    get: function get() {
      return [this.width, this.height];
    }
  }, {
    key: 'border',
    set: function set(val) {
      if (val == null) {
        this.set('border', null);
        return;
      }
      if (typeof val === 'number' || typeof val === 'string') {
        val = {
          width: parseFloat(val)
        };
      } else if (Array.isArray(val)) {
        val = {
          width: parseFloat(val[0]),
          color: (0, _utils.parseColorString)(val[1] || '#000')
        };
      } else {
        val.width = parseFloat(val.width);
        val.color = (0, _utils.parseColorString)(val.color || '#000');
      }
      val = (0, _assign2.default)({
        width: 1,
        color: (0, _utils.parseColorString)('#000'),
        style: 'solid'
      }, val);
      this.set('border', val);
    }
  }, {
    key: 'padding',
    set: function set(val) {
      this.set('padding', val);
    }
  }, {
    key: 'borderRadius',
    set: function set(val) {
      this.set('borderRadius', val);
    }
  }, {
    key: 'boxSizing',
    set: function set(val) {
      this.set('boxSizing', val);
    }
  }, {
    key: 'dashOffset',
    set: function set(val) {
      this.set('dashOffset', val);
    }

    // transform attributes

  }, {
    key: 'transform',
    set: function set(val) {
      var _this4 = this;

      /*
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0],
        matrix: [1,0,0,1,0,0],
       */
      (0, _assign2.default)(this[_attr], {
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0]
      });

      if (Array.isArray(val)) {
        this.set('transformMatrix', val);
        this.set('transform', 'matrix(' + val + ')');
      } else {
        this.set('transformMatrix', [1, 0, 0, 1, 0, 0]);
        var transformStr = [];

        (0, _entries2.default)(val).forEach(function (_ref5) {
          var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          if (key === 'matrix' && Array.isArray(value)) {
            _this4.set('transformMatrix', new _spriteMath.Matrix(value).m);
          } else {
            _this4[key] = value;
          }
          transformStr.push(key + '(' + value + ')');
        });

        this.set('transform', transformStr.join(' '));
      }
    }
  }, {
    key: 'transformOrigin',
    set: function set(val) {
      this.set('transformOrigin', val);
    }
  }, {
    key: 'rotate',
    set: function set(val) {
      var delta = this.get('rotate') - val;
      this.set('rotate', val);
      var transform = new _spriteMath.Matrix(this.get('transformMatrix')).rotate(-delta);
      this.set('transformMatrix', transform.m);
    }
  }, {
    key: 'scale',
    set: function set(val) {
      val = (0, _utils.oneOrTwoValues)(val).map(function (v) {
        if (Math.abs(v) > 0.001) {
          return v;
        }
        return 1 / v > 0 ? 0.001 : -0.001;
      });
      var oldVal = this.get('scale') || [1, 1];
      var delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
      this.set('scale', val);

      var offsetAngle = this.get('offsetAngle');
      if (offsetAngle) {
        this.rotate -= offsetAngle;
      }

      var transform = new _spriteMath.Matrix(this.get('transformMatrix'));
      transform.scale.apply(transform, delta);
      this.set('transformMatrix', transform.m);

      if (offsetAngle) {
        this.rotate += offsetAngle;
      }
    }
  }, {
    key: 'translate',
    set: function set(val) {
      var oldVal = this.get('translate') || [0, 0];
      var delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
      this.set('translate', val);
      var transform = new _spriteMath.Matrix(this.get('transformMatrix'));
      transform.translate.apply(transform, delta);
      this.set('transformMatrix', transform.m);
    }
  }, {
    key: 'skew',
    set: function set(val) {
      var _ref7, _transform$multiply;

      var oldVal = this.get('skew') || [0, 0];
      var invm = (_ref7 = new _spriteMath.Matrix()).skew.apply(_ref7, (0, _toConsumableArray3.default)(oldVal)).inverse();
      this.set('skew', val);
      var transform = new _spriteMath.Matrix(this.get('transformMatrix'));
      (_transform$multiply = transform.multiply(invm)).skew.apply(_transform$multiply, (0, _toConsumableArray3.default)(val));
      this.set('transformMatrix', transform.m);
    }
  }, {
    key: 'zIndex',
    set: function set(val) {
      this.set('zIndex', val);
      var subject = this.subject;
      if (subject.parent) {
        subject.parent.children.sort(function (a, b) {
          if (a.zIndex === b.zIndex) {
            return a.zOrder - b.zOrder;
          }
          return a.zIndex - b.zIndex;
        });
      }
    }

    /**
      linearGradients : {
        bgcolor: {
          direction: 30,  //angle，[0,360)
          rect: [x, y, w, h],
          vector: [x1, y1, x2, y2], // direction/rect or from/to
          colors: [
            {offset: 0, color: 'red'},
            {offset: 1, color: 'black'}
          ]
        }
      }
     */

  }, {
    key: 'linearGradients',
    set: function set(val) /* istanbul ignore next  */{
      this.gradients = val;
    },
    get: function get() {
      return this.gradients;
    }

    /**
      gradients : {
        bgcolor: {
          direction: 30,  //angle，[0,360)
          rect: [x, y, w, h],  // rect + direction or vector
          vector: [x1, y1, r1, x2, y2, r2], // vector.length -> linear or radial
          colors: [
            {offset: 0, color: 'red'},
            {offset: 1, color: 'black'}
          ]
        }
      }
     */

  }, {
    key: 'gradients',
    set: function set(val) {
      this.set('gradients', val);
    }
  }, {
    key: 'offsetPath',
    set: function set(val) {
      var offsetPath = new _svgPathToCanvas2.default(val);

      this.set('offsetPath', offsetPath.d);
      this.saveObj('offsetPath', offsetPath);
      this.resetOffset();
    }
  }, {
    key: 'offsetDistance',
    set: function set(val) {
      this.set('offsetDistance', val);
      this.resetOffset();
    }
  }, {
    key: 'offsetRotate',
    set: function set(val) {
      if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
        val = parseFloat(val);
      }
      this.set('offsetRotate', val);
      this.resetOffset();
    }
  }, {
    key: 'filter',
    set: function set(val) {
      this.set('filter', val);
    }
  }, {
    key: 'shadow',
    set: function set(val) {
      this.set('shadow', val);
    }
  }, {
    key: 'flex',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('flex', val);
    }
  }, {
    key: 'order',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('order', val);
    }
  }, {
    key: 'position',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('position', val);
    }
  }, {
    key: 'alignSelf',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('alignSelf', val);
    }
  }, {
    key: 'margin',
    set: function set(val) {
      if (this.subject.hasLayout) this.subject.parent.clearLayout();
      this.set('margin', val);
    }

    /*
      {
        src: image | url,
        display: 'none' | 'repeatX' | 'repeatY' | 'repeat' | 'stretch' | 'center' | '.9',
        offset: [x, y],
        clip9: [paddingTop, paddingRight, paddingBottom, paddingLeft],
      }
    */

  }, {
    key: 'bgimage',
    set: function set(val) {
      if (val && val.clip9) val.clip9 = (0, _utils.fourValuesShortCut)(val.clip9);
      if (val && !val.image && this.subject.loadBgImage) {
        val = this.subject.loadBgImage(val);
      }
      this.set('bgimage', val);
    }
  }, {
    key: 'states',
    set: function set(val) {
      val = (0, _assign2.default)({}, val);
      var states = this.get('states');
      // recover __default
      (0, _entries2.default)(states).forEach(function (_ref8) {
        var _ref9 = (0, _slicedToArray3.default)(_ref8, 2),
            key = _ref9[0],
            value = _ref9[1];

        if (value.__default && !(key in val)) {
          val[key] = value;
        }
      });
      this.quietSet('states', val);
    }
  }, {
    key: 'actions',
    set: function set(val) {
      if (Array.isArray(val)) {
        var value = {};
        val.forEach(function (v) {
          var key = void 0;
          var action = v.action;
          if (!action) {
            action = (0, _assign2.default)({}, v);
            delete action.from;
            delete action.to;
            delete action.both;
          }
          if (v.both) {
            if (!Array.isArray(v.both)) {
              v.both = [v.both];
            }
            if (v.both.length > 1) {
              key = v.both.join(':');
              value[key] = (0, _assign2.default)({}, action);
              key = v.both.reverse().join(':');
              value[key] = (0, _assign2.default)({}, action);
            } else {
              value[v.both[0] + ':'] = (0, _assign2.default)({}, action);
              value[':' + v.both[0]] = (0, _assign2.default)({}, action);
            }
          } else {
            key = (v.from || '') + ':' + (v.to || '');
            value[key] = (0, _assign2.default)({}, action);
          }
        });
        val = value;
      }
      var defaultVal = this[_default].actions;
      val = (0, _assign2.default)({}, defaultVal, val);
      this.quietSet('actions', val);
    }
  }, {
    key: 'state',
    set: function set(val) {
      if (val == null) val = 'default';
      var oldState = this.state;
      if (oldState !== val) {
        this.quietSet('state', val);
        var states = this.states;

        var action = null;
        var toState = states[val] || {};
        var subject = this.subject;
        if (subject.layer) {
          var fromState = states[oldState],
              actions = this.actions;
          action = !subject.__ignoreAction && (actions[oldState + ':' + val] || actions[':' + val] || actions[oldState + ':']);
          if (!action || action === 'none') action = { duration: 0 };

          var animation = subject.changeState(fromState, toState, action);
          var tag = (0, _symbol2.default)('tag');
          animation.tag = tag;
          if (animation.__reversed) {
            subject.dispatchEvent('state-to-' + oldState, {
              from: val,
              to: oldState,
              action: animation.__reversed,
              cancelled: true,
              animation: animation }, true, true);
          }
          subject.dispatchEvent('state-from-' + oldState, { from: oldState, to: val, action: action, animation: animation }, true, true);
          animation.finished.then(function () {
            if (animation.tag === tag) {
              subject.dispatchEvent('state-to-' + val, { from: oldState, to: val, action: action, animation: animation }, true, true);
            }
          });
          if (oldState === 'afterExit') {
            animation.finish();
          }
        } else {
          subject.dispatchEvent('state-from-' + oldState, { from: oldState, to: val }, true, true);
          if (toState) subject.attr(toState);
          subject.dispatchEvent('state-to-' + val, { from: oldState, to: val }, true, true);
        }
      }
    }
  }, {
    key: 'enterMode',
    set: function set(val) {
      this.set('enterMode', val);
    }
  }, {
    key: 'exitMode',
    set: function set(val) {
      this.set('exitMode', val);
    }
  }]);
  return SpriteAttr;
}(), (_applyDecoratedDescriptor(_class.prototype, 'clearCache', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'clearCache'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'id', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'id'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'name', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'name'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'enableCache', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'enableCache'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anchor', [_dec2, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anchor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutX', [_utils.attr, _dec3, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'layoutX'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutY', [_utils.attr, _dec4, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'layoutY'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'x', [_utils.attr, _dec5, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'x'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'y', [_utils.attr, _dec6, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'y'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pos', [_dec7, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'pos'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgcolor', [_dec8, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'bgcolor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'opacity', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'opacity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_utils.attr, _dec9], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [_utils.attr, _dec10], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_utils.attr, _dec11], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [_utils.attr, _dec12], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'size', [_dec13, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'size'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'border', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'border'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'padding', [_dec14, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'padding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'borderRadius', [_dec15, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'borderRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'boxSizing', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'boxSizing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dashOffset', [_dec16, _utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'dashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transform', [_dec17, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'transform'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transformOrigin', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'transformOrigin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'rotate', [_dec18, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'rotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scale', [_dec19, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'scale'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'translate', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'translate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skew', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'skew'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'zIndex', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'zIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'linearGradients', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'linearGradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'gradients', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'gradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetPath', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offsetPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetDistance', [_dec20, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offsetDistance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetRotate', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offsetRotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filter', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'filter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'shadow', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'shadow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flex', [_dec21, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'flex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'order', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'order'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'position', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'position'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignSelf', [_utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'alignSelf'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'margin', [_dec22, _utils.attr, _utils.cachable], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'margin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgimage', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'bgimage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'states', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'states'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'actions', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'actions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'state', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'state'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'enterMode', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'enterMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'exitMode', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'exitMode'), _class.prototype)), _class));
exports.default = SpriteAttr;
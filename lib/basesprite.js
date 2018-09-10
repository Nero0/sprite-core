'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty2 = require('babel-runtime/core-js/object/define-property');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty4 = require('babel-runtime/helpers/defineProperty');

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _dec, _desc, _value, _class, _class2, _temp;

var _spriteMath = require('sprite-math');

var _spriteAnimator = require('sprite-animator');

var _utils = require('./utils');

var _attr20 = require('./attr');

var _attr21 = _interopRequireDefault(_attr20);

var _basenode = require('./basenode');

var _basenode2 = _interopRequireDefault(_basenode);

var _animation2 = require('./animation');

var _animation3 = _interopRequireDefault(_animation2);

var _nodetype = require('./nodetype');

var _render = require('./helpers/render');

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var _attr = (0, _symbol2.default)('attr'),
    _animations = (0, _symbol2.default)('animations'),
    _cachePriority = (0, _symbol2.default)('cachePriority'),
    _effects = (0, _symbol2.default)('effects'),
    _flow = (0, _symbol2.default)('flow'),
    _changeStateAction = (0, _symbol2.default)('changeStateAction'),
    _resolveState = (0, _symbol2.default)('resolveState');

var BaseSprite = (_dec = (0, _utils.deprecate)('Instead use sprite.cache = null'), (_class = (_temp = _class2 = function (_BaseNode) {
  (0, _inherits3.default)(BaseSprite, _BaseNode);

  /**
    new Sprite({
      attr: {
        ...
      }
    })
   */
  function BaseSprite(attr) {
    (0, _classCallCheck3.default)(this, BaseSprite);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseSprite.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite)).call(this));

    _this[_attr] = new _this.constructor.Attr(_this);
    _this[_animations] = new _set2.default();
    _this[_cachePriority] = 0;
    _this[_flow] = {};

    if (attr) {
      _this.attr(attr);
    }
    return _this;
  }

  (0, _createClass3.default)(BaseSprite, [{
    key: 'reflow',
    value: function reflow() {
      this[_flow] = {};
      // let parent = this.parent
      // while(parent) {
      //   if(parent.reflow) parent.reflow()
      //   parent = parent.parent
      // }
    }
  }, {
    key: 'flow',
    value: function flow(prop, value) {
      if (value === undefined) {
        return this[_flow][prop];
      }
      this[_flow][prop] = value;
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = (0, _stringify2.default)(this.dataset),
          id = this.id;

      return {
        nodeType: nodeType,
        attrs: attrs,
        dataset: dataset,
        id: id
      };
    }
  }, {
    key: 'merge',
    value: function merge(attrs) {
      this[_attr].merge(attrs);
    }
  }, {
    key: 'cloneNode',
    value: function cloneNode() {
      var node = new this.constructor();
      node.merge(this[_attr].serialize());
      node.data(this.dataset);
      var bgimage = this.attr('bgimage');
      if (bgimage && bgimage.image) {
        node.attr('bgimage', null);
        node.attr('bgimage', (0, _assign2.default)({}, bgimage));
      }
      return node;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(prop) {
      /* istanbul ignore next */
      return this.attr(prop);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(prop, val) {
      /* istanbul ignore next */
      return this.attr(prop, val);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(prop) {
      /* istanbul ignore next */
      return this.attr(prop, null);
    }
  }, {
    key: 'attr',
    value: function attr(props, val) {
      var _this2 = this;

      var setVal = function setVal(key, value) {
        _this2[_attr][key] = value;
        if (!_this2[_attr].__attributeNames.has(key)) {
          _this2[_attr].__extendAttributes.add(key);
          _this2.forceUpdate(true);
        }
      };
      if ((typeof props === 'undefined' ? 'undefined' : (0, _typeof3.default)(props)) === 'object') {
        (0, _entries2.default)(props).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          _this2.attr(prop, value);
        });
        return this;
      }if (typeof props === 'string') {
        if (val !== undefined) {
          if (props === 'attrs') {
            if (Array.isArray(val)) {
              val = _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(val)));
            }
            (0, _entries2.default)(val).forEach(function (_ref3) {
              var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                  prop = _ref4[0],
                  value = _ref4[1];

              _this2.attr(prop, value);
            });
            return this;
          }
          if (typeof val === 'function') {
            val = val(this[_attr][props]);
          }
          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }
          setVal(props, val);
          return this;
        }
        return this[_attr][props];
      }

      return this[_attr].attrs;
    }
  }, {
    key: 'isVisible',
    value: function isVisible() {
      if (!this.parent) return false;

      var display = this.attr('display');
      if (display === 'none') {
        return false;
      }

      var opacity = this.attr('opacity');
      if (opacity <= 0) {
        return false;
      }

      if (this.isVirtual) return true;

      var _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
          width = _offsetSize[0],
          height = _offsetSize[1];

      if (width <= 0 || height <= 0) {
        return false;
      }

      if (this.parent.isVisible) {
        return this.parent.isVisible();
      }
      return true;
    }
  }, {
    key: 'transition',
    value: function transition(sec) {
      var _ref7;

      var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'linear';

      var that = this,
          _animation = (0, _symbol2.default)('animation');

      return _ref7 = {}, (0, _defineProperty5.default)(_ref7, _animation, null), (0, _defineProperty5.default)(_ref7, 'end', function end() {
        var animation = this[_animation];
        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      }), (0, _defineProperty5.default)(_ref7, 'reverse', function reverse() {
        var animation = this[_animation];
        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            var direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }
        return animation.finished;
      }), (0, _defineProperty5.default)(_ref7, 'attr', function attr(prop, val) {
        this.end();
        if (typeof prop === 'string') {
          prop = (0, _defineProperty5.default)({}, prop, val);
        }
        (0, _entries2.default)(prop).forEach(function (_ref5) {
          var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          fill: 'forwards',
          easing: easing
        });
        return this[_animation].finished;
      }), _ref7;
    }
  }, {
    key: 'animate',
    value: function animate(frames, timing) {
      var _this3 = this;

      var animation = new _animation3.default(this, frames, timing);
      if (this[_effects]) animation.applyEffects(this[_effects]);
      if (this.layer) {
        animation.baseTimeline = this.layer.timeline;
        animation.play();
        animation.finished.then(function () {
          _this3[_animations].delete(animation);
        });
      }
      this[_animations].add(animation);
      return animation;
    }
  }, {
    key: 'changeState',
    value: function changeState(fromState, toState, action) {
      var _this4 = this;

      var animation = void 0;
      if (this[_changeStateAction]) {
        var currentAnim = this[_changeStateAction].animation;
        if (this[_changeStateAction].reversable && (currentAnim.playState === 'running' || currentAnim.playState === 'pending') && this[_changeStateAction].fromState === toState && this[_changeStateAction].toState === fromState) {
          currentAnim.playbackRate = -currentAnim.playbackRate;
          animation = currentAnim;
          animation.__reversed = this[_changeStateAction].action;
        } else {
          currentAnim.finish();
        }
      }
      if (!animation) {
        var _ref8 = [(0, _assign2.default)({}, fromState), (0, _assign2.default)({}, toState)],
            _fromState = _ref8[0],
            _toState = _ref8[1];

        delete _fromState.__default;
        delete _toState.__default;
        animation = this.animate([_fromState, _toState], (0, _assign2.default)({ fill: 'forwards' }, action));
        animation.finished.then(function () {
          if (_this4[_changeStateAction] && _this4[_changeStateAction].animation === animation) delete _this4[_changeStateAction];
        });
      }
      this[_changeStateAction] = { animation: animation, fromState: fromState, toState: toState, action: action, reversable: action.reversable !== false };
      return animation;
    }
  }, {
    key: 'connect',
    value: function connect(parent) {
      var _this5 = this;

      var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (parent && !(parent instanceof _basenode2.default)) {
        var node = new _basenode2.default();
        node.context = parent;
        node.timeline = new _spriteAnimator.Timeline();
        node.update = function () {
          var currentTime = this.timeline.currentTime;
          node.dispatchEvent('update', { target: this, timeline: this.timeline, renderTime: currentTime }, true, true);
        };
        parent = node;
      }
      var ret = (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'connect', this).call(this, parent, zOrder);
      Object.defineProperty(this, 'context', {
        get: function get() {
          return parent.cache || parent.context;
        },
        configurable: true
      });
      this[_animations].forEach(function (animation) {
        if (parent.layer) {
          animation.baseTimeline = parent.layer.timeline;
        }
        animation.play();
        animation.finished.then(function () {
          _this5[_animations].delete(animation);
        });
      });
      if (this.hasLayout) parent.clearLayout();
      this.reflow();
      return ret;
    }
  }, {
    key: 'disconnect',
    value: function disconnect(parent) {
      this[_animations].forEach(function (animation) {
        return animation.cancel();
      });
      if (this.cache) {
        this.cache = null;
      }
      if (this.hasLayout) parent.clearLayout();
      this.reflow();
      var ret = (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'disconnect', this).call(this, parent);
      delete this.context;
      return ret;
    }
  }, {
    key: 'getLayerXY',
    value: function getLayerXY() {
      var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var layer = this.layer;
      if (!layer) return [0, 0];
      var target = this;
      var x = dx,
          y = dy;

      while (target && target !== layer) {
        var _target$offsetToPoint = target.offsetToPoint(x, y);

        var _target$offsetToPoint2 = (0, _slicedToArray3.default)(_target$offsetToPoint, 2);

        x = _target$offsetToPoint2[0];
        y = _target$offsetToPoint2[1];

        var parent = target.parent;

        if (parent !== layer) {
          var borderWidth = parent.attr('border').width;
          var padding = parent.attr('padding'),
              scrollLeft = parent.attr('scrollLeft') || 0,
              scrollTop = parent.attr('scrollTop') || 0;

          // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
          // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

          x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
          y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
        }
        target = parent;
      }
      return [x, y];
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this.cache = null;
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearCache) {
        this.cache = null;
      }
      var parent = this.parent;
      if (parent) {
        this.parent.update(this);
      }
    }

    // layer position to sprite offset

  }, {
    key: 'pointToOffset',
    value: function pointToOffset(x, y) {
      var _xy = (0, _slicedToArray3.default)(this.xy, 2),
          x0 = _xy[0],
          y0 = _xy[1];

      var dx = x - x0,
          dy = y - y0;

      var transform = this.transform;
      return transform.inverse().transformPoint(dx, dy);
    }
  }, {
    key: 'offsetToPoint',
    value: function offsetToPoint(dx, dy) {
      var transform = this.transform;

      var _xy2 = (0, _slicedToArray3.default)(this.xy, 2),
          x0 = _xy2[0],
          y0 = _xy2[1];

      var _transform$transformP = transform.transformPoint(dx, dy),
          _transform$transformP2 = (0, _slicedToArray3.default)(_transform$transformP, 2),
          x = _transform$transformP2[0],
          y = _transform$transformP2[1];

      return [x + x0, y + y0];
    }
  }, {
    key: 'pointCollision',
    value: function pointCollision(evt) {
      /* istanbul ignore if */
      if (!this.isVisible()) {
        return false;
      }

      var parentX = void 0,
          parentY = void 0;

      if (evt.parentX != null) {
        // group
        parentX = evt.parentX;
        parentY = evt.parentY;
      } else {
        parentX = evt.layerX;
        parentY = evt.layerY;
      }

      var _pointToOffset = this.pointToOffset(parentX, parentY),
          _pointToOffset2 = (0, _slicedToArray3.default)(_pointToOffset, 2),
          nx = _pointToOffset2[0],
          ny = _pointToOffset2[1];

      evt.offsetX = nx;
      evt.offsetY = ny;

      var _originalRect = (0, _slicedToArray3.default)(this.originalRect, 4),
          ox = _originalRect[0],
          oy = _originalRect[1],
          ow = _originalRect[2],
          oh = _originalRect[3];

      if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
        if (this.context && this.context.isPointInPath) {
          var borderWidth = this.attr('border').width,
              borderRadius = this.attr('borderRadius');
          if (borderWidth || borderRadius) {
            var _outerSize = (0, _slicedToArray3.default)(this.outerSize, 2),
                width = _outerSize[0],
                height = _outerSize[1];

            var _ref9 = [0, 0, width, height, Math.max(0, borderRadius + borderWidth / 2)],
                x = _ref9[0],
                y = _ref9[1],
                w = _ref9[2],
                h = _ref9[3],
                r = _ref9[4];

            (0, _render.drawRadiusBox)(this.context, { x: x, y: y, w: w, h: h, r: r });
            if (this.layer && this.layer.offset) {
              nx += this.layer.offset[0];
              ny += this.layer.offset[1];
            }
            return this.context.isPointInPath(nx - ox, ny - oy);
          }
        }
        return true;
      }
    }

    // OBB: http://blog.csdn.net/silangquan/article/details/50812425

  }, {
    key: 'OBBCollision',
    value: function OBBCollision(sprite) {
      // vertices: [p1, p2, p3, p4]
      var _vertices = (0, _slicedToArray3.default)(this.vertices, 3),
          p11 = _vertices[0],
          p12 = _vertices[1],
          p13 = _vertices[2],
          _sprite$vertices = (0, _slicedToArray3.default)(sprite.vertices, 3),
          p21 = _sprite$vertices[0],
          p22 = _sprite$vertices[1],
          p23 = _sprite$vertices[2];

      var a1 = new _spriteMath.Vector(p12, p11).unit(),
          a2 = new _spriteMath.Vector(p13, p12).unit(),
          a3 = new _spriteMath.Vector(p22, p21).unit(),
          a4 = new _spriteMath.Vector(p23, p22).unit();

      // The projection of the axis of a vertex in a certain direction
      function verticesProjection(vertices, axis) {
        var _vertices$map = vertices.map(function (v) {
          return axis.dot(new _spriteMath.Vector(v));
        }),
            _vertices$map2 = (0, _slicedToArray3.default)(_vertices$map, 4),
            p1 = _vertices$map2[0],
            p2 = _vertices$map2[1],
            p3 = _vertices$map2[2],
            p4 = _vertices$map2[3];

        return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
      }

      function projectionIntersect(p1, p2) {
        var m1 = (p1[0] + p1[1]) / 2,
            l1 = Math.abs(p1[1] - p1[0]),
            m2 = (p2[0] + p2[1]) / 2,
            l2 = Math.abs(p2[1] - p2[0]);

        return Math.abs(m2 - m1) <= (l1 + l2) / 2;
      }

      return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
    }
  }, {
    key: 'relayout',
    value: function relayout() {}
  }, {
    key: 'draw',
    value: function draw(t) {
      var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      var bound = this.originalRect;
      var cachableContext = !this.isVirtual && this.cache;

      var filter = this.attr('filter'),
          shadow = this.attr('shadow');

      if ((shadow || filter || cachableContext !== false) && !cachableContext) {
        cachableContext = _render.cacheContextPool.get(drawingContext);
        if (cachableContext) {
          // +2 to solve 1px problem
          cachableContext.canvas.width = Math.ceil(bound[2]) + 2;
          cachableContext.canvas.height = Math.ceil(bound[3]) + 2;
        }
      }

      var evtArgs = { context: drawingContext, cacheContext: cachableContext, target: this, renderTime: t, fromCache: !!this.cache };

      drawingContext.save();
      drawingContext.translate.apply(drawingContext, (0, _toConsumableArray3.default)(this.xy));
      drawingContext.transform.apply(drawingContext, (0, _toConsumableArray3.default)(this.transform.m));

      // fix for wxapp
      var alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
      drawingContext.globalAlpha = alpha * this.attr('opacity');

      if (!cachableContext) {
        drawingContext.translate(bound[0], bound[1]);
      } else {
        cachableContext.save();
        // solve 1px problem
        cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);
      }

      this.dispatchEvent('beforedraw', evtArgs, true, true);

      if (cachableContext) {
        // set cache before render for group
        if (!this.cache) {
          this.cache = cachableContext;
          this.render(t, cachableContext);
        }
      } else {
        this.render(t, drawingContext);
      }

      if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
        if (filter) {
          drawingContext.filter = _filters2.default.compile(filter);
        }
        if (shadow) {
          var blur = shadow.blur,
              color = shadow.color,
              offset = shadow.offset;

          blur = blur || 1;
          color = color || 'rgba(0,0,0,1)';
          drawingContext.shadowBlur = blur;
          drawingContext.shadowColor = color;
          if (offset) {
            drawingContext.shadowOffsetX = offset[0];
            drawingContext.shadowOffsetY = offset[1];
          }
        }
        drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1);
      }

      this.dispatchEvent('afterdraw', evtArgs, true, true);

      if (cachableContext) {
        cachableContext.restore();
      }
      drawingContext.restore();

      this[_cachePriority]++;

      return drawingContext;
    }
  }, {
    key: 'render',
    value: function render(t, drawingContext) {
      var border = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          padding = this.attr('padding'),
          _offsetSize2 = (0, _slicedToArray3.default)(this.offsetSize, 2),
          offsetWidth = _offsetSize2[0],
          offsetHeight = _offsetSize2[1],
          _clientSize = (0, _slicedToArray3.default)(this.clientSize, 2),
          clientWidth = _clientSize[0],
          clientHeight = _clientSize[1];


      if (!this.needRender) {
        return false;
      }

      var borderWidth = border.width;
      var borderStyle = border.style;

      // draw border
      if (borderWidth) {
        drawingContext.lineWidth = borderWidth;

        var x = borderWidth / 2,
            y = borderWidth / 2,
            w = offsetWidth - borderWidth,
            h = offsetHeight - borderWidth,
            r = borderRadius;


        (0, _render.drawRadiusBox)(drawingContext, { x: x, y: y, w: w, h: h, r: r });

        if (borderStyle && borderStyle !== 'solid') {
          var dashOffset = this.attr('dashOffset');
          drawingContext.lineDashOffset = dashOffset;
          if (borderStyle === 'dashed') {
            borderStyle = [borderWidth * 3, borderWidth * 3];
          }
          drawingContext.setLineDash(borderStyle);
        }
        drawingContext.strokeStyle = (0, _render.findColor)(drawingContext, this, 'border');
        drawingContext.stroke();
      }

      // draw bgcolor
      var bgcolor = (0, _render.findColor)(drawingContext, this, 'bgcolor');
      var bgimage = this.attr('bgimage');

      if (this.cache == null || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
        var _ref10 = [borderWidth, borderWidth, clientWidth, clientHeight, Math.max(0, borderRadius - borderWidth / 2)],
            _x7 = _ref10[0],
            _y = _ref10[1],
            _w = _ref10[2],
            _h = _ref10[3],
            _r = _ref10[4];


        (0, _render.drawRadiusBox)(drawingContext, { x: _x7, y: _y, w: _w, h: _h, r: _r });

        if (bgcolor) {
          drawingContext.fillStyle = bgcolor;
          drawingContext.fill();
        }

        // clip is expensive, we should only perform clip when it has to.
        if (bgimage && bgimage.display !== 'none' || borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
          drawingContext.clip();
        }

        if (bgimage && bgimage.image && bgimage.display !== 'none') {
          drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
        }
      }

      drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);

      return true;
    }
  }, {
    key: 'resolveStates',
    value: function resolveStates() {
      var _this6 = this;

      for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      var currentAnimation = null,
          resolved = false;
      var _resolveStates = function _resolveStates() {
        _this6.__ignoreAction = false;
        var fromState = _this6.attr('state');
        if (fromState === states[0]) {
          states.shift();
        }

        var len = states.length;
        var resolveState = function resolveState(state, i) {
          var promise = new _promise2.default(function (resolve) {
            _this6.once('state-to-' + state, function () {
              fromState = state;
              if (i === len - 1) {
                // lastState
                delete _this6[_resolveState];
              }
              resolve(_this6);
            });
            _this6.once('state-from-' + fromState, function (_ref11) {
              var animation = _ref11.animation;

              if (animation && resolved) animation.finish();else currentAnimation = animation;
            });
            _this6.attr('state', state);
          });
          return promise;
        };

        var promise = _promise2.default.resolve();
        states.forEach(function (state, i) {
          promise = promise.then(function () {
            return resolveState(state, i);
          });
        });

        var ret = {
          get animation() {
            return currentAnimation;
          },
          states: states,
          resolve: function resolve() {
            resolved = true;
            if (currentAnimation) currentAnimation.finish();
            return promise;
          },

          promise: promise
        };
        _this6[_resolveState] = ret;
        return ret;
      };
      var rs = this[_resolveState];
      if (rs) {
        rs.resolve();
        this.__ignoreAction = true;
        var promise = rs.promise.then(function () {
          return _resolveStates();
        });
        return {
          promise: promise,
          resolve: function resolve() {
            resolved = true;
            if (currentAnimation) currentAnimation.finish();
            return promise;
          }
        };
      }
      return _resolveStates();
    }

    // state: original -> show -> hide -> show -> original

  }, {
    key: 'show',
    value: function show() {
      var _this7 = this;

      var originalDisplay = this.attr('_originalDisplay') || '';
      var originalState = this.attr('_originalState') || 'default';

      var states = this.attr('states');

      if (states.show) {
        this.once('state-from-hide', function () {
          _this7.attr('display', originalDisplay);
        });
        return this.resolveStates('show', originalState);
      }

      this.attr('state', originalState);
      this.attr('display', originalDisplay);
      return this;
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this8 = this;

      var _originalDisplay = this.attr('display');
      var _originalState = this.attr('state');
      this.attr({
        _originalDisplay: _originalDisplay,
        _originalState: _originalState
      });

      var states = this.attr('states');

      if (states.hide) {
        if (!states.show || states.show.__default) {
          var beforeHide = { __default: true };
          (0, _keys2.default)(states.hide).forEach(function (key) {
            beforeHide[key] = _this8.attr(key);
          });
          states.show = beforeHide;
        }
        return this.resolveStates('show', 'hide').promise.then(function () {
          _this8.attr('display', 'none');
          return _this8;
        });
      }

      this.attr('state', 'hide');
      this.attr('display', 'none');
      return this;
    }
  }, {
    key: 'enter',
    value: function enter(toState) {
      var _this9 = this;

      var states = this.attr('states');
      var ret = void 0;
      if (states && (states.beforeEnter || states.afterEnter)) {
        var state = this.attr('state');
        if (state !== 'beforeEnter' && state !== 'afterEnter' && (!states.afterEnter || states.afterEnter.__default)) {
          var afterEnter = { __default: true };
          (0, _keys2.default)(states.beforeEnter).forEach(function (key) {
            afterEnter[key] = _this9.attr(key);
          });
          states.afterEnter = afterEnter;
        }
        var deferred = this.resolveStates('beforeEnter', 'afterEnter', toState || state);
        ret = deferred;
      } else {
        ret = (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'enter', this).call(this);
      }

      if (this.children) {
        var enterMode = this.attr('enterMode');
        if (enterMode === 'onebyone' || enterMode === 'onebyone-reverse') {
          var promise = null;
          var resolved = false;
          if (ret.promise) {
            promise = ret.promise;
          } else {
            promise = _promise2.default.resolve(this);
          }

          var children = this.children;
          if (enterMode === 'onebyone-reverse') {
            children = [].concat((0, _toConsumableArray3.default)(children)).reverse();
          }

          children.forEach(function (c) {
            var states = c.attr('states');
            if (states && (states.beforeEnter || states.afterEnter)) {
              if (!states.afterEnter || states.afterEnter.__default) {
                var _afterEnter = { __default: true };
                (0, _keys2.default)(states.beforeEnter).forEach(function (key) {
                  _afterEnter[key] = c.attr(key);
                });
                states.afterEnter = _afterEnter;
              }
            }
            var toState = c.attr('state');
            c.attr('state', 'beforeEnter');
            promise = promise.then(function () {
              var d = c.enter(toState);
              if (d.promise) {
                if (resolved && d.resolve) d.resolve();
                return d.promise;
              }
              return d;
            });
          });

          return {
            promise: promise,
            resolve: function resolve() {
              resolved = true;
            }
          };
        }

        var entries = this.children.map(function (c) {
          return c.enter();
        }).filter(function (d) {
          return d.promise;
        });
        if (ret.promise) {
          entries.unshift(ret);
        }
        if (entries.length) {
          var _deferred = {
            promise: _promise2.default.all(entries.map(function (d) {
              return d.promise;
            })),
            resolve: function resolve() {
              entries.forEach(function (d) {
                return d.resolve();
              });
              return _this9.promise;
            }
          };
          return _deferred;
        }
      }

      return ret;
    }
  }, {
    key: 'exit',
    value: function exit(toState) {
      var _this10 = this;

      var onbyone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var states = this.attr('states');
      var ret = void 0;
      var afterEnter = states.afterEnter || {};
      if (states && (states.beforeExit || states.afterExit)) {
        var state = this.attr('state');
        if (state !== 'beforeExit' && state !== 'afterExit' && (!states.beforeExit || states.beforeExit.__default)) {
          states.beforeExit = (0, _assign2.default)({}, afterEnter);
          states.beforeExit.__default = true;
        }
        var deferred = this.resolveStates('beforeExit', 'afterExit');
        deferred.promise.then(function () {
          if (!onbyone) {
            _this10.attr(afterEnter);
            _this10[_attr].quietSet('state', toState || state);
          }
          return _this10;
        });
        ret = deferred;
      } else {
        ret = (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'exit', this).call(this);
        this.attr(afterEnter);
      }

      if (this.children) {
        var exitMode = this.attr('exitMode');
        if (exitMode === 'onebyone' || exitMode === 'onebyone-reverse') {
          var promise = _promise2.default.resolve(this);
          var resolved = false;

          var children = this.children;
          if (exitMode === 'onebyone-reverse') {
            children = [].concat((0, _toConsumableArray3.default)(children)).reverse();
          }

          children.forEach(function (c) {
            var states = c.attr('states');
            if (states && (states.beforeExit || states.afterExit)) {
              if (!states.beforeExit || states.beforeExit.__default) {
                states.beforeExit = (0, _assign2.default)({}, afterEnter);
                states.beforeExit.__default = true;
              }
            }
            var toState = c.attr('state');
            c.attr('state', 'beforeExit');
            promise = promise.then(function () {
              var d = c.exit(toState, true);
              if (d.promise) {
                if (resolved && d.resolve) d.resolve();
                return d.promise;
              }
              return d;
            });
            c.__toState = toState;
          });

          promise = promise.then(function () {
            var p = ret.promise || _promise2.default.resolve(_this10);
            return p.then(function () {
              _this10.children.forEach(function (c) {
                var states = c.attr('states');
                c.attr(states.afterEnter);
                c[_attr].quietSet('state', c.__toState);
                delete c.__toState;
              });
            });
          });

          return {
            promise: promise,
            resolve: function resolve() {
              resolved = true;
            }
          };
        }

        var exites = this.children.map(function (c) {
          return c.exit();
        }).filter(function (d) {
          return d.promise;
        });
        if (ret.promise) {
          exites.unshift(ret);
        }
        if (exites.length) {
          var _deferred2 = {
            promise: _promise2.default.all(exites.map(function (d) {
              return d.promise;
            })),
            resolve: function resolve() {
              exites.forEach(function (d) {
                return d.resolve();
              });
              return _this10.promise;
            }
          };
          return _deferred2;
        }
      }

      return ret;
    }
  }, {
    key: 'layer',
    get: function get() {
      return this.parent && this.parent.layer;
    }
  }, {
    key: 'id',
    set: function set(val) {
      this.attr('id', val);
    },
    get: function get() {
      return this.attr('id');
    }
  }, {
    key: 'name',
    set: function set(val) {
      this.attr('name', val);
    },
    get: function get() {
      return this.attr('name');
    }
  }, {
    key: 'hasLayout',
    get: function get() {
      if (this.attr('position') === 'absolute') return false;
      if (this.parent && this.parent.relayout) {
        var display = this.parent.attr('display');
        return display !== '' && display !== 'static';
      }
      return false;
    }
  }, {
    key: 'zIndex',
    set: function set(val) {
      this.attr('zIndex', val);
    },
    get: function get() {
      return this.attr('zIndex');
    }
  }, {
    key: 'attributes',
    get: function get() {
      return this[_attr];
    }
  }, {
    key: 'isVirtual',
    get: function get() {
      return false;
    }
  }, {
    key: 'transform',
    get: function get() {
      var transform = new _spriteMath.Matrix(this[_attr].get('transformMatrix'));
      var transformOrigin = this.attr('transformOrigin');
      if (transformOrigin) {
        var t = new _spriteMath.Matrix();
        t.translate.apply(t, (0, _toConsumableArray3.default)(transformOrigin));
        t.multiply(transform);
        t.translate.apply(t, (0, _toConsumableArray3.default)(transformOrigin.map(function (v) {
          return -v;
        })));
        return t;
      }
      return transform;
    }
  }, {
    key: 'animations',
    get: function get() {
      return this[_animations];
    }
  }, {
    key: 'xy',
    get: function get() {
      var x = void 0,
          y = void 0;
      if (this.hasLayout) {
        x = this.attr('layoutX');
        y = this.attr('layoutY');
      } else {
        var _attr2 = this.attr('pos');

        var _attr3 = (0, _slicedToArray3.default)(_attr2, 2);

        x = _attr3[0];
        y = _attr3[1];
      }
      return [x, y];
    }
  }, {
    key: 'attrSize',
    get: function get() {
      var _attr4 = this.attr('size'),
          _attr5 = (0, _slicedToArray3.default)(_attr4, 2),
          width = _attr5[0],
          height = _attr5[1];

      var isBorderBox = this.attr('boxSizing') === 'border-box';

      if (this.hasLayout) {
        var layoutWidth = this.attr('layoutWidth'),
            layoutHeight = this.attr('layoutHeight');var _ref12 = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
        width = _ref12[0];
        height = _ref12[1];
      }
      if (isBorderBox) {
        var borderWidth = this.attr('border').width,
            _attr6 = this.attr('padding'),
            _attr7 = (0, _slicedToArray3.default)(_attr6, 4),
            paddingTop = _attr7[0],
            paddingRight = _attr7[1],
            paddingBottom = _attr7[2],
            paddingLeft = _attr7[3];


        if (width !== '') {
          width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
        }if (width !== '') {
          height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
        }
      }
      return [width, height];
    }
  }, {
    key: 'boxOffsetSize',
    get: function get() {
      // get original boxSize, without layout
      if (this.isVirtual) return [0, 0];

      var _attr8 = this.attr('size'),
          _attr9 = (0, _slicedToArray3.default)(_attr8, 2),
          width = _attr9[0],
          height = _attr9[1];

      var _attr10 = this.attr('padding'),
          _attr11 = (0, _slicedToArray3.default)(_attr10, 4),
          top = _attr11[0],
          right = _attr11[1],
          bottom = _attr11[2],
          left = _attr11[3];

      var _attr12 = this.attr('border'),
          borderWidth = _attr12.width,
          lw = borderWidth * 2;

      return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
    }

    // content width / height

  }, {
    key: 'contentSize',
    get: function get() {
      if (this.isVirtual) return [0, 0];

      var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
          width = _attrSize[0],
          height = _attrSize[1];

      return [width | 0, height | 0];
    }

    // content + padding

  }, {
    key: 'clientSize',
    get: function get() {
      var _attr13 = this.attr('padding'),
          _attr14 = (0, _slicedToArray3.default)(_attr13, 4),
          top = _attr14[0],
          right = _attr14[1],
          bottom = _attr14[2],
          left = _attr14[3],
          _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
          width = _contentSize[0],
          height = _contentSize[1];

      return [left + width + right, top + height + bottom];
    }

    // content + padding + border

  }, {
    key: 'offsetSize',
    get: function get() {
      var _attr15 = this.attr('border'),
          borderWidth = _attr15.width,
          _clientSize2 = (0, _slicedToArray3.default)(this.clientSize, 2),
          width = _clientSize2[0],
          height = _clientSize2[1];

      return [width + 2 * borderWidth, height + 2 * borderWidth];
    }
  }, {
    key: 'layoutSize',
    get: function get() {
      var size = this.offsetSize;

      var _attr16 = this.attr('margin'),
          _attr17 = (0, _slicedToArray3.default)(_attr16, 4),
          top = _attr17[0],
          right = _attr17[1],
          bottom = _attr17[2],
          left = _attr17[3];

      return [left + size[0] + right, top + size[1] + bottom];
    }
  }, {
    key: 'innerSize',
    get: function get() {
      return this.contentSize;
    }
  }, {
    key: 'outerSize',
    get: function get() {
      return this.offsetSize;
    }
  }, {
    key: 'boundingRect',
    get: function get() {
      var transform = this.transform;

      var _originalRect2 = (0, _slicedToArray3.default)(this.originalRect, 4),
          ox = _originalRect2[0],
          oy = _originalRect2[1],
          width = _originalRect2[2],
          height = _originalRect2[3];

      if (this.hasLayout) {
        var margin = this.attr('margin');
        width += margin[1];
        height += margin[2];
      }

      var vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];

      var transformed = vertexs.map(function (v) {
        return transform.transformPoint(v[0], v[1]);
      });

      var vx = transformed.map(function (v) {
        return v[0];
      }),
          vy = transformed.map(function (v) {
        return v[1];
      });

      var minX = Math.min.apply(Math, (0, _toConsumableArray3.default)(vx)),
          minY = Math.min.apply(Math, (0, _toConsumableArray3.default)(vy)),
          maxX = Math.max.apply(Math, (0, _toConsumableArray3.default)(vx)),
          maxY = Math.max.apply(Math, (0, _toConsumableArray3.default)(vy));

      return [minX, minY].concat([maxX - minX, maxY - minY]);
    }

    // rect before transform

  }, {
    key: 'originalRect',
    get: function get() {
      var _offsetSize3 = (0, _slicedToArray3.default)(this.offsetSize, 2),
          width = _offsetSize3[0],
          height = _offsetSize3[1],
          _attr18 = this.attr('anchor'),
          _attr19 = (0, _slicedToArray3.default)(_attr18, 2),
          anchorX = _attr19[0],
          anchorY = _attr19[1];

      var rect = [-anchorX * width, -anchorY * height, width, height];

      if (this.hasLayout) {
        var margin = this.attr('margin');
        rect[0] += margin[3];
        rect[1] += margin[0];
      }
      return rect;
    }
  }, {
    key: 'originalRenderRect',
    get: function get() {
      var bound = this.originalRect,
          pos = this.xy;

      return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
    }
  }, {
    key: 'renderBox',
    get: function get() {
      var bound = this.boundingRect,
          pos = this.xy;

      return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
    }
  }, {
    key: 'renderRect',
    get: function get() {
      return (0, _utils.boxToRect)(this.renderBox);
    }
  }, {
    key: 'vertices',
    get: function get() {
      var vertices = (0, _utils.rectVertices)(this.originalRect),
          transform = this.transform,
          _xy3 = (0, _slicedToArray3.default)(this.xy, 2),
          x0 = _xy3[0],
          y0 = _xy3[1];


      return vertices.map(function (v) {
        var _transform$transformP3 = transform.transformPoint(v[0], v[1]),
            _transform$transformP4 = (0, _slicedToArray3.default)(_transform$transformP3, 2),
            x = _transform$transformP4[0],
            y = _transform$transformP4[1];

        return [x0 + x, y0 + y];
      });
    }
  }, {
    key: 'cache',
    set: function set(context) {
      if (context == null) {
        this[_cachePriority] = 0;
        if (this.parent && this.parent.cache) {
          this.parent.cache = null;
        }
      }
      if (this.cacheContext && context !== this.cacheContext) {
        _render.cacheContextPool.put(this.cacheContext);
      }
      this.cacheContext = context;
    },
    get: function get() {
      if (this[_cachePriority] >= 6) {
        return this.cacheContext;
      }
      if (this.cacheContext) {
        this.cache = null;
      }
      return false;
    }
  }, {
    key: 'needRender',
    get: function get() {
      if (this.isVirtual) return false;

      var _offsetSize4 = (0, _slicedToArray3.default)(this.offsetSize, 2),
          offsetWidth = _offsetSize4[0],
          offsetHeight = _offsetSize4[1];

      if (offsetWidth <= 0 || offsetHeight <= 0) return false;

      var border = this.attr('border');

      if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
        return false; // don't need to render
      }

      return true;
    }
  }], [{
    key: 'setAttributeEffects',
    value: function setAttributeEffects() {
      var effects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.prototype[_effects] == null) {
        this.prototype[_effects] = effects;
      }
      (0, _assign2.default)(this.prototype[_effects], effects);
    }
  }, {
    key: 'addAttributes',
    value: function addAttributes() {
      var _this11 = this;

      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      (0, _entries2.default)(attrs).forEach(function (_ref13) {
        var _ref14 = (0, _slicedToArray3.default)(_ref13, 2),
            prop = _ref14[0],
            handler = _ref14[1];

        var getter = function getter() {
          return this.get(prop);
        };
        if (typeof handler !== 'function' && handler.set) {
          getter = handler.get || getter;
          handler = handler.set;
        }
        if (prop !== 'init') {
          _this11.Attr.prototype.__attributeNames.add(prop);
          (0, _defineProperty3.default)(_this11.Attr.prototype, prop, {
            set: function set(val) {
              this.__updateTag = false;
              this.__reflowTag = false;
              handler(this, val);
              if (this.subject && this.subject.hasLayout) {
                var offsetSize = this.subject.offsetSize,
                    layoutSize = this.subject.__layoutSize;

                if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
                  this.subject.parent.clearLayout();
                }
                this.subject.__lastLayout = offsetSize;
              }
              if (this.subject && this.__updateTag) {
                this.subject.forceUpdate(true);
                if (this.__reflowTag) {
                  this.subject.reflow();
                }
              }
              // delete this.__reflowTag;
              // delete this.__updateTag;
            },

            get: getter
          });
        }
      });
    }
  }, {
    key: 'defineAttributes',
    value: function defineAttributes(attrs, effects) {
      this.Attr = function (_Attr) {
        (0, _inherits3.default)(_class3, _Attr);

        function _class3(subject) {
          (0, _classCallCheck3.default)(this, _class3);

          var _this12 = (0, _possibleConstructorReturn3.default)(this, (_class3.__proto__ || (0, _getPrototypeOf2.default)(_class3)).call(this, subject));

          if (attrs.init) attrs.init(_this12, subject);
          return _this12;
        }

        return _class3;
      }(this.Attr);
      if (attrs) this.addAttributes(attrs);
      if (effects) this.setAttributeEffects(effects);
      return this.Attr;
    }
  }]);
  return BaseSprite;
}(_basenode2.default), _class2.Attr = _attr21.default, _temp), (_applyDecoratedDescriptor(_class.prototype, 'xy', [_utils.absolute], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'xy'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'attrSize', [_utils.absolute, _utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'attrSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'boxOffsetSize', [_utils.absolute, _utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'boxOffsetSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'contentSize', [_utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'contentSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clientSize', [_utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'clientSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetSize', [_utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offsetSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'originalRect', [_utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'originalRect'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearCache', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'clearCache'), _class.prototype)), _class));
exports.default = BaseSprite;


function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var w = image.width,
      h = image.height;

  var _ref15 = clip9 || [16, 16, 16, 16],
      _ref16 = (0, _slicedToArray3.default)(_ref15, 4),
      top = _ref16[0],
      right = _ref16[1],
      bottom = _ref16[2],
      left = _ref16[3];

  var leftTop = [0, 0, left, top],
      rightTop = [w - right, 0, right, top],
      rightBottom = [w - right, h - bottom, right, bottom],
      leftBottom = [0, h - bottom, left, bottom];

  var boxRight = offsetWidth - right - borderWidth,
      boxBottom = offsetHeight - borderWidth - bottom;

  // draw four corners
  drawingContext.drawImage.apply(drawingContext, [image].concat(leftTop, [borderWidth, borderWidth, left, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightTop, [boxRight, borderWidth, right, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightBottom, [boxRight, boxBottom, left, bottom]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(leftBottom, [borderWidth, boxBottom, left, bottom]));

  // draw .9 cross
  var midWidth = w - left - right,
      midHeight = h - top - bottom;

  if (midWidth > 0) {
    var midBoxWidth = clientWidth - left - right;
    var leftOffset = borderWidth + left;
    while (midBoxWidth > 0) {
      var ww = Math.min(midBoxWidth, midWidth);
      var topPiece = [left, 0, ww, top],
          bottomPiece = [left, h - bottom, ww, bottom];

      drawingContext.drawImage.apply(drawingContext, [image].concat(topPiece, [leftOffset, borderWidth, ww, top]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(bottomPiece, [leftOffset, boxBottom, ww, bottom]));
      midBoxWidth -= midWidth;
      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    var midBoxHeight = clientHeight - top - bottom;
    var topOffset = borderWidth + top;
    while (midBoxHeight > 0) {
      var hh = Math.min(midBoxHeight, midHeight);
      var leftPiece = [0, top, left, hh],
          rightPiece = [w - right, top, right, hh];

      drawingContext.drawImage.apply(drawingContext, [image].concat(leftPiece, [borderWidth, topOffset, left, hh]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(rightPiece, [boxRight, topOffset, right, hh]));
      midBoxHeight -= midHeight;
      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    var _midBoxWidth = clientWidth - left - right;
    var _leftOffset = borderWidth + left;

    while (_midBoxWidth > 0) {
      var _midBoxHeight = clientHeight - top - bottom;
      var _topOffset = borderWidth + top;
      while (_midBoxHeight > 0) {
        var _ww = Math.min(_midBoxWidth, midWidth),
            _hh = Math.min(_midBoxHeight, midHeight);
        var midPiece = [left, top, _ww, _hh];
        drawingContext.drawImage.apply(drawingContext, [image].concat(midPiece, [_leftOffset, _topOffset, _ww, _hh]));
        _midBoxHeight -= midWidth;
        if (_midBoxHeight > 0) {
          _topOffset += midHeight;
        }
      }
      _midBoxWidth -= midWidth;
      if (_midBoxWidth > 0) {
        _leftOffset += midWidth;
      }
    }
  }
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var image = bgimage.image,
      display = bgimage.display,
      clip9 = bgimage.clip9;


  if (display === '.9') {
    drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
  } else {
    var offset = bgimage.offset || [0, 0],
        w = image.width,
        h = image.height;

    if (display === 'center') {
      offset = [(clientWidth - w) * 0.5, (clientHeight - h) * 0.5];
    } else if (display === 'stretch') {
      w = clientWidth - offset[0];
      h = clientHeight - offset[1];
    }
    drawingContext.drawImage(image, borderWidth + offset[0], borderWidth + offset[1], w, h);

    if (w > 0 && (display === 'repeat' || display === 'repeatX')) {
      var cw = clientWidth - borderWidth - offset[0] - w;
      while (cw > borderWidth) {
        drawingContext.drawImage(image, clientWidth - cw, borderWidth + offset[1], w, h);
        if (h > 0 && display === 'repeat') {
          var ch = clientHeight - borderWidth - offset[1] - h;
          while (ch > borderWidth) {
            drawingContext.drawImage(image, clientWidth - cw, clientHeight - ch, w, h);
            ch -= h;
          }
        }
        cw -= w;
      }
    }

    if (h > 0 && (display === 'repeat' || display === 'repeatY')) {
      var _ch = clientHeight - borderWidth - offset[1] - h;
      while (_ch > borderWidth) {
        drawingContext.drawImage(image, borderWidth + offset[0], clientHeight - _ch, w, h);
        _ch -= h;
      }
    }
  }
}

(0, _nodetype.registerNodeType)('basesprite', BaseSprite);
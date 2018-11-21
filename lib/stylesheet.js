'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _selector = require('./selector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssWhat = require('css-what');

var cssRules = [];
var relatedAttributes = new _set2.default();

var _matchedSelectors = (0, _symbol2.default)('matchedSelectors');
var _transitions = (0, _symbol2.default)('transitions');

function parseTransitionValue(values) {
  if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
  var ret = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i].toString();
    if (value === 'initial') {
      value = 0;
    } else if (/ms$/.test(value)) {
      value = parseFloat(value) / 1000;
    } else {
      value = parseFloat(value);
    }
    ret.push(value);
  }
  return ret;
}

function toPxValue(value, defaultWidth) {
  if (typeof value === 'string') {
    var matched = value.match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);
    if (matched) {
      // console.log(matched);
      var v = parseFloat(matched[1]);
      var unit = matched[2];
      if (unit === 'px') {
        value = v;
      } else if (unit === 'pt') {
        value = v / 0.75;
      } else if (unit === 'pc') {
        value = v * 16;
      } else if (unit === 'in') {
        value = v * 96;
      } else if (unit === 'cm') {
        value = v * 96.0 / 2.54;
      } else if (unit === 'mm') {
        value = v * 96.0 / 25.4;
      } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
        if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
          var root = getComputedStyle(document.documentElement).fontSize;
          defaultWidth = toPxValue(root, 16);
        }
        value = v * defaultWidth;
        if (unit === 'ex') value /= 2;
      } else if (unit === 'q') {
        value = v * 96.0 / 25.4 / 4;
      } else if (unit === 'vw') {
        if (typeof document !== 'undefined') {
          var width = document.documentElement.clientWidth;
          value = width * v / 100;
        }
      } else if (unit === 'vh') {
        if (typeof document !== 'undefined') {
          var height = document.documentElement.clientHeight;
          value = height * v / 100;
        }
      } else if (unit === 'vmax' || unit === 'vmin') {
        if (typeof document !== 'undefined') {
          var _width = document.documentElement.clientWidth;
          var _height = document.documentElement.clientHeight;
          if (unit === 'vmax') {
            value = Math.max(_width, _height) * v / 100;
          } else {
            value = Math.min(_width, _height) * v / 100;
          }
        }
      }
    }
  }
  return value;
}

var CSSGetter = {
  opacity: true,
  width: true,
  height: true,
  backgroundColor: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true,
  position: true,
  alignSelf: true,
  transform: true,
  transformOrigin: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  borderTopStyle: true,
  borderRightStyle: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  boxSizing: true,
  display: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  zIndex: true,
  font: true,
  fontSize: true,
  fontFamily: true,
  fontStyle: true,
  fontVariantCaps: true,
  fontWeight: true,
  color: true,
  textAlign: true,
  lineHeight: true,
  lineBreak: true,
  wordBreak: true,
  letterSpacing: true,
  textIndent: true,
  transitionDuration: parseTransitionValue,
  transitionTimingFunction: function transitionTimingFunction(values) {
    if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
    var ret = [];
    for (var i = 0; i < values.length; i++) {
      var value = values[i].toString();
      if (value === 'initial') value = 'ease';
      ret.push(value);
    }
    return ret;
  },

  transitionDelay: parseTransitionValue,
  transitionProperty: true
};

function toCamel(str) {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

function applyValue(key, value, values) {
  if (/Top$/.test(key)) values[0] = value;
  if (/Right$/.test(key)) values[1] = value;
  if (/Bottom$/.test(key)) values[2] = value;
  if (/Left$/.test(key)) values[3] = value;
}

function resolveToken(token) {
  // eslint-disable-line complexity
  var ret = '',
      priority = 0,
      valid = true;

  if (token.type === 'tag') {
    ret = token.name;
    priority = 1;
  } else if (token.type === 'universal') {
    ret = '*';
    priority = 0;
  } else if (token.type === 'pseudo') {
    var data = token.data;
    if (data != null) {
      if (token.name !== 'not') {
        ret = ':' + token.name + '(' + token.data + ')';
      } else {
        data.forEach(function (rules) {
          rules.forEach(function (token) {
            var r = resolveToken(token);
            ret += r.token;
            valid = r.valid;
          });
        });
      }
    } else {
      ret = ':' + token.name;
    }
    // not support yet
    valid = token.name !== 'hover' && token.name !== 'active' && token.name !== 'focus' && token.name !== 'link' && token.name !== 'visited' && token.name !== 'lang';
    priority = token.name !== 'not' ? 1000 : 0;
  } else if (token.type === 'pseudo-element') {
    ret = '::' + token.name;
    priority = 1;
    valid = false; // pseudo-element not support
  } else if (token.type === 'attribute') {
    var name = token.name,
        action = token.action,
        value = token.value;


    relatedAttributes.add(name);

    if (action === 'exists') {
      ret = '[' + name + ']';
    } else if (action === 'equals') {
      if (name === 'id') {
        ret = '#' + value;
      } else {
        ret = '[' + name + '="' + value + '"]';
      }
    } else if (action === 'not') {
      ret = '[' + name + '!="' + value + '"]';
    } else if (action === 'start') {
      ret = '[' + name + '^="' + value + '"]';
    } else if (action === 'end') {
      ret = '[' + name + '$="' + value + '"]';
    } else if (action === 'element') {
      if (name === 'class') {
        ret = '.' + value;
      } else {
        ret = '[' + name + '~="' + value + '"]';
      }
    } else if (action === 'any') {
      ret = '[' + name + '*="' + value + '"]';
    } else if (action === 'hyphen') {
      ret = '[' + name + '|="' + value + '"]';
    }
    if (name === 'id' && action === 'equals') {
      priority = 1000000;
    } else {
      priority = 1000;
    }
  } else if (token.type === 'child') {
    ret = '>';
    priority = 0;
  } else if (token.type === 'parent') {
    ret = '<';
    priority = 0;
  } else if (token.type === 'sibling') {
    ret = '~';
    priority = 0;
  } else if (token.type === 'adjacent') {
    ret = '+';
    priority = 0;
  } else if (token.type === 'descendant') {
    ret = ' ';
    priority = 0;
  } else {
    throw new Error('unknown token!', token);
  }
  return { token: ret, priority: priority, valid: valid };
}

var order = 0;

exports.default = {
  add: function add(rules) {
    var fromDoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    (0, _entries2.default)(rules).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          rule = _ref2[0],
          attributes = _ref2[1];

      var selectors = cssWhat(rule);
      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        var tokens = selector.map(function (token) {
          return resolveToken(token);
        }).filter(function (token) {
          return token.valid;
        });

        var r = tokens.reduce(function (a, b) {
          a.priority += b.priority;
          a.tokens.push(b.token);
          return a;
        }, { tokens: [], priority: 0 });

        var selectorStr = r.tokens.join('');

        try {
          var compiled = (0, _selector.compile)(selectorStr);

          var _rule = {
            selector: selectorStr,
            compiled: compiled,
            priority: r.priority,
            attributes: attributes,
            order: order++,
            fromDoc: fromDoc
          };
          cssRules.push(_rule);
        } catch (ex) {
          console.warn(ex.message);
        }
      }
    });
    cssRules.sort(function (a, b) {
      var d = a.priority - b.priority;
      return d !== 0 ? d : a.order - b.order;
    });
  },
  fromDocumentCSS: function fromDocumentCSS() {
    cssRules = cssRules.filter(function (r) {
      return !r.fromDoc;
    });
    if (typeof document === 'undefined') return;
    var stylesheets = document.styleSheets;
    if (stylesheets) {
      var styleRules = {};
      for (var i = 0; i < stylesheets.length; i++) {
        var rules = null;
        try {
          rules = stylesheets[i].cssRules || stylesheets[i].rules;
        } catch (ex) {
          rules = null;
        }

        if (!rules) continue; // eslint-disable-line no-continue

        var _loop = function _loop(j) {
          var rule = rules[j];
          var selectorText = rule.selectorText;
          var isStyleMap = !!rule.styleMap;
          var styleAttrs = void 0;

          if (!isStyleMap) {
            // eslint-disable-line no-continue
            if (!rule.style) return 'continue'; // eslint-disable-line no-continue

            var props = [].concat((0, _toConsumableArray3.default)(rule.style)).map(function (key) {
              return [key, rule.style[key]];
            }).filter(function (_ref3) {
              var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              return value != null;
            });

            var matched = rule.cssText.match(/--sprite-[\w-]+\s*:\s*.+?(;|$)/img);
            if (matched) {
              matched.forEach(function (rule) {
                var _rule$split = rule.split(':'),
                    _rule$split2 = (0, _slicedToArray3.default)(_rule$split, 2),
                    key = _rule$split2[0],
                    value = _rule$split2[1];

                props.push([key, value.trim().replace(/;$/, '')]);
              });
            }
            var isIgnore = props['--sprite-ignore'];
            if (isIgnore && isIgnore !== 'false' && isIgnore !== '0') {
              return 'continue'; // eslint-disable-line no-continue
            }

            styleAttrs = props;
          }
          if (rule.styleMap && rule.styleMap.has('--sprite-ignore')) {
            var _isIgnore = rule.styleMap.get('--sprite-ignore')[0].trim();
            if (_isIgnore !== 'false' && _isIgnore !== '0' && _isIgnore !== '') {
              return 'continue'; // eslint-disable-line no-continue
            }
          }
          if (rule.styleMap) {
            styleAttrs = [].concat((0, _toConsumableArray3.default)(rule.styleMap));
          }
          var attrs = {},
              reserved = {};
          var border = null;
          var transition = null;
          var gradient = {};

          styleAttrs.forEach(function (_ref5) {
            var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            // eslint-disable-line complexity
            if (key.indexOf('--sprite-') === 0) {
              key = key.replace('--sprite-', '');
              key = toCamel(key);
              if (isStyleMap) value = value[0][0].trim();
              if (/^margin\w+/.test(key)) {
                reserved.margin = reserved.margin || [0, 0, 0, 0];
                applyValue(key, toPxValue(value), reserved.margin);
              } else if (/^padding\w+/.test(key)) {
                reserved.padding = reserved.padding || [0, 0, 0, 0];
                applyValue(key, toPxValue(value), reserved.padding);
              } else if (key === 'gradient') {
                // --sprite-gradient: bgcolor,color vector(0, 150, 150, 0) 0 #fff,0.5 rgba(33, 33, 77, 0.7),1 rgba(128, 45, 88, 0.5)
                var _matched = value.match(/(.+?)vector\((.+?)\)(.+)/);
                if (_matched) {
                  var properties = _matched[1].trim().split(/\s*,\s*/g),
                      vector = _matched[2].split(',').map(function (s) {
                    return Number(s.trim());
                  }),
                      colors = _matched[3].trim().split(/\s+/).map(function (s) {
                    var _s$split = s.split(','),
                        _s$split2 = (0, _slicedToArray3.default)(_s$split, 2),
                        offset = _s$split2[0],
                        color = _s$split2[1];

                    return { offset: Number(offset.trim()), color: color.trim() };
                  });
                  properties.forEach(function (prop) {
                    gradient[prop] = { vector: vector, colors: colors };
                  });
                }
              } else if (key === 'borderStyle') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.style = value;
              } else if (key === 'borderWidth') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.width = toPxValue(value);
              } else if (key === 'borderColor') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.color = value;
              } else if (key === 'border') {
                var values = value.split(/\s+/);

                var _values = (0, _slicedToArray3.default)(values, 3),
                    style = _values[0],
                    width = _values[1],
                    color = _values[2];

                border = border || {};
                border.style = style;
                border.width = toPxValue(width);
                border.color = color;
              } else {
                if (key !== 'fontSize') {
                  if (/,/.test(value)) {
                    var _values2 = value.split(',');
                    value = _values2.map(function (v) {
                      return toPxValue(v.trim());
                    });
                  } else {
                    value = toPxValue(value);
                  }
                }
                reserved[key] = value;
              }
            } else {
              key = toCamel(key);
              if (key in CSSGetter) {
                if (typeof CSSGetter[key] === 'function') {
                  value = CSSGetter[key](value);
                } else {
                  if (isStyleMap) {
                    value = value[0].toString();
                  }
                  if (key !== 'fontSize') {
                    value = toPxValue(value);
                  }
                }

                if (value === 'initial') return;
                if (key === 'backgroundColor') key = 'bgcolor';
                if (key === 'fontVariantCaps') key = 'fontVariant';
                if (key === 'lineHeight' && value === 'normal') value = '';

                if (/^margin\w+/.test(key)) {
                  attrs.margin = attrs.margin || [0, 0, 0, 0];
                  applyValue(key, toPxValue(value), attrs.margin);
                } else if (/^padding\w+/.test(key)) {
                  attrs.padding = attrs.padding || [0, 0, 0, 0];
                  applyValue(key, toPxValue(value), attrs.padding);
                } else if (/^border/.test(key)) {
                  key = key.replace(/^border(Top|Right|Bottom|Left)/, '').toLowerCase();
                  if (key === 'width') value = toPxValue(value);
                  if (/radius$/.test(key)) {
                    attrs.borderRadius = toPxValue(value);
                  } else {
                    border = border || {};
                    border[key] = value;
                  }
                } else if (key === 'transitionDelay') {
                  transition = transition || {};
                  transition.delay = value;
                } else if (key === 'transitionDuration') {
                  transition = transition || {};
                  transition.duration = value;
                } else if (key === 'transitionTimingFunction') {
                  transition = transition || {};
                  transition.easing = value;
                } else if (key === 'transitionProperty') {
                  transition = transition || {};
                  transition.properties = value;
                } else {
                  attrs[key] = value;
                }
              }
            }
          });
          if (border) {
            (0, _assign2.default)(attrs, { border: border });
          }
          (0, _assign2.default)(attrs, reserved, gradient);
          styleRules[selectorText] = styleRules[selectorText] || {};
          if (transition) {
            transition.properties = transition.properties || 'all';
            transition.delay = transition.delay || [0];
            transition.duration = transition.duration || [0];
            transition.easing = transition.easing || ['ease'];
            attrs.transitions = [];
            var properties = transition.properties.split(',').map(function (p) {
              return p.trim();
            });
            properties.forEach(function (key, i) {
              var _attrs = null;
              if (key.indexOf('--sprite-') === 0) {
                key = key.replace('--sprite-', '');
              }
              key = toCamel(key);
              if (key !== 'borderRadius' && /^border/.test(key)) {
                key = 'border';
              }
              if (key === 'backgroundColor' || key === 'background') key = 'bgcolor';
              if (key === 'fontVariantCaps') key = 'fontVariant';
              if (key === 'all') {
                _attrs = (0, _assign2.default)({}, attrs);
                delete _attrs.transitions;
              } else if (key in attrs) {
                _attrs = (0, _defineProperty3.default)({}, key, attrs[key]);
              }
              if (_attrs) {
                attrs.transitions.push({
                  easing: transition.easing[i],
                  attrs: _attrs,
                  delay: transition.delay[i],
                  duration: transition.duration[i] });
              }
            });
          }
          (0, _assign2.default)(styleRules[selectorText], attrs);
        };

        for (var j = 0; j < rules.length; j++) {
          var _ret = _loop(j);

          if (_ret === 'continue') continue;
        }
      }
      // console.log(styleRules);
      this.add(styleRules, true);
    }
  },
  computeStyle: function computeStyle(el) {
    if (!el.layer || !el.attributes) return {};
    var attrs = {};
    var selectors = [];
    var transitions = [];
    cssRules.forEach(function (rule) {
      var compiled = rule.compiled,
          selector = rule.selector,
          attributes = rule.attributes;

      if ((0, _selector.isMatched)(el, compiled)) {
        (0, _assign2.default)(attrs, attributes);
        // console.log(JSON.stringify(attrs.transitions));
        if (attrs.transitions) {
          transitions.push.apply(transitions, (0, _toConsumableArray3.default)(attrs.transitions));
          attrs.transitions.forEach(function (t) {
            (0, _keys2.default)(t.attrs).forEach(function (k) {
              // if(k in attrs) delete attrs[k];
              el.attributes.__getStyleTag = true;
              attrs[k] = el.attributes[k];
              el.attributes.__getStyleTag = false;
              // console.log(el.attributes.style[k]);
            });
          });
          delete attrs.transitions;
        }
        selectors.push(selector);
      }
    });
    var matchedSelectors = selectors.join();
    if (el[_matchedSelectors] !== matchedSelectors) {
      // console.log(transitions);
      if (el[_transitions]) {
        el[_transitions].forEach(function (t) {
          t.cancel(true);
          el.attributes.__styleTag = true;
          el.attr(t.__attrs);
          el.attributes.__styleTag = false;
        });
        delete el[_transitions];
      }

      if (transitions.length > 0) {
        el[_transitions] = [];
        _promise2.default.all(transitions.map(function (t) {
          var attrs = t.attrs,
              delay = t.delay,
              duration = t.duration,
              easing = t.easing;

          var transition = el.transition({ duration: duration, delay: delay }, easing, true);
          transition.__attrs = attrs;
          el[_transitions].push(transition);
          return transition.attr((0, _assign2.default)({}, attrs));
        })).then(function () {
          el.dispatchEvent('transitionend', {}, true, true);
        });
      }
      el.dispatchEvent('stylechange', { oldSelectors: el[_matchedSelectors], newSelectors: matchedSelectors }, true, true);
      el[_matchedSelectors] = matchedSelectors;
      el.attributes.clearStyle();
      el.attributes.__styleTag = true;
      el.attr(attrs);
      el.attributes.__styleTag = false;
      // if(el.forceUpdate) el.forceUpdate();
    }
  },

  get relatedAttributes() {
    return relatedAttributes;
  },
  get cssRules() {
    return cssRules;
  }
};
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

function parseTransitionValue(values) {
  var ret = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i].toString();
    if (/ms$/.test(value)) {
      value = parseFloat(value) / 1000;
    } else {
      value = parseFloat(value);
    }
    ret.push(value);
  }
  return ret;
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
  borderRadius: true,
  boxSizing: true,
  display: true,
  padding: true,
  margin: true,
  zIndex: true,
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
  transitionTimingFunction: true,
  transitionDelay: parseTransitionValue,
  transitionProperty: true
};

function toCamel(str) {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

function resolveToken(token) {
  var ret = '',
      priority = 0;

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
          });
        });
      }
    } else {
      ret = ':' + token.name;
    }
    priority = token.name !== 'not' ? 1000 : 0;
  } else if (token.type === 'pseudo-element') {
    ret = '::' + token.name;
    priority = 1;
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
  return { token: ret, priority: priority };
}

var order = 0;

exports.default = {
  add: function add(rules) {
    (0, _entries2.default)(rules).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          rule = _ref2[0],
          attributes = _ref2[1];

      var selectors = cssWhat(rule);
      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        var tokens = selector.map(function (token) {
          return resolveToken(token);
        });
        var r = tokens.reduce(function (a, b) {
          a.priority += b.priority;
          a.tokens.push(b.token);
          return a;
        }, { tokens: [], priority: 0 });
        var _rule = {
          selector: r.tokens.join(''),
          priority: r.priority,
          attributes: attributes,
          order: order++
        };
        cssRules.push(_rule);
      }
    });
    cssRules.sort(function (a, b) {
      var d = a.priority - b.priority;
      return d !== 0 ? d : a.order - b.order;
    });
  },
  fromDocumentCSS: function fromDocumentCSS() {
    if (typeof document === 'undefined') return;
    var stylesheets = document.styleSheets;
    if (stylesheets) {
      var styleRules = {};
      for (var i = 0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules || stylesheets[i].rules;

        var _loop = function _loop(j) {
          var rule = rules[j];
          var selectorText = rule.selectorText;
          var styleAttrs = [].concat((0, _toConsumableArray3.default)(rule.styleMap));
          var attrs = {},
              reserved = {};
          var border = null;
          var transition = null;
          styleAttrs.forEach(function (_ref3) {
            var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            // eslint-disable-line complexity
            if (key.indexOf('--sprite-') === 0) {
              key = key.replace('--sprite-', '');
              key = toCamel(key);
              if (key === 'borderStyle') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.style = value;
              }
              if (key === 'borderWidth') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.width = parseFloat(value);
              }
              if (key === 'borderColor') {
                border = border || { width: 1, color: 'rgba(0,0,0,0)' };
                border.color = value;
              }
              if (key !== 'fontSize') {
                value = value[0][0].trim().replace(/px$/, '');
              } else {
                value = value[0][0].trim();
              }
              reserved[key] = value;
            } else {
              key = toCamel(key);
              if (key in CSSGetter) {
                if (typeof CSSGetter[key] === 'function') {
                  value = CSSGetter[key](value);
                } else if (key !== 'fontSize') {
                  value = value[0].toString().replace(/px$/, '');
                } else {
                  value = value[0].toString();
                }
                if (key === 'backgroundColor') key = 'bgcolor';
                if (key === 'fontVariantCaps') key = 'fontVariant';
                if (key === 'lineHeight' && value === 'normal') value = '';
                if (key !== 'borderRadius' && /^border/.test(key)) {
                  key = key.replace(/^border(Top|Right|Bottom|Left)/, '').toLowerCase();
                  if (key === 'color' && value === 'initial') value = 'rgba(0,0,0,0)';
                  if (key === 'width') value = parseFloat(value);
                  border = border || {};
                  border[key] = value;
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
          (0, _assign2.default)(attrs, reserved);
          styleRules[selectorText] = styleRules[selectorText] || {};
          if (transition) {
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
              if (key === 'backgroundColor') key = 'bgcolor';
              if (key === 'fontVariantCaps') key = 'fontVariant';
              if (key === 'all') {
                _attrs = (0, _assign2.default)({}, attrs);
                delete _attrs.transitions;
              } else if (key in attrs) {
                _attrs = (0, _defineProperty3.default)({}, key, attrs[key]);
              }
              if (_attrs) {
                attrs.transitions.push({
                  easing: transition.easing,
                  attrs: _attrs,
                  delay: transition.delay[i],
                  duration: transition.duration[i] });
              }
            });
          }
          (0, _assign2.default)(styleRules[selectorText], attrs);
          // console.log(styleRules[selectorText]);
        };

        for (var j = 0; j < rules.length; j++) {
          _loop(j);
        }
      }
      // console.log(styleRules);
      this.add(styleRules);
    }
  },
  computeStyle: function computeStyle(el) {
    if (!el.layer || !el.attributes) return {};
    var attrs = {};
    var selectors = [];
    var transitions = [];
    cssRules.forEach(function (rule) {
      var selector = rule.selector,
          attributes = rule.attributes;

      if ((0, _selector.isMatched)(el, selector)) {
        (0, _assign2.default)(attrs, attributes);
        // console.log(JSON.stringify(attrs.transitions));
        if (attrs.transitions) {
          transitions.push.apply(transitions, (0, _toConsumableArray3.default)(attrs.transitions));
          attrs.transitions.forEach(function (t) {
            (0, _keys2.default)(t.attrs).forEach(function (k) {
              if (k in attrs) delete attrs[k];
            });
          });
          delete attrs.transitions;
        }
        selectors.push(selector);
      }
    });
    var matchedSelectors = selectors.join();
    if (el[_matchedSelectors] !== matchedSelectors) {
      if (transitions.length > 0) {
        _promise2.default.all(transitions.map(function (t) {
          var attrs = t.attrs,
              delay = t.delay,
              duration = t.duration,
              easing = t.easing;

          return el.transition({ duration: duration, delay: delay }, easing, true).attr(attrs);
        })).then(function () {
          el.dispatchEvent('transitionend', {}, true, true);
        });
      }
      el.dispatchEvent('stylechange', { oldSelectors: el[_matchedSelectors], newSelectors: matchedSelectors });
      el[_matchedSelectors] = matchedSelectors;
      el.attributes.clearStyle();
      el.attributes.__styleTag = true;
      el.attr(attrs);
      el.attributes.__styleTag = false;
      if (el.forceUpdate) el.forceUpdate();
    }
  },

  get relatedAttributes() {
    return relatedAttributes;
  }
};
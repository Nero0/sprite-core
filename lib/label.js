'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

var _cssLineBreak = require('css-line-break');

var _utils = require('./utils');

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _nodetype = require('./nodetype');

var _render = require('./helpers/render');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var parseFont = require('./helpers/parse-font');
var _boxSize = (0, _symbol2.default)('boxSize'),
    _outputText = (0, _symbol2.default)('outputText');

var measureText = function measureText(node, text, font) {
  var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var ctx = node.context;
  if (!ctx) {
    return [0, 0];
  }
  ctx.save();
  ctx.font = font;

  var _ctx$measureText = ctx.measureText(text),
      width = _ctx$measureText.width;

  ctx.restore();

  var letterSpacing = node.attr('letterSpacing');
  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  var _parseFont = parseFont(font),
      size = _parseFont.size;

  var height = lineHeight || size * 1.2;

  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  var text = node.text,
      font = node.attr('font'),
      lineHeight = node.attr('lineHeight'),
      textIndent = node.attr('textIndent');

  var lines = [];
  var width = 0,
      height = 0;

  node[_outputText] = text;
  var lineBreak = node.attr('lineBreak'),
      textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if (lineBreak !== '' && textboxWidth !== '') {
    var wordBreak = node.attr('wordBreak');

    text.split(/\n/).forEach(function (line) {
      var breaker = (0, _cssLineBreak.LineBreaker)(line, { lineBreak: lineBreak, wordBreak: wordBreak });
      var words = [];
      var bk = breaker.next();
      while (!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }
      var l = '';
      words.forEach(function (word) {
        if (!l) {
          l = word;
        } else {
          var ll = '' + l + word;

          var _measureText = measureText(node, ll, font),
              _measureText2 = (0, _slicedToArray3.default)(_measureText, 1),
              w = _measureText2[0];

          if (w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
            lines.push(l);
            l = word;
          } else {
            l = ll;
          }
        }
      });
      lines.push(l);
    });
    // lines = node[_outputText].split(/\n/)
    node[_outputText] = lines.join('\n');
  } else {
    lines = text.split(/\n/);
  }

  lines.forEach(function (line, idx) {
    var _measureText3 = measureText(node, line, font, lineHeight),
        _measureText4 = (0, _slicedToArray3.default)(_measureText3, 2),
        w = _measureText4[0],
        h = _measureText4[1];

    if (idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });

  var boxSize = node[_boxSize];
  if (!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    var attrSize = node.attrSize;
    if (attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
    }
  }
  node[_boxSize] = [width, height];
}

var LabelSpriteAttr = (_dec = (0, _utils.inherit)('normal normal normal 16px Arial'), _dec2 = (0, _utils.parseValue)(parseFloat), _dec3 = (0, _utils.inherit)(''), _dec4 = (0, _utils.inherit)('left'), _dec5 = (0, _utils.parseValue)(_utils.parseColorString), _dec6 = (0, _utils.inherit)(''), _dec7 = (0, _utils.parseValue)(_utils.parseColorString), _dec8 = (0, _utils.inherit)(''), _dec9 = (0, _utils.inherit)(''), _dec10 = (0, _utils.inherit)(''), _dec11 = (0, _utils.inherit)(0), _dec12 = (0, _utils.inherit)(0), _dec13 = (0, _utils.relative)('width'), _dec14 = (0, _utils.relative)('height'), (_class = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(LabelSpriteAttr, _BaseSprite$Attr);

  function LabelSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, LabelSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LabelSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(LabelSpriteAttr)).call(this, subject));

    _this.setDefault({
      font: 'inherit',
      textAlign: 'inherit',
      strokeColor: 'inherit',
      fillColor: 'inherit',
      lineHeight: 'inherit',
      text: '',
      flexible: false,
      lineBreak: 'inherit',
      wordBreak: 'inherit',
      letterSpacing: 'inherit',
      textIndent: 'inherit'
    });
    return _this;
  }

  (0, _createClass3.default)(LabelSpriteAttr, [{
    key: 'text',
    set: function set(val) {
      val = String(val);
      this.set('text', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'font',
    set: function set(val) {
      this.set('font', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'fontSize',
    set: function set(val) {
      if (val == null) val = '16px';
      var unit = 'px';
      if (typeof val === 'string') {
        var unitReg = /^(\d+(?:.\d+)?)(\w+)/;
        var matches = val.match(unitReg);
        if (!matches) {
          return null;
        }
        val = parseFloat(matches[1]);
        unit = matches[2];
      }
      var font = this.font;

      var _parseFont2 = parseFont(font),
          style = _parseFont2.style,
          variant = _parseFont2.variant,
          weight = _parseFont2.weight,
          family = _parseFont2.family;

      var fontValue = style + ' ' + variant + ' ' + weight + ' ' + val + unit + ' ' + family;
      this.font = fontValue;
    },
    get: function get() {
      var font = this.font;

      var _parseFont3 = parseFont(font),
          size0 = _parseFont3.size0,
          unit = _parseFont3.unit;

      return '' + size0 + unit;
    }
  }, {
    key: 'fontFamily',
    set: function set(val) {
      if (val == null) val = 'Arial';
      var font = this.font;

      var _parseFont4 = parseFont(font),
          style = _parseFont4.style,
          variant = _parseFont4.variant,
          weight = _parseFont4.weight,
          size0 = _parseFont4.size0,
          unit = _parseFont4.unit;

      var fontValue = style + ' ' + variant + ' ' + weight + ' ' + size0 + unit + ' ' + val;
      this.font = fontValue;
    },
    get: function get() {
      return parseFont(this.font).family;
    }
  }, {
    key: 'fontStyle',
    set: function set(val) {
      if (val == null) val = 'normal';
      var font = this.font;

      var _parseFont5 = parseFont(font),
          variant = _parseFont5.variant,
          weight = _parseFont5.weight,
          size0 = _parseFont5.size0,
          unit = _parseFont5.unit,
          family = _parseFont5.family;

      var fontValue = val + ' ' + variant + ' ' + weight + ' ' + size0 + unit + ' ' + family;
      this.font = fontValue;
    },
    get: function get() {
      return parseFont(this.font).style;
    }
  }, {
    key: 'fontVariant',
    set: function set(val) {
      if (val == null) val = 'normal';
      var font = this.font;

      var _parseFont6 = parseFont(font),
          style = _parseFont6.style,
          weight = _parseFont6.weight,
          size0 = _parseFont6.size0,
          unit = _parseFont6.unit,
          family = _parseFont6.family;

      var fontValue = style + ' ' + val + ' ' + weight + ' ' + size0 + unit + ' ' + family;
      this.font = fontValue;
    },
    get: function get() {
      return parseFont(this.font).variant;
    }
  }, {
    key: 'fontWeight',
    set: function set(val) {
      if (val == null) val = 'normal';
      var font = this.font;

      var _parseFont7 = parseFont(font),
          style = _parseFont7.style,
          variant = _parseFont7.variant,
          size0 = _parseFont7.size0,
          unit = _parseFont7.unit,
          family = _parseFont7.family;

      var fontValue = style + ' ' + variant + ' ' + val + ' ' + size0 + unit + ' ' + family;
      this.font = fontValue;
    },
    get: function get() {
      return parseFont(this.font).weight;
    }
  }, {
    key: 'lineHeight',
    set: function set(val) {
      this.set('lineHeight', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'textAlign',
    set: function set(val) {
      this.set('textAlign', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.fillColor = val;
    },
    get: function get() {
      return this.fillColor;
    }
  }, {
    key: 'strokeColor',
    set: function set(val) {
      this.set('strokeColor', val);
    }
  }, {
    key: 'fillColor',
    set: function set(val) {
      this.set('fillColor', val);
    }
  }, {
    key: 'flexible',
    set: function set(val) {
      this.set('flexible', val);
    }
  }, {
    key: 'lineBreak',
    set: function set(val) {
      // normal, strict, none
      this.set('lineBreak', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'wordBreak',
    set: function set(val) {
      // normal | break-all | break-word | keep-all
      this.set('wordBreak', val);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'letterSpacing',
    set: function set(value) {
      if (typeof value === 'string') value = parseFloat(value);
      this.set('letterSpacing', value);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'textIndent',
    set: function set(value) {
      if (typeof value === 'string') value = parseFloat(value);
      this.set('textIndent', value);
      calculTextboxSize(this.subject);
    }
  }, {
    key: 'width',
    set: function set(val) {
      this.set('width', val);
      if (this.lineBreak !== '') calculTextboxSize(this.subject);
    }
  }, {
    key: 'layoutWidth',
    set: function set(val) {
      this.set('layoutWidth', val);
      if (this.lineBreak !== '') calculTextboxSize(this.subject);
    }
  }]);
  return LabelSpriteAttr;
}(_basesprite2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'text', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'font', [_utils.attr, _dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontSize', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontFamily', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontFamily'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontStyle', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontStyle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontVariant', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontVariant'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontWeight', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontWeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [_dec2, _utils.attr, _dec3], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [_utils.attr, _dec4], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textAlign'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_dec5, _utils.attr, _dec6], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_dec7, _utils.attr, _dec8], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [_utils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineBreak', [_utils.attr, _dec9], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wordBreak', [_utils.attr, _dec10], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'wordBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'letterSpacing', [_utils.attr, _dec11], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'letterSpacing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textIndent', [_utils.attr, _dec12], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textIndent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_utils.attr, _dec13], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_utils.attr, _dec14], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'layoutWidth'), _class.prototype)), _class));
var Label = (_class2 = (_temp = _class3 = function (_BaseSprite) {
  (0, _inherits3.default)(Label, _BaseSprite);

  function Label(attr) {
    (0, _classCallCheck3.default)(this, Label);

    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) !== 'object') {
      attr = { text: String(attr) };
    }
    return (0, _possibleConstructorReturn3.default)(this, (Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call(this, attr));
  }

  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render(t, drawingContext) {
      var _this3 = this;

      (0, _get3.default)(Label.prototype.__proto__ || (0, _getPrototypeOf2.default)(Label.prototype), 'render', this).call(this, t, drawingContext);

      var textAlign = this.attr('textAlign'),
          flexible = this.attr('flexible'),
          font = flexible ? this.flexibleFont : this.attr('font'),
          lineHeight = this.attr('lineHeight');

      var text = this.text;

      if (text) {
        var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
            w = _contentSize[0],
            h = _contentSize[1];

        if (!this[_outputText]) calculTextboxSize(this);
        text = this[_outputText] || this.text;

        if (this.textboxSize[0] > w || this.textboxSize[1] > h) {
          drawingContext.beginPath();
          drawingContext.rect(0, 0, w, h);
          drawingContext.clip();
        }
        drawingContext.font = font;
        var lines = text.split(/\n/);

        drawingContext.textBaseline = 'top';

        var align = textAlign;

        drawingContext.textBaseline = 'middle';

        var strokeColor = (0, _render.findColor)(drawingContext, this, 'strokeColor');
        if (strokeColor) {
          drawingContext.strokeStyle = strokeColor;
        }

        var fillColor = (0, _render.findColor)(drawingContext, this, 'fillColor');

        if (!strokeColor && !fillColor) {
          fillColor = (0, _utils.parseColorString)('black');
        }
        if (fillColor) {
          drawingContext.fillStyle = fillColor;
        }

        var top = 0;
        var width = this.contentSize[0];
        var letterSpacing = this.attr('letterSpacing'),
            textIndent = this.attr('textIndent');

        lines.forEach(function (line, idx) {
          var _measureText5 = measureText(_this3, line, font, lineHeight),
              _measureText6 = (0, _slicedToArray3.default)(_measureText5, 2),
              w = _measureText6[0],
              h = _measureText6[1];

          var left = 0;
          if (align === 'center') {
            left = (width - w) / 2;
          } else if (align === 'right') {
            left = width - w;
          }

          var indent = 0;
          if (textIndent && idx === 0 && align !== 'right') {
            indent = textIndent;
          }

          if (letterSpacing) {
            var l = left;[].concat((0, _toConsumableArray3.default)(line)).forEach(function (letter, i) {
              if (idx === 0 && i === 0) {
                l += indent;
              }
              if (fillColor) {
                drawingContext.fillText(letter, l, top + h / 2);
              }
              if (strokeColor) {
                drawingContext.strokeText(letter, l, top + h / 2);
              }
              l += measureText(_this3, letter, font)[0] + letterSpacing;
            });
          } else {
            if (fillColor) {
              drawingContext.fillText(line, left + indent, top + h / 2);
            }
            if (strokeColor) {
              drawingContext.strokeText(line, left + indent, top + h / 2);
            }
          }

          top += h;
        });
      }
    }
  }, {
    key: 'text',
    set: function set(val) {
      this.attr('text', val);
    },
    get: function get() {
      return this.attr('text');
    }
  }, {
    key: 'textboxSize',
    get: function get() {
      if (!this[_boxSize]) calculTextboxSize(this);
      return this[_boxSize];
    }
  }, {
    key: 'flexibleFont',
    get: function get() {
      var font = this.attr('font');
      if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
      var textboxSize = this.textboxSize,
          contentSize = this.contentSize;

      var _parseFont8 = parseFont(font),
          style = _parseFont8.style,
          variant = _parseFont8.variant,
          weight = _parseFont8.weight,
          size = _parseFont8.size,
          family = _parseFont8.family;

      size *= contentSize[0] / textboxSize[0];
      return style + ' ' + variant + ' ' + weight + ' ' + Math.floor(size) + 'px "' + family + '"';
    }

    // override to adapt content size

  }, {
    key: 'contentSize',
    get: function get() {
      var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
          width = _attrSize[0],
          height = _attrSize[1];

      if (width === '' || height === '') {
        var textboxSize = this.textboxSize;
        if (!textboxSize) return [0, 0];
        width = width || textboxSize[0];
        height = height || textboxSize[1];
      }

      if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
        height = Math.ceil(height * width / this.textboxSize[0]);
      }

      return [width, height];
    }
  }]);
  return Label;
}(_basesprite2.default), _class3.Attr = LabelSpriteAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [_utils.flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);
exports.default = Label;


(0, _nodetype.registerNodeType)('label', Label);
import {LineBreaker} from 'css-line-break';
import {parseValue, parseColorString, attr, flow, inherit} from './utils';
import BaseSprite from './basesprite';
import {registerNodeType} from './nodetype';

import {findColor} from './helpers/render';

const parseFont = require('./helpers/parse-font');
const _boxSize = Symbol('boxSize'),
  _outputText = Symbol('outputText');

const measureText = (node, text, font, lineHeight = '') => {
  const ctx = node.context;
  if(!ctx) {
    return [0, 0];
  }
  ctx.save();
  ctx.font = font;
  let {width} = ctx.measureText(text);
  ctx.restore();

  const letterSpacing = node.attr('letterSpacing');
  if(letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  const {size} = parseFont(font);
  const height = lineHeight || size * 1.2;

  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if(!node.context) return '';
  const text = node.text,
    font = node.attr('font'),
    lineHeight = node.attr('lineHeight'),
    textIndent = node.attr('textIndent');

  let lines = [];
  let width = 0,
    height = 0;

  node[_outputText] = text;
  const lineBreak = node.attr('lineBreak'),
    textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if(lineBreak !== '' && textboxWidth !== '') {
    const wordBreak = node.attr('wordBreak');

    text.split(/\n/).forEach((line) => {
      const breaker = LineBreaker(line, {lineBreak, wordBreak});
      const words = [];
      let bk = breaker.next();
      while(!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }
      let l = '';
      words.forEach((word) => {
        if(!l) {
          l = word;
        } else {
          const ll = `${l}${word}`;
          const [w] = measureText(node, ll, font);
          if(w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
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

  lines.forEach((line, idx) => {
    let [w, h] = measureText(node, line, font, lineHeight);
    if(idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });

  const boxSize = node[_boxSize];
  if(!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    const attrSize = node.attrSize;
    if(attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
    }
  }
  node[_boxSize] = [width, height];
}

class LabelSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      font: 'normal normal normal 16px Arial',
      textAlign: 'left',
      strokeColor: '',
      fillColor: '',
      lineHeight: '',
      text: '',
      flexible: false,
      lineBreak: '',
      wordBreak: 'normal',
      letterSpacing: 0,
      textIndent: 0,
    }, {
      color() {
        return this.fillColor;
      },
    });
  }

  @attr
  set text(val) {
    this.clearCache();
    val = String(val);
    this.set('text', val);
    calculTextboxSize(this.subject);
  }

  @inherit('normal normal normal 16px Arial')
  @attr
  set font(val) {
    this.clearCache();
    this.set('font', val);
    calculTextboxSize(this.subject);
  }

  @attr
  set fontSize(val) {
    if(val == null) val = '16px';
    let unit = 'px';
    if(typeof val === 'string') {
      const unitReg = /^(\d+)(\w+)/;
      const matches = val.match(unitReg);
      if(!matches) {
        return null;
      }
      val = parseInt(matches[1], 10);
      unit = matches[2];
    }
    const font = this.font;
    const {style, variant, weight, family} = parseFont(font);
    const fontValue = `${style} ${variant} ${weight} ${val}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontSize() {
    const font = this.font;
    const {size, unit} = parseFont(font);
    return `${size}${unit}`;
  }

  @attr
  set fontFamily(val) {
    if(val == null) val = 'Arial';
    const font = this.font;
    const {style, variant, weight, size, unit} = parseFont(font);
    const fontValue = `${style} ${variant} ${weight} ${size}${unit} ${val}`;
    this.font = fontValue;
  }

  get fontFamily() {
    return parseFont(this.font).family;
  }

  @attr
  set fontStyle(val) {
    if(val == null) val = 'normal';
    const font = this.font;
    const {variant, weight, size, unit, family} = parseFont(font);
    const fontValue = `${val} ${variant} ${weight} ${size}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontStyle() {
    return parseFont(this.font).style;
  }

  @attr
  set fontVariant(val) {
    if(val == null) val = 'normal';
    const font = this.font;
    const {style, weight, size, unit, family} = parseFont(font);
    const fontValue = `${style} ${val} ${weight} ${size}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontVariant() {
    return parseFont(this.font).variant;
  }

  @attr
  set fontWeight(val) {
    if(val == null) val = 'normal';
    const font = this.font;
    const {style, variant, size, unit, family} = parseFont(font);
    const fontValue = `${style} ${variant} ${val} ${size}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontWeight() {
    return parseFont(this.font).weight;
  }

  @parseValue(parseFloat)
  @attr
  set lineHeight(val) {
    this.clearCache();
    this.set('lineHeight', val);
    calculTextboxSize(this.subject);
  }

  @attr
  set textAlign(val) {
    this.clearCache();
    this.set('textAlign', val);
    calculTextboxSize(this.subject);
  }

  @attr
  set color(val) {
    this.fillColor = val;
  }

  @inherit('')
  @parseValue(parseColorString)
  @attr
  set strokeColor(val) {
    this.clearCache();
    this.set('strokeColor', val);
  }

  @inherit('')
  @parseValue(parseColorString)
  @attr
  set fillColor(val) {
    this.clearCache();
    this.set('fillColor', val);
  }

  @attr
  set flexible(val) {
    this.clearCache();
    this.set('flexible', val);
  }

  @inherit('')
  @attr
  set lineBreak(val) { // normal, strict, none
    this.clearCache();
    this.set('lineBreak', val);
    calculTextboxSize(this.subject);
  }

  @inherit('')
  @attr
  set wordBreak(val) { // normal | break-all | break-word | keep-all
    this.clearCache();
    this.set('wordBreak', val);
    calculTextboxSize(this.subject);
  }

  @inherit('')
  @attr
  set letterSpacing(value) {
    if(typeof value === 'string') value = parseFloat(value);
    this.clearCache();
    this.set('letterSpacing', value);
    calculTextboxSize(this.subject);
  }

  @inherit('')
  @attr
  set textIndent(value) {
    if(typeof value === 'string') value = parseFloat(value);
    this.clearCache();
    this.set('textIndent', value);
    calculTextboxSize(this.subject);
  }

  @attr
  set width(val) {
    if(this.lineBreak !== '') calculTextboxSize(this.subject);
    super.width = val;
  }

  @attr
  set layoutWidth(val) {
    if(this.lineBreak !== '') calculTextboxSize(this.subject);
    super.layoutWidth = val;
  }
}

export default class Label extends BaseSprite {
  static Attr = LabelSpriteAttr

  constructor(attr) {
    if(typeof attr === 'string') {
      attr = {text: attr};
    }
    super(attr);
  }

  set text(val) {
    this.attr('text', val);
  }

  get text() {
    return this.attr('text');
  }

  get textboxSize() {
    if(!this[_boxSize]) calculTextboxSize(this);
    return this[_boxSize];
  }

  get flexibleFont() {
    const font = this.attr('font');
    if(this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
    const textboxSize = this.textboxSize,
      contentSize = this.contentSize;
    let {style, variant, weight, size, family} = parseFont(font);
    size *= contentSize[0] / textboxSize[0];
    return `${style} ${variant} ${weight} ${Math.floor(size)}px "${family}"`;
  }

  // override to adapt content size
  @flow
  get contentSize() {
    let [width, height] = this.attrSize;

    if(width === '' || height === '') {
      const textboxSize = this.textboxSize;
      if(!textboxSize) return [0, 0];
      width = width || textboxSize[0];
      height = height || textboxSize[1];
    }

    if(this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
      height = Math.ceil(height * width / this.textboxSize[0]);
    }

    return [width, height];
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);

    const textAlign = this.attr('textAlign'),
      flexible = this.attr('flexible'),
      font = flexible ? this.flexibleFont : this.attr('font'),
      lineHeight = this.attr('lineHeight');

    let text = this.text;

    if(text) {
      const [w, h] = this.contentSize;
      if(!this[_outputText]) calculTextboxSize(this);
      text = this[_outputText] || this.text;

      if(this.textboxSize[0] > w
        || this.textboxSize[1] > h) {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, w, h);
        drawingContext.clip();
      }
      drawingContext.font = font;
      const lines = text.split(/\n/);

      drawingContext.textBaseline = 'top';

      const align = textAlign;

      drawingContext.textBaseline = 'middle';

      const strokeColor = findColor(drawingContext, this, 'strokeColor');
      if(strokeColor) {
        drawingContext.strokeStyle = strokeColor;
      }

      let fillColor = findColor(drawingContext, this, 'fillColor');

      if(!strokeColor && !fillColor) {
        fillColor = parseColorString('black');
      }
      if(fillColor) {
        drawingContext.fillStyle = fillColor;
      }

      let top = 0;
      const width = this.contentSize[0];
      const letterSpacing = this.attr('letterSpacing'),
        textIndent = this.attr('textIndent');

      lines.forEach((line, idx) => {
        const [w, h] = measureText(this, line, font, lineHeight);

        let left = 0;
        if(align === 'center') {
          left = (width - w) / 2;
        } else if(align === 'right') {
          left = width - w;
        }

        let indent = 0;
        if(textIndent && idx === 0 && align !== 'right') {
          indent = textIndent;
        }

        if(letterSpacing) {
          let l = left
          ;[...line].forEach((letter, i) => {
            if(idx === 0 && i === 0) {
              l += indent;
            }
            if(fillColor) {
              drawingContext.fillText(letter, l, top + h / 2);
            }
            if(strokeColor) {
              drawingContext.strokeText(letter, l, top + h / 2);
            }
            l += measureText(this, letter, font)[0] + letterSpacing;
          });
        } else {
          if(fillColor) {
            drawingContext.fillText(line, left + indent, top + h / 2);
          }
          if(strokeColor) {
            drawingContext.strokeText(line, left + indent, top + h / 2);
          }
        }

        top += h;
      });
    }
  }
}

registerNodeType('label', Label);

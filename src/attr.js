import {attr, deprecate, attributeNames, relatedAttributes, parseValue} from './utils';

const _attr = Symbol('attr'),
  _style = Symbol('style'),
  _temp = Symbol('store'),
  _subject = Symbol('subject'),
  _default = Symbol('default');

export default class Attr {
  static relatedAttributes = relatedAttributes;

  static attributeNames = attributeNames;

  static attrDefaultValues = {};

  constructor(subject) {
    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_style] = {};

    this[_temp] = new Map(); // save non-serialized values

    Object.defineProperty(this, '__attributesSet', {
      value: new Set(),
    });
    Object.defineProperty(this, '__styleTag', {
      writable: true,
      value: false,
    });
    Object.defineProperty(this, '__updateTag', {
      writable: true,
      value: false,
    });

    this.setDefault(Attr.attrDefaultValues);
  }

  get __attr() {
    return this[_attr];
  }

  setDefault(attrs) {
    Object.assign(this[_default], attrs);
    Object.assign(this[_attr], attrs);
  }

  setAttrIndex(key, val, idx) {
    if(val == null) val = this[_default][key][idx];
    const arr = this.get(key);
    arr[idx] = val;
    this.set(key, arr);
  }

  saveObj(key, val) {
    this[_temp].set(key, val);
    this.__updateTag = true;
  }

  loadObj(key) {
    return this[_temp].get(key);
  }

  quietSet(key, val) {
    this.set(key, val, true);
  }

  clearStyle() {
    this[_style] = {};
  }

  clearFlow() {
    this.__reflowTag = true;
    return this;
  }

  clearLayout() {
    this.__clearLayout = true;
    return this;
  }

  get style() {
    return this[_style];
  }

  set(key, val, isQuiet = false) {
    this.__quietTag = isQuiet;
    let oldVal;
    if(isQuiet && key.length > 5 && key.indexOf('data-') === 0) {
      const dataKey = key.slice(5);
      oldVal = this.subject.data(dataKey);
      this.subject.data(dataKey, val);
    } else {
      if(!this.__styleTag && val != null) {
        this.__attributesSet.add(key);
      }
      if(!this.__styleTag && val == null) {
        val = this[_default][key];
        if(this.__attributesSet.has(key)) {
          this.__attributesSet.delete(key);
        }
      }
      if(this.__styleTag) {
        oldVal = this[_style][key];
        if(val != null) {
          this[_style][key] = val;
        } else {
          delete this[_style][key];
        }
      } else {
        oldVal = this[_attr][key];
      }
    }
    if(typeof val === 'object') {
      if(oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
        return false;
      }
    } else if(oldVal === val) {
      return false;
    }
    if(!this.__styleTag) {
      this[_attr][key] = val;
    }
    this.__updateTag = true;
    return true;
  }

  get(key) {
    if(key.length > 5 && key.indexOf('data-') === 0) {
      return this.subject.data(key.slice(5));
    }
    if(this.__getStyleTag || this[_style][key] != null && !this.__attributesSet.has(key)) {
      return this[_style][key];
    }
    return this[_attr][key];
  }

  getAttributes() {
    const ret = {};
    [...attributeNames].forEach((key) => {
      if(key in this) {
        ret[key] = this[key];
      }
    });
    [...this.__attributesSet].forEach((key) => {
      if(typeof key === 'string' && key.indexOf('__internal') !== 0) {
        ret[key] = this[key];
      }
    });
    Object.entries(this).forEach(([key, value]) => {
      if(key.indexOf('__') !== 0) {
        ret[key] = value;
      }
    });
    return ret;
  }

  get attrs() {
    return this.getAttributes();
  }

  @deprecate('You can remove this call.')
  clearCache() {
    return this;
  }

  merge(attrs) {
    if(typeof attrs === 'string') {
      attrs = JSON.parse(attrs);
    }
    return this;
  }

  serialize() {
    const attrs = this.getAttributes();
    delete attrs.id;
    return JSON.stringify(attrs);
  }

  get subject() {
    return this[_subject];
  }

  /* ------------------- define attributes ----------------------- */
  // @attr({quiet, cache, reflow, relayout, override})
  @parseValue(String)
  @attr({quiet: true})
  id;

  @parseValue(String)
  @attr({quiet: true})
  name;

  @parseValue(String)
  @attr({quiet: true})
  class;
}

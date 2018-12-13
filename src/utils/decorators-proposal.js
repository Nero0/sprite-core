import {notice} from './utils';

const _attrAbsolute = Symbol('attrAbsolute');

function getPV(subject, relative) {
  let parent = subject.parent;
  let pv = null;
  if(parent) {
    let attrSize = parent.attrSize;
    if(attrSize) {
      const attrV = relative === 'pw' ? attrSize[0] : attrSize[1];
      while(attrSize && attrV === '') { // flexible value
        parent = parent.parent;
        attrSize = parent.attrSize;
      }
    }
    if(relative === 'pw') {
      pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
    } else if(relative === 'ph') {
      pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
    }
  }
  return pv;
}

export function attr(elementDescriptor) {
  const {descriptor, key} = elementDescriptor;
  let _getter = descriptor.get;
  if(!_getter) {
    _getter = function () {
      return this.get(key);
    };
  }
  if(!descriptor.__relative && !descriptor.__inherit) {
    descriptor.get = function () {
      let ret = _getter.call(this);
      if(ret == null) {
        ret = this.get(key);
      }
      return ret;
    };
  } else if(descriptor.__relative) {
    // enable set default to user defined getter
    descriptor.get = function () {
      let ret = _getter.call(this);
      const subject = this.subject;

      if(ret == null) {
        ret = this.get(key);
      } else if(ret.relative) {
        const relative = ret.relative.trim();
        if(relative === 'pw' || relative === 'ph') {
          const pv = getPV(subject, relative);
          if(pv !== ret.pv) {
            this[key] = ret.rv;
            return this[key];
          }
          subject.cache = null;
          if(subject[_attrAbsolute]) {
            return pv * ret.v;
          }
          return ret.rv;
        }
        if(relative === 'rw' || relative === 'rh') {
          const layer = subject.layer;
          let pv = null;
          if(layer) {
            if(relative === 'rw') {
              pv = layer.resolution[0];
            } else if(relative === 'rh') {
              pv = layer.resolution[1];
            }
          }
          if(pv !== ret.pv) {
            this[key] = ret.rv;
            return this[key];
          }
          subject.cache = null;
          if(subject[_attrAbsolute]) {
            return pv * ret.v;
          }
          return ret.rv;
        }
      }
      return ret;
    };
  } else {
    // enable set default to user defined getter
    descriptor.get = function () {
      let ret = _getter.call(this);
      const subject = this.subject;

      if(ret == null) {
        ret = this.get(key);
      } else if(ret === 'inherit') {
        let value = null;
        let parent = subject.parent;
        while(parent && parent.attr) {
          value = parent.attr(key);
          if(value != null) break;
          parent = parent.parent;
        }
        return value != null ? value : this.__inheritDefaults[key];
      }
      return ret;
    };
  }

  const _setter = descriptor.set;
  const _clearCache = !descriptor.__cachable;

  descriptor.set = function (val) {
    const subject = this.subject;
    this.__updateTag = false;
    this.__reflowTag = false;
    this.__clearLayout = false;
    _setter.call(this, val);
    if(subject && subject.hasLayout) {
      const offsetSize = subject.boxOffsetSize,
        layoutSize = subject.__lastLayout;

      if(this.__clearLayout || !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        subject.clearLayout();
      }
      subject.__lastLayout = offsetSize;
    }
    if(this.subject && this.__updateTag) {
      subject.forceUpdate(_clearCache);
      if(this.__reflowTag) {
        subject.reflow();
      }
    }
    // delete this.__reflowTag;
    // delete this.__updateTag;
  };
  return {
    ...elementDescriptor,
  };
}

// after attr
export function cachable(elementDescriptor) {
  const {descriptor} = elementDescriptor;
  descriptor.__cachable = true;
  return {...elementDescriptor};
}

export const inheritAttributes = new Set();

// after attr
export function inherit(defaultValue = '') {
  return function (elementDescriptor) {
    const {descriptor, key} = elementDescriptor;
    descriptor.__inherit = true;
    inheritAttributes.add(key);
    return {
      ...elementDescriptor,
      finisher({prototype: proto}) {
        if(!proto.hasOwnProperty('__inheritDefaults')) { // eslint-disable-line no-prototype-builtins
          proto.__inheritDefaults = {...(proto.__inheritDefaults || {})};
        }
        proto.__inheritDefaults[key] = defaultValue;
      },
    };
  };
}

// after attr
// relative -> width | height
export function relative(type = 'width') {
  return function (elementDescriptor) {
    const {descriptor} = elementDescriptor;
    if(descriptor.set) {
      const setter = descriptor.set;
      descriptor.__relative = true;

      descriptor.set = function (val) {
        if(typeof val === 'string') {
          val = val.trim();
          if(val.slice(-1) === '%') {
            const relative = type === 'width' ? 'pw' : 'ph';
            const pv = getPV(this.subject, relative);
            val = {
              relative,
              pv,
              v: parseFloat(val) / 100,
              rv: val,
            };
          } else {
            const relative = val.slice(-2);
            if(relative === 'rw' || relative === 'rh') {
              let pv = null;
              const layer = this.subject.layer;
              if(layer) {
                pv = layer.resolution[relative === 'rw' ? 0 : 1];
              }
              val = {
                relative,
                pv,
                v: parseFloat(val) / 100,
                rv: val,
              };
            } else {
              val = val ? parseFloat(val) : val;
            }
          }
        }
        setter.call(this, val);
      };
      return {...elementDescriptor};
    }
  };
}

export function flow(elementDescriptor) {
  const {descriptor, key} = elementDescriptor;
  if(descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      let ret = this.flow(key);
      if(ret === undefined) {
        ret = _getter.call(this);
        this.flow(key, ret);
      }
      return ret;
    };
  }
  return {...elementDescriptor};
}

// set tag force to get absolute value from relative attributes
export function absolute(elementDescriptor) {
  const {descriptor} = elementDescriptor;
  if(descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      this[_attrAbsolute] = true;
      const ret = _getter.call(this);
      this[_attrAbsolute] = false;
      return ret;
    };
  }
  return {...elementDescriptor};
}

export function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`;
  notice(msg);
}

export function deprecate(msg, apiName = '') {
  return function (elementDescriptor) {
    const {descriptor, key} = elementDescriptor;
    apiName = apiName || `Method ${key}`;
    if(typeof descriptor.value === 'function') {
      const func = descriptor.value;
      descriptor.value = function (...args) {
        setDeprecation(apiName, msg);
        return func.apply(this, args);
      };
    }
    if(descriptor.set) {
      const setter = descriptor.set;
      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }
    if(descriptor.get) {
      const getter = descriptor.get;
      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }
    return {...elementDescriptor};
  };
}

// before attr
export function parseValue(...parsers) {
  return function (elementDescriptor) {
    const {descriptor} = elementDescriptor;
    const setter = descriptor.set;

    descriptor.set = function (val) {
      if(val != null && val !== '' && val !== 'inherit') {
        val = parsers.reduce((v, parser) => parser(v), val);
      }
      setter.call(this, val);
    };

    return {...elementDescriptor};
  };
}

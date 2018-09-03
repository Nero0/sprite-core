import {notice} from './utils';

const _attrAbsolute = Symbol('attrAbsolute');

export function attr(target, prop, descriptor) {
  target.__attributeNames = target.__attributeNames || new Set();
  target.__attributeNames.add(prop);
  let _getter = descriptor.get;
  if(!_getter) {
    _getter = function () {
      return this.get(prop);
    };
  }
  if(!target.__relative && !target.__inherit) {
    descriptor.get = function () {
      let ret = _getter.call(this);
      if(ret == null) {
        ret = this.get(prop);
      }
      return ret;
    };
  } else if(target.__relative) {
    delete target.__relative;
    // enable set default to user defined getter
    descriptor.get = function () {
      let ret = _getter.call(this);
      const subject = this.subject;

      if(ret == null) {
        ret = this.get(prop);
      } else if(ret.relative) {
        const relative = ret.relative.trim();
        if(relative === 'pw' || relative === 'ph') {
          const parent = subject.parent;
          let pv = null;
          if(parent) {
            if(relative === 'pw') {
              pv = parent.contentSize != null ? parent.contentSize[0] : parent.resolution[0];
            } else if(relative === 'ph') {
              pv = parent.contentSize != null ? parent.contentSize[1] : parent.resolution[1];
            }
          }
          if(pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
          }
          subject.clearCache();
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
            this[prop] = ret.rv;
            return this[prop];
          }
          subject.clearCache();
          if(subject[_attrAbsolute]) {
            return pv * ret.v;
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
      let ret = _getter.call(this);
      const subject = this.subject;

      if(ret == null) {
        ret = this.get(prop);
      } else if(ret.inherit) {
        const parent = subject.parent;
        const pv = parent ? parent.attr(prop) : ret.pv;
        if(pv !== ret.pv) {
          this[prop] = 'inherit';
          return this[prop];
        }
        subject.clearCache();
        return ret.pv;
      }
      return ret;
    };
  }

  const _setter = descriptor.set;
  descriptor.set = function (val) {
    const subject = this.subject;
    this.__clearCacheTag = false;
    this.__updateTag = false;
    this.__reflowTag = false;
    _setter.call(this, val);
    if(subject && subject.hasLayout) {
      const offsetSize = subject.boxOffsetSize,
        layoutSize = subject.__lastLayout;

      if(!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        subject.parent.clearLayout();
      }
      subject.__lastLayout = offsetSize;
    }
    if(this.subject && this.__updateTag) {
      subject.forceUpdate(this.__clearCacheTag);
      if(this.__reflowTag) {
        subject.reflow();
      }
    }
    // delete this.__reflowTag;
    // delete this.__updateTag;
    // delete this.__clearCacheTag;
  };
  return descriptor;
}

export function inherit(defaultValue = '') {
  return function (target, prop, descriptor) {
    if(descriptor.set) {
      const setter = descriptor.set;
      target.__inherit = true;

      descriptor.set = function (val) {
        if(typeof val === 'string') {
          val = val.trim();
          if(val === 'inherit') {
            const parent = this.subject.parent;
            let pv = parent ? parent.attr(prop) : defaultValue;
            if(pv === 'inherit') pv = defaultValue;
            val = {
              inherit: true,
              pv,
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
export function relative(type = 'width') {
  return function (target, prop, descriptor) {
    if(descriptor.set) {
      const setter = descriptor.set;
      target.__relative = true;

      descriptor.set = function (val) {
        if(typeof val === 'string') {
          val = val.trim();
          if(val.endsWith('%')) {
            const parent = this.subject.parent;
            let pv = null;
            if(parent) {
              if(type === 'width') {
                pv = parent.contentSize != null ? parent.contentSize[0] : parent.resolution[0];
              } else if(type === 'height') {
                pv = parent.contentSize != null ? parent.contentSize[1] : parent.resolution[1];
              }
            }
            val = {
              relative: type === 'width' ? 'pw' : 'ph',
              pv,
              v: parseFloat(val) / 100,
              rv: val,
            };
          } else if(val.endsWith('rw')) {
            const layer = this.subject.layer;
            let pv = null;
            if(layer) {
              pv = layer.resolution[0];
            }
            val = {
              relative: 'rw',
              pv,
              v: parseFloat(val) / 100,
              rv: val,
            };
          } else if(val.endsWith('rh')) {
            const layer = this.subject.layer;
            let pv = null;
            if(layer) {
              pv = layer.resolution[1];
            }
            val = {
              relative: 'rh',
              pv,
              v: parseFloat(val) / 100,
              rv: val,
            };
          }
        } else {
          val = val ? parseFloat(val) : val;
        }
        setter.call(this, val);
      };
      descriptor.set.__relative = true;
      return descriptor;
    }
  };
}

export function flow(target, prop, descriptor) {
  if(descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      let ret = this.flow(prop);
      if(ret === undefined) {
        ret = _getter.call(this);
        this.flow(prop, ret);
      }
      return ret;
    };
  }
  return descriptor;
}

export function absolute(target, prop, descriptor) {
  if(descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      this[_attrAbsolute] = true;
      const ret = _getter.call(this);
      this[_attrAbsolute] = false;
      return ret;
    };
  }
  return descriptor;
}

export function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`;
  notice(msg);
}

export function deprecate(...args) {
  let msg = '',
    apiName = '';
  function decorator(target, prop, descriptor) {
    apiName = apiName || `${target.constructor.name}#${prop}`;
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
  }
  if(args.length === 1) {
    msg = args[0];
    return decorator;
  }
  if(args.length === 2) {
    apiName = args[0];
    msg = args[1];
    return decorator;
  }
  return decorator(...args);
}

export function parseValue(...parsers) {
  return function (target, prop, descriptor) {
    const setter = descriptor.set;

    descriptor.set = function (val) {
      val = parsers.reduce((v, parser) => parser(v), val);
      setter.call(this, val);
    };

    return descriptor;
  };
}

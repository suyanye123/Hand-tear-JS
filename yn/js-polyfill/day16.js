//debounce trottle
function debounce(fn, wait) {
  let timer = null;
  return function (e) {
    if (timer !== null) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.call(this, e);
        timer = null;
      }, wait);
    }
  };
}
function trottle(cb, wait) {
  let start = 0;
  return function (e) {
    let now = Date.now();
    if (now - start >= wait) {
      cb.call(this, e);
      now = start;
    }
  };
}
//map reduce filter find findIndex every some
function map(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    result.push(res);
  }
  return result;
}
function reduce(arr, cb, initValue) {
  let result = initValue;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i]);
  }
  return result;
}
function filter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (res) {
      result.push(arr[i]);
    }
  }
  return result;
}
function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i]);
    if (res) {
      return arr[i];
    }
  }
  return undefined;
}
function findIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (res) {
      return i;
    }
  }
  return -1;
}
function every(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i]);
    if (!res) {
      return false;
    }
  }
  return true;
}
function some(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i]);
    if (res) {
      return true;
    }
  }
  return false;
}
//call apply bind
function call(fn, obj, ...args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function apply(fn, obj, args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function bind(fn, obj, ...args) {
  return function (...args2) {
    return call(fn, obj, ...args, ...args2);
  };
}
//clone1 clone2
function clone1(target) {
  if (typeof target == "object" && target !== null) {
    let res = Array.isArray(target);
    if (res) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}
function clone2(target) {
  if (typeof target == "object" && target !== null) {
    let result = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
    return result;
  } else {
    return target;
  }
}
//concat slice
function concat(arr, ...args) {
  args.forEach((item) => {
    if (Array.isArray(item)) {
      arr = [...arr, ...item];
    } else {
      arr = [...arr, item];
    }
  });
  return arr;
}

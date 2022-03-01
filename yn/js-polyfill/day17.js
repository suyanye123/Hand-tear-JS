//debounce trottle
function debounce(cb, wait) {
  let timer = null;
  return function (arg) {
    if (timer !== null) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        cb.call(this, arg);
        timer = null;
      }, wait);
    }
  };
}
function trottle(cb, wait) {
  let start = 0;
  return function (arg) {
    let now = Date.now();
    if (now - start >= wait) {
      cb.call(this, arg);
      start = now;
    }
  };
}
//call apply bind
function call(fn, obj, ...arg) {
  if (obj == undefined || obj == null) {
    obj = globalThis;
  }
  obj.tmp = fn;
  let result = obj.tmp(...arg);
  delete obj.tmp;
  return result;
}
function bind(fn, obj, ...args) {
  return function (...args2) {
    return call(fn, obj, ...args, ...args2);
  };
}
//map reduce filter
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
    result = cb(result, cb(arr[i]));
  }
  return result;
}

//clone1 clone2 concat slice
function clone1(target) {
  if (typeof target == "object" && typeof target !== null) {
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

function clone2(target) {
  if (typeof target == "object" && typeof target !== null) {
    let result = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
  } else {
    return target;
  }
}
function concat(arr, ...args) {
  args.forEach((item) => {
    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      arr.push(item);
    }
  });
}

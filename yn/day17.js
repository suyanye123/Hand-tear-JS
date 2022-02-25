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
  for (let i = 0; i < arr.length; i++) {}
}

//clone1 clone2 concat slice

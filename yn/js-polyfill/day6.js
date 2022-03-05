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
function trottle(fn, wait) {
  let start = 0;
  return function (e) {
    let now = Date.now();
    if (start - now >= wait) {
      fn.call(this, e);
      now = start;
    }
  };
}
//call apply bind
function call(fn, obj, ...args) {
  if (obj === null || obj === undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function apply(fn, obj, args) {
  if (obj === null || obj === undefined) {
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
//map reduce filter
function map(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i));
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
//接受一个数组，返回符合筛选条件的数组,cb是否能接受index参数？
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
//set去重
function unique(arr) {
  let set = new Set(arr);
  return [...set];
}

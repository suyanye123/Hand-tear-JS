//debounce trottle
function debounce(cb, wait) {
  let timer = null;
  return function (e) {
    if (timer !== null) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        cb.call(this, e);
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
function filter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (res) {
      result.push(arr[i]);
    }
  }
}
//find findIndex every some
//返回index 如果没有找到则返回-1
function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
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
//每个都执行成功
function every(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (!res) {
      return false;
    }
  }
  return true;
}
function some(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (res) {
      return true;
    }
  }
  return false;
}
//set
function unique(arr) {
  return [...new Set(arr)];
}

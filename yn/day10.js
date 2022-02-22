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
      start = now;
    }
  };
}
//call apply bind
function call(fn, obj, ...args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let r = obj.temp(...args);
  delete obj.temp;
  return r;
}
function apply(fn, obj, args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.t = fn;
  let r = obj.t;
  delete obj.t;
  return r;
}
function bind(fn, obj, ...args) {
  return function (...args2) {
    return call(fn, obj, ...args, ...args2);
  };
}

//map reduce filter find findIndex every some
function map(arr, cb) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    r.push(cb(arr[i], i));
  }
  return r;
}
function reduce(arr, cb, initValue) {
  let r = initValue;
  for (let i = 0; i < arr.length; i++) {
    r = cb(r, arr[i]);
  }
  return r;
}
function filter(arr, cb) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i]);
    if (res) {
      r.push(arr[i]);
    }
  }
  return r;
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

//debounce trottle
function debonuce(fn, wait) {
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
    if (now - start >= wait) {
      fn.call(this, e);
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
//map reduce filter every some find findIndex
function map(arr, cb) {}
//clone1 clone2

//unique1

//slice  concat

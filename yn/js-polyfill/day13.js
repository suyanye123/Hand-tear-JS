// debounce trottle
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
    if (now - start >= wait) {
      fn.call(this, e);
      start = now;
    }
  };
}

//call apply bind
function call(fn, obj, ...args) {
  if (obj == nill || obj == undefined) {
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
//set
function unique(arr) {
  return [...new Set(arr)];
}
//clone1 clone2
function clone1(target) {
  if (typeof target == "object" && target !== null) {
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
  if (typeof target == "object" && target !== null) {
    let result = Array.isArray(target) ? [] : {};
    for (let item in target) {
      // 如果是对象
      if (target.hasOwnproperty(item)) {
        result[item] = target[item];
      }
    }
  } else {
    return target;
  }
}

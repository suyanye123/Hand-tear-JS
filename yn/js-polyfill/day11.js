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
function trottle(cb, e) {
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
  if (obj == null || ob == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function apply(fn, obj, args) {
  if (obj == null || undefined) {
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

//map reduce filter find findIndex some every
function map(arr, cb) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i], i));
  }
  return res;
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
function some(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i);
    if (res) {
      return true;
    }
  }
  return false;
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
//set
function unique(arr) {
  return [...new Set(arr)];
}
//clone1 clone2 浅拷贝 第一种... 第二种for in  (for of只能遍历有迭代器的结构，对象没有迭代器)
function clone1(target) {
  //判断 target种类
  //如果是引用类型，且不为null
  if (typeof target == "object" || target !== null) {
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  }
  //如果是常量，直接返回
  else {
    return target;
  }
}
function clone2(target) {
  if (typeof target == "object" || target !== null) {
    let res = Array.isArray(target) ? [] : {};
    // 但是 for in 会遍历到对象原型链上的key
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        res[key] = target[key];
      }
    }
    return res;
  } else {
    return target;
  }
}

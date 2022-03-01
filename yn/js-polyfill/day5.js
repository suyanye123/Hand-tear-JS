//防抖 节流
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
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function apply(fn, obj, args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...agrs);
  delete obj.temp;
  return result;
}
// 返回一个改变this的函数，不执行
function bind(fn, obj, ...args) {
  return function (...args2) {
    return call(fn, obj, ...args, ...args2);
  };
}
//map reduce  数组遍历
function map(arr, cb) {
  //返回数组
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 回调函数接收两个参数，item和index
    result.push(cb(arr[i], i));
  }
  return result;
}
function reduce(arr, cb, initValue) {
  //返回一个最终计算值
  let result = initValue;
  for (let i = 0; i < arr.length; i++) {
    // 回调函数接收两个值 callback(res,value) res为每次上次计算的结果，value为将要处理的数值
    result = cb(result, arr[i]);
  }
  return result;
}
//去重
function unique(arr) {
  let set = new Set(arr);
  return [...set];
}

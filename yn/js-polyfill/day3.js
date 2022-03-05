//节流
function trottle(cb, wait) {
  let start = 0;
  return function (e) {
    let now = Date.now();
    if (start - now >= wait) {
      cb.call(this, e);
      start = now;
    }
  };
}
// 防抖
function debounce(cb, wait) {
  let timer = null;
  return function (e) {
    if (timer !== null) {
      clearTimeout(timer);
    } else {
      setTimeout(() => {
        cb.call(this, e);
        timer = null;
      }, wait);
    }
  };
}
//call模拟
function call(fn, obj, ...args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
//数组去重 map
function unique(arr) {
  let map = new Map(arr);
  let result = [...map];
  return result;
}

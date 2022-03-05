//call,bind,apply 的区别

//call和apply都是在调用函数时改变this的指向, bind是产生新的函数并绑定this;

//call和apply的区别是:第一个参数都是要绑定的this,但是 apply第二个参数(函数的参数)为数组,call是多个的;

// 节流
function trottle(callback, wait) {
  let start = 0;
  return function (e) {
    let now = Date.now();
    // 如果没触发
    if (now - start >= wait) {
      this.call(callback, this);
      start = now;
    }
  };
}

//防抖
function debounce(callback, wait) {
  let timer;
  return function (e) {
    if (!timer) {
      timer = setTimeout(() => {
        this.call(callback, this);
        timer = null;
      }, wait);
    } else {
      clearTimeout(timer);
    }
  };
}

//call
function call(fn, obj, ...args) {
  if (obj == null || obj == undefined) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}

//结果 防抖节流错误，call正确

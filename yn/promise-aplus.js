//promise code
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
function resolvePromise(promise2, x, resolve, reject) {
  //promise不能循环调用，判断x值不是promis2自己
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 引用数据类型？
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    let called;
    try {
      const then = x.then;
      if (typeof then !== "function") {
        resolve(x);
      } else {
        then.call(
          x,
          (value) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, value, resolve, reject);
          },
          (reason) => {
            if (called) return;
            called = true;
            reject(reason);
          }
        );
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  }
  //常量
  else {
    resolve(x);
  }
}
class PromiseA {
  //eg ze cuter
  constructor(executor) {
    if (typeof executor !== "function") {
      return new TypeError(`Promise resolver ${executor} is not a function`);
    }
    this.state = PENDING;
    //promise解决时传递给解决回调的值
    this.value = null;
    //promise被拒绝时传递给解决回调的值
    this.reason = null;
    this.onFulfilledCB = [];
    this.onRejectedCB = [];
    //成功的一系列操作
    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCB.forEach((fn) => fn());
      }
    };
    //失败的一系列操作
    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCB.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = (value) => value;
    }
    if (typeof onRejected !== "function") {
      onRejected = (err) => {
        throw err;
      };
    }

    //返回一个新的promise
    let promise2 = new PromiseA((resolve, reject) => {
      //只执行一次
      if (this.state === PENDING) {
        this.onFulfilledCB.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCB.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
    return promise2;
  }
  catch() {}
}

//test code
/**
 *安装 Promise 测试工具
npm i promises-aplus-tests -g
运行测试工具，检测 Promise 是否符合规范
promises-aplus-tests 文件名
 */
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
module.exports = Promise;

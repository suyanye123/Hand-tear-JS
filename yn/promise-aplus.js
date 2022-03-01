//promise code
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
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
    //只执行一次
    if (this.state === PENDING) {
      this.onFulfilledCB.push(() => {
        setTimeout(() => {
          onFulfilled(this.value);
        });
      });
      this.onRejectedCB.push(() => {
        setTimeout(() => {
          onRejected(this.reason);
        });
      });
    }
    if (this.state === FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.value);
      });
    }
    if (this.state === REJECTED) {
      setTimeout(() => {
        onRejected(this.reason);
      });
    }
    //返回一个新的promise
    let promise2 = new PromiseA(() => {});
    return promise2;
  }
  catch() {}
}

//test code

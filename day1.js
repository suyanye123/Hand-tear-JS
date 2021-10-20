// debounce 防抖,多次只执行最后一次
function debounce(callback, wait) {
  let timer = null;
  // 如果已经有
  if (timer) {
  }
  // 如果没有
}

// trottle 节流,每隔一段时间执行一次
function trottle(fn, time) {
  let a = false;
  if (!a) {
    a = true;
    fn();
    setTimeout(() => {
      a = false;
    }, time);
  }
}

// promise.all  输入是由多个Promise对象组成的一个数组，最后输出一个新的Promise对象。成功时返回的是一个结果数组，和输入的promise数组顺序是一致的，失败时则返回最先被reject的错误值。   并展示一个例子

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = new Array(promises.length);
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (res) => {
          results[i] = res;
          count += 1;
          if (count === promises.length) {
            return resolve(results);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
}

let p1 = new Promise((resolve) => resolve("p1"));
let p2 = new Promise((resolve) => resolve("p2"));
let p3 = Promise.reject("p3 error");

promiseAll([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

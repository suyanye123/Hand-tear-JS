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
//map reduce filter every some find findIndex
function map(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i));
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
//返回符合条件的第一个元素
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
//call apply bind
function call(fn, obj, ...args) {
  if (obj == undefined || obj == null) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
function apply(fn, obj, args) {
  if (obj == undefined || obj == null) {
    obj = globalThis;
  }
  obj.temp = fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
//bind 返回一个改变了this的函数
function bind(fn, obj, ...args) {
  return function (...args2) {
    return call(fn, obj, ...args, ...args2);
  };
}
//set
function unique(arr) {
  return [...new Set(arr)];
}
//clone1 clone2
//使用...
function clone1(target) {
  if (typeof target == "object" || target !== null) {
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
  if (typeof target == "object" || target !== null) {
    let result = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
  } else {
    return target;
  }
}

//slice 切割 左闭右开
function slice(arr, start, end) {
  if (arr.length == 0) {
    return [];
  }
  //如果没写start
  start = start || 0;
  if (start >= arr.length) {
    return [];
  }
  //如果没写end
  end = end || arr.length;
  if (end < start) {
    end = arr.length;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 1,2,[3,4],5  数组元素拼接：将N个数组或值，与'当前数组'合并生成一个'新的数组'
function concat(arr, ...args) {
  let result = [...arr];
  args.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
}

function slice(arr, begin, end) {
  let result = [];
  if (arr.length == 0) {
    return [];
  }
  begin = begin || 0;
  if (begin > arr.length) {
    return [];
  }
  end = end || arr.length;
  if (end < begin) {
    end = arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 节流
export function _throttle(fn: Function, wait = 200) {
  let last: Date | any, timer: any, now: Date | any;
  return function () {
    now = Date.now();
    if (last && now - last < wait) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.call(fn, ...arguments);
      }, wait);
    } else {
      last = now;
      fn.call(fn, ...arguments);
    }
  };
}

let counter = 0;
const delay = () => {
  console.log("API Call: Fetching... " + counter++);
};

const throttle = function(fn, limit) {
  let flag = true;
  return () => {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const debounce = function(fn, timeout) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, timeout);
  };
};

const executeDebounce = debounce(delay, 1000);
const executeThrottling = throttle(delay, 1000);

window.addEventListener("resize", () => {
  executeThrottling();
});

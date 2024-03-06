export function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
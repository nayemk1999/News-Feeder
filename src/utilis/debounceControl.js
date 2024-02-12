export function debounce(fn, delay) {
  let timeOutId;
  if (timeOutId) {
    clearTimeout(timeOutId);
  }
  timeOutId = setTimeout(() => {
    return fn();
  }, delay);
}

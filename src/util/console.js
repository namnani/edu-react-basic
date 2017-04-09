/* eslint no-console: off */
function highlightWith(color) {
  return (...args) => {
    const [first, ...rest] = args;
    if (typeof first === 'string') {
      console.log(`%c ${first}`, `color: ${color}`, ...rest);
      return;
    }

    console.log(args);
  }
}

export default {
  highlightWith,
  log: console.log
}

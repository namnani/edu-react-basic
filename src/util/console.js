function highlightWith(color) {
  return (...args) => {
    const [first, ...rest] = args;
    if (typeof first === 'string') {
      console.log(`%c ${first}`, `color: ${color}`, ...rest);  // eslint-disable-line no-console
      return;
    }

    console.log(args);  // eslint-disable-line no-console
  }
}

export default { highlightWith }

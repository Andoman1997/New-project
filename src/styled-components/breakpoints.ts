function createBreakpoints() {
  const { values, unit, step } = {
    values: {
      xxl: 1536,
      xl: 1280,
      lg: 1024,
      md: 768,
      sm: 640,
    },
    unit: 'px',
    step: 5,
  };
  const keys = Object.keys(values) as (keyof typeof values)[];

  function up(key: keyof typeof values) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key: keyof typeof values) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      return up('sm');
    }

    const value = endIndex > 0 ? upperbound : values[key];
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start: keyof typeof values, end: keyof typeof values) {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${
        (endIndex !== -1 ? values[keys[endIndex + 1]] : values[end]) - step / 100
      }${unit})`
    );
  }

  function only(key: keyof typeof values) {
    return between(key, key);
  }

  function width(key: keyof typeof values) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
  };
}

const bp = createBreakpoints();

export default bp;

export function rawDataType(value) {
  const _toString = Object.prototype.toString;
  return _toString.call(value).slice(8, -1).toLowerCase();
}

export function normalize(input) {
  if (input && (input?.length === 0 || Object.keys(input).length === 0 || input === '')) {
    return null;
  }
  return input;
}

export function fromArrayToHSL(hslValueArray) {
  const normalizedHSLValueArray = hslValueArray
    .filter(Boolean)
    .map((val, ind) => (ind === 0 ? val : `${val * 100}%`));

  return `hsl(${normalizedHSLValueArray.join()})`;
}

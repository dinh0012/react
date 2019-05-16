const  hasSymbol = typeof Symbol === 'function' && Symbol.for;
export const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
export const ELEMENT_TYPE = hasSymbol ? Symbol.for('element') : 0xeac7;

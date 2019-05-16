import {hasOwnProperty, keys} from '../utils';
import {ELEMENT_TYPE, RESERVED_PROPS} from '../constants';
export const  createElement = (type, props, ...children) => {
  props = props || {};
  const ref = props.ref;
  const key = '' + props.key;
  keys(RESERVED_PROPS).map(reservedProp => {
    props[reservedProp] && delete props[reservedProp]
  })

  props.children = toArrayChildren(children);

  // Resolve default props
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (let propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  
  return ReactElement(type, key, ref, props);
}

const  ReactElement =  (type, key, ref, props) => {
  const element = {
    $$typeof: ELEMENT_TYPE,
    type: type,
    key: key,
    ref: ref,
    props: props,
  };

  if (Object.freeze) {
    Object.freeze(element.props);
    Object.freeze(element);
  }

  return element;
};

const toArrayChildren = (children) => {
  if (!children) {
    return null
  }
  const childrenLength = children.length;
  if (childrenLength === 1) {
    return children;
  }
  const childArray = Array(childrenLength);
  for (let i = 0; i < childrenLength; i++) {
    childArray[i] = children[i];
  }
  Object.freeze(childArray);
  return childArray;
}

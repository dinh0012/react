"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffProps = diffProps;

var _constants = require("../constants");

var _options = _interopRequireDefault(require("../options"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Diff the old and new properties of a VNode and apply changes to the DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to apply
 * changes to
 * @param {object} newProps The new props
 * @param {object} oldProps The old props
 * @param {boolean} isSvg Whether or not this node is an SVG node
 */
function diffProps(dom, newProps, oldProps, isSvg) {
  var i;
  var keys = Object.keys(newProps).sort();

  for (i = 0; i < keys.length; i++) {
    var k = keys[i];

    if (k !== 'children' && k !== 'key' && (!oldProps || (k === 'value' || k === 'checked' ? dom : oldProps)[k] !== newProps[k])) {
      setProperty(dom, k, newProps[k], oldProps[k], isSvg);
    }
  }

  for (i in oldProps) {
    if (i !== 'children' && i !== 'key' && !(i in newProps)) {
      setProperty(dom, i, null, oldProps[i], isSvg);
    }
  }
}

var CAMEL_REG = /[A-Z]/g;
var XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Set a property value on a DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {boolean} isSvg Whether or not this DOM node is an SVG node or not
 */

function setProperty(dom, name, value, oldValue, isSvg) {
  name = isSvg ? name === 'className' ? 'class' : name : name === 'class' ? 'className' : name;

  if (name === 'style') {
    var set = (0, _util.assign)((0, _util.assign)({}, oldValue), value);

    for (var i in set) {
      if ((value || _constants.EMPTY_OBJ)[i] === (oldValue || _constants.EMPTY_OBJ)[i]) {
        continue;
      }

      dom.style.setProperty(i[0] === '-' && i[1] === '-' ? i : i.replace(CAMEL_REG, '-$&'), value && i in value ? typeof set[i] === 'number' && _constants.IS_NON_DIMENSIONAL.test(i) === false ? set[i] + 'px' : set[i] : '');
    }
  } // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
      var useCapture = name !== (name = name.replace(/Capture$/, ''));
      var nameLower = name.toLowerCase();
      name = (nameLower in dom.ownerDocument.defaultView ? nameLower : name).slice(2);

      if (value) {
        if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
      } else {
        dom.removeEventListener(name, eventProxy, useCapture);
      }

      (dom._listeners || (dom._listeners = {}))[name] = value;
    } else if (name !== 'list' && name !== 'tagName' && !isSvg && name in dom) {
      dom[name] = value == null ? '' : value;
    } else if (typeof value !== 'function' && name !== 'dangerouslySetInnerHTML') {
      if (name !== (name = name.replace(/^xlink:?/, ''))) {
        if (value == null || value === false) {
          dom.removeAttributeNS(XLINK_NS, name.toLowerCase());
        } else {
          dom.setAttributeNS(XLINK_NS, name.toLowerCase(), value);
        }
      } else if (value == null || value === false) {
        dom.removeAttribute(name);
      } else {
        dom.setAttribute(name, value);
      }
    }
}
/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */


function eventProxy(e) {
  return this._listeners[e.type](_options["default"].event ? _options["default"].event(e) : e);
}
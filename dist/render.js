"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.hydrate = hydrate;

var _constants = require("./constants");

var _index = require("./diff/index");

var _children = require("./diff/children");

var _createElement = require("./create-element");

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./index').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * render into
 * @param {Element | Text} [replaceNode] Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */
function render(vnode, parentDom, replaceNode) {
  if (_options["default"].root) _options["default"].root(vnode, parentDom);
  var oldVNode = parentDom._prevVNode;
  vnode = (0, _createElement.createElement)(_createElement.Fragment, null, [vnode]);
  var mounts = [];
  (0, _children.diffChildren)(parentDom, replaceNode ? vnode : parentDom._prevVNode = vnode, replaceNode ? undefined : oldVNode, _constants.EMPTY_OBJ, parentDom.ownerSVGElement !== undefined, replaceNode ? [replaceNode] : oldVNode ? null : _constants.EMPTY_ARR.slice.call(parentDom.childNodes), mounts, vnode, replaceNode || _constants.EMPTY_OBJ);
  (0, _index.commitRoot)(mounts, vnode);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./index').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * update
 */


function hydrate(vnode, parentDom) {
  parentDom._prevVNode = null;
  render(vnode, parentDom);
}
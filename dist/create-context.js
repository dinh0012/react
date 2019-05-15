"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;
exports.i = void 0;

var _component = require("./component");

var i = 0;
/**
 *
 * @param {any} defaultValue
 */

exports.i = i;

function createContext(defaultValue) {
  var _i;

  var ctx = {};
  var context = {
    _id: '__cC' + (_i = +i, exports.i = i = _i + 1, _i),
    _defaultValue: defaultValue,
    Consumer: function Consumer(props, context) {
      return props.children(context);
    },
    Provider: function Provider(props) {
      var _this = this;

      if (!this.getChildContext) {
        var subs = [];

        this.getChildContext = function () {
          ctx[context._id] = _this;
          return ctx;
        };

        this.shouldComponentUpdate = function (props) {
          subs.some(function (c) {
            // Check if still mounted
            if (c._parentDom) {
              c.context = props.value;
              (0, _component.enqueueRender)(c);
            }
          });
        };

        this.sub = function (c) {
          subs.push(c);
          var old = c.componentWillUnmount;

          c.componentWillUnmount = function () {
            subs.splice(subs.indexOf(c), 1);
            old && old.call(c);
          };
        };
      }

      return props.children;
    }
  };
  context.Consumer.contextType = context;
  return context;
}
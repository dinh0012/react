"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Suspense = Suspense;
exports.lazy = lazy;

var _component = require("./component");

var _createElement = require("./create-element");

// having a "custom class" here saves 50bytes gzipped
function Suspense(props) {}

Suspense.prototype = new _component.Component();
/**
 * @param {Promise} promise The thrown promise
 */

Suspense.prototype._childDidSuspend = function (promise) {
  var _this = this;

  this.setState({
    _loading: true
  });

  var cb = function cb() {
    _this.setState({
      _loading: false
    });
  }; // Suspense ignores errors thrown in Promises as this should be handled by user land code


  promise.then(cb, cb);
};

Suspense.prototype.render = function (props, state) {
  return state._loading ? props.fallback : props.children;
};

function lazy(loader) {
  var prom;
  var component;
  var error;

  function Lazy(props) {
    if (!prom) {
      prom = loader();
      prom.then(function (exports) {
        component = exports["default"];
      }, function (e) {
        error = e;
      });
    }

    if (error) {
      throw error;
    }

    if (!component) {
      throw prom;
    }

    return (0, _createElement.createElement)(component, props);
  }

  Lazy.displayName = 'Lazy';
  return Lazy;
}
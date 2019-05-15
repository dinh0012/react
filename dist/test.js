"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(props) {
    _classCallCheck(this, App);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.setState = this.setState.bind(this);
  }

  _createClass(App, [{
    key: "setState",
    value: function setState(value) {
      this.state = _objectSpread({}, this.state, value);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      return h(Fragment, null, h("input", {
        type: "text",
        onChange: this.handleChange
      }), h("h2", null, this.state.value));
    }
  }]);

  return App;
}();

var B = function B(props) {
  return h("div", null, "aaaaaaaaaaaaa");
};

var f = h("div", null, h(App, {
  id: 1
}), h(B, {
  id: 1
}));
var g = h("ul", null, h("li", null, "item 122"), h("li", null, "item2"));

var a = function a() {
  var $root = document.getElementById('root');
  var $reload = document.getElementById('reload');
  updateElement($root, f);
  $reload.addEventListener('click', function () {
    updateElement($root, g, f);
  });
};

a();
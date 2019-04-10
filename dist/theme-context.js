"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeContext = _react["default"].createContext({
  themes: {},
  activeTheme: '',
  setTheme: function setTheme() {}
});

var _default = ThemeContext;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = _interopRequireDefault(require("../atoms/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n\n    > * {\n        margin-right: ", ";\n    }\n\n    & > :last-child {\n        margin-right: 0px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Inline = (0, _styledComponents["default"])(_box["default"])(_templateObject(), function (props) {
  return props.theme.spacing[props.spacing] || props.spacing;
});
var _default = Inline;
exports["default"] = _default;
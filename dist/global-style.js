"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    html {\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    html, input, textarea, pre {\n        box-sizing: border-box;\n    }\n\n    body, h1, h2, h3, h4, h5, h6, p, ol, ul, pre {\n        margin: 0;\n        padding: 0;\n        font-weight: normal;\n        display: inline-block;\n    }\n\n    ol, ul {\n        list-style: none;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n\n    input, select, textarea, button {\n        font-family: inherit;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyle;
exports["default"] = _default;
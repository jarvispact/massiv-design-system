"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents.default.h1(_templateObject(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var H2 = _styledComponents.default.h2(_templateObject2(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var H3 = _styledComponents.default.h3(_templateObject3(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var H4 = _styledComponents.default.h4(_templateObject4(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var H5 = _styledComponents.default.h5(_templateObject5(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var H6 = _styledComponents.default.h6(_templateObject6(), function (props) {
  return props.theme.fonts.heading.family;
}, function (props) {
  return props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var P = _styledComponents.default.p(_templateObject7(), function (props) {
  return props.theme.fonts.paragraph.family;
}, function (props) {
  return props.theme.fonts.paragraph.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.paragraph.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var A = _styledComponents.default.a(_templateObject8(), function (props) {
  return props.theme.fonts.anchor.family;
}, function (props) {
  return props.theme.fonts.anchor.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.anchor.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var SPAN = _styledComponents.default.span(_templateObject9(), function (props) {
  return props.theme.fonts.span.family;
}, function (props) {
  return props.theme.fonts.span.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.span.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var LABEL = _styledComponents.default.label(_templateObject10(), function (props) {
  return props.theme.fonts.label.family;
}, function (props) {
  return props.theme.fonts.label.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.label.weights.medium;
}, function (props) {
  return props.theme.color[props.color] || props.color;
});

var Text = {
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
  H5: H5,
  H6: H6,
  P: P,
  A: A,
  SPAN: SPAN,
  LABEL: LABEL
};
var _default = Text;
exports.default = _default;
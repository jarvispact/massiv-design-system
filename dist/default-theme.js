"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sharedFontHeadingConfig = {
  family: '"Josefin Slab", serif',
  weights: {
    s: '300',
    m: '400',
    l: '700'
  }
};
var sharedFontTextConfig = {
  family: '"Nunito", sans-serif',
  weights: {
    s: '200',
    m: '400',
    l: '700'
  }
};
var fonts = {
  h1: sharedFontHeadingConfig,
  h2: sharedFontHeadingConfig,
  h3: sharedFontHeadingConfig,
  h4: sharedFontHeadingConfig,
  h5: sharedFontHeadingConfig,
  h6: sharedFontHeadingConfig,
  text: sharedFontTextConfig,
  link: sharedFontTextConfig,
  label: sharedFontTextConfig,
  input: sharedFontTextConfig,
  textarea: sharedFontTextConfig,
  button: sharedFontTextConfig,
  icon: {
    className: 'material-icons',
    loadingIcon: 'settings'
  },
  scales: {
    xxs: '0.5rem',
    xs: '0.6rem',
    s: '0.8rem',
    m: '1rem',
    l: '1.2rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem'
  },
  letterSpacings: {
    s: '0.1rem',
    m: '0.2rem',
    l: '0.3rem'
  }
};
var error500 = '#ff4444';
var error700 = '#cc0000';
var error = {
  error: error500,
  error500: error500,
  error700: error700
};
var warning500 = '#ffbb33';
var warning700 = '#ff8800';
var warning = {
  warning: warning500,
  warning500: warning500,
  warning700: warning700
};
var success500 = '#00C851';
var success700 = '#007e33';
var success = {
  success: success500,
  success500: success500,
  success700: success700
};
var info500 = '#33b5e5';
var info700 = '#0099cc';
var info = {
  info: info500,
  info500: info500,
  info700: info700
};
var primary500 = '#4285f4';
var primary700 = '#0d47a1';
var primary = {
  primary: primary500,
  primary500: primary500,
  primary700: primary700
};
var secondary500 = '#aa66cc';
var secondary700 = '#9933CC';
var secondary = {
  secondary: secondary500,
  secondary500: secondary500,
  secondary700: secondary700
};

var colors = _objectSpread({
  white: '#FFFFFF'
}, error, {}, warning, {}, success, {}, info, {}, primary, {}, secondary);

var spacing = {
  xxs: '0.4rem',
  xs: '0.6rem',
  s: '0.8rem',
  m: '1rem',
  l: '1.2rem',
  xl: '1.4rem',
  xxl: '1.6rem'
};
var breakpoints = ['450px', '650px', '900px', '1200px', '1600px'];
var widths = {};
var heights = {};
var radii = {
  s: '2px',
  m: '4px',
  l: '6px'
};
var boxShadows = {
  s: '2px 2px',
  m: '4px 4px',
  l: '6px 6px'
};
var textShadows = {
  m: '4px 4px 2px rgba(150, 150, 150, 1)'
};
var _default = {
  breakpoints: breakpoints,
  fonts: fonts,
  colors: colors,
  spacing: spacing,
  widths: widths,
  heights: heights,
  radii: radii,
  boxShadows: boxShadows,
  textShadows: textShadows
};
exports["default"] = _default;
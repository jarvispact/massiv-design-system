"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var error300 = '#ffa8a8';
var error500 = '#ff4444';
var error700 = '#cc0000';
var error = {
  error: error500,
  error300: error300,
  error500: error500,
  error700: error700
};
var warning300 = '#ffda91';
var warning500 = '#ffbb33';
var warning700 = '#d17000';
var warning = {
  warning: warning500,
  warning300: warning300,
  warning500: warning500,
  warning700: warning700
};
var success300 = '#54f796';
var success500 = '#00C851';
var success700 = '#005c25';
var success = {
  success: success500,
  success300: success300,
  success500: success500,
  success700: success700
};
var info300 = '#79d5f7';
var info500 = '#33b5e5';
var info700 = '#007aa3';
var info = {
  info: info500,
  info300: info300,
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
var gray100 = '#f5f5f5';
var gray200 = '#eeeeee';
var gray300 = '#e0e0e0';
var gray350 = '#d6d6d6';
var gray400 = '#bdbdbd';
var gray500 = '#9e9e9e';
var gray600 = '#757575';
var gray700 = '#616161';
var gray800 = '#424242';
var gray850 = '#303030';
var gray900 = '#212121';
var gray = {
  gray: gray500,
  gray100: gray100,
  gray200: gray200,
  gray300: gray300,
  gray350: gray350,
  gray400: gray400,
  gray500: gray500,
  gray600: gray600,
  gray700: gray700,
  gray800: gray800,
  gray850: gray850,
  gray900: gray900
};

var colors = _objectSpread({
  white: '#FFFFFF'
}, error, {}, warning, {}, success, {}, info, {}, primary, {}, secondary, {}, gray);

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
var _default = {
  breakpoints: breakpoints,
  fontFamilies: {
    "default": '"Nunito", sans-serif',
    h1: '"Nunito", sans-serif',
    h2: '"Nunito", sans-serif',
    h3: '"Nunito", sans-serif',
    h4: '"Nunito", sans-serif',
    h5: '"Nunito", sans-serif',
    h6: '"Nunito", sans-serif',
    button: '"Nunito", sans-serif',
    input: '"Nunito", sans-serif',
    textarea: '"Nunito", sans-serif'
  },
  fontWeights: {
    s: '200',
    m: '400',
    l: '700'
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '28px',
    h1: '32px',
    h2: '30px',
    h3: '28px',
    h4: '26px',
    h5: '24px',
    h6: '22px'
  },
  lineHeights: {
    xs: '8px',
    s: '8px',
    m: '14px',
    l: '16px',
    xl: '22px',
    h1: '26px',
    h2: '24px',
    h3: '22px',
    h4: '20px',
    h5: '18px',
    h6: '16px'
  },
  letterSpacings: {
    s: '-0.5px',
    m: '0px',
    l: '1px'
  },
  textShadows: {
    m: '4px 4px 2px rgba(150, 150, 150, 1)'
  },
  icons: {
    className: 'material-icons',
    loadingIcon: 'settings'
  },
  colors: colors,
  spacing: spacing,
  widths: widths,
  heights: heights,
  radii: radii,
  boxShadows: boxShadows
};
exports["default"] = _default;
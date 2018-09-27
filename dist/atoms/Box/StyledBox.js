'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: ', ';\n    box-shadow: ', ';\n    z-index: ', ';\n    overflow: ', ';\n    overflow-x: ', ';\n    overflow-y: ', ';\n    color: ', ';\n    background-color: ', ';\n    position: ', ';\n    top: ', ';\n    bottom: ', ';\n    left: ', ';\n    right: ', ';\n    width: ', ';\n    height: ', ';\n    min-width: ', ';\n    min-height: ', ';\n    max-width: ', ';\n    max-height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    margin: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: ', ';\n    margin-right: ', ';\n    border-style: ', ';\n    border-width: ', ';\n    border-color: ', ';\n    border-radius: ', ';\n    border-top-style: ', ';\n    border-top-width: ', ';\n    border-top-color: ', ';\n    border-bottom-style: ', ';\n    border-bottom-width: ', ';\n    border-bottom-color: ', ';\n    border-left-style: ', ';\n    border-left-width: ', ';\n    border-left-color: ', ';\n    border-right-style: ', ';\n    border-right-width: ', ';\n    border-right-color: ', ';\n    border-top-left-radius: ', ';\n    border-top-right-radius: ', ';\n    border-bottom-left-radius: ', ';\n    border-bottom-right-radius: ', ';\n    ', ';\n'], ['\n    display: ', ';\n    box-shadow: ', ';\n    z-index: ', ';\n    overflow: ', ';\n    overflow-x: ', ';\n    overflow-y: ', ';\n    color: ', ';\n    background-color: ', ';\n    position: ', ';\n    top: ', ';\n    bottom: ', ';\n    left: ', ';\n    right: ', ';\n    width: ', ';\n    height: ', ';\n    min-width: ', ';\n    min-height: ', ';\n    max-width: ', ';\n    max-height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    margin: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: ', ';\n    margin-right: ', ';\n    border-style: ', ';\n    border-width: ', ';\n    border-color: ', ';\n    border-radius: ', ';\n    border-top-style: ', ';\n    border-top-width: ', ';\n    border-top-color: ', ';\n    border-bottom-style: ', ';\n    border-bottom-width: ', ';\n    border-bottom-color: ', ';\n    border-left-style: ', ';\n    border-left-width: ', ';\n    border-left-color: ', ';\n    border-right-style: ', ';\n    border-right-width: ', ';\n    border-right-color: ', ';\n    border-top-left-radius: ', ';\n    border-top-right-radius: ', ';\n    border-bottom-left-radius: ', ';\n    border-bottom-right-radius: ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = _styledComponents2.default.div(_templateObject, function (props) {
    return props.boxDisplay;
}, function (props) {
    return props.theme.shadow[props.shadow] || props.shadow;
}, function (props) {
    return props.zIndex;
}, function (props) {
    return props.boxOverflow;
}, function (props) {
    return props.boxOverflowX;
}, function (props) {
    return props.boxOverflowY;
}, function (props) {
    return props.theme.color[props.fontColor] || props.fontColor;
}, function (props) {
    return props.theme.color[props.bgColor] || props.bgColor;
}, function (props) {
    return props.pos;
}, function (props) {
    return props.top;
}, function (props) {
    return props.bottom;
}, function (props) {
    return props.left;
}, function (props) {
    return props.right;
}, function (props) {
    return props.theme.spacing[props.w] || props.w;
}, function (props) {
    return props.theme.spacing[props.h] || props.h;
}, function (props) {
    return props.theme.spacing[props.minWidth] || props.minWidth;
}, function (props) {
    return props.theme.spacing[props.minHeight] || props.minHeight;
}, function (props) {
    return props.theme.spacing[props.maxWidth] || props.maxWidth;
}, function (props) {
    return props.theme.spacing[props.maxHeight] || props.maxHeight;
}, function (props) {
    return props.theme.spacing[props.p] || props.p;
}, function (props) {
    return props.theme.spacing[props.pt] || props.pt;
}, function (props) {
    return props.theme.spacing[props.pb] || props.pb;
}, function (props) {
    return props.theme.spacing[props.pl] || props.pl;
}, function (props) {
    return props.theme.spacing[props.pr] || props.pr;
}, function (props) {
    return props.theme.spacing[props.m] || props.m;
}, function (props) {
    return props.theme.spacing[props.mt] || props.mt;
}, function (props) {
    return props.theme.spacing[props.mb] || props.mb;
}, function (props) {
    return props.theme.spacing[props.ml] || props.ml;
}, function (props) {
    return props.theme.spacing[props.mr] || props.mr;
}, function (props) {
    return props.bs;
}, function (props) {
    return props.theme.spacing[props.bw] || props.bw;
}, function (props) {
    return props.theme.color[props.bc] || props.bc;
}, function (props) {
    return props.theme.spacing[props.br] || props.br;
}, function (props) {
    return props.bts;
}, function (props) {
    return props.theme.spacing[props.btw] || props.btw;
}, function (props) {
    return props.theme.color[props.btc] || props.btc;
}, function (props) {
    return props.bbs;
}, function (props) {
    return props.theme.spacing[props.bbw] || props.bbw;
}, function (props) {
    return props.theme.color[props.bbc] || props.bbc;
}, function (props) {
    return props.bls;
}, function (props) {
    return props.theme.spacing[props.blw] || props.blw;
}, function (props) {
    return props.theme.color[props.blc] || props.blc;
}, function (props) {
    return props.brs;
}, function (props) {
    return props.theme.spacing[props.brw] || props.brw;
}, function (props) {
    return props.theme.color[props.brc] || props.brc;
}, function (props) {
    return props.theme.spacing[props.btlr] || props.btlr;
}, function (props) {
    return props.theme.spacing[props.btrr] || props.btrr;
}, function (props) {
    return props.theme.spacing[props.bblr] || props.bblr;
}, function (props) {
    return props.theme.spacing[props.bbrr] || props.bbrr;
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledBox;
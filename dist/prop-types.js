'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.borderDefaultProps = exports.borderPropTypes = exports.spacingDefaultProps = exports.spacingPropTypes = exports.positionDefaultProps = exports.positionPropTypes = exports.colorDefaultProps = exports.colorPropTypes = exports.numberOrArray = exports.stringOrArray = undefined;

var _propTypes = require('prop-types');

var stringOrArray = exports.stringOrArray = (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]);
var numberOrArray = exports.numberOrArray = (0, _propTypes.oneOfType)([_propTypes.number, (0, _propTypes.arrayOf)(_propTypes.number)]);

var colorPropTypes = exports.colorPropTypes = {
    color: stringOrArray,
    bg: stringOrArray
};

var colorDefaultProps = exports.colorDefaultProps = {
    color: undefined,
    bg: undefined
};

var positionPropTypes = exports.positionPropTypes = {
    pos: stringOrArray,
    top: stringOrArray,
    bottom: stringOrArray,
    left: stringOrArray,
    right: stringOrArray,
    width: stringOrArray,
    height: stringOrArray,
    minWidth: stringOrArray,
    minHeight: stringOrArray,
    maxWidth: stringOrArray,
    maxHeight: stringOrArray
};

var positionDefaultProps = exports.positionDefaultProps = {
    pos: undefined,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined
};

var spacingPropTypes = exports.spacingPropTypes = {
    p: stringOrArray,
    pt: stringOrArray,
    pb: stringOrArray,
    pl: stringOrArray,
    pr: stringOrArray,
    m: stringOrArray,
    mt: stringOrArray,
    mb: stringOrArray,
    ml: stringOrArray,
    mr: stringOrArray
};

var spacingDefaultProps = exports.spacingDefaultProps = {
    p: undefined,
    pt: undefined,
    pb: undefined,
    pl: undefined,
    pr: undefined,
    m: undefined,
    mt: undefined,
    mb: undefined,
    ml: undefined,
    mr: undefined
};

var borderPropTypes = exports.borderPropTypes = {
    bs: stringOrArray,
    bw: stringOrArray,
    bc: stringOrArray,
    br: stringOrArray,
    bts: stringOrArray,
    btw: stringOrArray,
    btc: stringOrArray,
    bbs: stringOrArray,
    bbw: stringOrArray,
    bbc: stringOrArray,
    bls: stringOrArray,
    blw: stringOrArray,
    blc: stringOrArray,
    brs: stringOrArray,
    brw: stringOrArray,
    brc: stringOrArray,
    btlr: stringOrArray,
    btrr: stringOrArray,
    bblr: stringOrArray,
    bbrr: stringOrArray
};

var borderDefaultProps = exports.borderDefaultProps = {
    bs: undefined,
    bw: undefined,
    bc: undefined,
    br: undefined,
    bts: undefined,
    btw: undefined,
    btc: undefined,
    bbs: undefined,
    bbw: undefined,
    bbc: undefined,
    bls: undefined,
    blw: undefined,
    blc: undefined,
    brs: undefined,
    brw: undefined,
    brc: undefined,
    btlr: undefined,
    btrr: undefined,
    bblr: undefined,
    bbrr: undefined
};
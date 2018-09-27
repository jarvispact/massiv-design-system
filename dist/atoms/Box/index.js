'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledBox = require('./StyledBox');

var _StyledBox2 = _interopRequireDefault(_StyledBox);

var _propTypes2 = require('../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.positionPropTypes, _propTypes2.spacingPropTypes, _propTypes2.borderPropTypes, {
    display: _propTypes.string,
    shadow: _propTypes.string,
    zIndex: _propTypes.string,
    overflow: _propTypes.string,
    overflowX: _propTypes.string,
    overflowY: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var defaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.positionDefaultProps, _propTypes2.spacingDefaultProps, _propTypes2.borderDefaultProps, {
    display: undefined,
    shadow: undefined,
    zIndex: undefined,
    overflow: undefined,
    overflowX: undefined,
    overflowY: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
});

var Box = function Box(_ref) {
    var display = _ref.display,
        shadow = _ref.shadow,
        zIndex = _ref.zIndex,
        overflow = _ref.overflow,
        overflowX = _ref.overflowX,
        overflowY = _ref.overflowY,
        color = _ref.color,
        bg = _ref.bg,
        pos = _ref.pos,
        top = _ref.top,
        bottom = _ref.bottom,
        left = _ref.left,
        right = _ref.right,
        width = _ref.width,
        height = _ref.height,
        minWidth = _ref.minWidth,
        minHeight = _ref.minHeight,
        maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight,
        p = _ref.p,
        pt = _ref.pt,
        pb = _ref.pb,
        pl = _ref.pl,
        pr = _ref.pr,
        m = _ref.m,
        mt = _ref.mt,
        mb = _ref.mb,
        ml = _ref.ml,
        mr = _ref.mr,
        bs = _ref.bs,
        bw = _ref.bw,
        bc = _ref.bc,
        br = _ref.br,
        bts = _ref.bts,
        btw = _ref.btw,
        btc = _ref.btc,
        bbs = _ref.bbs,
        bbw = _ref.bbw,
        bbc = _ref.bbc,
        bls = _ref.bls,
        blw = _ref.blw,
        blc = _ref.blc,
        brs = _ref.brs,
        brw = _ref.brw,
        brc = _ref.brc,
        btlr = _ref.btlr,
        btrr = _ref.btrr,
        bblr = _ref.bblr,
        bbrr = _ref.bbrr,
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledBox2.default,
        {
            boxDisplay: display,
            shadow: shadow,
            zIndex: zIndex,
            boxOverflow: overflow,
            boxOverflowX: overflowX,
            boxOverflowY: overflowY,
            fontColor: color,
            bgColor: bg,
            pos: pos,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            w: width,
            h: height,
            minWidth: minWidth,
            minHeight: minHeight,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            p: p,
            pt: pt,
            pb: pb,
            pl: pl,
            pr: pr,
            m: m,
            mt: mt,
            mb: mb,
            ml: ml,
            mr: mr,
            bs: bs,
            bw: bw,
            bc: bc,
            br: br,
            bts: bts,
            btw: btw,
            btc: btc,
            bbs: bbs,
            bbw: bbw,
            bbc: bbc,
            bls: bls,
            blw: blw,
            blc: blc,
            brs: brs,
            brw: brw,
            brc: brc,
            btlr: btlr,
            btrr: btrr,
            bblr: bblr,
            bbrr: bbrr,
            styles: styles,
            className: className
        },
        children
    );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

exports.default = Box;
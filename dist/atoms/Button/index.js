'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledButton = require('./StyledButton');

var _StyledButton2 = _interopRequireDefault(_StyledButton);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.spacingPropTypes, _propTypes2.borderPropTypes, {
    onClick: _propTypes.func.isRequired,
    type: _propTypes.string,
    disabled: _propTypes.bool,
    display: _propTypes2.stringOrArray,
    scale: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var defaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.spacingDefaultProps, _propTypes2.borderDefaultProps, {
    type: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    bg: 'transparent',
    p: '0',
    bs: 'none',
    br: '2px',
    styles: undefined,
    className: undefined,
    children: undefined
});

var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        type = _ref.type,
        disabled = _ref.disabled,
        display = _ref.display,
        color = _ref.color,
        scale = _ref.scale,
        bg = _ref.bg,
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
        _StyledButton2.default,
        {
            onClick: onClick,
            type: type,
            disabled: disabled,
            buttonDisplay: display,
            fontColor: color,
            fontScale: scale,
            bgColor: bg,
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;
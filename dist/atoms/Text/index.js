'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledText = require('./StyledText');

var _StyledText2 = _interopRequireDefault(_StyledText);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.spacingPropTypes, {
    display: _propTypes2.stringOrArray,
    color: _propTypes2.stringOrArray,
    scale: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var defaultProps = _extends({}, _propTypes2.spacingDefaultProps, {
    display: undefined,
    color: undefined,
    scale: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
});

var H1 = function H1(_ref) {
    var display = _ref.display,
        color = _ref.color,
        scale = _ref.scale,
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
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledText2.default.H1,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var H2 = function H2(_ref2) {
    var display = _ref2.display,
        color = _ref2.color,
        scale = _ref2.scale,
        width = _ref2.width,
        height = _ref2.height,
        minWidth = _ref2.minWidth,
        minHeight = _ref2.minHeight,
        maxWidth = _ref2.maxWidth,
        maxHeight = _ref2.maxHeight,
        p = _ref2.p,
        pt = _ref2.pt,
        pb = _ref2.pb,
        pl = _ref2.pl,
        pr = _ref2.pr,
        m = _ref2.m,
        mt = _ref2.mt,
        mb = _ref2.mb,
        ml = _ref2.ml,
        mr = _ref2.mr,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children;
    return _react2.default.createElement(
        _StyledText2.default.H2,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var H3 = function H3(_ref3) {
    var display = _ref3.display,
        color = _ref3.color,
        scale = _ref3.scale,
        width = _ref3.width,
        height = _ref3.height,
        minWidth = _ref3.minWidth,
        minHeight = _ref3.minHeight,
        maxWidth = _ref3.maxWidth,
        maxHeight = _ref3.maxHeight,
        p = _ref3.p,
        pt = _ref3.pt,
        pb = _ref3.pb,
        pl = _ref3.pl,
        pr = _ref3.pr,
        m = _ref3.m,
        mt = _ref3.mt,
        mb = _ref3.mb,
        ml = _ref3.ml,
        mr = _ref3.mr,
        styles = _ref3.styles,
        className = _ref3.className,
        children = _ref3.children;
    return _react2.default.createElement(
        _StyledText2.default.H3,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var H4 = function H4(_ref4) {
    var display = _ref4.display,
        color = _ref4.color,
        scale = _ref4.scale,
        width = _ref4.width,
        height = _ref4.height,
        minWidth = _ref4.minWidth,
        minHeight = _ref4.minHeight,
        maxWidth = _ref4.maxWidth,
        maxHeight = _ref4.maxHeight,
        p = _ref4.p,
        pt = _ref4.pt,
        pb = _ref4.pb,
        pl = _ref4.pl,
        pr = _ref4.pr,
        m = _ref4.m,
        mt = _ref4.mt,
        mb = _ref4.mb,
        ml = _ref4.ml,
        mr = _ref4.mr,
        styles = _ref4.styles,
        className = _ref4.className,
        children = _ref4.children;
    return _react2.default.createElement(
        _StyledText2.default.H4,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var H5 = function H5(_ref5) {
    var display = _ref5.display,
        color = _ref5.color,
        scale = _ref5.scale,
        width = _ref5.width,
        height = _ref5.height,
        minWidth = _ref5.minWidth,
        minHeight = _ref5.minHeight,
        maxWidth = _ref5.maxWidth,
        maxHeight = _ref5.maxHeight,
        p = _ref5.p,
        pt = _ref5.pt,
        pb = _ref5.pb,
        pl = _ref5.pl,
        pr = _ref5.pr,
        m = _ref5.m,
        mt = _ref5.mt,
        mb = _ref5.mb,
        ml = _ref5.ml,
        mr = _ref5.mr,
        styles = _ref5.styles,
        className = _ref5.className,
        children = _ref5.children;
    return _react2.default.createElement(
        _StyledText2.default.H5,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var H6 = function H6(_ref6) {
    var display = _ref6.display,
        color = _ref6.color,
        scale = _ref6.scale,
        width = _ref6.width,
        height = _ref6.height,
        minWidth = _ref6.minWidth,
        minHeight = _ref6.minHeight,
        maxWidth = _ref6.maxWidth,
        maxHeight = _ref6.maxHeight,
        p = _ref6.p,
        pt = _ref6.pt,
        pb = _ref6.pb,
        pl = _ref6.pl,
        pr = _ref6.pr,
        m = _ref6.m,
        mt = _ref6.mt,
        mb = _ref6.mb,
        ml = _ref6.ml,
        mr = _ref6.mr,
        styles = _ref6.styles,
        className = _ref6.className,
        children = _ref6.children;
    return _react2.default.createElement(
        _StyledText2.default.H6,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var P = function P(_ref7) {
    var display = _ref7.display,
        color = _ref7.color,
        scale = _ref7.scale,
        width = _ref7.width,
        height = _ref7.height,
        minWidth = _ref7.minWidth,
        minHeight = _ref7.minHeight,
        maxWidth = _ref7.maxWidth,
        maxHeight = _ref7.maxHeight,
        p = _ref7.p,
        pt = _ref7.pt,
        pb = _ref7.pb,
        pl = _ref7.pl,
        pr = _ref7.pr,
        m = _ref7.m,
        mt = _ref7.mt,
        mb = _ref7.mb,
        ml = _ref7.ml,
        mr = _ref7.mr,
        styles = _ref7.styles,
        className = _ref7.className,
        children = _ref7.children;
    return _react2.default.createElement(
        _StyledText2.default.P,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var Span = function Span(_ref8) {
    var display = _ref8.display,
        color = _ref8.color,
        scale = _ref8.scale,
        width = _ref8.width,
        height = _ref8.height,
        minWidth = _ref8.minWidth,
        minHeight = _ref8.minHeight,
        maxWidth = _ref8.maxWidth,
        maxHeight = _ref8.maxHeight,
        p = _ref8.p,
        pt = _ref8.pt,
        pb = _ref8.pb,
        pl = _ref8.pl,
        pr = _ref8.pr,
        m = _ref8.m,
        mt = _ref8.mt,
        mb = _ref8.mb,
        ml = _ref8.ml,
        mr = _ref8.mr,
        styles = _ref8.styles,
        className = _ref8.className,
        children = _ref8.children;
    return _react2.default.createElement(
        _StyledText2.default.Span,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className
        },
        children
    );
};

var Label = function Label(_ref9) {
    var display = _ref9.display,
        color = _ref9.color,
        scale = _ref9.scale,
        htmlFor = _ref9.htmlFor,
        width = _ref9.width,
        height = _ref9.height,
        minWidth = _ref9.minWidth,
        minHeight = _ref9.minHeight,
        maxWidth = _ref9.maxWidth,
        maxHeight = _ref9.maxHeight,
        p = _ref9.p,
        pt = _ref9.pt,
        pb = _ref9.pb,
        pl = _ref9.pl,
        pr = _ref9.pr,
        m = _ref9.m,
        mt = _ref9.mt,
        mb = _ref9.mb,
        ml = _ref9.ml,
        mr = _ref9.mr,
        styles = _ref9.styles,
        className = _ref9.className,
        children = _ref9.children;
    return _react2.default.createElement(
        _StyledText2.default.Label,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            htmlFor: htmlFor,
            styles: styles,
            className: className
        },
        children
    );
};

var A = function A(_ref10) {
    var display = _ref10.display,
        color = _ref10.color,
        scale = _ref10.scale,
        width = _ref10.width,
        height = _ref10.height,
        minWidth = _ref10.minWidth,
        minHeight = _ref10.minHeight,
        maxWidth = _ref10.maxWidth,
        maxHeight = _ref10.maxHeight,
        p = _ref10.p,
        pt = _ref10.pt,
        pb = _ref10.pb,
        pl = _ref10.pl,
        pr = _ref10.pr,
        m = _ref10.m,
        mt = _ref10.mt,
        mb = _ref10.mb,
        ml = _ref10.ml,
        mr = _ref10.mr,
        href = _ref10.href,
        rel = _ref10.rel,
        target = _ref10.target,
        download = _ref10.download,
        styles = _ref10.styles,
        className = _ref10.className,
        children = _ref10.children;
    return _react2.default.createElement(
        _StyledText2.default.A,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
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
            styles: styles,
            className: className,
            href: href,
            rel: rel,
            target: target,
            download: download
        },
        children
    );
};

var Text = { H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, P: P, Span: Span, Label: Label, A: A };

Object.keys(Text).forEach(function (key) {
    var Component = Text[key];
    Component.propTypes = propTypes;
    Component.defaultProps = defaultProps;
});

exports.default = Text;
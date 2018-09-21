'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledGrid = require('./StyledGrid');

var _StyledGrid2 = _interopRequireDefault(_StyledGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowPropTypes = {
    gutter: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
}; /* eslint-disable react/prop-types */


var rowDefaultProps = {
    gutter: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var colPropTypes = {
    s: _propTypes.number,
    m: _propTypes.number,
    l: _propTypes.number,
    xl: _propTypes.number,
    xxl: _propTypes.number,
    gutter: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var colDefaultProps = {
    s: undefined,
    m: undefined,
    l: undefined,
    xl: undefined,
    xxl: undefined,
    gutter: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var Row = function Row(_ref) {
    var gutter = _ref.gutter,
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledGrid2.default.Row,
        {
            styles: styles,
            className: className
        },
        _react2.default.Children.map(children, function (child) {
            return _react2.default.cloneElement(child, { gutter: gutter });
        })
    );
};

var Col = function Col(_ref2) {
    var s = _ref2.s,
        m = _ref2.m,
        l = _ref2.l,
        xl = _ref2.xl,
        xxl = _ref2.xxl,
        gutter = _ref2.gutter,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children;
    return _react2.default.createElement(
        _StyledGrid2.default.Col,
        {
            colS: s,
            colM: m,
            colL: l,
            colXL: xl,
            colXXL: xxl,
            gutter: gutter,
            styles: styles,
            className: className
        },
        children
    );
};

var Grid = { Row: Row, Col: Col };

Grid.Row.propTypes = rowPropTypes;
Grid.Row.defaultProps = rowDefaultProps;

Grid.Col.propTypes = colPropTypes;
Grid.Col.defaultProps = colDefaultProps;

exports.default = Grid;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledGrid = require('./StyledGrid');

var _StyledGrid2 = _interopRequireDefault(_StyledGrid);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var rowPropTypes = {
    gutter: _propTypes2.stringOrArray,
    columns: _propTypes2.numberOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var rowDefaultProps = {
    gutter: undefined,
    columns: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var colPropTypes = {
    gutter: _propTypes2.stringOrArray,
    columns: _propTypes2.numberOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var colDefaultProps = {
    gutter: undefined,
    columns: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var Row = function Row(_ref) {
    var gutter = _ref.gutter,
        columns = _ref.columns,
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
            return _react2.default.cloneElement(child, { gutter: gutter, columns: columns });
        })
    );
};

var Col = function Col(_ref2) {
    var gutter = _ref2.gutter,
        columns = _ref2.columns,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children;
    return _react2.default.createElement(
        _StyledGrid2.default.Col,
        {
            gutter: gutter,
            columns: columns,
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    theme: (0, _propTypes.shape)({
        screen: _propTypes.object,
        color: _propTypes.object,
        scale: _propTypes.object
    }).isRequired,
    children: _propTypes.node.isRequired
};

var Theme = function Theme(_ref) {
    var theme = _ref.theme,
        children = _ref.children;
    return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: theme },
        children
    );
};

Theme.propTypes = propTypes;

exports.default = Theme;
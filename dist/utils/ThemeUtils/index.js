'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _contexts = require('../../contexts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    render: _propTypes.func,
    children: _propTypes.func
};

var defaultProps = {
    render: undefined,
    children: undefined
};

var ThemeUtils = function ThemeUtils(_ref) {
    var render = _ref.render,
        children = _ref.children;
    return _react2.default.createElement(
        _contexts.ThemeContext.Consumer,
        null,
        function (ctx) {
            return render ? render(ctx) : children(ctx);
        }
    );
};

ThemeUtils.propTypes = propTypes;
ThemeUtils.defaultProps = defaultProps;

exports.default = ThemeUtils;
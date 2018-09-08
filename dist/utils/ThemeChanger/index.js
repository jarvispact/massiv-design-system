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

var ThemeChanger = function ThemeChanger(_ref) {
    var render = _ref.render,
        children = _ref.children;
    return _react2.default.createElement(
        _contexts.ThemeContext.Consumer,
        null,
        function (_ref2) {
            var setTheme = _ref2.setTheme;
            return render ? render(setTheme) : children(setTheme);
        }
    );
};

ThemeChanger.propTypes = propTypes;
ThemeChanger.defaultProps = defaultProps;

exports.default = ThemeChanger;
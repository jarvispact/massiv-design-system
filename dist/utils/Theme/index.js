'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _contexts = require('../../contexts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    themes: (0, _propTypes.shape)({}).isRequired,
    activeTheme: _propTypes.string.isRequired,
    children: _propTypes.node.isRequired
};

var Theme = function (_Component) {
    _inherits(Theme, _Component);

    function Theme(props) {
        _classCallCheck(this, Theme);

        var _this = _possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).call(this, props));

        _this.setTheme = function (theme) {
            _this.setState({ activeTheme: theme });
        };

        var _this$props = _this.props,
            themes = _this$props.themes,
            activeTheme = _this$props.activeTheme;

        _this.state = { themes: themes, activeTheme: activeTheme };
        return _this;
    }

    _createClass(Theme, [{
        key: 'render',
        value: function render() {
            var setTheme = this.setTheme;
            var children = this.props.children;
            var _state = this.state,
                themes = _state.themes,
                activeTheme = _state.activeTheme;


            var ctx = {
                themes: themes,
                activeTheme: activeTheme,
                setTheme: setTheme
            };

            return _react2.default.createElement(
                _contexts.ThemeContext.Provider,
                { value: ctx },
                _react2.default.createElement(
                    _contexts.ThemeContext.Consumer,
                    null,
                    function (context) {
                        return _react2.default.createElement(
                            _styledComponents.ThemeProvider,
                            { theme: context.themes[context.activeTheme] },
                            children
                        );
                    }
                )
            );
        }
    }]);

    return Theme;
}(_react.Component);

Theme.propTypes = propTypes;

exports.default = Theme;
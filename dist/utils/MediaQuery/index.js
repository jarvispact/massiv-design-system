'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    query: _propTypes.string.isRequired,
    render: _propTypes.func,
    children: _propTypes.node
};

var defaultProps = {
    render: undefined,
    children: undefined
};

var MediaQuery = function (_Component) {
    _inherits(MediaQuery, _Component);

    function MediaQuery() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MediaQuery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaQuery.__proto__ || Object.getPrototypeOf(MediaQuery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            mediaQueryRef: null,
            matches: false
        }, _this.listenerFunction = function (_ref2) {
            var matches = _ref2.matches;

            _this.setState({ matches: matches });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MediaQuery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var query = this.props.query;
            var mediaQueryRef = this.state.mediaQueryRef;

            if (!mediaQueryRef) {
                var qryRef = window.matchMedia(query);
                qryRef.addListener(this.listenerFunction);
                this.listenerFunction(qryRef);
                this.setState({ mediaQueryRef: qryRef });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var mediaQueryRef = this.state.mediaQueryRef;

            if (mediaQueryRef) mediaQueryRef.removeListener(this.listenerFunction);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                render = _props.render,
                children = _props.children;
            var matches = this.state.matches;

            return render ? render(matches) : children(matches);
        }
    }]);

    return MediaQuery;
}(_react.Component);

MediaQuery.propTypes = propTypes;
MediaQuery.defaultProps = defaultProps;

exports.default = MediaQuery;
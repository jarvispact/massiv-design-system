'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n'], ['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    vertical-align: -16%;\n    padding: 0 0.25rem;\n    cursor: ', ';\n    color: ', ';\n    font-size: ', ';\n    ', ';\n    ', ';\n'], ['\n    vertical-align: -16%;\n    padding: 0 0.25rem;\n    cursor: ', ';\n    color: ', ';\n    font-size: ', ';\n    ', ';\n    ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n                display: inline-block;\n                animation: ', ' 0.85s linear infinite;\n            '], ['\n                display: inline-block;\n                animation: ', ' 0.85s linear infinite;\n            ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotationKeyframes = (0, _styledComponents.keyframes)(_templateObject);

var StyledIcon = _styledComponents2.default.i(_templateObject2, function (props) {
    if (props.loading) return 'not-allowed';
    if (props.onClick) return 'pointer';
}, function (props) {
    var themeColor = props.theme.color;
    return themeColor[props.color] || props.color;
}, function (props) {
    var themeScale = props.theme.scale;
    return themeScale[props.scale] || props.scale;
}, function (props) {
    if (props.loading) {
        return (0, _styledComponents.css)(_templateObject3, rotationKeyframes);
    }
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledIcon;
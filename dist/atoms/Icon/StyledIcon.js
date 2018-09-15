'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n'], ['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-size: ', ';\n    vertical-align: -16%;\n    ', ';\n    ', ';\n'], ['\n    color: ', ';\n    font-size: ', ';\n    vertical-align: -16%;\n    ', ';\n    ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n                display: inline-block;\n                animation: ', ' 0.85s linear infinite;\n            '], ['\n                display: inline-block;\n                animation: ', ' 0.85s linear infinite;\n            ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotationKeyframes = (0, _styledComponents.keyframes)(_templateObject);

var StyledIcon = _styledComponents2.default.i(_templateObject2, function (props) {
    return props.theme.color[props.fontColor] || props.fontColor;
}, function (props) {
    return props.theme.fontScale[props.fontScale] || props.fontScale;
}, function (props) {
    if (props.loading) {
        return (0, _styledComponents.css)(_templateObject3, rotationKeyframes);
    }
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledIcon;
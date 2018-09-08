'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n'], ['\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-block;\n    animation: ', ' 0.85s linear infinite;\n'], ['\n    display: inline-block;\n    animation: ', ' 0.85s linear infinite;\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotationKeyframes = (0, _styledComponents.keyframes)(_templateObject);

var rotationAnimation = (0, _styledComponents.css)(_templateObject2, rotationKeyframes);

exports.default = function (props) {
    var color = props.theme.color[props.color] || props.color;
    var fontScale = props.theme.fontScale[props.scale] || props.scale;

    return '\n        color: ' + color + ';\n        font-size: ' + fontScale + ';\n        ' + (props.loading ? rotationAnimation.join('') : '') + ';\n    ';
};
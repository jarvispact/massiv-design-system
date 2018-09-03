'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFontColor = exports.getShadow = exports.getBorder = exports.getBackgroundColor = undefined;

var _templateObject = _taggedTemplateLiteral(['\n            border-style: solid;\n            border-width: 1px;\n            border-color: ', ';\n            border-radius: 2px;\n        '], ['\n            border-style: solid;\n            border-width: 1px;\n            border-color: ', ';\n            border-radius: 2px;\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['border-style: none;'], ['border-style: none;']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getButtonType = function getButtonType(props) {
    var flat = props.flat,
        raised = props.raised,
        border = props.border;

    var type = void 0;
    if (flat) type = 'flat';
    if (raised) type = 'raised';
    if (border) type = 'border';
    return type;
};

var getBackgroundColor = exports.getBackgroundColor = function getBackgroundColor() {
    return function (props) {
        var type = getButtonType(props);
        switch (type) {
            case 'flat':
            case 'border':
                return 'transparent';
            default:
                if (props.disabled) return props.theme.color.disabled;
                if (props.color) return props.theme.color[props.color] || props.color;
                return props.theme.color.primary;
        }
    };
};

var getBorder = exports.getBorder = function getBorder() {
    return function (props) {
        var type = getButtonType(props);
        var propColor = props.theme.color[props.color] || props.color;
        var borderColor = props.color ? propColor : props.theme.color.primary;
        if (props.disabled) borderColor = props.theme.color.disabled;

        switch (type) {
            case 'border':
            case 'raised':
                return (0, _styledComponents.css)(_templateObject, borderColor);
            case 'flat':
            default:
                return (0, _styledComponents.css)(_templateObject2);
        }
    };
};

var getShadow = exports.getShadow = function getShadow() {
    return function (props) {
        var type = getButtonType(props);
        switch (type) {
            case 'raised':
                return 'box-shadow: 2px 2px 7px 0px rgba(87,87,87,0.7);';
            default:
                return undefined;
        }
    };
};

var getFontColor = exports.getFontColor = function getFontColor() {
    return function (props) {
        var type = getButtonType(props);
        switch (type) {
            case 'flat':
            case 'border':
                if (props.disabled) return props.theme.color.disabled;
                if (props.fontColor) return props.theme.color[props.fontColor] || props.fontColor;
                if (props.color) return props.theme.color[props.color] || props.color;
                return props.theme.color.primary;
            default:
                if (props.disabled) return props.theme.color.darkGray;
                if (props.fontColor) return props.theme.color[props.fontColor] || props.fontColor;
                return props.theme.color.white;
        }
    };
};
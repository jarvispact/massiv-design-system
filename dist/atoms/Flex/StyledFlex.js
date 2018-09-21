'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        display: ', ';\n        flex-direction: ', ';\n        flex-wrap: ', ';\n        flex-flow: ', ';\n        justify-content: ', ';\n        align-items: ', ';\n        align-content: ', ';\n        ', ';\n    '], ['\n        display: ', ';\n        flex-direction: ', ';\n        flex-wrap: ', ';\n        flex-flow: ', ';\n        justify-content: ', ';\n        align-items: ', ';\n        align-content: ', ';\n        ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        order: ', ';\n        flex-grow: ', ';\n        flex-shrink: ', ';\n        flex-basis: ', ';\n        flex: ', ';\n        align-self: ', ';\n        ', ';\n    '], ['\n        order: ', ';\n        flex-grow: ', ';\n        flex-shrink: ', ';\n        flex-basis: ', ';\n        flex: ', ';\n        align-self: ', ';\n        ', ';\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlex = {
    Parent: (0, _styledComponents2.default)(_Box2.default)(_templateObject, function (props) {
        return props.flexDisplay;
    }, function (props) {
        return props.flexDirection;
    }, function (props) {
        return props.flexWrap;
    }, function (props) {
        return props.flexFlow;
    }, function (props) {
        return props.justifyContent;
    }, function (props) {
        return props.alignItems;
    }, function (props) {
        return props.alignContent;
    }, function (props) {
        return props.styles && props.styles(props);
    }),
    Child: (0, _styledComponents2.default)(_Box2.default)(_templateObject2, function (props) {
        return props.flexOrder;
    }, function (props) {
        return props.flexGrow;
    }, function (props) {
        return props.flexShrink;
    }, function (props) {
        return props.flexBasis;
    }, function (props) {
        return props.flex;
    }, function (props) {
        return props.alignSelf;
    }, function (props) {
        return props.styles && props.styles(props);
    })
};

exports.default = StyledFlex;
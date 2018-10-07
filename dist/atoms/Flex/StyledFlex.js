'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        ', ';\n        display: ', ';\n        ', ';\n    '], ['\n        ', ';\n        display: ', ';\n        ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        ', ';\n        ', ';\n    '], ['\n        ', ';\n        ', ';\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _buildCss = require('../../build-css');

var _buildCss2 = _interopRequireDefault(_buildCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-multi-spaces, comma-spacing */


var flexParentProperties = [{ cssProp: 'flex-direction', reactProp: 'flexDirection', themeProp: null }, { cssProp: 'flex-wrap', reactProp: 'flexWrap', themeProp: null }, { cssProp: 'flex-flow', reactProp: 'flexFlow', themeProp: null }, { cssProp: 'justify-content', reactProp: 'justifyContent', themeProp: null }, { cssProp: 'align-items', reactProp: 'alignItems', themeProp: null }, { cssProp: 'align-content', reactProp: 'alignContent', themeProp: null }];

var flexChildProperties = [{ cssProp: 'order', reactProp: 'flexOrder', themeProp: null }, { cssProp: 'flex-grow', reactProp: 'flexGrow', themeProp: null }, { cssProp: 'flex-shrink', reactProp: 'flexShrink', themeProp: null }, { cssProp: 'flex-basis', reactProp: 'flexBasis', themeProp: null }, { cssProp: 'flex', reactProp: 'flex', themeProp: null }, { cssProp: 'align-self', reactProp: 'alignSelf', themeProp: null }];

var StyledFlex = {
    Parent: (0, _styledComponents2.default)(_Box2.default)(_templateObject, (0, _buildCss2.default)(flexParentProperties), function (props) {
        return props.flexDisplay;
    }, function (props) {
        return props.styles && props.styles(props);
    }),
    Child: (0, _styledComponents2.default)(_Box2.default)(_templateObject2, (0, _buildCss2.default)(flexChildProperties), function (props) {
        return props.styles && props.styles(props);
    })
};

exports.default = StyledFlex;
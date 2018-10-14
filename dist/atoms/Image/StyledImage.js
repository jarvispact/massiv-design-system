'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n'], ['\n    ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _buildCss = require('../../build-css');

var _buildCss2 = _interopRequireDefault(_buildCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-multi-spaces, comma-spacing */


var imageProperties = [{ cssProp: 'display', reactProp: 'imageDisplay', themeProp: null }, { cssProp: 'width', reactProp: 'cssWidth', themeProp: 'spacing' }, { cssProp: 'height', reactProp: 'cssHeight', themeProp: 'spacing' }, { cssProp: 'min-width', reactProp: 'minWidth', themeProp: 'spacing' }, { cssProp: 'min-height', reactProp: 'minHeight', themeProp: 'spacing' }, { cssProp: 'max-width', reactProp: 'maxWidth', themeProp: 'spacing' }, { cssProp: 'max-height', reactProp: 'maxHeight', themeProp: 'spacing' }, { cssProp: 'padding', reactProp: 'p', themeProp: 'spacing' }, { cssProp: 'padding-top', reactProp: 'pt', themeProp: 'spacing' }, { cssProp: 'padding-bottom', reactProp: 'pb', themeProp: 'spacing' }, { cssProp: 'padding-left', reactProp: 'pl', themeProp: 'spacing' }, { cssProp: 'padding-right', reactProp: 'pr', themeProp: 'spacing' }, { cssProp: 'margin', reactProp: 'm', themeProp: 'spacing' }, { cssProp: 'margin-top', reactProp: 'mt', themeProp: 'spacing' }, { cssProp: 'margin-bottom', reactProp: 'mb', themeProp: 'spacing' }, { cssProp: 'margin-left', reactProp: 'ml', themeProp: 'spacing' }, { cssProp: 'margin-right', reactProp: 'mr', themeProp: 'spacing' }];

var StyledImage = _styledComponents2.default.img(_templateObject, (0, _buildCss2.default)(imageProperties), function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledImage;
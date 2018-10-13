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


var boxProperties = [{ cssProp: 'display', reactProp: 'boxDisplay', themeProp: null }, { cssProp: 'box-shadow', reactProp: 'shadow', themeProp: 'shadow' }, { cssProp: 'z-index', reactProp: 'zIndex', themeProp: null }, { cssProp: 'overflow', reactProp: 'boxOverflow', themeProp: null }, { cssProp: 'overflow-x', reactProp: 'boxOverflowX', themeProp: null }, { cssProp: 'overflow-y', reactProp: 'boxOverflowY', themeProp: null }, { cssProp: 'color', reactProp: 'fontColor', themeProp: 'color' }, { cssProp: 'background-color', reactProp: 'bgColor', themeProp: 'color' }, { cssProp: 'position', reactProp: 'pos', themeProp: null }, { cssProp: 'top', reactProp: 'top', themeProp: 'spacing' }, { cssProp: 'bottom', reactProp: 'bottom', themeProp: 'spacing' }, { cssProp: 'left', reactProp: 'left', themeProp: 'spacing' }, { cssProp: 'right', reactProp: 'right', themeProp: 'spacing' }, { cssProp: 'width', reactProp: 'w', themeProp: 'spacing' }, { cssProp: 'height', reactProp: 'h', themeProp: 'spacing' }, { cssProp: 'min-width', reactProp: 'minWidth', themeProp: 'spacing' }, { cssProp: 'min-height', reactProp: 'minHeight', themeProp: 'spacing' }, { cssProp: 'max-width', reactProp: 'maxWidth', themeProp: 'spacing' }, { cssProp: 'max-height', reactProp: 'maxHeight', themeProp: 'spacing' }, { cssProp: 'padding', reactProp: 'p', themeProp: 'spacing' }, { cssProp: 'padding-top', reactProp: 'pt', themeProp: 'spacing' }, { cssProp: 'padding-bottom', reactProp: 'pb', themeProp: 'spacing' }, { cssProp: 'padding-left', reactProp: 'pl', themeProp: 'spacing' }, { cssProp: 'padding-right', reactProp: 'pr', themeProp: 'spacing' }, { cssProp: 'margin', reactProp: 'm', themeProp: 'spacing' }, { cssProp: 'margin-top', reactProp: 'mt', themeProp: 'spacing' }, { cssProp: 'margin-bottom', reactProp: 'mb', themeProp: 'spacing' }, { cssProp: 'margin-left', reactProp: 'ml', themeProp: 'spacing' }, { cssProp: 'margin-right', reactProp: 'mr', themeProp: 'spacing' }, { cssProp: 'border-style', reactProp: 'bs', themeProp: null }, { cssProp: 'border-width', reactProp: 'bw', themeProp: 'spacing' }, { cssProp: 'border-color', reactProp: 'bc', themeProp: 'color' }, { cssProp: 'border-radius', reactProp: 'br', themeProp: 'spacing' }, { cssProp: 'border-top-style', reactProp: 'bts', themeProp: null }, { cssProp: 'border-top-width', reactProp: 'btw', themeProp: 'spacing' }, { cssProp: 'border-top-color', reactProp: 'btc', themeProp: 'color' }, { cssProp: 'border-bottom-style', reactProp: 'bbs', themeProp: null }, { cssProp: 'border-bottom-width', reactProp: 'bbw', themeProp: 'spacing' }, { cssProp: 'border-bottom-color', reactProp: 'bbc', themeProp: 'color' }, { cssProp: 'border-left-style', reactProp: 'bls', themeProp: null }, { cssProp: 'border-left-width', reactProp: 'blw', themeProp: 'spacing' }, { cssProp: 'border-left-color', reactProp: 'blc', themeProp: 'color' }, { cssProp: 'border-right-style', reactProp: 'brs', themeProp: null }, { cssProp: 'border-right-width', reactProp: 'brw', themeProp: 'spacing' }, { cssProp: 'border-right-color', reactProp: 'brc', themeProp: 'color' }, { cssProp: 'border-top-left-radius', reactProp: 'btlr', themeProp: 'spacing' }, { cssProp: 'border-top-right-radius', reactProp: 'btrr', themeProp: 'spacing' }, { cssProp: 'border-bottom-left-radius', reactProp: 'bblr', themeProp: 'spacing' }, { cssProp: 'border-bottom-right-radius', reactProp: 'bbrr', themeProp: 'spacing' }];

var StyledBox = _styledComponents2.default.div(_templateObject, (0, _buildCss2.default)(boxProperties), function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledBox;
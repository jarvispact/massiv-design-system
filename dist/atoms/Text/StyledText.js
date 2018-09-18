'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getStyles = function getStyles(type) {
    return function (props) {
        return '\n    font-family: ' + props.theme.settings.fonts[type] + ';\n    color: ' + (props.theme.color[props.fontColor] || props.fontColor || '') + ';\n    font-size: ' + (props.theme.fontScale[props.fontScale] || props.fontScale || '') + ';\n    ' + (props.styles ? props.styles(props) : '') + ';\n';
    };
};

var StyledText = {
    H1: _styledComponents2.default.h1(_templateObject, getStyles('heading')),
    H2: _styledComponents2.default.h2(_templateObject, getStyles('heading')),
    H3: _styledComponents2.default.h3(_templateObject, getStyles('heading')),
    H4: _styledComponents2.default.h4(_templateObject, getStyles('heading')),
    H5: _styledComponents2.default.h5(_templateObject, getStyles('heading')),
    H6: _styledComponents2.default.h6(_templateObject, getStyles('heading')),
    P: _styledComponents2.default.p(_templateObject, getStyles('paragraph')),
    Span: _styledComponents2.default.span(_templateObject, getStyles('paragraph')),
    Label: _styledComponents2.default.label(_templateObject, getStyles('paragraph')),
    A: _styledComponents2.default.a(_templateObject, getStyles('anchor'))
};

exports.default = StyledText;
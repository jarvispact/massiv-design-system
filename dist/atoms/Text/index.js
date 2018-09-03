'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['', ' ', ''], ['', ' ', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    color: _propTypes.string,
    scale: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node,
    styles: _propTypes.func
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    styles: undefined
};

var font = function font(type) {
    return function (props) {
        return '\n    font-family: ' + props.theme.fonts[type] + ';\n';
    };
};

var textStyle = function textStyle() {
    return function (props) {
        return '\n    color: ' + (props.theme.color[props.color] || props.color) + ';\n    font-size: ' + (props.theme.scale[props.scale] || props.scale) + ';\n    ' + (props.styles && props.styles(props)) + ';\n';
    };
};

var Text = {
    H1: _styledComponents2.default.h1(_templateObject, font('heading'), textStyle()),
    H2: _styledComponents2.default.h2(_templateObject, font('heading'), textStyle()),
    H3: _styledComponents2.default.h3(_templateObject, font('heading'), textStyle()),
    H4: _styledComponents2.default.h4(_templateObject, font('heading'), textStyle()),
    H5: _styledComponents2.default.h5(_templateObject, font('heading'), textStyle()),
    H6: _styledComponents2.default.h6(_templateObject, font('heading'), textStyle()),
    P: _styledComponents2.default.p(_templateObject, font('paragraph'), textStyle()),
    Label: _styledComponents2.default.label(_templateObject, font('paragraph'), textStyle()),
    Span: _styledComponents2.default.span(_templateObject, font('paragraph'), textStyle()),
    A: _styledComponents2.default.a(_templateObject, font('anchor'), textStyle())
};

Object.keys(Text).forEach(function (key) {
    Text[key].propTypes = propTypes;
    Text[key].defaultProps = defaultProps;
});

exports.default = Text;
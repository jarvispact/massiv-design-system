'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('.');

var _2 = _interopRequireDefault(_);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Text', module).add('H1', function () {
    return _react2.default.createElement(
        _2.default.H1,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H1'
    );
}).add('H2', function () {
    return _react2.default.createElement(
        _2.default.H2,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H2'
    );
}).add('H3', function () {
    return _react2.default.createElement(
        _2.default.H3,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H3'
    );
}).add('H4', function () {
    return _react2.default.createElement(
        _2.default.H4,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H4'
    );
}).add('H5', function () {
    return _react2.default.createElement(
        _2.default.H5,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H5'
    );
}).add('H6', function () {
    return _react2.default.createElement(
        _2.default.H6,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'H6'
    );
}).add('P', function () {
    return _react2.default.createElement(
        _2.default.P,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'paragraph'
    );
}).add('Label', function () {
    return _react2.default.createElement(
        _2.default.Label,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'label'
    );
}).add('Span', function () {
    return _react2.default.createElement(
        _2.default.Span,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'span'
    );
}).add('A', function () {
    return _react2.default.createElement(
        _2.default.A,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        'anchor'
    );
}).add('H1 with Icon and Text', function () {
    return _react2.default.createElement(
        _2.default.H1,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        _react2.default.createElement(_Icon2.default, { name: 'dashboard' }),
        'Heading 1'
    );
}).add('Span with Icon and Text', function () {
    return _react2.default.createElement(
        _2.default.Span,
        {
            color: (0, _addonKnobs.text)('color', undefined),
            scale: (0, _addonKnobs.text)('scale', undefined)
        },
        _react2.default.createElement(_Icon2.default, { name: 'dashboard' }),
        'span'
    );
}); /* eslint-disable import/no-extraneous-dependencies */
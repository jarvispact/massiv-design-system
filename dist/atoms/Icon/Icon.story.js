'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Icon', module).add('default icon', function () {
    return _react2.default.createElement(_2.default, { name: 'grade' });
}).add('icon with knobs', function () {
    return _react2.default.createElement(_2.default, {
        name: (0, _addonKnobs.text)('name', 'grade'),
        color: (0, _addonKnobs.text)('color', undefined),
        scale: (0, _addonKnobs.text)('scale', undefined),
        loading: (0, _addonKnobs.boolean)('loading', false)
    });
}).add('icon with knobs and onClick handler', function () {
    return _react2.default.createElement(_2.default, {
        name: (0, _addonKnobs.text)('name', 'grade'),
        color: (0, _addonKnobs.text)('color', undefined),
        scale: (0, _addonKnobs.text)('scale', undefined),
        loading: (0, _addonKnobs.boolean)('loading', false),
        onClick: (0, _addonActions.action)('clicked')
    });
}); /* eslint-disable import/no-extraneous-dependencies */
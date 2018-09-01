'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Button', module).add('simple Button', function () {
    return _react2.default.createElement(
        _2.default,
        { onClick: (0, _addonActions.action)('clicked') },
        'Simple Button'
    );
}).add('with Emojis', function () {
    return _react2.default.createElement(
        _2.default,
        { onClick: (0, _addonActions.action)('clicked') },
        _react2.default.createElement(
            'span',
            { role: 'img', 'aria-label': 'so cool' },
            '\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF'
        )
    );
});
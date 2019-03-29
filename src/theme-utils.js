import React from 'react';
import { func } from 'prop-types';
import ThemeContext from './theme-context';

const propTypes = {
    render: func,
    children: func,
};

const defaultProps = {
    render: undefined,
    children: undefined,
};

const ThemeUtils = ({ render, children }) => (
    <ThemeContext.Consumer>
        {ctx => (render ? render(ctx) : children(ctx))}
    </ThemeContext.Consumer>
);

ThemeUtils.propTypes = propTypes;
ThemeUtils.defaultProps = defaultProps;

export default ThemeUtils;
